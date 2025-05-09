<template>
    <div :class="['mask', props.className]" ref="mask">
        <slot />
    </div>
</template>
<script setup>
const props = defineProps({
    type: String,
    duration: Number,
    rotate: Number,
    direction: Number,
    className: String,
    useScrollTrigger: Boolean
})
const { $gsap } = useNuxtApp()
const mask = ref(null)
let ctx
let tl
watch(() => stateUiGlobal.isActivePage, (val) => {
    if (val) {
        console.log('fire')
        tl?.play()
    }
})

onMounted(() => {
    nextTick(() => {
        if (!mask.value) return
        const target = mask.value.children[0]
        target.classList.add('willChangeBoth')
        ctx = $gsap.context(() => {
            tl = $gsap.timeline({
                ...(props.useScrollTrigger && {
                    scrollTrigger: {
                        trigger: mask.value,
                        start: 'top 72%',
                        end: 'bottom 72%',
                        scrub: true,
                        toggleActions: "play none none none",
                        once: false
                    }
                }),
                paused: !props.useScrollTrigger // Nếu không dùng scrollTrigger thì sẽ tắt autoplay
            })
                .fromTo(
                    target,
                    { y: `${props.direction * 100}%`, rotate: props.direction * props.rotate, opacity: 0 },
                    { y: 0, duration: props.duration, rotate: 0, opacity: 1 }
                )

        })
    })
})
onUnmounted(() => {
    if (ctx) {
        ctx.revert();
    }
})

</script>
<style scoped>
.mask {
    overflow: hidden;
}
</style>