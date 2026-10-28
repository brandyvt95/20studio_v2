<script setup>
import Intro from './Intro/index.vue'
import s from './style.module.css'
defineProps({
  content: Object,
  info_company:Object
})
</script>

<template>
  <WrapperFirstSection>
    <Intro :content="content" :info_company="info_company"/>
  </WrapperFirstSection>
</template>
