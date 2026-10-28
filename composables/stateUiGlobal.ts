import { reactive } from 'vue';
export const appState = reactive({
  initApp:false,
})
export const utilsApp = reactive({
  initHookViewportSize:false
})
export const stateUiGlobal = reactive({
  isActivePage: false,
  isPageFirstLoad:false,
  isRunningTransitionPage:false,
  isProjectPageToDetailProject:false,
  isFireMotionFlash:false,
  toggleNavbar:false,
  pageZIndex: 10
});

export const navbarState = reactive({
  isModalMenuOpen:false,
  redirectOnNavbar:false
})

export const stateMouseGlobal = reactive({
  isExpend:true
});