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
  <div class="hf-container text-center lg:mt-16 mt-8 lg:mb-12 mb-8">
    <p class="nf-eyebrow mb-3">Portfolio</p>
    <h2
      class="font-brand text-5xl lg:text-7xl text-charcoal dark:text-cream leading-none"
    >
      Recent Sessions
    </h2>
    <div class="nf-divider mx-auto mt-6" />
  </div>
  <div
    class="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 hf-container"
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
        class="group block"
        :to="'gallery/' + image.metadata.galleryName"
        @click="galleryTracker(image.metadata.galleryName)"
      >
        <div
          class="flex flex-col items-center justify-center gap-1 text-center bg-white border border-charcoal/10 shadow-md py-4 rounded-xl w-5/6 mx-auto relative -mt-6 group-hover:-mt-7 group-hover:border-primary transition-all"
        >
          <p
            class="font-brand font-semibold text-charcoal! text-3xl! leading-none!"
          >
            {{ capitalizeFirst(image.metadata.galleryName) }} Family
          </p>
          <span class="nf-eyebrow group-hover:underline">View</span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
