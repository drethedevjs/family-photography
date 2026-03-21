<template>
  <div
    ref="sproutContainer"
    class="w-full min-h-screen border rounded-2xl border-primary"
  ></div>
</template>

<script setup lang="ts">
const sproutContainer = ref<HTMLDivElement | null>(null);

onMounted(() => {
  const script = document.createElement("script");
  script.id = "sprout_studio_form_script";
  script.setAttribute(
    "data-api-key",
    "c63314b149abff10b98ced73675b8c86ee5f4e8506f0f668"
  );
  script.setAttribute("data-lead-form-id", "230508");
  script.setAttribute("data-base-hostname", "sproutstudio.com");
  script.src = "https://sproutstudio.com/sprout_dynamic_lead_form.js";

  sproutContainer.value?.appendChild(script);

  script.onload = () => {
    const iframe = sproutContainer.value?.querySelector("iframe");
    if (iframe) {
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.border = "none";
    }
  };
});
</script>
