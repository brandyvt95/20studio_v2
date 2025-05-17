<script setup>
  import HeroSection from '~/components/section/HeroSection/index.vue';
  import Intro from './Intro/index.vue';
  import Advantage from './Advantage/index.vue';
  import Minded from './Minded/index.vue';
  import Us from './Us/index.vue';

  import s from './style.module.css'

  const props = defineProps({
     content: Object,
    info_navbar:Object,
    info_company:Object,
    info_project:Object
  })

</script>

<template>
    <HeroSection 
    :content="content.HeroSection"
    :info_navbar="info_navbar" 
    :info_company="info_company" 
    />
    <template v-if="stateUiGlobal.isActivePage">
      <Intro :content="content.IntroSection"/>
     <Advantage :content="content.AdvantageSection"/>
      <Minded :content="content.MindedSection"/>
       <Us :content="content.UsSection"/>
    </template>

</template>
