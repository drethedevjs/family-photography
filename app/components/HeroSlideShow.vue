<script lang="ts" setup>
import imageHelper from "@/utils/ImageHelper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const { data: heroSlideImages } =
  await imageHelper.getCloudinaryImageDataByTag("slide-show");

const headerHeight = ref(0);

onMounted(() => {
  const headerEl = document.getElementsByTagName("nav");
  if (headerEl[0]) {
    headerHeight.value = headerEl[0].offsetHeight;
  }
});

const slideHeightClass = computed(() => {
  return headerHeight.value
    ? `h-auto lg:h-[calc(100vh-${headerHeight.value}px)]`
    : "h-auto lg:h-screen";
});
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
        <div class="w-full overflow-hidden" :class="slideHeightClass">
          <NuxtImg
            provider="cloudinary"
            placeholder
            quality="80"
            :src="image.fileName"
            :alt="`A family enjoying their time at the park - ${idx + 1}`"
            class="w-full h-full object-contain lg:object-cover"
            format="avif"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>
