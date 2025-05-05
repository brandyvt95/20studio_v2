<template>
  <section :class="[s.faq_section, `has_padding_top_and_bottom`, `white_bg`]">
    <div :class="s.container">
      <h2 :class="[s.title, s.is_normal]">
        <div :class="s.title_line">FAQ’S</div>
      </h2>

      <h2 :class="s.label">
        <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" :class="s.icon">
          <path data-v-669b4a84=""
            d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
            fill="currentColor"></path>
        </svg>
        <div :class="s.text">FAQs</div>
      </h2>
      <div :class="s.dif">
        <ul :class="s.list_item">
          <li :class="s.item" v-for="(item, index) in content.content" :key="index">
            <span>
              <p>{{ item.ques }}</p>
            </span>
            <span>
              <p>{{ item.ans }}</p>
            </span>
          </li>
        </ul>

      </div>

    </div>
  </section>

</template>
<script setup>
import s from './style.module.css'
const data = defineProps({
  content: Object
})
</script>