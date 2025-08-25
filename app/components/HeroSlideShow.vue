<script lang="ts" setup>
import imageHelper from "@/utils/ImageHelper";
import { ref } from "vue";

let slideIndex = 1;
const currentSlideNum = ref(1);

const { data: homeData } = await imageHelper.getImageData("home:slide");
const heroSlideImages = ref(homeData);

// Next/previous controls
const changeSlides = (n: number) => {
  showSlides((slideIndex += n));
};

const showSlides = (n: number) => {
  const slides = document.getElementsByClassName("slide-container");
  let currentSlide = document.getElementsByClassName("current-slide")[0];

  if (n > slides.length) slideIndex = 1;

  if (n < 1) slideIndex = slides.length;

  currentSlide?.classList.remove("slide-in");
  currentSlide?.classList.add("slide-out");

  setTimeout(() => {
    currentSlide?.classList.remove("current-slide");

    currentSlide = slides[slideIndex - 1];
    currentSlideNum.value = slideIndex;
    currentSlide?.classList.remove("slide-out");
    currentSlide?.classList.add("slide-in", "current-slide");
  }, 1000);
};
</script>

<template>
  <div class="slideshow-container">
    <div
      v-for:="(image, idx) in heroSlideImages"
      :key="idx"
      class="slide-container"
      :class="{ 'current-slide': currentSlideNum === idx + 1 }"
    >
      <NuxtImg
        provider="cloudflare"
        format="avif"
        :src="`${$config.public.cdnPrefix}/${image.Key}`"
        alt="A family enjoying one another's company at a local park."
        class="w-full"
        placeholder
      />
    </div>
  </div>

  <br />

  <!-- The Navigation Arrows -->
  <div class="slideshow-nav-container">
    <button class="prev" @click="changeSlides(-1)">&#10094;</button>
    <p class="slide-nav-faction">
      {{ currentSlideNum }} / {{ heroSlideImages?.length }}
    </p>
    <button class="next" @click="changeSlides(1)">&#10095;</button>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.slide-nav-faction {
  @apply font-thin tracking-widest text-2xl;
}

.slideshow-nav-container {
  @apply text-center flex flex-row justify-center;
}

/* Slideshow container */
.slideshow-container {
  @apply w-full relative m-auto mt-8 h-screen;
}

img {
  @apply h-full object-cover;
}

/* Hide the images by default */
.slide-container {
  @apply hidden h-full w-full;
}

.current-slide {
  @apply flex;
}

/* Next & previous buttons */
.prev,
.next {
  @apply cursor-pointer w-auto px-4 font-bold select-none hover:scale-150 transition-transform self-center h-full;
}

/* Fading animation */
.slide-in {
  animation-name: slideIn;
  animation-duration: 1.5s;
}

.slide-out {
  animation-name: slideOut;
  animation-duration: 1.5s;
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>
