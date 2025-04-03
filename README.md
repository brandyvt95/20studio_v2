├── .eslintrc.json
├── .gitignore
├── README.md
├── nuxt.config.ts
├── package-lock.json
├── package.json
├── public
│   ├── about/
│   ├── clone/
│   ├── fonts/
│   ├── home/
│   ├── icon/
│   ├── work1/
│   ├── work2/
│   ├── work3/
│   └── ... (giữ nguyên theo Next.js)
├── src
│   ├── app/  (**Không có trong Nuxt** nhưng có thể thay bằng `layouts/`)
│   ├── assets/  (chứa CSS, fonts, ảnh có thể import trong script)
│   │   ├── css/
│   │   ├── fonts/
│   │   ├── images/
│   │   └── ... (giữ nguyên)
│   ├── components/
│   │   ├── ControlsState/
│   │   ├── Icon/
│   │   ├── ImagePreload/
│   │   ├── LenisScroller/
│   │   ├── SliderImageHover/
│   │   └── new/
│   ├── constants/  (giữ nguyên)
│   ├── data/  (giữ nguyên)
│   ├── composables/ (chứa hooks thay vì `hooks/`)
│   │   ├── useLenisScroller.ts
│   │   ├── useStoreTimeline.ts
│   │   ├── useStoreZustand.ts
│   │   └── work_page/
│   ├── layouts/
│   │   ├── default.vue
│   │   ├── header.vue
│   │   ├── footer.vue
│   │   └── ... (chuyển `layout.tsx` của Next.js sang đây)
│   ├── middleware/
│   │   ├── auth.ts
│   │   ├── logger.ts
│   │   └── ... (nếu có)
│   ├── pages/  (**Nuxt sử dụng `pages/` thay vì `app/`**)
│   │   ├── about.vue
│   │   ├── contact.vue
│   │   ├── home.vue
│   │   ├── index.vue
│   │   ├── service.vue
│   │   ├── sustainability.vue
│   │   ├── work.vue
│   │   ├── work1.vue
│   │   ├── work2.vue
│   │   ├── work3.vue
│   │   ├── work4.vue
│   │   └── ... (chuyển `page.tsx` của Next.js thành `.vue`)
│   ├── plugins/
│   │   ├── gsap.client.ts
│   │   ├── lenis.client.ts
│   │   ├── navbar.client.ts
│   │   └── ... (để load plugin theo client/server)
│   ├── store/ (dùng `pinia` thay vì `zustand`)
│   │   ├── useGlobalStore.ts
│   │   ├── useNavbarStore.ts
│   │   ├── useWorkStore.ts
│   │   └── ... (tương tự `useStoreZustand.ts`)
└── tsconfig.json
