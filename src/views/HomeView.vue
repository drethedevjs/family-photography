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
      <div class="w-3/5 flex flex-col place-content-center text-center">
        <h2>Family Photographer</h2>
        <h3>Andre Thomas</h3>

        <p class="about-txt">
          I'm a family photographer in Augusta, GA who loves to create vibrant family portraits for
          families all over. Because of this, my desire for you is to get you to “have your moment”.
          That “moment” I'm referring to is when you finally receive those beautiful portraits that
          you have been anxiously waiting for. This moment doesn't just come once. Rather, it gets
          to be relived throughout generations when your children and grandchildren can look at
          those photographs and remember some heart-warming past times.
        </p>

        <button class="about-btn"><RouterLink to="/about">Tell Me More</RouterLink></button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.about-btn {
  @apply btn bg-primary text-white hover:bg-white hover:text-primary hover:border-primary ml-auto mt-20 mr-32 uppercase px-14 py-8 tracking-wider;
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
  @apply mt-10 text-4xl tracking-widest font-light;
}

h3 {
  @apply mt-5 text-7xl font-semibold;
}

.about-txt {
  @apply mt-5 leading-10 text-3xl font-thin tracking-wider w-3/4 mx-auto;
}
</style>
