<template>
    <div :class="[s.title,`font-h1`]">
        <div class="marquee">
            <div class="marquee__track">
                <div class="marquee__content">
                    Get in touch · 联系 · Liên lạc · Связаться · Contactum
                    facere · Prendre contact ·
                </div>
                <div class="marquee__content">
                    Get in touch · 联系 · Liên lạc · Связаться · Contactum
                    facere · Prendre contact ·
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import s from './style.module.css'
</script>
<style scoped>
.marquee {
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    position: relative;
}

.marquee__track {
    display: flex;
    width: max-content;
    animation: scroll-left 20s linear infinite;
}

.marquee__content {
    padding-right: 4rem;
    /* khoảng cách giữa 2 block */
    flex-shrink: 0;
}

@keyframes scroll-left {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-50%);
    }
}
</style>