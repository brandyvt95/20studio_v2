<template>
    <section class="letcontact_section light_background" >
      <div class="container">
     <!--    <ul class={s.media_wrapper} ref={triggleSection}>
            <li class={s.media}>
              <Image sizes="100vw" alt="d" src="/home/letcontact_c.png" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={100} />
            </li>
            <li class={s.media}>

              <Image sizes="100vw" alt="d" src="/home/letcontact_tl.png" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={100} />
            </li>
            <li class={s.media}>
              <Image sizes="100vw" alt="d" src="/home/letcontact_tr.png" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={100} />
            </li>
            <li class={s.media}>
              <Image sizes="100vw" alt="d" src="/home/letcontact_bl.png" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={100} /></li>
            <li class={s.media}>
              <Image sizes="100vw" alt="d" src="/home/letcontact_br.png" width={0} height={0} style={{ width: "100%", height: "auto" }} quality={100} />
            </li>
          </ul> -->

        <div class="text">
          <h2 class="lable">
            
                <!--   <IconSVG src='/icon/star.svg' class={s.icon} /> -->
            {{content.tag}}
          </h2>
          <h1 class="title">
           
               <div class="title_line"   v-for="(item, index) in content.tit"
               :key="index" >{{item}}</div>
            </h1>
          <div class="body">
            <p>{{content.more}}</p>
          </div>
 
          <NuxtLink class="link is_white wrap">Let&apos;s touch</NuxtLink>


        </div>
      </div>

    </section>
</template>
<script setup>
    import './style.css'
    const data = defineProps({
        content: Object
    })
    console.log(data.content)
</script>