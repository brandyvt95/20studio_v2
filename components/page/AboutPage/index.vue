<script setup>
  import HeroSection from '~/components/section/HeroSection/index.vue';
  import Intro from './Intro/index.vue';
  import Advantage from './Advantage/index.vue';
  import Minded from './Minded/index.vue';
  import Us from './Us/index.vue';

  import s from './style.module.css'

  const props = defineProps({
    content: Object
  })

</script>

<template>
    <HeroSection :content="props.content.heroSection"/>
    <Intro :content="props.content.intro"/>
    <Advantage :content="props.content.advantage"/>
    <Minded :content="props.content.minded"/>
    <Us :content="props.content.us"/>
</template>
