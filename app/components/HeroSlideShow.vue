<script lang="ts" setup>
import imageHelper from "@/utils/ImageHelper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";

const { data: homeData } = await imageHelper.getImageData("home:slide");
const heroSlideImages = ref(homeData);
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
      <SwiperSlide :key="image.Key" v-for:="(image, idx) in heroSlideImages">
        <div class="md:h-[600px] flex items-center">
          <NuxtImg
            :src="imageHelper.createSrcLink(image)"
            :alt="`A family enjoying their time at the park - ${idx + 1}`"
            className="w-full"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>
