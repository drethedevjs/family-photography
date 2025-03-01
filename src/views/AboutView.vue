<template>
  <div id="about-intro">
    <div class="overflow-hidden h-[680px] relative text-center">
      <img
        src="/images/andre/augusta-ga-family-photography-family-portraits.jpg"
        class="object-cover w-full h-full"
      />
      <div id="color-overlay"></div>
      <div id="intro-overlay">
        <h1>Augusta, GA Family Photographer</h1>
        <p>
          Hi! Thank you for visiting. I have been creating family portraits for quite some time now
          and I must say that I have loved every second of it. The best part? Providing people with
          something that they will treasure for years.
        </p>
        <p class="tracking-widest uppercase">scroll to continue</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#intro-overlay {
  @apply absolute inset-0 flex flex-col w-3/5 mx-auto text-white justify-center font-light;
}

#color-overlay {
  @apply absolute inset-0 bg-primary opacity-25;
}

h1 {
  @apply text-5xl mb-5;
}

p {
  @apply text-white text-xl mb-16;
}
</style>
