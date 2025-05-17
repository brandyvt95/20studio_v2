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
    <Intro :content="content" />
    <template v-if="stateUiGlobal.isActivePage">
        <Gallery :content="content.DetailProject.DetailSection[0]" />
        <More :content="content.DetailProject.DetailSection" />
    </template>

</template>
