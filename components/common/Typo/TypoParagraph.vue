<template>
  <component :is="tag" :class="computedClass">
    <slot />
  </component>
</template>

<script lang="ts">
import './style.css'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TypoHeading',
  props: {
    tag: {
      type: String as PropType<'p' | 'span' | 'blockquote'>,
      default: 'p',
    },
    font: {
      type: String as PropType<
        'BD-Regular' | 'BD-Medium' | 'BD-Bold' | 'BS-Regular' | 'BS-Medium' | 'BS-Bold'
      >,
      default: '',
    },
    size: {
      type: String as PropType<'p' | 'span' | 'blockquote'>,
      default: 'p',
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    computedClass(): string {
      const sizeClass = `font-${this.size}`       
      const fontClass = this.font || ''
      const customClass = this.className
      return [sizeClass, fontClass, customClass].filter(Boolean).join(' ')
    },
  },
})
</script>
