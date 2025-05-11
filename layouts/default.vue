<script setup>
import HeaderSection from '../components/common/HeaderSection/index.vue'

import Cursor from '../components/common/Cursor/index.vue'
import { onMounted } from 'vue'
import { initViewportSize } from '../composables/useViewportSize'
const jsonData = useState('jsonData', () => null)
const { data, error } = await useAsyncData('jsonData', () =>
  $fetch('/api/getDataContent')
)
jsonData.value = data.value
console.log('SSR data:', jsonData.value)

onMounted(() => {
  initViewportSize()
})
</script>

<template>

  <HeaderSection />
  <Cursor />
  <div class="main-layout">
    <NuxtPage />
  </div>

</template>
<style>
.main-layout {}
</style>
