<script setup>
  import Advantage from './Advantage/index.vue';
  import Intro from './Intro/index.vue';
  import s from './style.module.css'
  const props = defineProps({
    content: Object
  })
</script>

<template>
    <Intro :content="props.content.intro" />
    <Advantage :content="props.content.advantage" />
</template>
