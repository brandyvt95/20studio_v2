<template>
  <h2 ref="titleRef" :class="s.title">
    <div ref="marqueeRef" :class="s.marquee">
      <div :class="s.line">
        <slot />&nbsp;
      </div>
      <div :class="s.line">
        <slot />&nbsp;
      </div>
    </div>
  </h2>
</template>

<script setup>
import s from './style.module.css'

const { $gsap } = useNuxtApp()
const titleRef = ref(null)
const marqueeRef = ref(null)

let enterTween = null
let loopTween = null

onMounted(() => {
  nextTick(() => {
    if (!$gsap || !marqueeRef.value) return

    // Entrance animation matching Exo Ape: from xPercent: 10 to 0
    if (titleRef.value) {
      enterTween = $gsap.fromTo(
        titleRef.value,
        { xPercent: 10 },
        {
          xPercent: 0,
          duration: 2,
          ease: 'power3.out'
        }
      )
    }

    // Infinite linear marquee matching Exo Ape: from 0 to -50%
    loopTween = $gsap.fromTo(
      marqueeRef.value,
      { xPercent: 0 },
      {
        xPercent: -50,
        duration: 40,
        ease: 'none',
        repeat: -1
      }
    )
  })
})

onUnmounted(() => {
  if (enterTween) enterTween.kill()
  if (loopTween) loopTween.kill()
})
</script>