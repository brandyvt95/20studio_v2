<script setup>
import LoadingPage from '~/components/page/LoadingPage/index.vue'
import HeaderSection from '../components/common/HeaderSection/index.vue'
import Cursor from '../components/common/Cursor/index.vue'
import { onMounted } from 'vue'

import datax from '../public/data.json'

const jsonData = useState('jsonData', () => null)
jsonData.value = datax

onMounted(() => {
  initAppCircle()
})
</script>

<template>
  <LoadingPage />
  <HeaderSection />
  <Cursor />
  <main class="main-layout">
    <NuxtPage />
  </main>
</template>

<style>
.main-layout {
  width: 100%;
}
</style>
