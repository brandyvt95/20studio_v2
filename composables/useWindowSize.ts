import { ref, onMounted, onUnmounted } from 'vue';

export function useWindowSize() {
  const width = ref(0);
  const height = ref(0);

  // Chỉ chạy khi client
  const updateSize = () => {
    if (typeof window !== 'undefined') {
      width.value = window.innerWidth;
      height.value = window.innerHeight;
    }
  };

  onMounted(() => {
    updateSize(); // Đảm bảo cập nhật khi component mount
    window.addEventListener('resize', updateSize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateSize);
  });

  return { width, height };
}
