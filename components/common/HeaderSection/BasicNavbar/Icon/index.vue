<template>
    <span :class='s.this_icon' ref="iconRef">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none">
            <path
                d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                fill="currentColor" />
        </svg>
    </span>
</template>
<script setup>
import s from '../style.module.css'
import { useRoute } from 'vue-router';
import { onMounted, onUnmounted, ref, watch, computed } from 'vue';

const { $gsap } = useNuxtApp()
const data = defineProps({
  content: Object
})

const paths = Object.values(data.content);
const route = useRoute();
const iconRef = ref(null)
defineExpose({iconRef})
// Reactive state for window dimensions
const dimensions = ref({
  distance: 0,
  size: 0,
  offset: 0
})

// Calculate and store dimensions
const calculateDimensions = () => {
  const ws = window.innerWidth
  dimensions.value = {
    distance: 7 * ws / 100,
    size: 0.7 * ws / 100,
    offset: (7 * ws / 100 - 0.7 * ws / 100) / 2
  }
}

// Get current index based on route
const getCurrentIndex = (path) => {
  return paths.findIndex(p => p === path);
}

// Debounced resize handler
let resizeTimeout;
const handleResize = () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    calculateDimensions();
    
    // Update position immediately after resize
    if (iconRef.value) {
      const currentIndex = getCurrentIndex(route.path);
      $gsap.to(iconRef.value, {
        x: dimensions.value.distance * currentIndex + dimensions.value.offset,
        duration: 0.3
      });
    }
  }, 200);
}

// Handle animation
const animateIcon = (newPath) => {
  if (!iconRef.value) return;
  
  const currentIndex = getCurrentIndex(newPath);
  if (currentIndex === -1) return;
  
  $gsap.to(iconRef.value, {
    x: dimensions.value.distance * currentIndex + dimensions.value.offset,
    rotate: 90 * currentIndex,
    duration: 1,
    ease: "power2.out",
    force3D: true
  });
}

onMounted(() => {
  // Set initial dimensions
  calculateDimensions();
  
  // Add resize listener
  window.addEventListener('resize', handleResize);
  
  // Apply will-change for better performance
  if (iconRef.value) {
    iconRef.value.style.willChange = 'transform, opacity';
  }
  
  const initialIndex = getCurrentIndex(route.path);
  
  // Initial animation
  $gsap.timeline()
    .set(iconRef.value, {
      x: dimensions.value.distance * initialIndex + dimensions.value.offset
    })
    .fromTo(iconRef.value, {
      opacity: 0,
    }, {
      opacity: 1,
      rotate: 180,
      duration: 0.3,
      ease: "power2.out"
    });
  
  // Watch for route changes
  watch(
    () => route.path,
    (newPath) => animateIcon(newPath)
  );
});

onUnmounted(() => {
  // Clean up
  window.removeEventListener('resize', handleResize);
  if (iconRef.value) {
    $gsap.killTweensOf(iconRef.value);
  }
});
</script>