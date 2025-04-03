<script setup>
import gsap from 'gsap'
import { ref } from 'vue'
</script>

<template>
  <div class="relative w-screen h-screen overflow-hidden">
    <nav class="absolute top-4 left-4 z-30">
      <NuxtLink to="/" class="mr-4">Trang chủ</NuxtLink>
      <NuxtLink to="/aboutus">Giới thiệu</NuxtLink>
    </nav>
    
    <!-- Container cho NuxtPage -->
    <div class="page-container relative w-full h-full">
      <NuxtPage />
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

.page-container {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>