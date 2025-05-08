<template>

    <section :class="s.wrapper" ref="wrapper" data-scopeCursor="close">
        <div :class="s.container" ref="content">
                <div :class="s.title">
                    <div>Our</div>
                    <div>Mission</div>
                </div>
                <p :class="s.body">20Studio wishes to accompany you and create the best quality products at competitive
                    prices
                    within the committed deadline.</p>
                <div :class="s.divider"></div>
                <ul :class="s.address">
                    <li :class="s.item">
                        <ButtonBasic to="/">
                            340D Hoang Van Thu Street,<br />
                            Ward 4, Tan Binh District,<br /> HCMC.
                        </ButtonBasic>
                    </li>
                    <li :class="s.item">
                        <ButtonBasic to="/">
                            20studio.contact@gmail.com
                        </ButtonBasic>
                    </li>
                </ul>
                <ul :class="s.nav_footer">
                    <li :class="s.item">
                        <ButtonHoverLineVer1 to='/sustainability'>
                            Sustain
                        </ButtonHoverLineVer1>
                    </li>
                    <li :class="s.item">
                        <ButtonHoverLineVer1 to='/'>
                            Home
                        </ButtonHoverLineVer1>
                    </li>
                    <li :class="s.item">
                        <ButtonHoverLineVer1 to='/about'>
                            About us
                        </ButtonHoverLineVer1>
                    </li>
                    <li :class="s.item">
                        <ButtonHoverLineVer1 to='/contact'>
                            Contact
                        </ButtonHoverLineVer1>
                    </li>
                </ul>
                <ul :class="s.social">
                    <li :class="s.item">
                        <ButtonHoverLineVer1 to='/' :class="s.main_line">
                            Facebook
                        </ButtonHoverLineVer1>
                    </li>
                    <li :class="s.item">
                        <ButtonHoverLineVer1 to='/' :class="s.main_line">
                            Instagram
                        </ButtonHoverLineVer1>
                    </li>
                </ul>
                <ButtonHoverLineVer1 to="/services" :class="[s.link]">
                    Our service
                </ButtonHoverLineVer1>
            </div>

    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import ButtonBasic from '~/components/animation/Button/Basic/index.vue'
import ButtonHoverLineVer1 from '~/components/animation/Button/HoverLineVer1/index.vue'
import { preserveStyleAndRevert } from '../../../../composables/hooks/utils/preserveStyleAndRevert'
import s from './style.module.css'
const { $gsap } = useNuxtApp()
const wrapper = ref(null)
const content = ref(null)

let ctx
onMounted(() => {
    nextTick(() => {
        if (!wrapper.value || !content.value) return
        const rectH = wrapper.value.getBoundingClientRect().height;
        let target = rectH - window.innerHeight
        //NEEDFIX > REPONSIVE NOT GOOD
        ctx = $gsap.context(() => {
          $gsap.fromTo(content.value,{
            y:-200
          },
           {
            y: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: wrapper.value,
              start: 'top bottom',
              end: `${target} top`,
              scrub: true,
            //  markers:true,
              once:false
            }
          })
        })
    })
})

onUnmounted(() => {
    preserveStyleAndRevert({
        ctx: ctx,
        el: content.value
    })
})
</script>