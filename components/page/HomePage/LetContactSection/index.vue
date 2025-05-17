<template>
  <section :class="[s.section, 'bgclr-white', 'clr-story']" data-scopeCursor="close">
    <div :class="s.container">
      <!-- <ul :class="s.media_wrapper">
        <li :class="s.media">
          <img alt="d" src="/images/home/letcontact_c.png" />
        </li>
        <li :class="s.media">

          <img alt="d" src="/images/home/letcontact_tl.png" />
        </li>
        <li :class="s.media">
          <img alt="d" src="/images/home/letcontact_tr.png" />
        </li>
        <li :class="s.media">
          <img alt="d" src="/images/home/letcontact_bl.png" />
        </li>
        <li :class="s.media">
          <img alt="d" src="/images/home/letcontact_br.png" />
        </li>
      </ul> -->

      <div :class="s.text">
        <TypoParagraph tag="p" size="label" font="BS-Regular" :class="s.lable">
          <StarIcon :class="s.icon" />
          {{ content.tag }}
        </TypoParagraph>
        <TypoHeading tag="h2" font="BD-Bold" size="h1" :class="s.title">
          <span v-for="(word, index) in content.TitleSplit" :key="index" :class="s.title_line">
            <span>{{ word.row }}</span>
          </span>
        </TypoHeading>
        <TypoParagraph tag="p" size="h4" font="BD-Regular" :class="s.body">
          {{ content.paragraph }}
        </TypoParagraph>

        <ButtonHoverLine2 color="clr-story" colorIcon="clr-white" colorLine="bgclr-story"
          :to="content.ButtonAction.slug" :customClass="s.link">{{ content.ButtonAction.name }}</ButtonHoverLine2>


      </div>
    </div>

  </section>
</template>
<script setup>
import ButtonHoverLine2 from '~/components/animation/Button/HoverLineVer2/index.vue';
import StarIcon from '~/components/common/InlineSvg/Star.vue';
import TypoHeading from '~/components/common/Typo/TypoHeading.vue';
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';
import s from './style.module.css'
const data = defineProps({
  content: Object
})


</script>