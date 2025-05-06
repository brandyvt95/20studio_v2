<script setup>
  import s from './style.module.css'
  const isModalMenuOpen = stateModalNavbar()

  function toggleMenu() {
    isModalMenuOpen.value = !isModalMenuOpen.value
  }
</script>
<template>
  <button @click="toggleMenu" :class="s.button_menu" :id="s.button_menu">
    <h3 :class="s.lable">
      <span :class="s.lable_item">Menu</span>
      <span :class="s.lable_item">Close</span>
    </h3>
    <div :class="s.icon">
      <svg viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" :class="s.icon_burger">
        <line x1="18" y1="0.6" y2="0.6" stroke="currentColor" strokeWidth="1.2"></line>
        <line x1="18" y1="5.7167" y2="5.7167" stroke="currentColor" strokeWidth="1.2"></line>
        <line x1="18" y1="10.8334" y2="10.8334" stroke="currentColor" strokeWidth="1.2"></line>
      </svg>
      <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" :class="s.icon_close">
        <line x1="13.788" y1="1.28816" x2="1.06011" y2="14.0161" stroke="currentColor" strokeWidth="1.2"
          :style="{ strokeDashoffset: 19, strokeDasharray: 19 }"></line>
        <line x1="1.06049" y1="1.43963" x2="13.7884" y2="14.1675" stroke="currentColor" strokeWidth="1.2"
          :style="{ strokeDashoffset: 19, strokeDasharray: 19 }"></line>
      </svg>
    </div>
  </button>
</template>
