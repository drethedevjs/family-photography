<script lang="ts" setup>
defineProps({
  textClass: String,
  price: Number
});
</script>
<template>
  <slot name="heading" :textClass="textClass"></slot>
  <slot name="blurb" :textClass="textClass"></slot>
  <div class="flex flex-col">
    <div class="flex flex-row">
      <NuxtLink
        to="contact"
        @click="bookMeTracker(price?.toString())"
        class="nf-btn-sm mr-3"
      >
        Book Me
      </NuxtLink>
      <NuxtLink
        to="packages"
        @click="bookMeTracker(price?.toString())"
        class="nf-btn-sm"
      >
        Package Details
      </NuxtLink>
    </div>
    <br />
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
