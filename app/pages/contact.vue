<script lang="ts" setup>
import imageHelper from "@/utils/ImageHelper";
import pageDescription from "~/data/pageDescription";

const { data: andreImg } =
  await imageHelper.getCloudinaryImageDataByTag("contact-page");

const router = useRouter();
const pageName = router.currentRoute.value.fullPath.replace("/", "");
const { description, ogTitle } = pageDescription.find(
  pd => pd.pageName === pageName
)!;

useHead({
  title: `${pageName.toUpperCase()} | Honey & Flare`,
  meta: [{ name: "description", content: description }]
});

useSeoMeta({
  ogUrl: "https://honeyandflare.photo",
  ogType: "website"
});

if (import.meta.server) {
  useSeoMeta({
    ogUrl: "https://honeyandflare.photo",
    ogType: "website",
    ogTitle: ogTitle,
    ogDescription: description,
    ogImage:
      "https://res.cloudinary.com/ctvphotovideo/image/upload/v1774471473/augusta-ga-family-photographer-fox-58_avrbm4.jpg",
    ogLocale: "en_US",
    ogSiteName: "Honey & Flare Family Photography",
    twitterCard: "summary",
    robots: "index, follow"
  });
}
</script>

<template>
  <h1 class="hidden">Contact</h1>
  <section class="relative h-[420px] lg:h-[560px] overflow-hidden">
    <NuxtImg
      v-if="andreImg?.[0]"
      :src="andreImg[0].fileName"
      class="absolute inset-0 w-full h-full object-cover object-center"
      alt="Andre smiling with his camera."
      format="avif"
      quality="80"
      provider="cloudinary"
      placeholder
    />
    <div class="nf-img-overlay" />
    <div
      class="relative h-full flex flex-col items-center justify-center text-center px-6"
    >
      <p
        class="nf-eyebrow text-cream! text-sm! font-semibold rounded-full bg-charcoal/60 backdrop-blur-sm px-5 py-2 mb-5 border border-honey/60"
      >
        Let's Get Together
      </p>
      <h2
        class="font-brand text-cream text-6xl lg:text-8xl leading-none drop-shadow-lg"
      >
        Get In Touch
      </h2>
      <div class="nf-divider bg-cream! mt-6" />
    </div>
  </section>

  <div class="max-w-3xl mx-auto lg:pt-16 pt-10 lg:pb-24 pb-12 px-5">
    <p class="lg:mb-10 mb-5">
      You made it here. That means your family's story is about to get
      documented — and that's worth celebrating.
    </p>
    <p>
      Fill out the form below and I'll be in touch within 24 hours. We'll talk
      about your family, the light, and what kind of moment we're going to make
      together.
    </p>

    <div class="nf-divider lg:mt-12 mt-8 mx-auto lg:mx-0" />

    <div
      class="flex flex-wrap gap-3 justify-center lg:justify-start lg:pt-8 pt-6 lg:mb-12 mb-8"
    >
      <a
        href="tel:5137650432"
        class="nf-badge text-sm! px-5! py-3! hover:bg-primary hover:text-white transition-colors"
        @click="callMeTracker"
      >
        <span class="opacity-70">Call</span>
        706-426-3022
      </a>
      <a
        href="mailto:andre@honeyandflare.photo"
        class="nf-badge text-sm! px-5! py-3! normal-case! hover:bg-primary hover:text-white transition-colors"
        @click="emailMeTracker"
      >
        <span class="opacity-70 uppercase">Email</span>
        andre@honeyandflare.photo
      </a>
    </div>
    <SproutForm />
  </div>
</template>
