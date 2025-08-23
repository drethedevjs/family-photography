<script setup lang="ts">
import ContactPane from "@/components/ContactPane.vue";
import FaqPoint from "@/components/FaqPoint.vue";
import PriceBlurb from "@/components/PriceBlurb.vue";
import imageHelper from "@/utils/ImageHelper";
import type { _Object } from "@aws-sdk/client-s3";
import { onBeforeMount, ref } from "vue";

const imageData = ref<_Object[]>();
const stockData = ref<_Object[]>();
onBeforeMount(async () => {
  imageData.value = await imageHelper.getImageData("tomfam");
  stockData.value = await imageHelper.getImageData("investment");
});
</script>

<template>
  <main>
    <h1 class="hidden">Investment</h1>
    <div id="investment-intro" class="flex flex-row mt-10">
      <div class="w-1/2 mx-auto flex">
        <p class="text-7xl text-right my-auto px-5">
          Invest in me as your
          <span class="text-primary font-medium">family photographer</span>. I
          provide an experience you will always remember!
        </p>
      </div>
      <div class="w-1/2 px-20">
        <img
          v-if="imageData !== undefined"
          :src="imageHelper.getImageSrc(imageData, '2')"
        />
        <p class="mt-10 mx-10 text-lg">
          Lifestyle portraits are exactly how they sound: It's your lifestyle!
          It captures beautiful moments, funny faces, amazing smiles, and more.
          Lifestyle happens everywhere; the park, a playground, a hiking trail,
          or even an ice cream parlour. Invite me anywhere and I'll come capture
          your moments for you.
        </p>
      </div>
    </div>
    <div id="offerings" class="flex mt-20 relative">
      <div class="w-7/12 h-[1000px] relative">
        <!-- Reynolds family -->
        <img
          v-if="stockData !== undefined"
          :src="imageHelper.getImageSrc(stockData, '1')"
          class="w-full h-full object-cover"
        />
        <div class="ctv-img-overlay"></div>
        <div class="absolute inset-0 px-20 pt-20 flex flex-col justify-start">
          <PriceBlurb textClass="text-white drop-shadow-2xl" :price="425">
            <template #heading="{ textClass }">
              <h2 :class="textClass" class="mt-10 normal-case mb-5">
                Full Session
              </h2>
            </template>
            <template #blurb="{ textClass }">
              <p :class="textClass" class="text-xl mb-5 font-semibold">
                This is a 60 minute session at any location that is great for
                those who have one or more of the following: large family,
                multiple outfits, and/or a lot of poses.
              </p>
            </template>
          </PriceBlurb>
        </div>
      </div>
      <div class="w-5/12 px-20">
        <!-- McQuerry couple -->
        <img
          v-if="stockData !== undefined"
          :src="imageHelper.getImageSrc(stockData, '2')"
          class="rounded-lg"
        />
        <PriceBlurb textClass="text-secondary drop-shadow-2xl" :price="350">
          <template #heading="{ textClass }">
            <h2 :class="textClass" class="mt-10 normal-case mb-5">
              Half Session
            </h2>
          </template>
          <template #blurb="{ textClass }">
            <p :class="textClass" class="text-xl mb-5">
              This 30 minute session is for families who want to get a few quick
              pictures for a special occasion or just because.
            </p>
          </template>
        </PriceBlurb>
      </div>
    </div>
    <div id="faq-intro" class="px-10 py-20 flex">
      <div class="w-1/2">
        <p class="text-6xl">
          You probably have a few questions before taking a decision to book me.
        </p>
      </div>
      <div class="w-1/2 flex items-center">
        <p class="text-xl">
          I've listed out a quick outline of my process and gathered all the
          frequently asked questions and shared some answers that can help you
          decide whether I'm a good fit for you.
        </p>
      </div>
    </div>
    <div id="faq" class="flex">
      <div class="w-4/12">
        <img
          v-if="imageData !== undefined"
          :src="imageHelper.getImageSrc(imageData, '1')"
        />
      </div>
      <div class="w-8/12 px-20">
        <table class="table">
          <tbody>
            <tr>
              <td class="text-8xl">01</td>
              <td>
                <FaqPoint>
                  <template #question>Where can I do a photo shoot?</template>
                  <template #answer>
                    Anywhere! Remember, when you book us, we work for you. We
                    can go to a park in the city. We can go to your house. We
                    can go to a special location like a stadium or a coffee
                    house. I'm mobile so let me know where you want to go.
                  </template>
                </FaqPoint>
              </td>
            </tr>
            <tr>
              <td class="text-8xl">02</td>
              <td>
                <FaqPoint>
                  <template #question>What is your turnaround time?</template>
                  <template #answer>
                    For traditional photo shoots such as families, one on ones,
                    graduations, maternity, etc., those pictures will be ready
                    within 15 days of the scheduled shoot.
                  </template>
                </FaqPoint>
              </td>
            </tr>
            <tr>
              <td class="text-8xl">03</td>
              <td>
                <FaqPoint>
                  <template #question>Where can I take pictures?</template>
                  <template #answer>
                    There are no restrictions to where you can take your
                    pictures. Just know that I specialize in natural light
                    photograph which means I prefer the outdoors but I am
                    competent to do indoor photography.
                  </template>
                </FaqPoint>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <ContactPane />
  </main>
</template>

<style scoped>
h2 {
  @apply text-5xl max-w-[500px];
}
</style>
