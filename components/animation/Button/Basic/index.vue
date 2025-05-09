<template>
    <NuxtLink :to="to" :class="[s.wrapper,customClass,color]" >
        <slot />
    </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
    to: string
    customClass?: string
    color?:string
}>()
const color = computed(() => props.color ?? 'clr-white')
import s from './style.module.css'

</script>