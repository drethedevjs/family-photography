<script lang="ts" setup>
import imageHelper from "~/utils/ImageHelper";

const { data: imageData } = await imageHelper.getCloudinaryImageData(
  null,
  "portfolio"
);

const capitalizeFirst = (str: string | undefined): string => {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
};
</script>
<template>
  <h1 class="hidden">Portfolio</h1>
  <div
    class="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ctv-container lg:mt-10 mt-5"
  >
    <div v-for="image in imageData">
      <NuxtImg
        provider="cloudinary"
        :src="image.fileName"
        format="avif"
        alt="Family enjoying their time at the park."
        placeholder
        quality="80"
        class="rounded-md drop-shadow-sm"
      />
      <NuxtLink
        :to="'gallery/' + image.metadata.galleryName"
        @click="galleryTracker(image.metadata.galleryName)"
      >
        <div class="portfolio-card-container ring-primary">
          <p class="dark:text-primary">
            {{ capitalizeFirst(image.metadata.galleryName) }} Family
          </p>
          <span class="hover:text-primary dark:text-secondary text-base">
            View
          </span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.portfolio-card-container {
  @apply text-center align-middle bg-white drop-shadow-sm ring-1 h-16 rounded-sm w-5/6 place-self-center relative -mt-4 hover:-mt-5 transition-all;
}
</style>
