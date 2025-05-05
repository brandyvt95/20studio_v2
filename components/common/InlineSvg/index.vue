<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  src: string
  class?: string
}>()

const svgContent = ref('')

onMounted(async () => {
  const response = await fetch(props.src)
  svgContent.value = await response.text()
})
</script>

<template>
  <div
    v-html="svgContent"
    :class="props.class"
  />
</template>


<!-- 
<InlineSvg 
  src="https://example.com/path/to/your.svg" 
  class="w-10 h-10 text-blue-500" 
/>


-->