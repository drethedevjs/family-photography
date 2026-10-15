<script lang="ts" setup>
defineProps({
  textClass: String,
  price: Number,
  cardClass: {
    type: String,
    default: "border-primary border-2 rounded-2xl p-8 lg:p-10"
  }
});
</script>
<template>
  <div :class="cardClass">
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
      <p class="uppercase font-brand font-semibold text-3xl" :class="textClass">
        Starting at ${{ price }}
      </p>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

h2 {
  @apply text-5xl;
}
</style>
