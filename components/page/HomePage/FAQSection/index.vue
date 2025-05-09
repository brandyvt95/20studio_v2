<template>
  <section :class="[s.section,'bgclr-white','clr-dark-grey']" data-scopeCursor="close">
    <div :class="s.container">
      <SlideMotion :useScrollTrigger="true" :direction="1" :rotate="7" :duration="1" :className="s.title">
        <TypoHeading tag="h2" size="h1" font="BD-Regular" >
        FAQ’S
      </TypoHeading>
      </SlideMotion>

   
      <TypoParagraph tag="p" font="BD-Regular" :class="s.label">

        <StarIcon :class="s.icon"/>
        <span>FAQs</span>
      </TypoParagraph>




        <ul :class="s.list">
          <li :class="s.item" v-for="(item, index) in content.content" :key="index">
            <TypoParagraph tag="p" font="BS-Medium">{{ item.ques }}</TypoParagraph>
            <TypoParagraph tag="p" font="BS-Medium">{{ item.ans }}</TypoParagraph>
          </li>
        </ul>


    </div>
  </section>

</template>
<script setup>
import s from './style.module.css'
import SlideMotion from '~/components/animation/Text/SlideMotion/index.vue';
import TypoHeading from '~/components/common/Typo/TypoHeading.vue';
import StarIcon from '~/components/common/InlineSvg/Star.vue';
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';
const data = defineProps({
  content: Object
})
</script>