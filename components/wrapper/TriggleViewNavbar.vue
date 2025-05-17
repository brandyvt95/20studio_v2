<template>
    <div class="sdfg2f3az6" ref="markerRef"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const { $ScrollTrigger } = useNuxtApp()

const markerRef = ref(null)
let trigger = null 

onMounted(() => {
    // Đợi một chút để đảm bảo DOM đã được render
    nextTick(() => {
        if (markerRef.value) {
            trigger = $ScrollTrigger.create({
                trigger: markerRef.value,
                start: 'top top',
                end: 'bottom top',
                onEnter: () => {
                    stateUiGlobal.toggleNavbar = false
                },
                onEnterBack: () => {
                    stateUiGlobal.toggleNavbar = false
                },
                onLeave: () => {
                    stateUiGlobal.toggleNavbar = true
                },
              //  markers: true // hiển thị marker debug
            })
        }
    })
})

// Đặt onBeforeUnmount ở cùng cấp với onMounted
onBeforeUnmount(() => {
    if (trigger) {
        trigger.kill()
    }
})
</script>

<style scoped>
.sdfg2f3az6 {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 255, 0.324);
    width: 10px;
    height: 150vh;
    z-index: 9999;
}
</style>
