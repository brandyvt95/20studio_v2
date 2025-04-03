<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const textRef = ref(null)

onMounted(() => {
  gsap.fromTo(textRef.value, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1 })
})
</script>

<template>
  <div ref="textRef" class="text-xl font-bold text-center">
    Xin chào, đây là hiệu ứng GSAP!
  </div>
</template>
