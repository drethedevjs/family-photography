<script setup lang="ts">
useHead({
  meta: [
    {
      name: "og:logo",
      content:
        "https://res.cloudinary.com/ctvphotovideo/image/upload/v1774311424/hf-logo-orange_bkksuz.png"
    }
  ]
});
</script>

<template>
  <UApp>
    <TheHeader />
    <main>
      <NuxtPage />
    </main>
    <TheFooter />
  </UApp>
</template>
