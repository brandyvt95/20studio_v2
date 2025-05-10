// composables/useViewportSize.ts
import { ref } from 'vue'

// Tạo các biến reactive singleton
export const viewportWidth = ref(0)
export const viewportHeight = ref(0)
let initialized = false

// Hàm khởi tạo riêng để gọi trong layout
export function initViewportSize() {
  if (initialized || typeof window === 'undefined') return
  
  const update = () => {
    viewportWidth.value = window.innerWidth
    viewportHeight.value = window.innerHeight
  }
  
  // Khởi tạo giá trị ban đầu
  update()
  
  // Thêm sự kiện lắng nghe
  window.addEventListener('resize', update)
  
  // Xóa sự kiện khi unload để tránh memory leak
  window.addEventListener('beforeunload', () => {
    window.removeEventListener('resize', update)
  })
  
  initialized = true
}

// Composable để sử dụng trong các component
export function useViewportSize() {
  return {
    width: viewportWidth,
    height: viewportHeight
  }
}