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
  <NuxtLink to="/portfolio">
    <button class="ctv-btn ml-5">Back to Portfolio</button>
  </NuxtLink>
  <div class="mt-10">
    <Swiper
      :slidesPerView="'auto'"
      :centeredSlides="true"
      :spaceBetween="30"
      :pagination="{
        clickable: true
      }"
      :loop="true"
      navigation
      :modules="[Navigation, Pagination]"
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
  </div>
</template>
