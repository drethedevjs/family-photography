<script setup lang="ts">
import HeroSlideShow from "../components/HeroSlideShow.vue";
</script>

<template>
  <HeroSlideShow />
  <main id="homeApp">
    <div class="flex">
      <div class="w-2/5">
        <img
          src="/images/andre/andre-augusta-family-photographer.jpg"
          class="object-cover h-full w-full"
        />
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

        <button class="about-btn ctv-btn"><RouterLink to="/about">Tell Me More</RouterLink></button>
      </div>
    </div>
    <div id="offerings" class="flex">
      <div class="w-7/12 place-items-center grid">
        <div class="w-3/4 my-32 mx-auto overflow-hidden relative">
          <img
            src="/images/home/augusta-ga-family-photographer-love.jpg"
            class="object-cover h-full w-full"
          />

          <div class="absolute inset-0 bg-black opacity-25"></div>

          <div id="lifestyle-overlay" class="absolute inset-0 flex flex-col">
            <h2 id="lifestyle-overlay-heading">Lifestyle</h2>
            <p id="lifestyle-overlay-text">
              Any idea, any location. Bring your best mood and I'll do the rest.
            </p>
          </div>
        </div>
      </div>
      <div class="w-5/12 bg-green-100 overflow-hidden">
        <div class="relative w-full h-full object-cover">
          <img
            src="/images/home/augusta-ga-family-photographer-cold.jpg"
            class="w-full h-full object-cover"
          />

          <div class="absolute inset-0 bg-black opacity-25"></div>

          <div id="session-overlay" class="absolute inset-0">
            <h2 id="session-overlay-heading">Full & Half Sessions</h2>
            <p id="session-overlay-text">
              Choose a session that suits your needs. One for a few pictures and one for fuller
              families.
            </p>
            <button id="session-contact-btn" class="ctv-btn">Contact</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
#session-contact-btn {
  @apply mt-16 border-0 shadow-none;
}

#lifestyle-overlay,
#session-overlay {
  @apply pl-16 pt-20;
}

#lifestyle-overlay-heading,
#session-overlay-heading {
  @apply mb-3 font-semibold drop-shadow-lg;
}

#lifestyle-overlay-text,
#session-overlay-text {
  @apply text-xl drop-shadow-lg;
}

#lifestyle-overlay-heading,
#lifestyle-overlay-text,
#session-overlay-heading,
#session-overlay-text {
  @apply text-white;
}
#offerings {
  @apply flex w-full;
}
.about-btn {
  @apply ml-auto mt-20 mr-32;
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
