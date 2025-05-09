<template>
    <NuxtLink :to="to" :class="[s.wrapper,customClass,color]" >
        <slot />
        <span :class="[s.line,colorLine]" ></span>
    </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  to: string
  customClass?: string
  colorLine?: string
  color?:string
}>()

const color = computed(() => props.color ?? 'clr-white')
const colorLine = computed(() => props.colorLine ?? 'bgclr-white')

import s from './style.module.css'
</script>