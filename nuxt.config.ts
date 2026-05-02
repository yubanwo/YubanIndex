// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/i18n'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  },
  runtimeConfig: {
    public: {
      twikooEnvId: process.env.TWIKOO_ENV_ID || '',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.osyb.cn'
    }
  },
  i18n: {
    locales: [
      { code: 'zh', name: '简体中文', language: 'zh-CN' },
      { code: 'en', name: 'English', language: 'en-US' }
    ],
    defaultLocale: 'zh',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'osyb_locale',
      redirectOn: 'root'
    }
  }
})
