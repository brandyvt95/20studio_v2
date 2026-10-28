<template>
  <section v-if="content" :class="s.section">
    <div :class="s.container">
      <TypoParagraph tag="p" font="BD-Medium" :class="s.label">
        <StarIcon :class="s.icon" />
        <span>{{ content.tag }}</span>
      </TypoParagraph>

      <TypoHeading tag="h3" size="h1" font="BD-Regular" :class="s.title">
        <span v-for="(item, index) in content.TitleSplit" :key="index">{{ item.row }}</span>
      </TypoHeading>

      <div :class="s.publications">
        <ul>
          <li v-for="(pub, index) in content.publications" :key="index">
            <p>
              {{ pub.name }}<br />
              {{ pub.desc }}<br />
              <a :href="pub.url" target="_blank" rel="noopener">{{ pub.org }}</a>
            </p>
          </li>
        </ul>
      </div>

      <ul :class="s.awards">
        <li v-for="(award, index) in content.awards" :key="index" :class="s.item">
          <span :class="s.name">{{ award.name }}</span>
          <span :class="s.amount">{{ award.amount }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import StarIcon from '~/components/common/InlineSvg/Star.vue'
import TypoHeading from '~/components/common/Typo/TypoHeading.vue'
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue'
import s from './style.module.css'

defineProps({
  content: Object
})
</script>
