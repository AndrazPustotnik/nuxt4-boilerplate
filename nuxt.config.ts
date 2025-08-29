// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@pinia/nuxt", "@vueuse/nuxt"],
  css: ["~/assets/scss/main.scss", "~/assets/css/main.css"],
})
