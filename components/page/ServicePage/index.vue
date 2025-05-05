<script setup>
  import Intro from './Intro/index.vue'
  import './style.css'
  const props = defineProps({
    content: Object
  })
</script>

<template>
    <Intro :content="props.content.intro"/>
</template>
