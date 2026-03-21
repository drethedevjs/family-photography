<script lang="ts" setup>
import imageHelper from "@/utils/ImageHelper";
import pageDescription from "~/data/pageDescription";

const { data: andreImg } = await imageHelper.getImageData("andre");

const router = useRouter();
const pageName = router.currentRoute.value.fullPath.replace("/", "");
const { description, ogTitle } = pageDescription.find(
  pd => pd.pageName === pageName
)!;

useHead({
  title: `${pageName.toUpperCase()} | Capture the Vision`,
  meta: [{ name: "description", content: description }]
});

useSeoMeta({
  ogUrl: "https://ctvphotovideo.com",
  ogType: "website"
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
  <h1 class="hidden">Contact</h1>
  <div class="flex lg:flex-row flex-col min-h-screen">
    <div class="lg:w-1/2">
      <NuxtImg
        v-if="andreImg !== undefined"
        :src="imageHelper.getImageSrc(andreImg, 'andre-2')"
        class="w-full h-full object-cover"
        format="avif"
        quality="80"
        provider="cloudflare"
        placeholder
      />
    </div>
    <div class="lg:w-1/2 lg:px-20 lg:pt-32 pt-10 px-5">
      <h2
        class="lg:text-6xl text-5xl lg:pb-10 pb-5 text-center lg:text-left text-primary"
      >
        Get In Touch
      </h2>

      <p class="lg:mb-10 mb-5">
        You made it here. That means your family's story is about to get
        documented — and that's worth celebrating.
      </p>
      <p>
        Fill out the form below and I'll be in touch within 24 hours. We'll talk
        about your family, the light, and what kind of moment we're going to
        make together.
      </p>
      <div
        class="grid lg:grid-cols-2 grid-cols-1 place-items-start text-secondary lg:pt-16 pt-8 uppercase mb-10"
      >
        <p class="text-xl font-semibold mb-3">
          tel:
          <a
            href="tel:5137650432"
            class="tracking-wider hover:underline text-primary"
            @click="callMeTracker"
          >
            706-426-3022
          </a>
        </p>
        <p class="text-xl font-semibold">
          email:
          <a
            href="mailto:andre@ctvphotovideo.com"
            class="tracking-wider hover:underline text-primary"
            @click="emailMeTracker"
          >
            andre@ctvphotovideo.com
          </a>
        </p>
      </div>
      <!-- <ContactForm v-if="false" /> -->
      <SproutForm />
    </div>
  </div>
</template>
