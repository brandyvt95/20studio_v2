<script setup>
  import View from './View/index.vue'
  import './style.css'
  import { projects_page } from '~/constants/content'
</script>

<template>
    <View :content="projects_page.content"/>
</template>
