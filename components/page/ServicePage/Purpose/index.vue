<template>
  <section ref="wrapper" :class="s.purpose">
    <div :class="s.container">
      <div :class="s.label">
        <StarIcon :class="s.label_icon" />
        <span :class="s.label_text">Purpose</span>
      </div>

      <div :class="s.title">
        <div :class="s.title_mask">
          <div :class="s.title_line">Dot</div>
        </div>
        <div :class="s.title_mask">
          <div :class="s.title_line">on the</div>
        </div>
        <div :class="s.title_mask">
          <div :class="s.title_line">Horizon.</div>
        </div>
      </div>

      <p :class="s.intro">
        Exo Ape embodies our light in the distance that shines through the work that we produce and is at the core of our creations.
      </p>

      <ButtonHoverLineVer2
        to="/about"
        :class="s.link"
        color="clr-sand"
        colorLine="bgclr-sand--08"
        colorIcon="clr-story"
      >
        <span :class="s.btn_label">Our Studio</span>
      </ButtonHoverLineVer2>
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
        <source src="/video/video-5.mp4" type="video/mp4" />
      </video>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import StarIcon from '~/components/common/InlineSvg/Star.vue'
import ButtonHoverLineVer2 from '~/components/animation/Button/HoverLineVer2/index.vue'
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
            end: 'bottom bottom',
            scrub: true
          }
        })
        .to(bgRef.value, { y: 60, ease: 'none' }, 0)
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
