<script setup>
import HeroSection from '~/components/HeroSection/index.vue';
import ServicesSection from '~/components/ServicesSection/index.vue';
import FAQSection from '~/components/FAQSection/index.vue';
import LetContactSection from '~/components/LetContactSection/index.vue';
import './style.css'

const props = defineProps({
  content: Object
})

</script>

<template>

  <HeroSection :content="props.content.heroSection" />
  <ServicesSection :content="props.content.serviceSection" />
  <FAQSection :content="props.content.faqSection" />
  <LetContactSection :content="props.content.letContact" />
</template>
