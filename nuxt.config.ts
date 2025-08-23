import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/ui"],
  devtools: { enabled: true },
  compatibilityDate: "2025-07-15",
  typescript: {
    typeCheck: false
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()]
  },
  runtimeConfig: {
    // Private keys are only available on the server
    cloudFlareR2Endpoint: process.env.NUXT_CLOUDFLARE_R2_ENDPOINT,
    cloudFlareAccessKey: process.env.NUXT_CLOUDFLARE_ACCESS_KEY,
    cloudFlareSecretKey: process.env.NUXT_CLOUDFLARE_SECRET_KEY,

    // Public keys that are exposed to the client
    public: {
      cdnPrefix: process.env.NUXT_PUBLIC_CDN_PREFIX
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
