<!-- LogoGroup.vue -->
<script lang="ts" setup>
defineProps<{
  title: string;
  bgClass: string;
}>();
</script>

<template>
  <div class="mb-6">
    <p
      class="font-heading text-xs tracking-widest uppercase text-charcoal/40 mb-3"
    >
      {{ title }}
    </p>
    <div
      class="rounded-xl p-10 flex flex-wrap items-center justify-center gap-10 min-h-40"
      :class="bgClass"
    >
      <slot></slot>
    </div>
  </div>
</template>
