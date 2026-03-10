<script lang="ts" setup>
import imageHelper from "@/utils/ImageHelper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const { data: heroSlideImages } =
  await imageHelper.getCloudinaryImageDataByTag("slide-show");
</script>

<template>
  <section>
    <Swiper
      :slides-per-view="1"
      :space-between="30"
      :pagination="{
        clickable: true
      }"
      :loop="true"
      navigation
      :modules="[Navigation, Pagination]"
    >
      <SwiperSlide v-for="(image, idx) in heroSlideImages" :key="idx">
        <div class="w-full overflow-hidden h-[calc(100vh-218px)]">
          <NuxtImg
            provider="cloudinary"
            placeholder
            quality="80"
            :src="image.fileName"
            :alt="`A family enjoying their time at the park - ${idx + 1}`"
            class="w-full h-full object-cover"
            format="avif"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>
