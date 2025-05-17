<template>
    <section :class="s.section">
        <div :class="s.container">
            <ul :class="s.gridImage" ref="wrapper">
                <li v-for="(item, index) in content.images" :key="index" :class="s.image"
                    :ref="el => imageRefs[`image__${index}`].value = el">
                    <img :src="item.url" alt="" />
                </li>
            </ul>
            <div :class="s.text">
                <TypoParagraph tag="p" font="BS-Medium" :class="s.label">
                    <StarIcon :class="s.icon" />
                    {{ content.tag }}
                </TypoParagraph>
                <TypoHeading tag="h3" size="h2" font="BS-Medium" :class="s.title">{{ content.paragraph }}</TypoHeading>
                 <ul :class="[s.body,'clr-dark-grey--06']">
                    <li v-for="(item, index) in content.industries_companies[0].Item" :key="index">
                        <TypoParagraph tag="p" font="BS-Medium">{{ item.title }}</TypoParagraph>
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
const imageRefs = {
    image__0: ref(null),
    image__1: ref(null),
    image__2: ref(null),
}
let ctx
// onMounted(() => {
//     nextTick(() => {
//         if (!wrapper.value || !imgL.value || !imgC.value || !imgR.value) return
//         const range = [50, -50]
//         ctx = $gsap.context(() => {
//             $gsap.timeline({
//                 scrollTrigger: {
//                     trigger: wrapper.value,
//                     start: 'top bottom',
//                     end: 'bottom top',
//                     scrub: true,
//                     markers: true,
//                     once: false
//                 }
//             })
//                 .fromTo(imgL.value, { y: range[0] }, { y: 0 })
//                 .fromTo(imgC.value, { y: range[1] }, { y: 0 }, "<")
//                 .fromTo(imgR.value, { y: range[0] * .5 }, { y: 0 }, "<")
//         })
//     })
// })
// onUnmounted(() => {
//     if (ctx) {
//         ctx.revert();
//     }
// })

</script>