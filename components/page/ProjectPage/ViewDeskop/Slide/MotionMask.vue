<template>
    <ul ref="wref" :class="props.classs">
        <slot />
    </ul>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

import { stateSliderProjects } from '../../../../../composables/page/projects/state'
const { $gsap } = useNuxtApp() as any
const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    classs: {
        type: String,
        required: true,
    },
    dirRevert: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    ease: {
        type: String,
        required: true,
    }
})
const scaleProps = props.id === 'background' ? { scale: 1.2 } : {};
const wref = ref<HTMLElement | null>(null)
const itemsRef = ref<HTMLElement[]>([])

const tl = $gsap.timeline({
    onComplete: () => {
        stateSliderProjects.lockScroll = false
    }
})

onMounted(() => {
    if (!wref.value) return

    itemsRef.value = Array.from(wref.value.children) as HTMLElement[]
    itemsRef.value.forEach((item, index) => {
        const isActive = index === stateSliderProjects.activeIndex
        item.classList.add('willChangeTranform')
        $gsap.set(item, {
            zIndex: isActive ? 2 : 1,
            clipPath: isActive ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)'
        })
    })
})

watch(() => stateSliderProjects.activeIndex, (newIndex, oldIndex) => {

    const prevItem = itemsRef.value[oldIndex]
    const activeItem = itemsRef.value[newIndex]
   

    if (!prevItem || !activeItem) return
    const dir = stateSliderProjects.direction * props.dirRevert
    tl.clear()

    $gsap.set(activeItem, { zIndex: 2 })
    $gsap.set(prevItem, { zIndex: 1 })


    if (dir === 1) {
        tl.fromTo(
            activeItem,
            { clipPath: 'inset(100% 0% 0% 0%)', scale: 1 },
            { clipPath: 'inset(0% 0% 0% 0%)', ...scaleProps, duration: props.duration, ease: props.ease }
        )
            .to(
                prevItem,
                { clipPath: 'inset(0% 0% 100% 0%)', scale: 1, duration: props.duration, ease: props.ease },
                "-=0.6"
            )
    } else if (dir === -1) {
        tl.fromTo(
            activeItem,
            { clipPath: 'inset(0% 0% 100% 0%)', scale: 1 },
            { clipPath: 'inset(0% 0% 0% 0%)', ...scaleProps, duration: props.duration, ease: props.ease }
        )
            .to(
                prevItem,
                { clipPath: 'inset(100% 0% 0% 0%)', scale: 1, duration: props.duration, ease: props.ease },
                "-=0.6"
            )
    }
})



watch(() => stateUiGlobal.isProjectPageToDetailProject, (val) => {
    if (val) {
        const item = itemsRef.value[stateSliderProjects.activeIndex]
        if (props.id === 'thumb') {
            $gsap.to(item, {
               clipPath: 'inset(0% 0% 100% 0%)',
                duration: props.duration, ease: props.ease
            })
        }
        if (props.id === 'background') {
            $gsap.to(item, {
                scale: 1,
                duration: props.duration, ease: props.ease
            })
        }

    }
})
</script>