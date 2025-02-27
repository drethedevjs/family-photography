<script setup lang="ts">
import HeroSlideShow from "../components/HeroSlideShow.vue";
</script>

<template>
  <HeroSlideShow />
  <main id="homeApp">
    <div class="flex">
      <div class="w-2/5">
        <img src="/images/andre/andre-augusta-family-photographer.jpg" />
      </div>
      <div class="w-3/5 flex flex-col">
        <h2>Family Photographer</h2>
        <h3>Andre Thomas</h3>

        <p class="about-txt">
          Proident nisi magna eu commodo do elit occaecat aute irure. Minim quis ut ut consequat
          nostrud consequat eu dolor adipisicing. Anim adipisicing ad nulla mollit deserunt quis
          cupidatat est proident qui veniam sint est. Tempor deserunt exercitation cillum elit. Duis
          occaecat sint quis sit nostrud fugiat eiusmod qui eiusmod esse velit ad consequat. Dolore
          dolor et non irure labore. Velit ea et ut dolore minim commodo nostrud.
        </p>

        <button class="about-btn"><RouterLink to="/about">Tell Me More</RouterLink></button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.about-btn {
  @apply btn bg-primary text-white hover:bg-white hover:text-primary mt-8 ml-auto mr-10 uppercase px-10 py-6 tracking-wider;
}

h2,
h3 {
  @apply uppercase;
}

h2,
h3,
p {
  @apply text-secondary;
}

h2 {
  @apply indent-14 mt-10 text-2xl tracking-widest font-light;
}

h3 {
  @apply mt-5 text-7xl font-semibold indent-4;
}

.about-txt {
  @apply mt-5 px-20 leading-8 text-xl font-light;
}
</style>
