<script lang="ts" setup>
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import imageHelper from "~/utils/ImageHelper";

const route = useRoute();
const { name: familyName } = route.params;

if (!familyName) location.href = "/portfolio";

const { data: galleryImgs } = await imageHelper.getCloudinaryImageData(
  familyName?.toString()!
);

if (!galleryImgs.value?.length) await navigateTo("/portfolio");

const displayName = (() => {
  const raw = familyName?.toString() ?? "";
  return raw.charAt(0).toUpperCase() + raw.slice(1);
})();
</script>
<template>
  <div class="lg:mt-10 mt-5">
    <header class="text-center px-5 lg:mb-6 mb-4">
      <p class="nf-eyebrow mb-2">The {{ displayName }} Session</p>
      <h1
        class="font-brand text-4xl lg:text-5xl text-charcoal dark:text-cream leading-none"
      >
        {{ displayName }} Family
      </h1>
      <div class="nf-divider mx-auto mt-4" />
    </header>

    <!-- Mobile slider -->
    <Swiper
      :slidesPerView="'auto'"
      :spaceBetween="10"
      :pagination="{
        clickable: true
      }"
      :direction="'vertical'"
      :modules="[Pagination]"
      class="hide-on-desktop"
    >
      <SwiperSlide
        :key="idx"
        v-for="(image, idx) in galleryImgs"
        class="!w-full px-3"
      >
        <NuxtImg
          provider="cloudinary"
          :src="image.fileName"
          :alt="`A family enjoying their time at the park - ${idx + 1}`"
          format="avif"
          placeholder
          quality="80"
          class="w-full max-w-none object-contain rounded-md"
        />
      </SwiperSlide>
    </Swiper>

    <!-- Desktop slider -->
    <Swiper
      :slidesPerView="'auto'"
      :spaceBetween="30"
      :pagination="{
        clickable: true
      }"
      :direction="'horizontal'"
      navigation
      :loop="true"
      :modules="[Navigation, Pagination]"
      class="hide-on-mobile !h-[80vh]"
    >
      <SwiperSlide
        :key="idx"
        v-for="(image, idx) in galleryImgs"
        class="!w-auto !h-full flex items-center justify-center"
      >
        <div class="h-full flex items-center justify-center">
          <NuxtImg
            provider="cloudinary"
            :src="image.fileName"
            :alt="`A family enjoying their time at the park - ${idx + 1}`"
            format="avif"
            placeholder
            quality="80"
            class="h-full w-auto max-w-none object-contain rounded-md"
          />
        </div>
      </SwiperSlide>
    </Swiper>

    <NuxtLink to="/portfolio">
      <button
        class="nf-btn ml-5 mt-5 lg:static fixed bottom-5 z-10 drop-shadow-xl"
      >
        Back to Portfolio
      </button>
    </NuxtLink>
  </div>
</template>
