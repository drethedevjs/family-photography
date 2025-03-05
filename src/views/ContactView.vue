<script lang="ts" setup>
import ContactView from "@/components/ContactForm.vue";
</script>
<template>
  <main class="flex">
    <div class="w-1/2">
      <img
        src="/images/andre/augusta-ga-family-photography-andre.jpg"
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
      <ContactView />
    </div>
  </main>
</template>
