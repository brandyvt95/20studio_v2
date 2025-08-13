let isInitApp = false
export function initAppCircle() {
  if (isInitApp || typeof window === 'undefined') return
  console.log("INIT APP")
  appState.initApp = true
  initViewportSize()
  isInitApp = true
}