<template>
    <NuxtImg :src="src" :alt="alt" :width="width" :height="height" :sizes="sizes" :format="format"
        :placeholder="placeholder" :class="imgClass" loading="lazy" fit="cover" />
</template>

<script setup lang="ts">
defineProps({
    src: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        default: '',
    },
    width: {
        type: [String, Number],
        default: undefined,
    },
    height: {
        type: [String, Number],
        default: undefined,
    },
    sizes: {
        type: String,
        default: '100vw', // responsive full width theo viewport
    },
    format: {
        type: String,
        default: 'webp', // hoặc 'auto' để tự động chọn định dạng
    },
    placeholder: {
        type: [Boolean, String],
        default: 'blur', // blur mờ ảnh khi load
    },
    imgClass: {
        type: String,
        default: 'rounded-xl shadow-md object-cover',
    },
});
</script>


<!-- 
  
  <BaseImage
  src="https://res.cloudinary.com/demo/image/upload/sample.jpg"
  alt="Ảnh đẹp"
  width="1200"
  height="600"
  sizes="(max-width: 768px) 100vw, 800px"
/>
  -->