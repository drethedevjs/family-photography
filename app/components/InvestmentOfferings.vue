<script lang="ts" setup>
import type { _Object } from "@aws-sdk/client-s3";
import imageHelper from "~/utils/ImageHelper";

const props = defineProps<{
  stockData: _Object[];
}>();
</script>

<template>
  <section
    id="offerings"
    class="flex lg:flex-row flex-col lg:mt-20 mt-8 relative"
  >
    <div id="mobile-offerings" class="hide-on-desktop">
      <div class="flex flex-col">
        <!-- Reynolds family -->
        <NuxtImg
          v-if="stockData !== undefined"
          :src="imageHelper.getImageSrc(stockData, '1')"
          class="w-full h-full object-cover"
          format="avif"
          quality="80"
          provider="cloudflare"
          placeholder
        />
        <div class="mx-8">
          <PriceBlurb textClass="drop-shadow-2xl" :price="425">
            <template #heading="{ textClass }">
              <h2 :class="textClass" class="mt-10 normal-case mb-5">
                Full Session
              </h2>
            </template>
            <template #blurb="{ textClass }">
              <p :class="textClass" class="text-xl">
                This is a 60 minute session at any location that is great for
                those who have one or more of the following: large family,
                multiple outfits, and/or a lot of poses.
              </p>
            </template>
          </PriceBlurb>
          <hr class="border-1 border-primary my-5" />
          <PriceBlurb textClass="drop-shadow-2xl" :price="350">
            <template #heading="{ textClass }">
              <h2 :class="textClass" class="normal-case mb-5">Half Session</h2>
            </template>
            <template #blurb="{ textClass }">
              <p :class="textClass" class="text-xl mb-5">
                This 30 minute session is for families who want to get a few
                quick pictures for a special occasion or just because.
              </p>
            </template>
          </PriceBlurb>
        </div>
      </div>
    </div>

    <div id="desktop-offerings" class="hide-on-mobile">
      <div class="w-7/12 h-[1000px] relative">
        <!-- Reynolds family -->
        <NuxtImg
          v-if="stockData !== undefined"
          :src="imageHelper.getImageSrc(stockData, '1')"
          class="w-full h-full object-cover"
          format="avif"
          quality="80"
          provider="cloudflare"
          placeholder
        />
        <div class="ctv-img-overlay"></div>
        <div class="absolute inset-0 px-20 pt-20 flex flex-col justify-start">
          <PriceBlurb textClass="text-white drop-shadow-2xl" :price="425">
            <template #heading="{ textClass }">
              <h2 :class="textClass" class="mt-10 normal-case mb-5">
                Full Session
              </h2>
            </template>
            <template #blurb="{ textClass }">
              <p :class="textClass" class="text-xl mb-5 font-semibold">
                This is a 60 minute session at any location that is great for
                those who have one or more of the following: large family,
                multiple outfits, and/or a lot of poses.
              </p>
            </template>
          </PriceBlurb>
        </div>
      </div>
      <div class="w-5/12 px-20">
        <!-- McQuerry couple -->
        <NuxtImg
          v-if="stockData !== undefined"
          :src="imageHelper.getImageSrc(stockData, '2')"
          class="rounded-lg"
          format="avif"
          quality="80"
          provider="cloudflare"
          placeholder
        />
        <PriceBlurb textClass="drop-shadow-2xl" :price="350">
          <template #heading="{ textClass }">
            <h2 :class="textClass" class="mt-10 normal-case mb-5">
              Half Session
            </h2>
          </template>
          <template #blurb="{ textClass }">
            <p :class="textClass" class="text-xl mb-5">
              This 30 minute session is for families who want to get a few quick
              pictures for a special occasion or just because.
            </p>
          </template>
        </PriceBlurb>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "tailwindcss";

h2 {
  @apply text-5xl max-w-[500px];
}
</style>
