<template>
    <header>
        <BasicNavbar :content="common"/>
        <ModalNavbar :content="common"/>
    </header>

</template>
<script setup>
import BasicNavbar from './BasicNavbar/index.vue'
import ModalNavbar from './ModalNavbar/index.vue'
import {common} from '~/constants/content'
</script>