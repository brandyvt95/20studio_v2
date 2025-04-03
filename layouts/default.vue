<script setup>
import gsap from 'gsap'
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const prevPage = ref(null) // Trang trước đó
const currentPage = ref(route.fullPath) // Trang hiện tại

watchEffect(() => {
  prevPage.value = currentPage.value
  currentPage.value = route.fullPath
})
</script>

<template>
  <div class="relative w-screen h-screen overflow-hidden">
    <nav class="absolute top-4 left-4 z-10">
      <NuxtLink to="/" class="mr-4">Trang chủ</NuxtLink>
      <NuxtLink to="/aboutus">Giới thiệu</NuxtLink>
    </nav>

    <!-- Giữ cả 2 trang trên DOM cùng lúc -->
    <div class="relative w-full h-full">
      <NuxtPage :key="currentPage" class="absolute w-full h-full transition-page" />
      <NuxtPage :key="prevPage" class="absolute w-full h-full transition-page" />
    </div>
  </div>
</template>

<style scoped>
.transition-page {
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}
</style>
