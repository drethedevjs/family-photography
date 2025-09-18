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
    id: "G-4B2FRT69SY"
  },
  image: {
    cloudflare: {
      baseURL: "https://cdn.ctvphotovideo.com"
    },
    cloudinary: {
      baseURL:
        "https://res.cloudinary.com/ctvphotovideo/image/upload/v1756577507"
    }
  },
  runtimeConfig: {
    // Private keys are only available on the server
    cloudFlareR2Endpoint: process.env.NUXT_CLOUDFLARE_R2_ENDPOINT,
    cloudFlareAccessKey: process.env.NUXT_CLOUDFLARE_ACCESS_KEY,
    cloudFlareSecretKey: process.env.NUXT_CLOUDFLARE_SECRET_KEY,
    baseUrlMailer: process.env.NUXT_BASE_MAILER_URL,

    // Public keys that are exposed to the client
    public: {
      cdnPrefix: process.env.NUXT_PUBLIC_CDN_PREFIX
    }
  },
  app: {
    head: {
      title: "Augusta, GA Family Photography | Capture the Vision",
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
