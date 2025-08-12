<template>
  <div id="lenisWrapper">
    <div id="smooth-content">
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
          effects: true
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

onUnmounted(() => {
  if (scrollSmooth) {
    scrollSmooth.kill()
    scrollSmooth = null
  }
})



</script>
<style scoped>
#smooth-content {

  will-change: transform;
}

#lenisWrapper {
  inset: 0px;
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
}
</style>
