<script setup lang="ts">
useHead({
  meta: [
    {
      name: "og:logo",
      content:
        "https://cdn.ctvphotovideo.com/logo:ctv-family-photography-logo.png"
    }
  ]
});
</script>

<template>
  <UApp>
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </UApp>
</template>
