<template>
  <div ref="mainWrapper" class="mainWrapper">
    <div ref="smoothContent" class="smooth-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


let scrollSmooth = null
const mainWrapper = ref(null)
const smoothContent = ref(null)

onMounted(() => {
  watch(
    () => stateUiGlobal.isActivePage,
    (active) => {
      if (active) {
        if (scrollSmooth) {
          scrollSmooth.kill()
        }
        scrollSmooth = ScrollSmoother.create({
          smooth: 2,
          effects: true,
          wrapper: mainWrapper.value,
          content: smoothContent.value
        })
      } else {
        if (scrollSmooth) {
          scrollSmooth.kill()
          scrollSmooth = null
        }
      }
    },
    { immediate: false }
  )
})

// onUnmounted(() => {
//   if (scrollSmooth) {
//     scrollSmooth.kill()
//     scrollSmooth = null
//   }
// })



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
