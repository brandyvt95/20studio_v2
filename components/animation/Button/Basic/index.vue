<template>
    <NuxtLink :to="to" :class="[s.wrapper,customClass]" >
        <slot />
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
    to: string
    customClass?: string
}>()

import s from './style.module.css'
</script>