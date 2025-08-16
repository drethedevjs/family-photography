<template>
  <section id="offerings" class="flex">
    <div class="w-7/12 place-items-center grid">
      <div class="w-3/4 my-32 mx-auto overflow-hidden relative">
        <img
          src="/images/home/augusta-ga-family-photographer-love.jpg"
          class="object-cover h-full w-full"
        />

        <div class="absolute inset-0 bg-black opacity-25"></div>

        <div id="lifestyle-overlay" class="absolute inset-0 flex flex-col p-7">
          <h2 id="lifestyle-overlay-heading">Lifestyle Photography</h2>
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
          <h2 id="session-overlay-heading" class="w-4/5">Full & Half Sessions</h2>
          <p id="session-overlay-text">
            Choose a session that suits your needs. One for a few pictures and one for fuller
            families.
          </p>
          <RouterLink to="/contact">
            <button id="session-contact-btn" class="ctv-btn">Book a Session</button>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
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

h2 {
  @apply mt-10 text-4xl tracking-widest font-light;
}

h3 {
  @apply mt-5 text-7xl font-semibold;
}
</style>
