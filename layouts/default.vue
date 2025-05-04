<script setup>
import { Footer, Navbar } from '#components';
</script>

<template>
    <div class="relative w-screen h-screen overflow-hidden">

        <Navbar />

        <div class="page-container">
            <NuxtPage />
        </div>

        <Footer />
    </div>
</template>

<style>

</style>
