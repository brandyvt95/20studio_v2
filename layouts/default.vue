<script setup>
import HeaderSection from '../components/common/HeaderSection/index.vue'
import { createClient } from '@supabase/supabase-js'
import Cursor from '../components/common/Cursor/index.vue'
import { onMounted } from 'vue'
import { initViewportSize } from '../composables/useViewportSize'

const jsonData = useState('jsonData', () => null)

const config = useRuntimeConfig()

const supabaseUrl = config.public.supabaseUrl
const supabaseKey = config.public.supabaseAnonKey

const supabase = createClient(supabaseUrl, supabaseKey)

const { data, error } = await supabase
  .from('content')
  .select('*')

if (error) {
  console.error('Lỗi lấy dữ liệu:', error)
} else {
  const formatted = Object.fromEntries(
    data.map(item => [item.name, { data: JSON.parse(item.data), meta: {} }])
  )
  jsonData.value = formatted

  console.log('Formatted:', formatted)
}

onMounted(() => {
  //localStorage.setItem('content', JSON.stringify(jsonData.value))
  // const data = localStorage.getItem('content')
  // jsonData.value = JSON.parse(data)
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
.main-layout {
  width: 100%;
}
</style>
