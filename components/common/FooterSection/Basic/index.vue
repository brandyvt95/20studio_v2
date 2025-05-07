<template>

    <section :class="s.wrapper" ref="wrapper" data-scopeCursor="close">
        <div :class="s.footer_section" ref="content">
            <div :class="s.container">
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
                        <ButtonBasic to='/sustainability'>
                            Sustain
                        </ButtonBasic>
                    </li>
                    <li :class="s.item">
                        <ButtonBasic to='/'>
                            Home
                        </ButtonBasic>
                    </li>
                    <li :class="s.item">
                        <ButtonBasic to='/about'>
                            About us
                        </ButtonBasic>
                    </li>
                    <li :class="s.item">
                        <ButtonBasic to='/contact'>
                            Contact
                        </ButtonBasic>
                    </li>
                </ul>
                <ul :class="s.social">
                    <li :class="s.item">
                        <ButtonBasic to='/' :class="s.main_line">
                            Facebook
                        </ButtonBasic>
                    </li>
                    <li :class="s.item">
                        <ButtonBasic to='/' :class="s.main_line">
                            Instagram
                        </ButtonBasic>
                    </li>
                </ul>
                <ButtonBasic to="/services" classAdd="link wrap circle">
                    Our service
                </ButtonBasic>
            </div>
        </div>

    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import ButtonBasic from '~/components/animation/Button/Basic/index.vue'
import { preserveStyleAndRevert } from '../../../../composables/hooks/utils/preserveStyleAndRevert'
import s from './style.module.css'
const { $gsap } = useNuxtApp()
const wrapper = ref(null)
const content = ref(null)

let ctx
onMounted(() => {
    nextTick(() => {
        if (!wrapper.value || !content.value) return

        // ctx = $gsap.context(() => {
        //   $gsap.to(content.value, {
        //     y: -700,
        //     ease: 'none',
        //     scrollTrigger: {
        //       trigger: wrapper.value,
        //       start: 'top bottom',
        //       end: 'bottom top',
        //       scrub: true,
        //       markers:true,
        //       once:false
        //     }
        //   })
        // })
    })
})

onUnmounted(() => {
    preserveStyleAndRevert({
        ctx: ctx,
        el: content.value
    })
})
</script>