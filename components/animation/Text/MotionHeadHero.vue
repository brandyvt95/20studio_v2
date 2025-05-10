<template>
    <div class="wrapper" ref="wrapper">
        <slot />
    </div>
</template>
<script setup>

const wrapper = ref(null)
const { $gsap } = useNuxtApp()
let tl, ctx
onMounted(() => {
    watch(
        () => stateUiGlobal.isFireMotionFlash,
        async (val) => {
            if (val) {
                await nextTick()
                fireMotion()
            }
        },
        { immediate: true }
    )
})

function fireMotion() {
    const wordSpans = wrapper.value.querySelectorAll('.word-span')

    if (ctx) {
        ctx.revert()
        ctx = null
    }

    // Kill timeline cũ nếu đang tồn tại
    if (tl) {
        tl.kill()
        tl = null
    }

    ctx = $gsap.context(() => {
        tl = $gsap.timeline({
            paused: true
        }).fromTo(wordSpans, {
            opacity: 0,
            y: '100%',
            rotate: 7,
            transformOrigin: 'left center'
        }, {
            delay: .2,
            opacity: 1,
            y: 0,
            rotate: 0,
            duration: 1,
            stagger: .072
        })
    })
    tl.play()
}

let animationComplete = false

onBeforeUnmount(() => {
    console.log("---- MotionHeadHero onBeforeUnmount")
})
onBeforeRouteLeave((to, from, next) => {
    console.log("Navigating away from current route");
    if (ctx && tl) {
        tl.timeScale(2).reverse()

        tl.eventCallback("onReverseComplete", () => {
            animationComplete = true
            
            setTimeout(() => {
                tl.kill()
                ctx.revert()
                tl=null
                ctx=null
                console.log("onReverseComplete complete", ctx, tl)
            }, 1000);
        })
    }
    next();
})



onUnmounted(() => {
  console.log("Component is unmounted and animations are cleaned up.",ctx,tl)
})
</script>
<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
}
</style>