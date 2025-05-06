<script setup>
import BasicNavbar from '../components/common/Navbar/BasicNavbar/index.vue'
import ModalNavbar from '../components/common/Navbar/ModalNavbar/index.vue'
import Footer from '../components/common/Footer/index.vue'
</script>

<template>
    <header>
        <BasicNavbar />
        <ModalNavbar/>
    </header>
  
    <div class="main-layout">
        <NuxtPage />
    </div>
    <Footer />
</template>
