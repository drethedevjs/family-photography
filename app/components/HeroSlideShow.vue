<script lang="ts" setup>
import imageHelper from "@/utils/ImageHelper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

// const { data: homeData } = await imageHelper.getImageData("home:slide");
const { data: heroSlideImages } = await imageHelper.getCloudinaryImageDataByTag(
  "slide-show"
);
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
      <SwiperSlide :key="idx" v-for:="(image, idx) in heroSlideImages">
        <div class="md:h-[600px] flex items-center">
          <NuxtImg
            provider="cloudinary"
            placeholder
            quality="80"
            :src="image.fileName"
            :alt="`A family enjoying their time at the park - ${idx + 1}`"
            className="w-full"
            format="avif"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>
