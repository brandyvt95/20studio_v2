<template>
  <div class="service-page story-page">
    <Hero />
    <Origin />
    <Journey />
    <Exploration />
    <Purpose />
  </div>
</template>

<script setup>
import Hero from './Hero/index.vue'
import Origin from './Origin/index.vue'
import Journey from './Journey/index.vue'
import Exploration from './Exploration/index.vue'
import Purpose from './Purpose/index.vue'

defineProps({
  content: Object
})
</script>

<style scoped>
.service-page {
  background-color: #070707;
  color: #e0ccbb;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}
</style>
