import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  content: {
    watch: {
      ws: {
        port: 4000,
        showURL: true
      }
    }
  },
  compatibilityDate: '2024-07-18',
})