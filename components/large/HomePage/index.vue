<script setup>
  import HeroSection from '~/components/HeroSection/index.vue'; 
  import ServicesSection from '~/components/ServicesSection/index.vue'; 
  import SampleSection from '~/components/SampleSection/index.vue'; 
  import './style.css'



  const props = defineProps({
    content: Object
  })

</script>

<template>
    <HeroSection :content="props.content.heroSection"/>
    <!-- <ServicesSection :content="props.content.serviceSection"/>
    <SampleSection  /> -->
</template>
