<script lang="ts" setup>
defineProps({
  textClass: String,
  price: Number,
});
</script>
<template>
  <slot name="heading" :textClass="textClass"></slot>
  <slot name="blurb" :textClass="textClass"></slot>
  <div class="flex items-center">
    <button class="ctv-btn mr-5">Get Details</button>
    <p class="uppercase font-medium text-2xl" :class="textClass">Starting at ${{ price }}</p>
  </div>
</template>

<style scoped>
h2 {
  @apply text-5xl;
}
</style>
