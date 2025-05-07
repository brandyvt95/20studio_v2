import { reactive } from 'vue';

export const stateSliderProjects = reactive({
  startAnimation:false,
  activeIndex: 0,
  prevIndex:0,
  direction:0,
  totalItem:0,
  lockScroll:false
});
