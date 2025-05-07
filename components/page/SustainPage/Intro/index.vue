<template>
  <section :class="s.section">
    <div :class="s.container">
      <TypoParagraph tag="span" font="BS-Regular" :class="s.lable">
          <!-- <IconSVG src='/icon/star.svg' :class={s.s.icon} /> -->
          {{ content.tag }}
        </TypoParagraph>
        <TypoHeading tag="p" size="h2" font="BD-Bold" :class="s.title">
          <div v-for="(item, index) in content.tit" :key="index">
            {{ item }}
          </div>
        </TypoHeading>

        <TypoParagraph tag="p" font="BD-Regular" :class="s.body">
          {{ content.more }}
        </TypoParagraph>

    </div>

  </section>
</template>
<script setup>
import TypoHeading from '~/components/common/Typo/TypoHeading.vue';
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';

import s from './style.module.css'
defineProps({
  content: Object
})

</script>