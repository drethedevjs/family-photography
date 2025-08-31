<template>
  <div class="flex flex-col place-items-center py-16 mx-auto 2xl:w-1/2 w-4/5">
    <h3 class="font-light tracking-widest">Let's Get Together</h3>
    <h2 class="text-orange-700">Contact Me</h2>
    <p class="text-base lg:mb-16 mb-5 font-medium tracking-widest">
      Document your family history
    </p>

    <p class="text-center lg:mb-24 mb-10">
      I have come to find that my success doesn't only come from great
      photographs, but also with my personal touch. My aim is to make sure that
      all families are comfortable in front of the camera. I have repeat clients
      because they enjoy their pictures and they enjoy me. Being on the opposite
      end of the lens isn't easy for anyone so I make it a point to make sure
      they are very comfortable and, more importantly, that they have enjoy
      themselves!
    </p>

    <NuxtLink to="/contact">
      <button class="ctv-btn">Contact</button>
    </NuxtLink>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

h2 {
  @apply md:text-7xl text-5xl text-center mt-5 mb-7 tracking-wider;
}
</style>
