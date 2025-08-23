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

      <p class="mb-10">
        If you have made it to this page then it must be that you're interested
        in getting your family portraits done so I must express my sincerest
        gratitude.
      </p>
      <p>
        Go ahead and click on one of the contact links below and I'll be sure to
        connect with you as soon as possible. Talk soon!
      </p>
      <div
        class="grid grid-cols-2 place-items-start text-secondary pt-16 uppercase"
      >
        <p class="text-xl font-semibold">
          tel:
          <a href="tel:5137650432" class="tracking-wider hover:text-primary"
            >706-426-3022</a
          >
        </p>
        <p class="text-xl font-semibold">
          email:
          <a
            href="mailto:andre@ctvphotovideo.com"
            class="tracking-wider hover:text-primary"
          >
            andre@ctvphotovideo.com
          </a>
        </p>
      </div>
      <p class="mt-16 hidden">
        The contact form is currently out of commission. Please use the
        <span class="text-primary font-semibold">phone number</span> or
        <span class="text-primary font-semibold">email address</span> above to
        reach me. I look forward to hearing from you!
      </p>
      <ContactForm v-if="false" />
    </div>
  </main>
</template>
