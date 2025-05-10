<template>
    <div ref="wref" class="wref">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { stateSliderProjects } from '../../../../../composables/page/projects/state'

const { $gsap } = useNuxtApp() as any

const props = defineProps({
    yTarget: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    easeIn: {
        type: String,
        required: true,
    },
    easeOut: {
        type: String,
        required: true,
    }
})

const wref = ref<HTMLElement | null>(null)
const tl = $gsap.timeline()
let spanElement: any = null

onMounted(() => {
    if (!wref.value) return
    spanElement = wref.value.children[0]
    spanElement.classList.add('willChangeBoth')
    updateText(stateSliderProjects.activeIndex)
})

const updateText = (index: number) => {
    if (!spanElement) return
    spanElement.textContent = `0${stateSliderProjects.activeIndex + 1}`
}


const animateChange = (newIndex: number, direction: number) => {
    if (!spanElement) return

    tl.clear()

    const nextIndex = newIndex
    const moveY = direction * props.yTarget

    // Animation
    tl.to(spanElement, {
        y: moveY,
        opacity: 0,
        duration: props.duration,
        ease: props.easeIn,
        onComplete: () => {
            updateText(nextIndex)
            $gsap.set(spanElement, { y: -moveY })
            tl.to(spanElement, {
                y: 0,
                opacity: 1,
                duration: props.duration,
                ease: props.easeOut
            })
        }
    })
}
watch(() => stateSliderProjects.activeIndex, (newIndex, oldIndex) => {
    animateChange(stateSliderProjects.activeIndex + 1, stateSliderProjects.direction)
})

watch(() => stateUiGlobal.isProjectPageToDetailProject, (val) => {
    if (val) {
        $gsap.to(wref.value, {
            opacity: 0,
            duration: props.duration,
            ease: props.easeIn,
        })
    }
})
</script>
<style lang="css" scoped>
.wref {
    display: flex;
    position: relative;
}
</style>