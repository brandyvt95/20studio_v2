<!-- LenisWrapper.vue -->
<template>
  <div ref="wrapperRef" class="lenis-wrapper" id="lenisWrapper">
    <slot />
  </div>
</template>

<script setup>
  import { onMounted, ref, watch, nextTick } from 'vue'
  import Lenis from '@studio-freight/lenis'

  const wrapperRef = ref(null)

  let lenis = null
  let rafId = null

  onMounted(() => {
    watch(
      () => stateUiGlobal.isActivePage,
      (active) => {
        if (active) {
          lenis = new Lenis({
            wrapper: wrapperRef.value,
            lerp: 0.1,
            smooth: true
          })

          const raf = (time) => {
            lenis.raf(time)
            rafId = requestAnimationFrame(raf)
          }

          rafId = requestAnimationFrame(raf)
        } else {
          if (rafId) {
            cancelAnimationFrame(rafId)
            rafId = null
          }
          lenis = null
        }
      },
      { immediate: false } 
    )
  })

  onUnmounted(() => {
    if (rafId) {
      cancelAnimationFrame(rafId)
      rafId=null
    }
    if (lenis) {
      if (typeof lenis.destroy === 'function') {
        lenis.destroy()
      }
      lenis = null
    }
  })
</script>

<style scoped>
  .lenis-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden !important;
    user-select: none;
    pointer-events: auto;
    z-index: 5;
    will-change: transform,scale;
  }
</style>