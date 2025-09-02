<script lang="ts" setup>
import ContactForm from "@/components/ContactForm.vue";
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
  <main>
    <h1 class="hidden">Contact</h1>
    <div class="flex lg:flex-row flex-col">
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
          class="text-6xl lg:pb-20 pb-10 text-center lg:text-left text-orange-700"
        >
          Get In Touch
        </h2>

        <p class="lg:mb-10 mb-5">
          If you have made it to this page then it must be that you're
          interested in getting your family portraits done so I must express my
          sincerest gratitude.
        </p>
        <p>
          Go ahead and click on one of the contact links below and I'll be sure
          to connect with you as soon as possible. Talk soon!
        </p>
        <div
          class="grid lg:grid-cols-2 grid-cols-1 place-items-start text-secondary lg:pt-16 pt-8 uppercase"
        >
          <p class="text-xl font-semibold mb-3">
            tel:
            <a
              href="tel:5137650432"
              class="tracking-wider hover:underline text-primary"
            >
              706-426-3022
            </a>
          </p>
          <p class="text-xl font-semibold">
            email:
            <a
              href="mailto:andre@ctvphotovideo.com"
              class="tracking-wider hover:underline text-primary"
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
    </div>
  </main>
</template>
