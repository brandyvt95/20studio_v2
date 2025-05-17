<script setup>
import HeroSection from '../../section/HeroSection/index.vue';
import ServicesSection from './ServicesSection/index.vue';
import FAQSection from './FAQSection/index.vue';
import LetContactSection from './LetContactSection/index.vue';
import './style.css'

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
    <ServicesSection :content="content.ListProject" :info_project="info_project"/>
    <FAQSection :content="content.FAQSection" />
    <LetContactSection :content="content.LetContact" />
  </template>

</template>
