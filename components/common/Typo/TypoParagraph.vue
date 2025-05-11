<template>
  <component ref="elRef" :is="tag" :class="computedClass">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ParagraphTag , Fonts, SizeFont} from './type';
const elRef = ref(null)
defineExpose({ elRef })

const props = defineProps<{
  tag: ParagraphTag
  font?: Fonts
  size?: SizeFont
  className?: string
  color?:string
}>()

const computedClass = computed(() => {
  const sizeClass = `font-${props.size || 'p'}`
  const fontClass = props.font || ''
  const customClass = props.className || ''
  const color = props.color || ''
  return [sizeClass, fontClass, customClass,color].filter(Boolean).join(' ')
})
</script>
