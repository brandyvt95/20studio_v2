<script setup>
import View from './View/index.vue'
import './style.css'
const props = defineProps({
  content: Object
})

const data = props.content.map((item) => ({
  slug: item.slug,
  brand: item.brand,
  jobDes: item.jobDes,
  thumb: item.thumb,
  background: item.background,
}))
</script>

<template>
  <View :content="data" />
</template>
