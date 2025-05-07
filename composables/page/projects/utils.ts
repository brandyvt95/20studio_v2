import { stateSliderProjects } from "./state"

export  function updateIndex(dir: number) {
    const { activeIndex, totalItem } = stateSliderProjects
    stateSliderProjects.prevIndex = activeIndex
    const nextIndex = (activeIndex + dir + totalItem) % totalItem
    stateSliderProjects.activeIndex = nextIndex
    stateSliderProjects.direction = dir
  }