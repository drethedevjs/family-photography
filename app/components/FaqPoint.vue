<script lang="ts" setup>
defineProps<{
  number?: string;
}>();
</script>

<template>
  <div class="nf-card lg:py-10 lg:px-12 py-6 px-8">
    <span v-if="number" class="nf-badge mb-4">{{ number }}</span>
    <p id="question">
      <slot name="question"></slot>
    </p>
    <div class="nf-divider my-5" />
    <p id="answer" class="text-charcoal! dark:text-charcoal!">
      <slot name="answer"></slot>
    </p>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

#question {
  @apply font-brand font-semibold lg:text-5xl text-3xl leading-tight text-primary;
}

#answer {
  @apply lg:text-xl text-lg leading-relaxed;
}
</style>
