<script setup>
import HeaderSection from '../components/common/HeaderSection/index.vue'

import Cursor from '../components/common/Cursor/index.vue'
import { onMounted } from 'vue'
import { initViewportSize } from '../composables/useViewportSize'

onMounted(() => {
  initViewportSize()
})
</script>

<template>
 
    <HeaderSection/>
    <Cursor/>
    <div class="main-layout">
        <NuxtPage />
    </div>
    
</template>
<style>
.main-layout {
  
}
</style>
