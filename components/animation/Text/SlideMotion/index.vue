<template>
    <div :class="['mask', props.className]" ref="mask">
        <slot />
    </div>
</template>
<script setup>
const props = defineProps({
    type: String,
    duration: Number,
    rotate:Number,
    direction: Number,
    className: String
})
const { $gsap } = useNuxtApp()
const mask = ref(null)
let ctx
onMounted(() => {
    nextTick(() => {
        if (!mask.value) return
        const target = mask.value.children[0]
        target.classList.add('willChangeBoth')
        ctx = $gsap.context(() => {
            $gsap.timeline({
                scrollTrigger: {
                    trigger: mask.value,
                    start: 'top 72%',
                    end: 'bottom 72%',
                    scrub: true,
                    //markers: true,
                    toggleActions: "play none play none", 
                    once: false
                }
            })
                .fromTo(
                    target,
                    { y: `${props.direction * 100}%`,rotate: props.direction * props.rotate,opacity:0},
                    { y: 0, duration: props.duration , rotate:0,opacity:1}
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