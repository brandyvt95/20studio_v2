<script setup>
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';
import ButtonBasic from '~/components/animation/Button/Basic/index.vue';
import Icon from './Icon/index.vue'
import MotionToggle from './MotionToggle/index.vue'

import s from './style.module.css'
import gsap from 'gsap'
import { useRoute } from 'vue-router'
import { activeStateUi } from '../composables/controls/useStateUi'
import { useGsap } from '~/composables/hooks/useGsap'
const data = defineProps({
    content: Object
})

const route = useRoute()
const isModalMenuOpen = stateModalNavbar()
const modalRef = ref(null)
let tlContent, tlModal
const contentRef = ref(null)
const { $gsap } = useNuxtApp()
const configMotion = {

    duration: 1.23,
    ease: 'power3.inOut',
}
onMounted(() => {
    tlModal = $gsap.timeline({ paused: true })
        .fromTo(modalRef.value, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        }, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            ...configMotion
        })
        .fromTo(modalRef.value.children[0], {
            y: -500,
            rotate: -4,
            scale: 2,
            filter: 'brightness(16%)',
        }, {
            filter: 'brightness(100%)',
            transformOrigin: 'center center',
            y: 0,
            rotate: 0,
            scale: 1,
            ...configMotion
        }, "<")
})
watch(
    () => stateUiGlobal.isActivePage,
    async (newVal) => {
        if (newVal) {
            await nextTick()
            const el = document.getElementById('lenisWrapper')
            contentRef.value = el
            if (tlContent) tlContent.kill()
            tlContent = $gsap.timeline({ paused: true })
                .fromTo(contentRef.value, {
                    filter: 'brightness(100%)',
                    y: 0,
                    rotate: 0,
                    scale: 1
                },
                    {
                        //delay: 0.1,
                        filter: 'brightness(16%)',
                        y: 500,
                        rotate: 4,
                        scale: 1.2,
                        ...configMotion
                    })
        }
    }
)

watch(isModalMenuOpen, (val) => {
    if (val) {
        tlModal.play()
        tlContent.play()
    } else {
       tlModal.reverse()
            tlContent.reverse()
    }
})

watch(() => route.path, (newPath, oldPath) => {
    if (newPath !== oldPath) {
        isModalMenuOpen.value = false
    }
})
onUnmounted(() => {
    if (tlModal) {
        tlModal.kill()
        tlModal = null
    }
    if (tlContent) {
        tlContent.kill()
        tlContent = null
    }
})

</script>
<template>
    <section :class="s.navbar_modal_section" ref="modalRef">
        <div :class="s.wrapper">
            <div :class="s.container">
                <div :class="s.logo">
                    20 STUDIO
                </div>
                <ul :class="s.main" id='main_navbar'>
                    <li :class='s.main_link' v-for="(url, label) in data.content.menuDeskop" :key="label">
                        <MotionToggle :url="url">
                            <Icon />
                            <ButtonBasic :to="url" :customClass="s.main_line">
                                <TypoParagraph tag="p" size="small" font="BD-Medium">
                                    {{ label }}
                                </TypoParagraph>
                            </ButtonBasic>
                        </MotionToggle>
                    </li>
                    <ul :class="s.social">
                        <li :class="s.social_link">
                            <ButtonBasic to='/' :customClass="s.link_item">Linked</ButtonBasic>
                        </li>
                        <li :class="s.social_link">
                            <ButtonBasic to='/' :customClass="s.link_item">Facebook</ButtonBasic>
                        </li>
                        <li :class="s.social_link">

                            <ButtonBasic to='https://www.instagram.com/20studio.vn/' :customClass="s.link_item">
                                Instagram
                            </ButtonBasic>
                        </li>
                    </ul>
                </ul>

                <ul :class="s.sub">
                    <li :class="s.sub_link">
                        <span :class="[s.link_item, s.is_reel]">
                            Made by 20 Team
                        </span>
                    </li>
                </ul>

                <div :class="s.link_about">

                    <ButtonBasic to='/services' :customClass="s.link">
                        Our service
                    </ButtonBasic>
                </div>


                <ul :class="s.images">
                    <li>
                        <img src="/images/home/banner.png"  alt="logo narbar modal" />
                    </li>
                  <!--   <li>
                        <img src="/images/work3/8.png"  alt="logo narbar modal" />
                    </li>
                    <li>
                        <img src="/images/work1/2.png"  alt="logo narbar modal" />
                    </li>
                    <li>
                        <img src="/images/about/us2.png"  alt="logo narbar modal" />
                    </li>
                    <li>
                        <img src="/images/about/intro2.png"  alt="logo narbar modal" />
                    </li>
                    <li>
                        <img src="/images/about/banner.webp"  alt="logo narbar modal" />
                    </li> -->


                </ul>
            </div>

        </div>
    </section>
</template>
