<template>
  <section
    class="flex flex-col place-items-center py-16 mx-auto 2xl:w-1/2 w-4/5"
  >
    <h3 class="font-light tracking-widest">Let's Get Together</h3>
    <h2 class="text-primary">Contact Me</h2>
    <p class="text-2xl lg:mb-16 mb-5 font-medium tracking-widest">
      Natural light. Timeless warmth.
    </p>

    <p class="text-center mb-10">
      Great photographs start with comfort. If your kids are stiff and you're
      nervous, I can feel it through the lens — and so can the camera. Before
      the session even starts, my job is to make sure you feel like yourself.
      That's why families come back: not just because they love their images,
      but because they actually enjoyed the experience of making them.
    </p>

    <NuxtLink to="/contact" @click="contactPaneTracker">
      <button class="nf-btn">Contact</button>
    </NuxtLink>
  </section>
</template>

<style scoped>
@reference "tailwindcss";

h2 {
  @apply md:text-7xl text-5xl text-center mt-5 mb-7 tracking-wider;
}
</style>
