<script lang="ts" setup>
import { onMounted, ref } from "vue";

let slideIndex = 1;
const numOfSlides = ref(0);
const currentSlideNum = ref(1);

onMounted(() => {
  numOfSlides.value = document.getElementsByClassName("slide-container").length;
});

// Next/previous controls
const changeSlides = (n) => {
  showSlides((slideIndex += n));
};

const showSlides = (n) => {
  const slides = document.getElementsByClassName("slide-container");
  let currentSlide = document.getElementsByClassName("current-slide")[0];

  if (n > slides.length) slideIndex = 1;

  if (n < 1) slideIndex = slides.length;

  currentSlide.classList.remove("slide-in");
  currentSlide.classList.add("slide-out");

  setTimeout(() => {
    currentSlide.classList.remove("current-slide");

    currentSlide = slides[slideIndex - 1];
    currentSlideNum.value = slideIndex;
    currentSlide.classList.remove("slide-out");
    currentSlide.classList.add("slide-in", "current-slide");
  }, 1000);
};
</script>

<template>
  <div class="slideshow-container">
    <div class="slide-container current-slide">
      <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" />
    </div>

    <div class="slide-container">
      <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp" />
    </div>

    <div class="slide-container">
      <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp" />
    </div>
  </div>
  <br />

  <!-- The Navigation Arrows -->
  <div class="slideshow-nav-container">
    <a class="prev" @click="changeSlides(-1)">&#10094;</a>
    <p class="slide-nav-faction">{{ currentSlideNum }} / {{ numOfSlides }}</p>
    <a class="next" @click="changeSlides(1)">&#10095;</a>
  </div>
</template>

<style scoped>
.slide-nav-faction {
  @apply text-primary font-thin tracking-widest text-2xl;
}

.slideshow-nav-container {
  @apply text-center flex flex-row justify-center;
}

/* Slideshow container */
.slideshow-container {
  @apply w-full relative m-auto mt-8;
}

img {
  @apply h-full object-cover;
}

/* Hide the images by default */
.slide-container {
  @apply hidden h-[500px] w-full;
}

.current-slide {
  @apply flex;
}

/* Next & previous buttons */
.prev,
.next {
  @apply cursor-pointer w-auto px-4 text-primary font-bold select-none hover:scale-150 transition-transform self-center h-full;
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
