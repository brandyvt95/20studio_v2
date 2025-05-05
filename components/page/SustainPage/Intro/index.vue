<template>
  <section :class="[s.intro_sustain, s.light_background]">
    <div :class="s.container">
      <!-- {content.disableImg ? <></> :
            <ul :class={s.s.media_wrapper} >
              <li :class={s.s.media}>
                <Image sizes="100vw" alt="d" src="/home/letcontact_c.png" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={100} />
              </li>
              <li :class={s.s.media}>
  
                <Image sizes="100vw" alt="d" src="/home/letcontact_tl.png" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={100} />
              </li>
              <li :class={s.s.media}>
                <Image sizes="100vw" alt="d" src="/home/letcontact_tr.png" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={100} />
              </li>
              <li :class={s.s.media}>
                <Image sizes="100vw" alt="d" src="/home/letcontact_bl.png" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={100} /></li>
              <li :class={s.s.media}>
                <Image sizes="100vw" alt="d" src="/home/letcontact_br.png" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={100} />
              </li>
            </ul>
          } -->

      <div :class="s.text">
        <h2 :class="s.lable">
          <!-- <IconSVG src='/icon/star.svg' :class={s.s.icon} /> -->
          {{ content.tag }}
        </h2>
        <TypoHeading :class="s.title">
          <div v-for="(item, index) in content.tit" :key="index" :class="s.title_line">
            {{ item }}
          </div>
        </TypoHeading>


        <div :class="s.body">
          <p>{{ content.more }}</p>
        </div>
        <!--   {content.disableBtn ? <></> :
              <ButtonHoverNew2
                icon={<IconSVG src='/icon/arrow-right.svg' />}
                targetRedirect='mailto:vphcm@studio.vn'
                classAdd={cn(s.link, s.is_white, s.wrap)}>
                Let&apos;s touch
              </ButtonHoverNew2>
            }
   -->

      </div>
    </div>

  </section>
</template>
<script setup>
import TypoHeading from '~/components/common/Typo/TypoHeading.vue';
import s from './style.module.css'
defineProps({
  content: Object
})

</script>