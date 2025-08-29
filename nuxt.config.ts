// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@pinia/nuxt", "@vueuse/nuxt"],
  css: ["~/assets/scss/main.scss", "~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
})
