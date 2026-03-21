<script setup lang="ts">
import pageDescription from "@/data/pageDescription";
import imageHelper from "~/utils/ImageHelper";

const { data: andreImageData } =
  await imageHelper.getCloudinaryImageData("andre");
const { data: homeImageData } = await imageHelper.getImageData("home");
const { data: offeringsImageData } =
  await imageHelper.getCloudinaryImageDataByTag("offering");

const { description, ogTitle } = pageDescription.find(
  pd => pd.pageName === "home"
)!;

useHead({
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
    twitterCard: "summary_large_image",
    robots: "index, follow"
  });
}
</script>

<template>
  <HeroSlideShow />
  <h1 class="hidden">Augusta, GA Family Photographer</h1>
  <div class="flex md:flex-row flex-col">
    <div class="lg:w-2/5">
      <NuxtImg
        v-if="andreImageData !== undefined"
        provider="cloudinary"
        format="avif"
        :src="imageHelper.getCloudinaryImageSrc(andreImageData, 'home')"
        class="object-cover h-full w-full hide-on-mobile"
        alt="Andre smiling holding two cameras."
        placeholder
        quality="80"
      />
    </div>
    <div class="lg:w-3/5 flex flex-col place-content-center text-center mb-10">
      <h2>Family Photographer</h2>
      <h3 class="text-primary">Andre Thomas</h3>

      <p class="about-txt">
        Some photographers capture smiles. I capture evidence. Evidence that
        your family laughed like this. That your kids were this small. That
        golden afternoon light fell exactly this way on exactly this day.
      </p>
      <p class="about-txt">
        I photograph families from Augusta to Aiken during golden hour because
        that's when everything — the light, the mood, the realness — lines up.
        The result isn't just a portrait. It's the first page of an archive your
        grandchildren will open someday and feel like they know you.
      </p>

      <NuxtLink to="about" class="about-btn" @click="tellMeMoreTracker">
        <button class="nf-btn">Tell Me More</button>
      </NuxtLink>
    </div>
  </div>

  <OfferingsPane
    v-if="homeImageData !== undefined"
    :imageData="offeringsImageData"
  />

  <TestimonialPane
    v-if="homeImageData !== undefined"
    class="hidden lg:flex"
    :imageData="homeImageData"
  />

  <ContactPane />

  <div class="text-center mt-16">
    <p class="uppercase mb-10 text-xl font-medium">Follow me on Instagram</p>
    <a
      href="https://instagram.com/ctvphotovideo"
      target="_blank"
      class="hover:text-primary text-5xl"
    >
      @honeyandflare
    </a>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.about-btn {
  @apply lg:ml-auto lg:mt-20 mt-8 lg:mr-32;
}

h2 {
  @apply mt-10 lg:text-4xl text-2xl tracking-widest font-light;
}

h3 {
  @apply mt-5 lg:text-7xl text-5xl font-semibold;
}

.about-txt {
  @apply mt-5 w-3/4 mx-auto 2xl:text-3xl;
}
</style>
