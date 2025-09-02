<script setup lang="ts">
import FaqPoint from "@/components/FaqPoint.vue";
import imageHelper from "@/utils/ImageHelper";
import InvestmentOfferings from "~/components/InvestmentOfferings.vue";
import pageDescription from "~/data/pageDescription";

const { data: imageData } = await imageHelper.getImageData("tomfam");
const { data: stockData } = await imageHelper.getImageData("investment");

const router = useRouter();
const pageName = router.currentRoute.value.fullPath.replace("/", "");
const { description, ogTitle } = pageDescription.find(
  pd => pd.pageName === pageName
)!;

useHead({
  title: `${pageName.toUpperCase()} | Capture the Vision`,
  meta: [{ name: "description", content: description }]
});

if (import.meta.server) {
  useSeoMeta({
    ogUrl: "https://ctvphotovideo.com",
    ogType: "website",
    ogTitle: ogTitle,
    ogDescription: description,
    ogImage:
      "https://cdn.ctvphotovideo.com/investment:augusta-ga-family-photographer-investment-1.jpg",
    ogLocale: "en_US",
    ogSiteName: "Capture the Vision Family Photography",
    twitterCard: "summary",
    robots: "index, follow"
  });
}
</script>

<template>
  <main>
    <h1 class="hidden">Investment</h1>
    <div id="investment-intro" class="flex lg:flex-row flex-col lg:mt-10">
      <div class="lg:w-1/2 mx-auto flex">
        <p
          class="lg:text-7xl text-2xl lg:text-right text-center lg:mb-0 mb-5 my-auto px-5 lg:leading-20"
        >
          Invest in me as your
          <span class="text-primary font-medium">family photographer</span>. I
          provide an experience you will always remember!
        </p>
      </div>
      <div class="lg:w-1/2 lg:px-20">
        <NuxtImg
          v-if="imageData !== undefined"
          :src="imageHelper.getImageSrc(imageData, '2')"
          class="lg:rounded-lg"
          format="avif"
          quality="80"
          provider="cloudflare"
          placeholder
        />
        <p class="mt-10 mx-10 text-xl">
          Lifestyle portraits are exactly how they sound: It's your lifestyle!
          It captures beautiful moments, funny faces, amazing smiles, and more.
          Lifestyle happens everywhere; the park, a playground, a hiking trail,
          or even an ice cream parlour. Invite me anywhere and I'll come capture
          your moments for you.
        </p>
      </div>
    </div>
    <InvestmentOfferings :stockData="stockData" />

    <hr class="hide-on-desktop border-2 border-secondary my-5" />

    <div id="faq-intro" class="px-10 lg:py-20 flex lg:flex-row flex-col">
      <div class="lg:w-1/2 bg-primary lg:bg-transparent rounded-md lg:p-0 p-3">
        <p
          class="lg:text-4xl text-2xl text-center lg:text-left text-white lg:text-secondary"
        >
          You probably have a few questions before taking a decision to book me.
        </p>
      </div>
      <div class="lg:w-1/2 flex items-center">
        <p class="text-xl mt-4 lg:mt-0">
          I've listed out a quick outline of my process and gathered all the
          frequently asked questions and shared some answers that can help you
          decide whether I'm a good fit for you.
        </p>
      </div>
    </div>
    <div id="faq" class="flex">
      <div class="lg:w-4/12 hide-on-mobile">
        <NuxtImg
          v-if="imageData !== undefined"
          :src="imageHelper.getImageSrc(imageData, '1')"
          format="avif"
          quality="80"
          provider="cloudflare"
          placeholder
          alt="Andre and his family standing on a wooden bridge."
          class="object-cover"
        />
      </div>
      <div class="lg:w-8/12 w-full lg:px-20">
        <table class="table">
          <tbody>
            <tr>
              <td class="text-8xl hide-on-mobile">01</td>
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
              <td class="text-8xl hide-on-mobile">02</td>
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
              <td class="text-8xl hide-on-mobile">03</td>
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
@reference "tailwindcss";

/* #investment-intro {
@apply
} */
</style>
