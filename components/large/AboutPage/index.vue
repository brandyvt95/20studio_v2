<script setup>
  import HeroSection from '~/components/HeroSection/index.vue';
  import './style.css'

  const props = defineProps({
    content: Object
  })

</script>

<template>
    <HeroSection :content="props.content.heroSection"/>
</template>
