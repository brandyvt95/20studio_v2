<template>
  <section ref="wrapper" :class="s.journey">
    <div :class="s.container">
      <div :class="s.label">
        <StarIcon :class="s.label_icon" />
        <span :class="s.label_text">Journey</span>
      </div>

      <p :class="s.intro">
        It took an immense amount of curiosity and creativity to go from barely using stone tools to landing on the moon, and beyond. This journey symbolizes our drive to the unrelenting pursuit towards meaningful aesthetics and limitless imagination.
      </p>
    </div>

    <div ref="bgRef" :class="s.background">
      <div :class="s.canvas_wrap">
        <video
          ref="videoRef"
          :class="s.video"
          playsinline
          loop
          muted
          autoplay
          disablepictureinpicture
          disableremoteplayback
        >
          <source src="/video/video-3.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import StarIcon from '~/components/common/InlineSvg/Star.vue'
import s from './style.module.css'

const wrapper = ref(null)
const bgRef = ref(null)
const videoRef = ref(null)
const { $gsap } = useNuxtApp()
let ctx = null
let observer = null

onMounted(() => {
  nextTick(() => {
    if (typeof IntersectionObserver !== 'undefined' && videoRef.value && wrapper.value) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.value?.play()?.catch(() => {})
          } else {
            videoRef.value?.pause()
          }
        })
      }, { threshold: 0.05 })
      observer.observe(wrapper.value)
    }

    if ($gsap && wrapper.value && bgRef.value) {
      ctx = $gsap.context(() => {
        $gsap.timeline({
          scrollTrigger: {
            trigger: wrapper.value,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        })
        .to(bgRef.value, { y: 120, ease: 'none' }, 0)
      }, wrapper.value)
    }
  })
})

onUnmounted(() => {
  if (ctx) {
    ctx.revert()
    ctx = null
  }
  if (observer) {
    observer.disconnect()
    observer = null
  }
})
</script>
