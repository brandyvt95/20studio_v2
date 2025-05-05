<!-- MaskOverlay.vue -->
<template>
    <div ref="el" class="mask-overlay">
     <slot/>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const el = ref(null)

  defineExpose({
    el
  })
  </script>

  <style scoped> 
  .mask-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  pointer-events: none;
  will-change: tranform;
}
  </style>
  