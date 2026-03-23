<script lang="ts" setup>
import imageHelper from "@/utils/ImageHelper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const { data: heroSlideImages } =
  await imageHelper.getCloudinaryImageDataByTag("slide-show");

const headerHeight = ref(0);

onMounted(() => {
  const headerEl = document.querySelector("nav");
  if (!headerEl) return;

  const observer = new ResizeObserver(([entry]) => {
    headerHeight.value = entry!.contentRect.height;
  });

  observer.observe(headerEl);

  onUnmounted(() => observer.disconnect());
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
        <div
          class="w-full overflow-hidden h-auto lg:!h-[var(--slide-h)]"
          :style="{ '--slide-h': `calc(100lvh - ${headerHeight}px)` }"
        >
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
