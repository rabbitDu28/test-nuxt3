// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    //这里的配置可以用.env覆盖!!
    //只能用于服务端key
    apiSecret: '123',
    // 客户端key
    public: {
      apiBase: '/api',
    },
  },
  // ssr: false,//spa 默认ssr
  // nitro: {
  //   preset: 'vercel', //可以通过设置 nitro.presets 选项修改渲染模式为非 node 模式
  // },
  // 默认vite
  // builder: 'webpack', //需要安装依赖@nuxt/webpack-builder
  // webpack: {},
  // postcss: {},
  // nitro: {
  //   preset: 'vercel',
  // },
  modules: [
    '@nuxt/ui',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动引入 `defineStore(), storeToRefs()`
          'defineStore',
          'storeToRefs',
        ],
      },
    ],
  ], //Tailwindcss
  //由于该UI库内置了@nuxtjs/tailwindcss 和 @nuxtjs/color-mode，因此要移除nuxt.config.ts和package.json中的相关模块和依赖
  imports: {
    dirs: ['store'],
  },

  app: {
    head: {
      title: '兔子的技术空间',
      meta: [
        { name: 'description', content: '专注于前端技术分享' },
        { name: 'keywords', content: 'nuxt,vue,ts,frontend' },
      ],
    },
  },
})
