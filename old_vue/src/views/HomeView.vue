<script setup lang="ts">
import imageHelper from "@/utils/ImageHelper";
import type { _Object } from "@aws-sdk/client-s3";
import "dotenv";
import { onBeforeMount, ref } from "vue";
import ContactPane from "../components/ContactPane.vue";
import HeroSlideShow from "../components/HeroSlideShow.vue";
import OfferingsPane from "../components/OfferingsPane.vue";
import TestimonialPane from "../components/TestimonialPane.vue";

// const andreImageUrl = `${import.meta.env.VITE_CDN_PREFIX}/andre/augusta-ga-family-photographer-andre-1.jpg`;
const andreImageData = ref<_Object[]>();
const homeImageData = ref<_Object[]>();
onBeforeMount(async () => {
  andreImageData.value = await imageHelper.getImageData("andre");
  homeImageData.value = await imageHelper.getImageData("home");
});
</script>

<template>
  <HeroSlideShow />
  <main id="homeApp">
    <div class="flex">
      <div class="w-2/5">
        <img
          v-if="andreImageData !== undefined"
          :src="imageHelper.getImageSrc(andreImageData, 'andre-1')"
          class="object-cover h-full w-full"
        />
      </div>
      <div class="w-3/5 flex flex-col place-content-center text-center mb-10">
        <h2>Family Photographer</h2>
        <h3 class="text-primary">Andre Thomas</h3>

        <p class="about-txt">
          I'm a family photographer in Augusta, GA who loves to create vibrant family portraits for
          families all over. Because of this, my desire for you is to get you to “have your moment”.
          That “moment” I'm referring to is when you finally receive those beautiful portraits that
          you have been anxiously waiting for. This moment doesn't just come once. Rather, it gets
          to be relived throughout generations when your children and grandchildren can look at
          those photographs and remember some heart-warming past times.
        </p>

        <RouterLink to="/about">
          <button class="about-btn ctv-btn">Tell Me More</button>
        </RouterLink>
      </div>
    </div>

    <OfferingsPane v-if="homeImageData !== undefined" :imageData="homeImageData" />

    <TestimonialPane v-if="homeImageData !== undefined" :imageData="homeImageData" />

    <ContactPane />

    <div class="text-center mt-16">
      <p class="uppercase mb-10 text-xl font-medium">Follow me on Instagram</p>
      <a
        href="https://instagram.com/ctvphotovideo"
        target="_blank"
        class="hover:text-primary text-5xl"
      >
        @ctvphotovideo
      </a>
    </div>
  </main>
</template>

<style scoped>
.about-btn {
  @apply ml-auto mt-20 mr-32;
}

h2 {
  @apply mt-10 text-4xl tracking-widest font-light;
}

h3 {
  @apply mt-5 text-7xl font-semibold;
}

.about-txt {
  @apply mt-5 text-3xl w-3/4 mx-auto leading-10;
}
</style>
