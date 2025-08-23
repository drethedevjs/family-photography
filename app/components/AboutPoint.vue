<template>
  <div>
    <h2>
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
  @apply text-5xl mb-5;
}
</style>
