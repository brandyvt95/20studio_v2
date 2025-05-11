<template>
    <div ref="wref">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { stateSliderProjects } from '../../../../../composables/page/projects/state'

const { $gsap } = useNuxtApp() as any

const props = defineProps({
    dataTitle: {
        type: Object,
        required: true,
    },
    dataSubTitle:{
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
let tl_observe = $gsap.timeline()
let titleEl: any = null
let paragraphEl: any = null
let titleSplitEl: any = null

onMounted(async () => {
    await document.fonts.ready
    if (!wref.value) return
    titleEl = wref.value.children[0]
    paragraphEl = wref.value.children[1]
    paragraphEl.classList.add('willChangeOpacity')
    if (!titleEl) return
    updateText(stateSliderProjects.activeIndex)
})
const updateText = (index: number) => {
    const dataTilte = props.dataTitle[index]
    const dataSubTitle = props.dataSubTitle[index]
    const dataParagraph = props.dataParagraph[index]
    titleEl.innerHTML = '';
    const div = document.createElement('span');
    div.textContent = `${dataTilte}`;
    div.classList.add('willChangeBoth')
    titleEl.append(div);
    const div2 = document.createElement('span');
    div2.textContent = `${dataSubTitle}`;
    div2.classList.add('willChangeBoth')
    titleEl.append(div2);


    titleSplitEl = titleEl.children
    paragraphEl.textContent = `${dataParagraph}`

}
const animateChange = (nextIndex: number, direction: number) => {
    if (!titleSplitEl) return
    tl_observe.clear()

    tl_observe.to(titleSplitEl, {
        y: `${direction * 100}%`,
        opacity: 0,
        rotate: direction * (props.yTarget * .1),
        duration: props.duration,
        ease: props.easeIn,
        stagger: 0.072,
        onComplete: () => {
            updateText(nextIndex)

            tl_observe
                .set(titleSplitEl, { y: `${-direction * 100}%`, rotate: -direction * (props.yTarget * .1) })
                .to(titleSplitEl, {
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
    animateChange(newIndex, stateSliderProjects.direction)
})

watch(() => stateUiGlobal.isProjectPageToDetailProject, (val) => {
    if (val) {
        $gsap.timeline({})
            .to(titleSplitEl, {
                y: `${-100}%`,
                opacity: 0,
                rotate: -(props.yTarget * .1),
                duration: props.duration,
                ease: props.easeIn,
                stagger: 0.072,

            })
            .to(paragraphEl, {
                opacity: 0,
                duration: props.duration,
                ease: props.easeIn,
            }, "<")
    }
})

onUnmounted(() => {
    if (tl_observe) {
        tl_observe.kill()
        tl_observe = null
    }


})

</script>