
<script setup>
    import s from './style.module.css'
    import Intro from './Intro/index.vue';
    import Gallery from './Gallery/index.vue';
    import More from './More/index.vue';
    const props = defineProps({
    content: Object
    })

</script>
<template>
    <Intro :content="content.detail"/>
    <Gallery :content="content.gallery"/>
    <More :content="content.gallery"/>
</template>
