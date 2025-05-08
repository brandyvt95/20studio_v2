<template>
  <component ref="elRef" :is="tag" :class="computedClass">
    <slot />
  </component>
</template>

<script setup lang="ts">
import './style.css'
import { ref, computed, defineProps, defineExpose } from 'vue'

const elRef = ref(null)
defineExpose({ elRef })

const props = defineProps<{
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  font?: 'BD-Regular' | 'BD-Medium' | 'BD-Bold' | 'BS-Regular' | 'BS-Medium' | 'BS-Bold'
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  className?: string
}>()

const computedClass = computed(() => {
  const sizeClass = `font-${props.size || 'h1'}`
  const fontClass = props.font || ''
  const customClass = props.className || ''
  return [sizeClass, fontClass, customClass].filter(Boolean).join(' ')
})
</script>
