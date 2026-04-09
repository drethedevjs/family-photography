<script setup lang="ts">
useHead({
  meta: [
    {
      name: "og:logo",
      content:
        "https://res.cloudinary.com/ctvphotovideo/image/upload/v1774311424/hf-logo-orange_bkksuz.png"
    },
    {
      name: "p:domain_verify",
      content: "b5e40e0962d7d97d056466dbdc1f56c1"
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
