<template>
  <div
    ref="wrapperRef"
    class="first-section-wrapper"
    :class="{
      'is-entered': isEntered,
      'is-entering': isEntering,
      'is-leaving': isLeaving,
      'full-viewport': fullViewport
    }"
    data-first-section="true"
  >
    <slot
      :is-entered="isEntered"
      :is-entering="isEntering"
      :is-leaving="isLeaving"
    />
  </div>
</template>

<script setup>
import { computed, provide } from 'vue'
import { stateUiGlobal } from '~/composables/stateUiGlobal'
import { FIRST_SECTION_KEY } from '~/composables/useFirstSection'

const props = defineProps({
  fullViewport: {
    type: Boolean,
    default: false
  }
})

const isEntered = computed(() => stateUiGlobal.isActivePage)
const isEntering = computed(() => stateUiGlobal.isRunningTransitionPage && !stateUiGlobal.isActivePage)
const isLeaving = computed(() => !stateUiGlobal.isActivePage && stateUiGlobal.isRunningTransitionPage)

provide(FIRST_SECTION_KEY, {
  isEntered,
  isEntering,
  isLeaving
})
</script>

<style scoped>
.first-section-wrapper {
  position: relative;
  width: 100%;
  z-index: 1;
}

.first-section-wrapper.full-viewport {
  min-height: 100vh;
  min-height: 100svh;
}
</style>
