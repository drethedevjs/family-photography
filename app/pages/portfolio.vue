<script lang="ts" setup>
import imageHelper from "~/utils/ImageHelper";
const { data: imageData } = await imageHelper.getImageData("portfolio");

const extractGalleryName = (imageKey: string) => {
  const secondColonIdx = imageKey.indexOf(":", "portfolio".length + 1);
  const galleryName = imageKey.slice("portfolio".length + 1, secondColonIdx);
  return galleryName;
};

// Transform data to include gallery names
const portfolioFeats = computed(() => {
  return imageData.value!.map(image => ({
    ...image,
    galleryName: extractGalleryName(image.Key!)
  }));
});

const capitalizeFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
</script>
<template>
  <h1 class="hidden">Portfolio</h1>
  <div
    class="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ctv-container mt-10"
  >
    <div v-for="image in portfolioFeats">
      <NuxtImg
        provider="cloudflare"
        :src="image.Key"
        format="avif"
        alt="Family enjoying their time at the park."
        placeholder
        quality="80"
        class="rounded-md drop-shadow-sm"
      />
      <div class="portfolio-card-container ring-primary">
        <p>{{ capitalizeFirst(image.galleryName) }} Family</p>
        <NuxtLink :to="'gallery/' + image.galleryName">
          <span class="hover:text-primary text-base">View</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.portfolio-card-container {
  @apply text-center align-middle bg-white drop-shadow-sm ring-1 h-16 rounded-sm w-5/6 place-self-center relative -mt-4 hover:-mt-5 transition-all;
}
</style>
