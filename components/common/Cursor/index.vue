<template>
  <div :class="s.cursorX" ref="cursorRef">
    <div :class="s.innerY" ref="cursorTextRef">Scroll</div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

import s from './style.module.css'
const { $gsap } = useNuxtApp()
const cursorRef = ref(null)
const cursorTextRef = ref(null)
let currentScope = null;
let cursorTl = null;
onMounted(() => {
  const quickToX = $gsap.quickTo(cursorRef.value, 'x', { duration: 0.3 })
  const quickToY = $gsap.quickTo(cursorRef.value, 'y', { duration: 0.3 })
  cursorTl = $gsap.timeline({ paused: true });
  cursorTl.to(cursorRef.value, {
    scale: 0.42,
    opacity: 0,
    duration: .42,
    ease: "power3.in"
  });
  const handleMouseMove = (event) => {
    const scope = event.target.closest('[data-scopeCursor]');

    if (scope !== currentScope) {
 
      if (scope) {
        const value = scope.getAttribute('data-scopeCursor');
        if (value === 'View') {
          cursorTl.reverse()
          cursorTextRef.value.textContent = 'View'
        }else{
          cursorTl.timeScale(3).play(); 
          cursorTextRef.value.textContent = 'Scroll'
        }
      } else {
        cursorTl.reverse()
      }
      currentScope = scope;
    }

    quickToX(event.clientX)
    quickToY(event.clientY)
  }

  window.addEventListener('mousemove', handleMouseMove)
  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', handleMouseMove)
  })
})
</script>