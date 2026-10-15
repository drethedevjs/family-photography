<script setup lang="ts">
import pageDescription from "@/data/pageDescription";
import imageHelper from "~/utils/ImageHelper";

const { data: andreImageData } =
  await imageHelper.getCloudinaryImageDataByTag("about-pane");
const { data: homeImageData } =
  await imageHelper.getCloudinaryImageData("home");
const { data: offeringsImageData } =
  await imageHelper.getCloudinaryImageDataByTag("offering");

const { description, ogTitle } = pageDescription.find(
  pd => pd.pageName === "home"
)!;

useHead({
  meta: [{ name: "description", content: description }]
});

if (import.meta.server) {
  useSeoMeta({
    ogUrl: "https://honeyandflare.photo",
    ogType: "website",
    ogTitle: ogTitle,
    ogDescription: description,
    ogImage:
      "https://res.cloudinary.com/ctvphotovideo/image/upload/v1774471473/augusta-ga-family-photographer-fox-58_avrbm4.jpg",
    ogLocale: "en_US",
    ogSiteName: "Honey & Flare Family Photography",
    twitterCard: "summary_large_image",
    robots: "index, follow"
  });
}
</script>

<template>
  <HeroSlideShow />
  <h1 class="hidden">Augusta, GA Family Photographer</h1>
  <AboutPane
    :andre-image-data="andreImageData"
    :tell-me-more-tracker="tellMeMoreTracker"
  />

  <OfferingsPane
    v-if="homeImageData !== undefined"
    :imageData="offeringsImageData"
  />

  <TestimonialPane
    v-if="homeImageData !== undefined"
    class="hidden lg:flex"
    :imageData="homeImageData"
  />

  <ContactPane />

  <div class="text-center py-16">
    <p class="nf-eyebrow mb-3">Follow Along</p>
    <a
      href="https://instagram.com/honeyandflare"
      target="_blank"
      rel="noopener"
      class="font-brand text-5xl lg:text-6xl text-charcoal dark:text-cream hover:text-primary transition-colors"
    >
      @honeyandflare
    </a>
    <div class="nf-divider mx-auto mt-6" />
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.about-btn {
  @apply lg:ml-auto lg:mt-20 mt-8 lg:mr-32;
}

#family-photographer {
  @apply mt-10 lg:text-4xl text-2xl tracking-widest font-light;
}

h3 {
  @apply mt-5 lg:text-7xl text-5xl font-semibold;
}

.about-txt {
  @apply mt-5 w-3/4 mx-auto 2xl:text-3xl;
}
</style>
