<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useNuxtApp } from '#app'

const props = defineProps({ url: String })
const route = useRoute()
const { $gsap } = useNuxtApp()
const el = ref(null)
const isActive = computed(() => props.url === route.path)

let timeline = null

onMounted(async () => {
  await nextTick()
  
  if (!el.value?.children || el.value.children.length !== 2) {
    console.warn("MotionToggle need two elll")
    return
  }
  
  const [icon, button] = el.value.children
  if (!icon || !button) return
  
  timeline = $gsap.timeline({ paused: true })
    .to(icon, { opacity: 1, rotate: 180, scale: 1, force3D: true })
    .to(button, { x: 20, duration: 0.8, force3D: true }, "<")
  
  timeline[isActive.value ? 'play' : 'reverse']()
})

watch(isActive, (val) => {
  if (!timeline) return
  timeline[val ? 'play' : 'reverse']()
})

onBeforeUnmount(() => {
  if (timeline) {
    timeline.kill()
    timeline = null
  }
})
</script>

<template>
  <div ref="el">
    <slot />
  </div>
</template>