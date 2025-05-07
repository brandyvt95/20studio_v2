<template>
    <div class="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 class="text-6xl font-bold text-red-500">{{ error.statusCode }}</h1>
      <p class="text-2xl mt-4">{{ error.statusMessage || 'Something went wrong!' }}</p>
      <NuxtLink to="/" class="mt-6 text-blue-500 underline">Quay về trang chủ</NuxtLink>
    </div>
  </template>
  
  <script setup>
  defineProps({
    error: Object
  })
  </script>
  