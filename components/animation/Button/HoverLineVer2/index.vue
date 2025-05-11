<template>

    <NuxtLink :to="to" :class="s.button" @mouseenter="handlePointerEnter()" @mouseleave="handlePointerLeave()">
        <div :class="[s.wrapper, customClass, color]" ref="wrapper">
            <div :class="s.circle" ref="circle">
                <div :class="s.circleFill" ref="circleFill"></div>

                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" :class="s.circleOutline">
                    <circle cx="25" cy="25" r="23" />
                </svg>

                <div :class="[s.circleIcon, colorIcon]" ref="circleIcon">
                    <svg viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" :class="s.iconArrow">
                        <path
                            d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"
                            fill="currentColor" />
                    </svg>
                </div>
            </div>
            <div :class="s.content" ref="content">
                <slot />
                <span :class="[s.line, colorLine]" ref="line"></span>
            </div>

        </div>

    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    to: String,
    customClass: String,
    colorLine: String,
    color: String,
    colorIcon: String
})

const color = computed(() => props.color ?? 'clr-white')
const colorLine = computed(() => props.colorLine ?? 'bgclr-white')
const colorIcon = computed(() => props.colorIcon ?? 'clr-story')

import s from './style.module.css'
const { $gsap } = useNuxtApp()
const wrapper = ref(null)
const circle = ref(null)
const circleFill = ref(null)
const circleIcon = ref(null)
const content = ref(null)
const line = ref(null)
let ctx
let tl

onMounted(async () => {
    await nextTick();
    if (!stateUiGlobal.isActivePage) return;
    if (!wrapper.value || !content.value || !line.value || !circle.value || !circleFill.value || !circleIcon.value) return
    ctx = $gsap.context(() => {
        $gsap.set(circle.value, { clipPath: 'circle(10% at 50% 50%)' })
        $gsap.set(circleIcon.value, { x: '-100%', opacity: 0 })

        tl = $gsap.timeline({
            defaults: {
                duration: .5,
                ease: "power3.out"
            },
            paused: true
        })
            .to(circle.value, { clipPath: 'circle(50% at 50% 50%)' })
            .to(circleFill.value, { scale: 1 }, "<")
            .to(circleIcon.value, { x: '0%', opacity: 1 }, "<")
            .to(content.value, { x: 20 }, "<")
            .to(line.value, { scaleX: 0 }, "<")
    }, wrapper.value)

})

function handlePointerEnter() {
    tl?.play()
}

function handlePointerLeave() {
    tl?.reverse()
}
onUnmounted(() => {
    if (ctx) {
        ctx.revert()
        ctx = null
    }

    if (tl) {
        tl.kill()
        tl = null
    }
})

</script>