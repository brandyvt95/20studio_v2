<template>

    <section :class="[s.wrapper, 'clr-sand', 'bgclr-story']" ref="wrapper" data-scopeCursor="close">
        <div :class="s.container" ref="content">
            <TypoParagraph tag="p" size="h1" font="BD-Regular" :class="s.title">
                <span v-for="(item, index) in data.content.TitleSplit" :key="index" >
                    {{ item.row }}
                </span>
            </TypoParagraph>
            <TypoParagraph tag="p" color='clr-sand--08' font="BS-Regular" :class="s.body">
                {{ data.content.paragraph }}
                </TypoParagraph>
            <div :class="s.divider"></div>
            <ul :class="s.address">
                <li :class="s.item">
                    <ButtonBasic to="/">
                        <TypoParagraph tag="p" color='clr-sand--08' font="BS-Regular">
                            {{ info_company.Location.street }}<br />
                            {{ info_company.Location.ward }},<br />
                            {{ info_company.Location.city }}.
                        </TypoParagraph>

                    </ButtonBasic>
                </li>
                <li :class="s.item">
                    <ButtonBasic to="/">
                        <TypoParagraph tag="p" color='clr-sand--08' font="BS-Regular">
                            {{ info_company.Contact.mail }}
                        </TypoParagraph>
                    </ButtonBasic>
                </li>
            </ul>
            <ul :class="s.nav_footer">
                <li :class="s.item" v-for="(item, index) in filteredItems" :key="index">
                    <ButtonHoverLineVer1 colorLine="bgclr-sand--08"  color='clr-sand--08' :to='item.slug'>
                        <TypoParagraph tag="p" font="BS-Regular" transform="capitalize">
                            {{ item.label }}
                        </TypoParagraph>

                    </ButtonHoverLineVer1>
                </li>
            </ul>
            <ul :class="s.social">
                <li :class="s.item" v-for="([key, value], index) in Object.entries(info_company.Social)"  :key="index">
                    <ButtonHoverLineVer1 v-if="key !== 'id'" colorLine="bgclr-sand--08" color='clr-sand--08' :to="value">
                        <TypoParagraph tag="p"  font="BS-Regular" transform="capitalize">
                            {{ key }}
                        </TypoParagraph>
                    </ButtonHoverLineVer1>
                </li>
            </ul>

            <ButtonHoverLineVer2 colorLine='bgclr-sand--08'  color='clr-sand--08'  to="/services" :class="[s.link]">
                <TypoParagraph tag="p"font="BS-Regular">
                    Our&nbsp;service
                </TypoParagraph>
            </ButtonHoverLineVer2>
        </div>

    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import ButtonBasic from '~/components/animation/Button/Basic/index.vue'
import ButtonHoverLineVer1 from '~/components/animation/Button/HoverLineVer1/index.vue'
import ButtonHoverLineVer2 from '~/components/animation/Button/HoverLineVer2/index.vue'
import { preserveStyleAndRevert } from '../../../../composables/hooks/utils/preserveStyleAndRevert'
import s from './style.module.css'
import TypoParagraph from '../../../common/Typo/TypoParagraph.vue'
const { $gsap } = useNuxtApp()
const wrapper = ref(null)
const content = ref(null)

const data = defineProps({
    content: Object,
    info_navbar:Object,
    info_company:Object
})
const route = useRoute()
const filteredItems = computed(() => {
  const currentPath = route.path

  const filtered = data.info_navbar.filter(item => {
  return item.slug !== currentPath && item.slug !== '/services'
})
  // Randomize và lấy tối đa 4 item
  const shuffled = filtered.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, 4)
})
let ctx
onMounted(() => {
    nextTick(() => {
        if (!wrapper.value || !content.value) return
        const rectH = wrapper.value.getBoundingClientRect().height;
        let target = rectH - window.innerHeight
        //NEEDFIX > REPONSIVE NOT GOOD
        ctx = $gsap.context(() => {
            $gsap.fromTo(content.value, {
                y: -200
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
                        once: false
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