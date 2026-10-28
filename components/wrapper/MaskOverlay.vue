<!-- MaskOverlay.vue -->
<template>
    <div ref="el" class="mask-overlay">
     <slot/>
     <div class="page-dark-overlay"></div>
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  pointer-events: none;
  will-change: transform;
}
  .page-dark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0;
  pointer-events: none;
  z-index: 999;
  will-change: opacity;
}
  </style>
  