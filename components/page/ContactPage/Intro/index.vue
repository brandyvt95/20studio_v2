<template>
    <section :class="s.ContactPageIntro">
        <div :class="s.container">

            <div :class="s.image">

                <!--    <Image  quality={100} src="/home/banner.png" width={0} height={0} sizes='100vw' style={{ width: 'auto', height: '100%', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }} alt="image_cache_banner_home" /> -->
            </div>

            <h1 :class="s.h1">{{ content.tag }}</h1>
            <div :class="s.title">
                <!-- <div :class="s.marquee">
                    <div :class="s.line">· Get in touch · Liên lạc · اتصل - Связаться - 連絡する</div>
                    <div :class="s.carousel">

                        <div :class="s.carousel__wrapper">

                            <div :class="s.carousel__slide">
                                <h3 :class="s.carousel__image">· Get in touch · 联系 · Liên lạc · Связаться · Contactum
                                    facere · Prendre contact</h3>
                            </div>
                            <div :class="s.carousel__slide">
                                <h3 :class="s.carousel__image">· Get in touch · 联系 · Liên lạc · 연락하다 · Prendre contact
                                    · Связаться · اتصل</h3>
                            </div>
                        </div>

                    </div>
                </div> -->
            </div>
            <div :class="s.left">
                <div :class="s.body">
                    <p>{{ content.des }}
                    </p>
                </div>
                <ul :class="s.contact">
                    <li :class="s.contact_item">
                        <NuxtLink :class="s.link">
                            {{ content.mail }}
                        </NuxtLink>

                    </li>
                    <li :class="s.contact_item">
                        <NuxtLink :class="s.link">
                            {{ content.phone }}
                        </NuxtLink>

                    </li>
                </ul>
            </div>
            <div :class="s.right">
                <a :class="s.address">
                    {{ content.location[0] }}<br />
                    {{ content.location[1] }}<br />
                    {{ content.location[2] }}
                </a>

                <NuxtLink to='0362237164' :class="s.link">
                    {{ content.more }}
                </NuxtLink>


            </div>
        </div>
    </section>
</template>
<script setup>
import s from './style.module.css'
defineProps({
    content: Object
})
</script>