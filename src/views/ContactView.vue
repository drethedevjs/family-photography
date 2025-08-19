<script lang="ts" setup>
import ContactForm from "@/components/ContactForm.vue";
import imageHelper from "@/utils/ImageHelper";
import type { _Object } from "@aws-sdk/client-s3";
import { onBeforeMount, ref } from "vue";

const andreImg = ref<_Object[]>();

onBeforeMount(async () => {
  andreImg.value = await imageHelper.getImageData("andre");
});
</script>
<template>
  <main class="flex">
    <div class="w-1/2">
      <img
        v-if="andreImg !== undefined"
        :src="imageHelper.getImageSrc(andreImg, 'andre-2')"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="w-1/2 px-20 pt-32">
      <h1 class="hidden">Contact Me</h1>
      <h2 class="text-6xl pb-20">Get In Touch</h2>

      <p class="text-2xl">
        If you have made it to this page then it must be that you're interested in connecting to
        talk about getting some family portraits done so I must express my sincerest gratitude. Go
        ahead and fill out the form below and I'll be sure to connect with you as soon as possible.
        Talk soon!
      </p>
      <div class="grid grid-cols-2 place-items-start text-secondary pt-16 uppercase">
        <a href="tel:5137650432" class="tracking-wider">tel: 513-765-0432</a>
        <a href="mailto:andre@ctvphotovideo.com" class="tracking-wider">
          email: andre@ctvphotovideo.com
        </a>
      </div>
      <ContactForm />
    </div>
  </main>
</template>
