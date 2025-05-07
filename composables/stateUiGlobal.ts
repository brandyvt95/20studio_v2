import { reactive } from 'vue';

export const stateUiGlobal = reactive({
  isActivePage: false,
  isPageFirstLoad:false,
  isRunningTransitionPage:false
});



export const stateMouseGlobal = reactive({
  isExpend:true
});