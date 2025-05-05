<script setup>
import HeroSection from '../../section/HeroSection/index.vue';
import ServicesSection from './ServicesSection/index.vue';
import FAQSection from './FAQSection/index.vue';
import LetContactSection from './LetContactSection/index.vue';
import './style.css'

const props = defineProps({
  content: Object
})

</script>

<template>

  <HeroSection :content="props.content.heroSection" />
  <!-- <template v-if="stateUiGlobal.isActivePage"> -->
    <ServicesSection :content="props.content.serviceSection" />
    <FAQSection :content="props.content.faqSection" />
    <LetContactSection :content="props.content.letContact" />
  <!-- </template> -->

</template>
