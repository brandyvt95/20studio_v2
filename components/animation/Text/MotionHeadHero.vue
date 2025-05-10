<template>
    <div class="wrapper" ref="wrapper">
        <slot />
    </div>
</template>
<script setup>
const props = defineProps({
    targetMask: String,
    targetChild: String
})
const wrapper = ref(null)
let wordSpans
onMounted(() => {
    wordSpans = wrapper.value.querySelectorAll(`.${props.targetChild}`)
    wordSpans.forEach((span, index) => {

        span.style.transitionDelay = `${0.5 - index * 0.072}s`;
        void span.offsetWidth;
        span.classList.add('fade-in-motion');
    });
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
    wordSpans.forEach((span, index) => {
        void span.offsetWidth;
        span.classList.add('fade-in-motion');
    });
}

onBeforeRouteLeave((to, from, next) => {
    if (wordSpans) {
        wordSpans.forEach((span, index) => {
            span.style.transitionDelay = `${0.1 + index * 0.072}s`;
            span.classList.remove('fade-in-motion');
        });
    }
    next();
})
</script>
<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
}
</style>