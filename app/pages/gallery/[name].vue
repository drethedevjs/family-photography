<script lang="ts" setup>
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import imageHelper from "~/utils/ImageHelper";

const route = useRoute();
const { name: familyName } = route.params;

if (!familyName) {
  location.href = "/portfolio";
}

const { data: galleryImgs } = await imageHelper.getCloudinaryImageData(
  familyName?.toString()!
);
</script>
<template>
  <div class="lg:mt-10 mt-5">
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
      class="hide-on-mobile"
    >
      <SwiperSlide
        :key="idx"
        v-for="(image, idx) in galleryImgs"
        class="!w-auto !h-full flex items-center justify-center"
      >
        <div class="h-[600px] relative flex items-center justify-center">
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
        class="ctv-btn ml-5 mt-5 lg:static fixed bottom-5 z-10 drop-shadow-xl"
      >
        Back to Portfolio
      </button>
    </NuxtLink>
  </div>
</template>
