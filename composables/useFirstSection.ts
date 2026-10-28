import { inject, computed, type ComputedRef } from 'vue'
import { stateUiGlobal } from './stateUiGlobal'

export interface FirstSectionContext {
  isEntered: ComputedRef<boolean>
  isEntering: ComputedRef<boolean>
  isLeaving: ComputedRef<boolean>
}

export const FIRST_SECTION_KEY = Symbol('FirstSectionState')

export const useFirstSection = (): FirstSectionContext => {
  const context = inject<FirstSectionContext | null>(FIRST_SECTION_KEY, null)
  if (context) return context

  return {
    isEntered: computed(() => stateUiGlobal.isActivePage),
    isEntering: computed(() => stateUiGlobal.isRunningTransitionPage && !stateUiGlobal.isActivePage),
    isLeaving: computed(() => !stateUiGlobal.isActivePage && stateUiGlobal.isRunningTransitionPage)
  }
}
