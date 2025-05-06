<template>
    <div :class="s.cursorX" ref="cursorRef">
        <div :class="s.innerY">label</div>
    </div>
</template>
<script setup>
  import { ref, onMounted } from 'vue'
  import gsap from 'gsap'
  import s from './style.module.css'

  const cursorRef = ref(null)

  onMounted(() => {
    const cursor = cursorRef.value
    const quickToX = gsap.quickTo(cursor, 'x', { duration: 0.3 })
    const quickToY = gsap.quickTo(cursor, 'y', { duration: 0.3 })

    // Function to handle mouse movement
    const handleMouseMove = (event) => {
       // console.log(event.target)
      quickToX(event.clientX)
      quickToY(event.clientY)
    }

    // Add event listener
    window.addEventListener('mousemove', handleMouseMove)

    // Cleanup event listener
    onBeforeUnmount(() => {
      window.removeEventListener('mousemove', handleMouseMove)
    })
  })
</script>