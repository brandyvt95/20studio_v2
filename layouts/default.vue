<script setup>
import BasicNavbar from '../components/common/Navbar/BasicNavbar/index.vue'
import ModalNavbar from '../components/common/Navbar/ModalNavbar/index.vue'
import Footer from '../components/common/Footer/index.vue'
import Cursor from '../components/common/Cursor/index.vue'
</script>

<template>
    <header>
        <BasicNavbar />
        <ModalNavbar/>
    </header>
    <Cursor/>
    <div class="main-layout">
        <NuxtPage />
    </div>
    <Footer />
</template>
<style>
.main-layout {
  
}
</style>
