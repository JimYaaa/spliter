// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    ssr: false,

    modules: [ '@unocss/nuxt', '@pinia/nuxt' ],

    css: [
        '@unocss/reset/tailwind-compat.css',
    ],

    runtimeConfig: {
        public: {
            API_KEY: process.env.API_KEY,
            AUTH_DOMAIN: process.env.AUTH_DOMAIN,
            PROJECT_ID: process.env.PROJECT_ID,
            STORAGE_BUCKET: process.env.STORAGE_BUCKET,
            MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
            APP_ID: process.env.APP_ID,
            MEASURENENT_ID: process.env.MEASURENENT_ID,
        },
    }
})
