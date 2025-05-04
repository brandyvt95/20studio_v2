// stores/ui.ts
import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    showComponent: false
  }),
  actions: {
    toggleComponent() {
      this.showComponent = !this.showComponent
    }
  }
})
