<!-- EmptyState.vue -->
<script lang="ts" setup>
defineProps<{ dark?: boolean }>();
</script>

<template>
  <div class="flex flex-col items-center gap-2 opacity-40">
    <UIcon
      name="i-heroicons-photo"
      class="w-8 h-8"
      :class="dark ? 'text-white' : 'text-charcoal'"
    />
    <p
      class="font-heading text-xs tracking-widest uppercase"
      :class="dark ? 'text-white' : 'text-charcoal'"
    >
      No logos found
    </p>
  </div>
</template>
