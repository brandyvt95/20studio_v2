<template>
  <footer ref="wrapper" :class="s.footer" data-scopeCursor="close">
    <div ref="container" :class="s.container">
      <!-- Title (Our Story) -->
      <div :class="s.title">
        <div
          v-for="(item, index) in (content?.TitleSplit || [{ row: 'Our' }, { row: 'Story' }])"
          :key="index"
          :class="s.title_mask"
        >
          <div>{{ item.row }}</div>
        </div>
      </div>

      <!-- Body description -->
      <p :class="s.body">
        {{ content?.paragraph || 'The story behind 20Studio is one of exploration, creativity and curiosity.' }}
      </p>

      <!-- CTA Button (Our Story) -->
      <div :class="s.link">
        <ButtonHoverLineVer2
          :to="content?.ButtonAction?.slug?.trim() || '/about'"
          color="clr-sand"
          colorLine="bgclr-sand--08"
          colorIcon="clr-story"
        >
          <TypoParagraph font="BS-Medium" tag="span">
            {{ content?.ButtonAction?.name?.trim() || 'Our Story' }}
          </TypoParagraph>
        </ButtonHoverLineVer2>
      </div>

      <!-- Divider -->
      <div :class="s.divider"></div>

      <!-- Address column (Desktop: Col 1-3) -->
      <ul :class="s.address">
        <li :class="s.item">
          <a
            :href="info_company?.Location?.link || '#'"
            target="_blank"
            rel="noopener"
            :class="s.footer_link"
          >
            {{ info_company?.Location?.street }}<br />
            {{ info_company?.Location?.ward }},<br />
            {{ info_company?.Location?.city }}
          </a>
        </li>
        <li :class="s.item">
          <a
            :href="'mailto:' + (info_company?.Contact?.mail || '20studio.contact@gmail.com')"
            :class="s.footer_link"
          >
            {{ info_company?.Contact?.mail || '20studio.contact@gmail.com' }}
          </a>
        </li>
      </ul>

      <!-- Navigation column (Desktop: Col 4-5) -->
      <ul :class="s.nav">
        <li v-for="item in navLinks" :key="item.slug" :class="s.item">
          <NuxtLink
            :to="item.slug"
            :class="[s.footer_link, { [s.is_current]: isCurrent(item.slug) }]"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Social links column (Desktop: Col 6-8) -->
      <ul :class="s.social">
        <li v-for="item in socialLinks" :key="item.label" :class="s.item">
          <a
            :href="item.href"
            target="_blank"
            rel="noreferrer"
            :class="s.footer_link"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>

    <!-- Video Background (Top-right corner with radial vignette mask) -->
    <div ref="background" :class="s.background">
      <video
        ref="videoRef"
        :class="s.video"
        playsinline
        loop
        muted
        autoplay
        disablepictureinpicture
        disableremoteplayback
      >
        <source src="/video/video-6.mp4" type="video/mp4" />
      </video>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import ButtonHoverLineVer2 from '~/components/animation/Button/HoverLineVer2/index.vue'
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue'
import s from './style.module.css'

const props = defineProps({
  content: Object,
  info_navbar: Array,
  info_company: Object
})

const route = useRoute()
const wrapper = ref(null)
const container = ref(null)
const background = ref(null)
const videoRef = ref(null)

const { $gsap } = useNuxtApp()
let ctx = null
let observer = null

// Navigation links matching Exo Ape
const navLinks = [
  { label: 'Work', slug: '/projects' },
  { label: 'Studio', slug: '/about' },
  { label: 'News', slug: '/news' },
  { label: 'Contact', slug: '/contact' }
]

function isCurrent(slug) {
  if (slug === '/projects') {
    return route.path === '/projects' || route.path.startsWith('/projects/')
  }
  return route.path === slug
}

// Social links matching Exo Ape
const socialLinks = computed(() => {
  const soc = props.info_company?.Social || {}
  return [
    { label: 'Behance', href: soc.behance || 'https://www.behance.net/' },
    { label: 'Dribbble', href: soc.dribbble || 'https://dribbble.com/' },
    { label: 'Linkedin', href: soc.linkedin || 'https://linkedin.com/' },
    { label: 'Instagram', href: soc.instagram || 'https://www.instagram.com/' }
  ]
})

onMounted(() => {
  nextTick(() => {
    if (!wrapper.value) return

    // IntersectionObserver to auto play/pause background video
    if (typeof IntersectionObserver !== 'undefined' && videoRef.value) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.value?.play()?.catch(() => {})
          } else {
            videoRef.value?.pause()
          }
        })
      }, { threshold: 0.05 })
      observer.observe(wrapper.value)
    }

    // Scroll parallax reveal matching Exo Ape formula
    if ($gsap && container.value && background.value) {
      ctx = $gsap.context(() => {
        const wrapH = wrapper.value.getBoundingClientRect().height || window.innerHeight * 0.6

        $gsap.timeline({
          scrollTrigger: {
            trigger: wrapper.value,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: true
          }
        })
        .fromTo(container.value, { y: -wrapH / 2 }, { y: 0, ease: 'none' }, 0)
        .fromTo(background.value, { y: -wrapH / 2.2 }, { y: 0, ease: 'none' }, 0)
      }, wrapper.value)
    }
  })
})

onUnmounted(() => {
  if (ctx) {
    ctx.revert()
    ctx = null
  }
  if (observer) {
    observer.disconnect()
    observer = null
  }
})
</script>