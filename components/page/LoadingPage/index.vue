<template>
  <div
    v-if="isVisible"
    ref="layerRef"
    :class="s.loading_layer"
    aria-hidden="true"
  >
    <div ref="centerRef" :class="s.center">
      <!-- 20 Typography Mark -->
      <div :class="s.mark_wrap">
        <!-- Background faint 20 -->
        <span :class="s.text_bg">20</span>

        <!-- Filled 20 based on progress -->
        <span
          :class="s.text_fill"
          :style="{ clipPath: `inset(${100 - Math.round(displayProgress)}% 0 0 0)` }"
        >
          20
        </span>
      </div>

      <!-- Minimal progress info -->
      <div :class="s.meta">
        <div :class="s.bar_track">
          <div
            :class="s.bar_fill"
            :style="{ transform: `scaleX(${displayProgress / 100})` }"
          ></div>
        </div>
        <span :class="s.percent">{{ formattedPercent }}%</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useLoadingPage } from '~/composables/manager/useLoadingPage'
import s from './style.module.css'

const {
  rawProgress,
  registerTask,
  completeTask,
  markAsLoaded
} = useLoadingPage()

const layerRef = ref(null)
const centerRef = ref(null)
const isVisible = ref(true)
const displayProgress = ref(0)
const { $gsap } = useNuxtApp()

let outroStarted = false
let mainTween = null
let safetyTimer = null

// Guaranteed minimum fill duration >= 2.2s
const MIN_FILL_DURATION = 2.2

const formattedPercent = computed(() => {
  const p = Math.round(displayProgress.value)
  return p < 10 ? `0${p}` : `${p}`
})

onMounted(() => {
  // 1. Initial tasks registration
  registerTask('core', 1)
  registerTask('fonts', 1)

  completeTask('core')

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      completeTask('fonts')
    }).catch(() => {
      completeTask('fonts')
    })
  } else {
    completeTask('fonts')
  }

  // 2. Smooth GSAP progression ensuring >= 2.2s visible time
  nextTick(() => {
    if (!$gsap) {
      displayProgress.value = 100
      setTimeout(triggerOutro, MIN_FILL_DURATION * 1000)
      return
    }

    const progressTracker = { val: 0 }

    mainTween = $gsap.to(progressTracker, {
      val: 100,
      duration: MIN_FILL_DURATION,
      ease: 'power1.inOut',
      onUpdate: () => {
        // Hold at 92% if registered heavy tasks are still running
        if (rawProgress.value < 100 && progressTracker.val >= 92) {
          displayProgress.value = 92
        } else {
          displayProgress.value = progressTracker.val
        }
      },
      onComplete: () => {
        displayProgress.value = 100
        // Pause 200ms at 100% so user sees completion
        setTimeout(() => {
          triggerOutro()
        }, 200)
      }
    })
  })

  // 3. Safety Fallback: max 4.5s
  safetyTimer = setTimeout(() => {
    if (!outroStarted) {
      displayProgress.value = 100
      triggerOutro()
    }
  }, 4500)
})

function triggerOutro() {
  if (outroStarted) return
  outroStarted = true

  if (safetyTimer) {
    clearTimeout(safetyTimer)
    safetyTimer = null
  }

  if (mainTween) {
    mainTween.kill()
    mainTween = null
  }

  if ($gsap && layerRef.value && centerRef.value) {
    const tl = $gsap.timeline({
      onComplete: () => {
        markAsLoaded()
        isVisible.value = false
      }
    })

    // Step 1: Fade out typography and bar
    tl.to(centerRef.value, {
      scale: 0.94,
      opacity: 0,
      duration: 0.45,
      ease: 'power2.in'
    })

    // Step 2: Smooth curtain wipe up (unveiling the entire page underneath)
    tl.to(
      layerRef.value,
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%)',
        duration: 0.85,
        ease: 'power3.inOut'
      },
      '-=0.1'
    )
  } else {
    markAsLoaded()
    isVisible.value = false
  }
}

onUnmounted(() => {
  if (mainTween) mainTween.kill()
  if (safetyTimer) clearTimeout(safetyTimer)
})
</script>
