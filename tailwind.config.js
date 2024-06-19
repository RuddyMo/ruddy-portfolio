/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  css: ['~/assets/main.css'],
  theme: {
    fontFamily: {
      sans: ['Nimbus Sans Novus W01 Regular', 'Lato', 'Poppins', 'Arial'],
      title: ['Ravensara Antiqua Stencil Light', 'Arial', 'Lato'],
    },
    extend: {
      colors: {
        'base-100': '#1c211e',
        'base-200': '#e3f7d3',
        'base-content': '#e3f7d3',
        'light-content': '#E9F7DD',
        'hide-content': '#B7B6AF',
        primary: '#C05749',
        secondary: '#E9F7DD',
        accent: '#36EB67',
      },
      textColor: {
        p: 'base-content',
        span: 'base-content',
        h1: 'base-content',
        h2: 'base-content',
      },
    },
  },
  plugins: [],
};
