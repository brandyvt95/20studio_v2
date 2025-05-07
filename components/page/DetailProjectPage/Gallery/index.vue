<template >
    <section :class="s.GridImageSlider">
    <div :class="s.titleProject">
      <h2 :class="s.nameProject">{{ content.infoProject }}</h2>
      <p :class="s.infoProject">{{ content.desProject }}</p>
    </div>

    <div :class="s.container">
      <div :class="s.row" ref="domEffectTop">
        <div v-for="(src, index) in content.img.slice(0, 3)" :key="index" :class="s.media">
          <img
            alt="image_cache_work"
            :src="src"
            width="0"
            height="0"
            sizes="100vw"
            :style="{ objectFit: 'cover', width: 'auto', height: '100%' }"
          />
        </div>
      </div>

      <div :class="s.row" ref="domEffectBot">
        <div v-for="(src, index) in content.img.slice(3, 6)" :key="index" :class="s.media">
          <img
            alt="image_cache_work"
            :src="src"
            width="0"
            height="0"
            sizes="100vw"
            :style="{ width: '100%', height: 'auto' }"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
    import s from './style.module.css'
    const props = defineProps({
  content: Object
})

</script>
