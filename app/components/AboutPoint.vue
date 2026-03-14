<template>
  <div class="mb-8">
    <h2 class="text-primary">
      <slot name="heading"></slot>
    </h2>
    <p>
      <slot name="blurb"></slot>
    </p>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

h2 {
  @apply lg:text-5xl lg:mb-5 text-3xl mb-3;
}
</style>
