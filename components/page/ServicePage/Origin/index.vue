<template>
  <section ref="wrapper" :class="s.origin">
    <div :class="s.container">
      <div :class="s.label">
        <StarIcon :class="s.label_icon" />
        <span :class="s.label_text">Origin</span>
      </div>

      <div :class="s.block">
        <div :class="s.title">
          <div :class="s.title_mask">
            <div :class="s.title_line">Exo</div>
          </div>
          <small :class="s.phonetic">[ĕk′sō]</small>
        </div>
        <p :class="s.body">
          The exosphere is the outermost layer of our earth's atmosphere and symbolizes the bar that we keep setting for our team in order to push further, aim higher and keep growing— one project at a time.
        </p>
      </div>

      <div :class="s.block">
        <div :class="s.title">
          <div :class="s.title_mask">
            <div :class="s.title_line">Ape</div>
          </div>
          <small :class="s.phonetic">[eyp]</small>
        </div>
        <p :class="s.body">
          Ape reminds us to never forget our roots, and stay human in a world that’s becoming ever more digital. It helps us to be brave, yet full of compassion. Humble, but proud of what we do— without the chest banging.
        </p>
      </div>
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
        <source src="/video/video-2.mp4" type="video/mp4" />
      </video>
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
        .to(bgRef.value, { y: 80, ease: 'none' }, 0)
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
