<template>
  <footer>
    <p class="text-primary">
      Copyright © {{ new Date().getFullYear() }} Capture the Vision, LLC
    </p>
    <p class="text-primary">
      Powered by
      <a
        href="https://csra-web-services.vercel.app/"
        target="_blank"
        class="text-secondary font-medium hover:text-primary"
        >CSRA Web Services</a
      >
    </p>
  </footer>
</template>

<style scoped>
@reference "tailwindcss";

footer {
  @apply h-24 flex flex-col items-center justify-center mt-5;
}

p {
  @apply text-base ml-5 mb-3;
}
</style>
