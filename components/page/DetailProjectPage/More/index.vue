<template >
     <section :class="s.layout_custom">
    <div :class="s.container">
      <div :class="s.sketching">
        <h3>Sketching</h3>
        <p>Great works start with great ideas</p>
      </div>
      <div :class="s.sketchingImg">
        <img :src="content.img2[0]" alt="img" width="0" height="0" sizes="100vw" style="height: auto; width: 100%;" />
      </div>

      <div :class="s.experimentation">
        <h3>Experimentation</h3>
        <p>Finding solutions to turn wildest idea into reality</p>
      </div>
      <div :class="s.experimentationImg1">
        <img :src="content.img2[1]" alt="img" width="0" height="0" sizes="100vw" style="height: auto; width: 100%;" />
      </div>
      <div :class="s.experimentationImg2">
        <img :src="content.img2[2]" alt="img" width="0" height="0" sizes="100vw" style="height: auto; width: 100%;" />
      </div>

      <div :class="s.prototyping">
        <h3>Prototyping & Craftmenship</h3>
        <p>Craftmenship</p>
      </div>
      <div :class="s.prototypingImg">
        <img :src="content.img2[3]" alt="img" width="0" height="0" sizes="100vw" style="height: auto; width: 100%;" />
      </div>
    </div>

    <div :class="s.experimentationImg3">
      <img :src="content.img2[4]" alt="img" width="0" height="0" sizes="100vw" style="height: auto; width: 100%;" />
    </div>
  </section>
</template>
<script setup>
    import s from './style.module.css'
    const props = defineProps({
  content: Object
})

</script>
