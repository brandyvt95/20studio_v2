<template>
  <section :class="s.section" data-scopeCursor="close">
    <div :class="s.container">
      <!--    <ul :class={s.s.media_wrapper} ref={triggleSection}>
            <li :class={s.s.media}>
              <Image sizes="100vw" alt="d" src="/home/letcontact_c.png" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={100} />
            </li>
            <li :class={s.s.media}>

              <Image sizes="100vw" alt="d" src="/home/letcontact_tl.png" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={100} />
            </li>
            <li :class={s.s.media}>
              <Image sizes="100vw" alt="d" src="/home/letcontact_tr.png" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={100} />
            </li>
            <li :class={s.s.media}>
              <Image sizes="100vw" alt="d" src="/home/letcontact_bl.png" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={100} /></li>
            <li :class={s.s.media}>
              <Image sizes="100vw" alt="d" src="/home/letcontact_br.png" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={100} />
            </li>
          </ul> -->

      <div :class="s.text">
        <h2 :class="s.lable">
          <!--   <IconSVG src='/icon/star.svg' :class={s.s.icon} /> -->
          {{ content.tag }}
        </h2>
        <h1 :class="s.title">

          <div :class="s.title_line" v-for="(item, index) in content.tit" :key="index">{{ item }}</div>
        </h1>
        <div :class="s.body">
          <p>{{ content.more }}</p>
        </div>

        <NuxtLink :class="s.link">Let&apos;s touch</NuxtLink>


      </div>
    </div>

  </section>
</template>
<script setup>
import TypoHeading from '~/components/common/Typo/TypoHeading.vue';
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';
import s from './style.module.css'
const data = defineProps({
  content: Object
})
</script>