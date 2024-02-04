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
      sans: ['Inter', 'Lato', 'Poppins', 'Arial'],
      title: ['Chalga VP Light', 'Arial', 'Lato'],
    },
    extend: {
      colors: {
        'base-100': '#0D0D0D',
        'base-200': '#F4E0A4',
        'base-content': '#F4E0A4',
        'light-content': '#F3E2AF',
        'hide-content': '#B7B6AF',
        primary: '#C05749',
        secondary: '#F1CB5D',
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
