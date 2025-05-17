<template>
  <section :class="s.section">
    <div :class="s.container">
      <TypoParagraph tag="p" size="lable" font="BD-Regular" :class="s.lable">
          <StarIcon :class="s.icon"/>
           {{ content.tag }}
        </TypoParagraph>
        <TypoHeading tag="h2" size="h2" font="BD-Bold" :class="s.title">
          <div v-for="(item, index) in content.TitleSplit" :key="index">
            {{ item.row }}
          </div>
        </TypoHeading>

        <TypoParagraph tag="p" font="BS-Regular" :class="s.body">
       {{ content.paragraph }}
        </TypoParagraph>

    </div>

  </section>
</template>
<script setup>
import TypoHeading from '~/components/common/Typo/TypoHeading.vue';
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';
import StarIcon from '~/components/common/InlineSvg/Star.vue';
import s from './style.module.css'
 const data = defineProps({
  content: Object
})
console.log(data.content)
</script>