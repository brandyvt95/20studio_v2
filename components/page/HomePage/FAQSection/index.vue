<template>
  <section :class="s.section">
    <div :class="s.container">
      <TypoHeading tag="h2" size="h1" font="BD-Regular" :class="s.title">
        FAQ’S
      </TypoHeading>
   
      <TypoParagraph tag="p" font="BD-Regular" :class="s.label">

        <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" :class="s.icon">
          <path data-v-669b4a84=""
            d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
            fill="currentColor"></path>
        </svg>
        <div>FAQs</div>
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
import TypoHeading from '~/components/common/Typo/TypoHeading.vue';
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';
const data = defineProps({
  content: Object
})
</script>