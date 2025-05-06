export const meta = {
    meta: [
        { name: 'description', content: 'Mô tả trang mặc định của website' },
        { name: 'keywords', content: 'dịch vụ, công ty, sản phẩm' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Trang mặc định' },
        { property: 'og:description', content: 'Mô tả cho Open Graph' },
        /*     { property: 'og:image', content: 'https://example.com/og-image.jpg' },
            { property: 'og:url', content: 'https://example.com' }, */
        { property: 'og:type', content: 'website' },
        { name: 'twitter:title', content: 'Trang mặc định' },
        { name: 'twitter:description', content: 'Mô tả cho Twitter card' },
        /*  { name: 'twitter:image', content: 'https://example.com/twitter-image.jpg' }, */
        { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },  // for Retina/High-DPI screens
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        /*  { rel: 'stylesheet', href: 'https://example.com/styles.css' }  // External CSS (if any) */
    ]
}