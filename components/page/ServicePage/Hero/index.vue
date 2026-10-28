<template>
  <header ref="wrapper" :class="s.hero">
    <div :class="s.container">
      <div :class="s.label">
        <StarIcon :class="s.label_icon" />
        <span :class="s.label_text">Our Story</span>
      </div>

      <h1 :class="s.title">
        <div :class="s.title_mask">
          <div :class="s.title_line">True</div>
        </div>
        <div :class="s.title_mask">
          <div :class="s.title_line">wonderers</div>
        </div>
        <div :class="s.title_mask">
          <div :class="s.title_line">look up at</div>
        </div>
        <div :class="s.title_mask">
          <div :class="s.title_line">the sky.</div>
        </div>
      </h1>

      <p :class="s.intro">
        The story behind our name is one of exploration, creativity and curiosity.
      </p>
    </div>

    <div ref="bgRef" :class="s.background">
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
        <source src="/video/video-1.mp4" type="video/mp4" />
      </video>
    </div>
  </header>
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
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        })
        .to(bgRef.value, { y: 100, ease: 'none' }, 0)
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
