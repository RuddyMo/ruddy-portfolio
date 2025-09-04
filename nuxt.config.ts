/* eslint-disable prettier/prettier */
// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-19',
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    keepalive: true,
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Ruddy Morel Web Full-Stack Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            "Développeur Front-end ouvert d'esprit et soucieux des détails, compétent en Javascript, Vue, HTML, CSS, Tailwind, et bien d'autres technologies.",
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  devtools: { enabled: true },
  alias: {
    '@': resolve('__dirname.', '/'),
  },
  css: ['~/assets/main.css'],
  modules: ['@vueuse/nuxt'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
