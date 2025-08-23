<script lang="ts" setup>
defineProps({
  textClass: String,
  price: Number
});
</script>
<template>
  <slot name="heading" :textClass="textClass"></slot>
  <slot name="blurb" :textClass="textClass"></slot>
  <div class="flex items-center">
    <RouterLink to="/contact">
      <a class="ctv-btn mr-5">Book Me</a>
    </RouterLink>
    <p class="uppercase font-medium text-2xl" :class="textClass">
      Starting at ${{ price }}
    </p>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

h2 {
  @apply text-5xl;
}
</style>
