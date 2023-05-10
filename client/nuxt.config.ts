// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/fonts/main.css'],
  modules: [
    '@pinia/nuxt'
  ],
  app: {head : {title:'가격찾아줌마'}}

})