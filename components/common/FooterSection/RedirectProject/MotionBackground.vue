<template>
    <div :class="props.customClass">
        <slot />
    </div>
</template>
<script setup>
const props = defineProps({
    customClass: {
        type: String,
        required: true,
    }
})
const { $gsap } = useNuxtApp()
</script>