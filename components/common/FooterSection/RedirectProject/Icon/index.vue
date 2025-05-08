<template>
    <svg ref="svgRef" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" :class="s.icon">
        <circle cx="20" cy="20" r="18" stroke-width="1.5" stroke="currentColor" stroke-opacity="0.5" />
        <circle ref="cirRefIc" cx="20" cy="20" r="18" stroke-width="1.5" stroke="currentColor" stroke-opacity="1"
            :style="{ strokeDashoffset: 0.000999 }" />
    </svg>
</template>
<script setup>
    import s from '../style.module.css'
    const svgRef = ref(null)
    defineExpose({svgRef})
</script>