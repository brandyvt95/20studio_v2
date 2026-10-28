<template>
  <section :class="s.section" data-scopeCursor="close">
    <div :class="s.container">
      <div :class="s.image">
        <img :src="content?.images?.[0]?.url || '/images/contact/banner.webp'" alt="contact" />
      </div>

      <SlideLoop>
        {{ content.titleSlide }}
      </SlideLoop>

      <div :class="s.left">
        <div :class="s.body">
          <p>{{ content.intro }}</p>
        </div>
        <ul :class="s.contact">
          <li :class="s.contact_item">
            <ButtonHoverLineVer2
              :to="'mailto:' + (info_company?.Contact?.mail || '20studio.contact@gmail.com')"
              color="clr-dark-grey"
              colorLine="bgclr-dark-grey"
              colorIcon="clr-white"
            >
              <TypoParagraph font="BS-Medium" tag="span">
                {{ info_company?.Contact?.mail || '20studio.contact@gmail.com' }}
              </TypoParagraph>
            </ButtonHoverLineVer2>
          </li>
          <li :class="s.contact_item">
            <ButtonHoverLineVer2
              :to="'tel:' + (info_company?.Contact?.phone || '0969.168.629')"
              color="clr-dark-grey"
              colorLine="bgclr-dark-grey"
              colorIcon="clr-white"
            >
              <TypoParagraph font="BS-Medium" tag="span">
                {{ info_company?.Contact?.phone || '0969.168.629' }}
              </TypoParagraph>
            </ButtonHoverLineVer2>
          </li>
        </ul>
      </div>

      <div :class="s.right">
        <a
          :href="info_company?.Location?.link || '#'"
          target="_blank"
          rel="noopener"
          :class="s.address"
        >
          {{ info_company?.Location?.street }},<br />
          {{ info_company?.Location?.ward }},<br />
          {{ info_company?.Location?.city }}.
        </a>

        <ButtonHoverLineVer2
          :to="info_company?.Location?.link || '#'"
          target="_blank"
          color="clr-dark-grey"
          colorLine="bgclr-dark-grey"
          colorIcon="clr-white"
        >
          <TypoParagraph font="BS-Medium" tag="span">
            {{ content?.ButtonAction?.name || content?.ButtonAction?.[0]?.name || 'View on maps' }}
          </TypoParagraph>
        </ButtonHoverLineVer2>
      </div>
    </div>
  </section>
</template>

<script setup>
import SlideLoop from './SlideLoop.vue'
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue'
import ButtonHoverLineVer2 from '~/components/animation/Button/HoverLineVer2/index.vue'
import s from './style.module.css'

defineProps({
  content: Object,
  info_company: Object
})
</script>