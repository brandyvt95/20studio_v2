<template>
  <section :class="s.layout_custom">
    <div :class="s.container">
      <div :class="s.sketching">
        <h3>{{ content[1].title }}</h3>
        <p>{{ content[1].paragraph }}</p>
      </div>
      <div :class="s.sketchingImg">
        <img :src="content[1].images[0].url" alt="" />
      </div>

      <div :class="s.experimentation">
        <h3>{{ content[2].title }}</h3>
        <p>{{ content[2].paragraph }}</p>
      </div>
      <div :class="s.experimentationImg1">
        <img :src="content[2].images[0].url" alt="" />
      </div>
      <div :class="s.experimentationImg2">
        <img :src="content[2].images[1].url" alt="" />
      </div>

      <div :class="s.prototyping">
        <h3>{{ content[3].title }}</h3>
        <p>{{ content[3].paragraph }}</p>

      </div>
      <div :class="s.prototypingImg">
        <img :src="content[3].images[0].url" alt="" />
      </div>
    </div>

    <div :class="s.experimentationImg3">
      <img :src="content[2].images[2].url" alt="" />
    </div>
  </section>
</template>
<script setup>
import s from './style.module.css'
const props = defineProps({
  content: Object
})
</script>
