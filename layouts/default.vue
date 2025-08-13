<script setup>
import HeaderSection from '../components/common/HeaderSection/index.vue'
import { createClient } from '@supabase/supabase-js'
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
