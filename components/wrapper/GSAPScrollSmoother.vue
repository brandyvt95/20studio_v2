<template>
  <div ref="mainWrapper" class="mainWrapper page-main-wrap" id="mainWrapper">
    <div ref="smoothContent" class="smooth-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

let scrollSmooth = null
const mainWrapper = ref(null)
const smoothContent = ref(null)
const route = useRoute()

const initSmoother = () => {
  if (typeof window === 'undefined') return
  if (!mainWrapper.value || !smoothContent.value) return

  mainWrapper.value.dataset.url = route.path

  if (scrollSmooth) {
    scrollSmooth.kill()
    scrollSmooth = null
  }

  // ScrollSmoother creates a fixed viewport wrapper for desktop mousewheel inertia.
  // On mobile devices (<= 600px), native touch momentum scroll is used.
  if (window.innerWidth > 600) {
    scrollSmooth = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      wrapper: mainWrapper.value,
      content: smoothContent.value
    })
  }
}

onMounted(() => {
  watch(
    () => stateUiGlobal.isActivePage,
    (active) => {
      if (active) {
        initSmoother()
      } else {
        if (scrollSmooth) {
          scrollSmooth.kill()
          scrollSmooth = null
        }
      }
    },
    { immediate: true }
  )
})

onUnmounted(() => {
  if (scrollSmooth) {
    scrollSmooth.kill()
    scrollSmooth = null
  }
})
</script>

<style scoped>
.smooth-content {
  will-change: transform;
}

.mainWrapper {
  inset: 0px;
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
}

@media (max-width: 600px) {
  .mainWrapper {
    position: relative !important;
    inset: auto !important;
    width: 100% !important;
    height: auto !important;
    overflow: visible !important;
  }
  .smooth-content {
    will-change: auto;
    width: 100%;
    min-height: 100vh;
  }
}

.sampleee {
  background: red;
  position: fixed;
  width: 100px;
  height: 100px;
  top: 0;
  left: 0;
  z-index: 1000;
}
</style>
