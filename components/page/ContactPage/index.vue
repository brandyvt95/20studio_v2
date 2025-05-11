<script setup>
import Intro from './Intro/index.vue'
import s from './style.module.css'
defineProps({
  content: Object
})
</script>

<template>
  <Intro :content="content" />
</template>
