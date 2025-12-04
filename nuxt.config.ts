import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  srcDir: 'src/',
  css: ['~/assets/css/style.scss'],

  app: {
    baseURL: '/outofthebox/'
  },

  experimental: {
    sharedPrerenderData: true,
    viewTransition: true,
  },

  runtimeConfig: {
    public: {
    }
  },
  
  compatibilityDate: '2025-11-11',
});
