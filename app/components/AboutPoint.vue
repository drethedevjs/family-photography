<script lang="ts" setup>
defineProps<{
  number?: string;
}>();
</script>

<template>
  <div class="nf-card text-left lg:p-10 p-6">
    <p v-if="number" class="nf-eyebrow mb-3">{{ number }}</p>
    <h2
      class="font-brand text-charcoal lg:text-5xl text-4xl leading-none mb-4"
    >
      <slot name="heading"></slot>
    </h2>
    <div class="nf-divider mb-5" />
    <p class="font-body text-charcoal/80 leading-relaxed">
      <slot name="blurb"></slot>
    </p>
  </div>
</template>
