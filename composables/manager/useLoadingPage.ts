import { ref } from 'vue'
import { stateUiGlobal } from '~/composables/stateUiGlobal'

interface Task {
  id: string
  weight: number
  progress: number // 0 to 1
}

// Global reactive state for loading tasks
const tasks = ref<Map<string, Task>>(new Map())
const isLoadingActive = ref(true)
const isLoadingFinished = ref(false)
const rawProgress = ref(0) // 0 to 100

export const useLoadingPage = () => {
  /**
   * Đăng ký một task nặng mới
   * @param id Mã định danh task (ví dụ: 'fonts', 'hero-image', 'webgl')
   * @param weight Trọng số của task (mặc định: 1)
   */
  const registerTask = (id: string, weight = 1) => {
    if (typeof window === 'undefined') return
    if (tasks.value.has(id)) return

    tasks.value.set(id, {
      id,
      weight: Math.max(0.1, weight),
      progress: 0
    })
  }

  /**
   * Cập nhật tiến độ của task từ 0 đến 1 (ví dụ: 0.5 = 50%)
   */
  const updateTaskProgress = (id: string, progress: number) => {
    if (typeof window === 'undefined') return
    const task = tasks.value.get(id)
    if (task) {
      task.progress = Math.min(1, Math.max(0, progress))
      calculateTotalProgress()
    }
  }

  /**
   * Đánh dấu task đã hoàn tất 100%
   */
  const completeTask = (id: string) => {
    updateTaskProgress(id, 1)
  }

  /**
   * Tính toán % tiến trình tổng dựa trên trọng số của các task
   */
  const calculateTotalProgress = () => {
    if (tasks.value.size === 0) {
      rawProgress.value = 100
      return
    }

    let totalWeight = 0
    let currentWeight = 0

    tasks.value.forEach((task) => {
      totalWeight += task.weight
      currentWeight += task.weight * task.progress
    })

    const calculated = totalWeight > 0 ? (currentWeight / totalWeight) * 100 : 100
    rawProgress.value = Math.max(rawProgress.value, Math.round(calculated))
  }

  /**
   * Đánh dấu LoadingPage đã hoàn thành
   */
  const markAsLoaded = () => {
    isLoadingActive.value = false
    isLoadingFinished.value = true
    stateUiGlobal.isActivePage = true
    stateUiGlobal.isPageFirstLoad = true
  }

  return {
    tasks,
    rawProgress,
    isLoadingActive,
    isLoadingFinished,
    registerTask,
    updateTaskProgress,
    completeTask,
    markAsLoaded
  }
}
