<template>

    <section :class="s.wrapper" ref="wrapper">
        <div :class="s.footer_section" ref="content">
            <div :class="s.container">
            <div :class="s.title">
                <div>Our</div>
                <div>Mission</div>
            </div>
            <p :class="s.body">20Studio wishes to accompany you and create the best quality products at competitive prices
                within the committed deadline.</p>
            <div :class="s.divider"></div>
            <ul :class="s.address">
                <li :class="s.item">
                    <NuxtLink to="#">
                        340D Hoang Van Thu Street,<br />
                        Ward 4, Tan Binh District,<br /> HCMC.
                    </NuxtLink>
                </li>
                <li :class="s.item">
                    <NuxtLink to="mailto:20studio.contact@gmail.com">
                        20studio.contact@gmail.com
                    </NuxtLink>
                </li>
            </ul>
            <ul :class="s.nav_footer">
                <li :class="s.item">
                    <NuxtLink to='/'>
                        Sustain
                    </NuxtLink>
                </li>
                <li :class="s.item">
                    <NuxtLink to='/'>
                        Home
                    </NuxtLink>
                </li>
                <li :class="s.item">
                    <NuxtLink to='/about'>
                        About us
                    </NuxtLink>
                </li>
                <li :class="s.item">
                    <NuxtLink to='/'>
                        Contact
                    </NuxtLink>
                </li>
            </ul>
            <ul :class="s.social">
                <li :class="s.item">
                    <NuxtLink to='https://www.instagram.com/20studio.vn/' :class="s.main_line">
                        Facebook
                    </NuxtLink>
                </li>
                <li :class="s.item">
                    <NuxtLink to='https://www.instagram.com/20studio.vn/' :class="s.main_line">
                        Instagram
                    </NuxtLink>
                </li>
            </ul>
            <NuxtLink classAdd="link wrap circle">
                Our service
            </NuxtLink>
        </div>
        </div>
     
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import s from './style.module.css'

const {$gsap} = useNuxtApp() 
const wrapper = ref(null)
const content = ref(null)

let ctx 
onMounted(() => {
  nextTick(() => {
    if (!wrapper.value || !content.value) return

    ctx = $gsap.context(() => {
      $gsap.to(content.value, {
        y: -700,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper.value,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          markers:true,
          once:false
        }
      })
    })
  })
})

onUnmounted(() => {
    if (ctx ) {
    // const el = content.value
    // const currentTransform = getComputedStyle(el).transform
    // el.style.transform = currentTransform
    ctx.revert()
  }
})
</script>