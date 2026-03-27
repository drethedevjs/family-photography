import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/sitemap",
    "nuxt-gtag"
  ],
  devtools: { enabled: true },
  compatibilityDate: "2025-07-15",
  typescript: {
    typeCheck: false
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()]
  },
  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID
  },
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/ctvphotovideo/image/upload/"
    }
  },
  runtimeConfig: {
    // Private keys are only available on the server
    baseUrlMailer: process.env.NUXT_BASE_MAILER_URL,

    // Public keys that are exposed to the client
    public: {
      cdnPrefix: process.env.NUXT_PUBLIC_CDN_PREFIX
    }
  },
  app: {
    head: {
      title: "Augusta, GA Family Photography | Honey & Flare",
      htmlAttrs: {
        lang: "en"
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    }
  },
  ui: {
    theme: {
      colors: ["primary", "secondary"]
    }
  },
  eslint: {
    config: {
      standalone: false,
      stylistic: {
        braceStyle: "stroustrup",
        quotes: "double",
        semi: true,
        blockSpacing: true,
        commaDangle: "never",
        indent: 2,
        arrowParens: false
      }
    }
  }
});
