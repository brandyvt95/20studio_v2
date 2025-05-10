<template>
    <section :class="s.section">
        <div :class="s.container">
            <ul :class="s.gridImage" ref="wrapper">
                <li :class="s.image" ref="imgL">
                    <img src="/images/clone/aboutus/intro_1.jpg" alt="" />
                </li>
                <li :class="s.image" ref="imgC">
                    <img src="/images/about/intro2.png" alt="" />
                </li>
                <li :class="s.image" ref="imgR">
                    <img src="/images/about/intro3.png" alt="" />
                </li>
            </ul>
            <div :class="s.text">
                <TypoParagraph tag="p" font="BS-Medium" :class="s.label">
                    <StarIcon :class="s.icon" />
                    {{ content.title }}
                </TypoParagraph>
                <TypoHeading tag="h3" size="h2" font="BS-Medium" :class="s.title">{{ content.des }}</TypoHeading>
                <ul :class="[s.body,'clr-dark-grey--06']">
                    <li>
                        <TypoParagraph tag="p" font="BS-Medium">{{ content.jobDes[0] }}&nbsp;&nbsp;&nbsp;&amp;&nbsp;&nbsp;&nbsp;{{ content.jobDes[1] }}
                        </TypoParagraph>
                    </li>
                    <li>
                        <TypoParagraph tag="p" font="BS-Medium">{{ content.jobDes[2] }}&nbsp;&nbsp;&nbsp;&amp;&nbsp;&nbsp;&nbsp;{{ content.jobDes[3] }}
                        </TypoParagraph>
                    </li>
                    <li>
                        <TypoParagraph tag="p" font="BS-Medium">{{ content.jobDes[4] }}&nbsp;&nbsp;&nbsp;&amp;&nbsp;&nbsp;&nbsp;{{ content.jobDes[5] }}
                        </TypoParagraph>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script setup>
import StarIcon from '~/components/common/InlineSvg/Star.vue';
import TypoHeading from '~/components/common/Typo/TypoHeading.vue';
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';
import s from './style.module.css'
defineProps({
    content: Object
})


const { $gsap } = useNuxtApp()
const wrapper = ref(null)
const imgL = ref(null)
const imgC = ref(null)
const imgR = ref(null)

let ctx
onMounted(() => {
    nextTick(() => {
        if (!wrapper.value || !imgL.value || !imgC.value || !imgR.value) return
        const range = [50, -50]
        ctx = $gsap.context(() => {
            $gsap.timeline({
                scrollTrigger: {
                    trigger: wrapper.value,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                    markers: true,
                    once: false
                }
            })
                .fromTo(imgL.value, { y: range[0] }, { y: 0 })
                .fromTo(imgC.value, { y: range[1] }, { y: 0 }, "<")
                .fromTo(imgR.value, { y: range[0] * .5 }, { y: 0 }, "<")
        })
    })
})
onUnmounted(() => {
    if (ctx) {
        ctx.revert();
    }
})

</script>