<template>
    <div ref="wref">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { stateSliderProjects } from '../../../../../composables/page/projects/state'

const { $gsap, $SplitText } = useNuxtApp() as any

const props = defineProps({
    dataTitle: {
        type: Object,
        required: true,
    },
    dataParagraph: {
        type: Object,
        required: true,
    },
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
let titleEl: any = null
let paragraphEl: any = null
let titleSplitEl: any = null
let paragraphSplitEl: any = null

onMounted(() => {
    if (!wref.value) return
    titleEl = wref.value.children[0]
    paragraphEl = wref.value.children[1]

    paragraphEl.classList.add('willChangeOpacity')
    updateText(stateSliderProjects.activeIndex)
})

const updateText = (index: number) => {
    if (!titleEl) return
    titleEl.textContent = `${props.dataTitle[stateSliderProjects.activeIndex]}`
    paragraphEl.textContent = `${props.dataParagraph[stateSliderProjects.activeIndex]}`
    titleSplitEl = updateSplitText({
        el: titleEl,
        classs: "split-word willChangeBoth"
    })
}

const updateSplitText = ({ el, classs }: { el: Element, classs: string }): any => {
    const splitInstance = $SplitText.create(el, {
        type: "words",
        mask: "words",
        wordsClass: classs,

    });
    return splitInstance;
};

const animateChange = (newIndex: number, direction: number) => {
    if (!titleSplitEl) return

    tl.clear()

    const nextIndex = newIndex
    const rotate = direction * (props.yTarget * .1)
    // Animation
    tl.to(titleSplitEl.words, {
        y: `${direction * 100}%`,
        opacity: 0,
        rotate: rotate,
        duration: props.duration,
        ease: props.easeIn,
        stagger: 0.072,
        onComplete: () => {
            updateText(nextIndex)
            $gsap.set(titleSplitEl.words, { y: `${-direction * 100}%`, })
            tl.to(titleSplitEl.words, {
                y: 0,
                stagger: 0.072,
                opacity: 1,
                rotate: 0,
                duration: props.duration,
                ease: props.easeIn
            }).to(paragraphEl, {
                opacity: 1,
                duration: props.duration,
                ease: props.easeIn,
            }, "<")
        }
    })
        .to(paragraphEl, {
            opacity: 0,
            duration: props.duration,
            ease: props.easeIn,
        }, "<")
}

watch(() => stateSliderProjects.activeIndex, (newIndex, oldIndex) => {
    animateChange(stateSliderProjects.activeIndex, stateSliderProjects.direction)
})
</script>