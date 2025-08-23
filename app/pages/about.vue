<script lang="ts" setup>
import imageHelper from "@/utils/ImageHelper";
import { ref } from "vue";
import AboutPoint from "../components/AboutPoint.vue";

const { data: tomfamData } = await imageHelper.getImageData("tomfam");

const imageData = ref(tomfamData);
</script>

<template>
  <main>
    <h1 class="hidden">About</h1>
    <div id="about-intro">
      <div class="overflow-hidden lg:h-[900px] h-[680px] relative text-center">
        <img
          v-if="imageData !== undefined"
          class="object-cover w-full h-full"
          :src="imageHelper.getImageSrc(imageData, '4')"
        />
        <div id="color-overlay"></div>
        <div id="intro-overlay">
          <h1>Augusta, GA Family Photographer</h1>
          <p>
            Hi! Thank you for visiting. I have been creating family portraits
            for quite some time now and I must say that I have loved every
            second of it. The best part? Providing people with something that
            they will treasure for years.
          </p>
          <small class="tracking-widest uppercase animate-pulse"
            >scroll to continue</small
          >
        </div>
      </div>
    </div>
    <div id="about-body" class="flex p-20">
      <div class="w-1/2 text-center grid grid-cols-1">
        <AboutPoint>
          <template #heading>Why Me?</template>
          <template #blurb>
            I have come to find that my success doesn't only come from great
            photographs, but also with my personal touch. My aim is to make sure
            that all families are comfortable in front of the camera. I have
            repeat clients because they enjoy their pictures and they enjoy me.
            Being on the opposite end of the lens isn't easy for anyone so I
            make it a point to make sure they are very comfortable and, more
            importantly, that they have enjoy themselves!
          </template>
        </AboutPoint>
        <AboutPoint>
          <template #heading>My "Why"</template>
          <template #blurb>
            I always make it a point to keep photographing the times my wife and
            I have together. We are four years into marriage and have a child on
            the way. I like to document our lives together so that when my
            children (and, eventually, grandchildren) arrive, I can invite them
            into our experience with our pictures. So my “why” is simple: to
            make sure all families have keepsakes for generations to come.
          </template>
        </AboutPoint>
        <AboutPoint>
          <template #heading>Let's Meet</template>
          <template #blurb>
            So go ahead and book now so that you can have your very own family
            photographer in Augusta, GA, Aiken, SC or in the surrounding
            counties/cities. Let's meet to take some great portraits so that you
            can have your moment.
          </template>
        </AboutPoint>
      </div>
      <div class="w-1/2 px-10 py-20">
        <img
          v-if="imageData !== undefined"
          class="rounded-lg"
          :src="imageHelper.getImageSrc(imageData, '3')"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
@reference "tailwindcss";

#intro-overlay {
  @apply absolute inset-0 flex flex-col w-3/5 mx-auto text-white justify-center font-light drop-shadow-lg;
}

#color-overlay {
  @apply absolute inset-0 bg-red-400 opacity-25;
}

h1 {
  @apply text-5xl mb-5;
}

p {
  @apply text-white mb-16;
}
</style>
