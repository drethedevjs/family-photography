<script lang="ts" setup>
import imageHelper from "~/utils/ImageHelper";

const { data: imageData } = await imageHelper.getCloudinaryImageData(
  null,
  "portfolio"
);

const featured = computed(() => imageData.value?.slice(0, 3) ?? []);

const capitalizeFirst = (str: string | undefined): string =>
  str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
</script>

<template>
  <div v-if="featured.length">
    <p class="nf-eyebrow mb-2 text-center">While You Wait</p>
    <p class="font-body text-sm text-charcoal/60 text-center mb-6">
      Check out some of our featured galleries.
    </p>
    <div class="grid sm:grid-cols-3 gap-4">
      <NuxtLink
        v-for="image in featured"
        :key="image.metadata.galleryName"
        :to="`/gallery/${image.metadata.galleryName}`"
        class="group relative block rounded-xl overflow-hidden"
        @click="galleryTracker(image.metadata.galleryName)"
      >
        <NuxtImg
          provider="cloudinary"
          :src="image.fileName"
          format="avif"
          :alt="`${capitalizeFirst(image.metadata.galleryName)} family portfolio gallery`"
          placeholder
          quality="80"
          class="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div
          class="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/20 transition-colors flex items-end justify-center pb-3"
        >
          <span
            class="font-heading text-xs tracking-widest uppercase text-cream"
          >
            {{ capitalizeFirst(image.metadata.galleryName) }} Family
          </span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
