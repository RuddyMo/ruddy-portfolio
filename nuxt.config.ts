/* eslint-disable prettier/prettier */
// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default defineNuxtConfig({
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
            "Développeur full-stack ouvert d'esprit et soucieux des détails, compétent en Javascript, Vue, HTML, CSS, Tailwind, et bien d'autres technologies.",
        },
      ],
      link: [
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
