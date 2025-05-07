<script setup>
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';
import ButtonBasic from '~/components/animation/Button/Basic/index.vue';
import s from './style.module.css'
import gsap from 'gsap'
import { useRoute } from 'vue-router'
import { activeStateUi } from '../composables/controls/useStateUi'
import { useGsap } from '~/composables/hooks/useGsap'


const route = useRoute()
const isModalMenuOpen = stateModalNavbar()
const modalRef = ref(null)
const tlRef = shallowRef(null)
const { useModalNavbar} = useGsap()
const { init, play, reverse } = useModalNavbar(modalRef)

onMounted(() => {
    init()
})
watch(isModalMenuOpen, (val) => {
  val ? play() : reverse()
})

watch(() => route.path, (newPath, oldPath) => {
  if (newPath !== oldPath) {
    isModalMenuOpen.value = false
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
                    <li :class="s.main_link">
                        <ButtonBasic to='/' :customClass="s.main_line">
                            Home
                        </ButtonBasic>
                    </li>
                    <li :class="s.main_link">
                        <ButtonBasic to='/sustainability' :customClass="s.main_line">
                            Sustainability
                        </ButtonBasic>
                    </li>
                    <li :class="s.main_link">
                        <ButtonBasic to='/projects' :customClass="s.main_line">
                            Project
                        </ButtonBasic>

                    </li>
                    <li :class="s.main_link">
                        <ButtonBasic to='/about' :customClass="s.main_line">
                            About us
                        </ButtonBasic>

                    </li>
                    <li :class="s.main_link">
                        <ButtonBasic to='/services' :customClass="s.main_line">
                            Service
                        </ButtonBasic>

                    </li>
                    <li :class="s.main_link">
                        <ButtonBasic to='/contact' :customClass="s.main_line">
                            Contact
                        </ButtonBasic>

                    </li>
                    <li :class="s.social_link">
                        <ButtonBasic  to='/'  :customClass="s.link_item">Linked</ButtonBasic>
                    </li>
                    <li :class="s.social_link">
                        <ButtonBasic  to='/'  :customClass="s.link_item">Facebook</ButtonBasic>
                    </li>
                    <li :class="s.social_link">

                        <ButtonBasic to='https://www.instagram.com/20studio.vn/' :customClass="s.link_item">
                            Instagram
                        </ButtonBasic>
                    </li>
                </ul>
                <ul :class="s.social">
                    <li :class="s.social_link">
                    </li>
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


                <!--    {isMobi ? <></> :
                            <ul :class="s.images} ref={listImgHover">
                                <li >
                                    <Image src="/home/banner.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }} alt="logo narbar modal" />
                                </li>
                                <li>
                                    <Image src="/work3/8.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }} alt="logo narbar modal" />
                                </li>
                                <li>
                                    <Image src="/work1/2.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }} alt="logo narbar modal" />
                                </li>
                                <li>
                                    <Image src="/about/us2.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }} alt="logo narbar modal" />
                                </li>
                                <li>
                                    <Image src="/about/intro2.png" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }} alt="logo narbar modal" />
                                </li>
                                <li>
                                    <Image src="/about/banner.webp" width={0} height={0} sizes="100vw" style={{ width: '100%', height: '100%' }} alt="logo narbar modal" />
                                </li>


                            </ul>
                        } -->
            </div>

        </div>
    </section>
</template>
