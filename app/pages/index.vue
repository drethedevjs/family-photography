<script setup lang="ts">
import pageDescription from "@/data/pageDescription";
import imageHelper from "~/utils/ImageHelper";

const { data: andreImageData } = await imageHelper.getCloudinaryImageData(
  "andre"
);
const { data: homeImageData } = await imageHelper.getImageData("home");

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
  <h1 class="hidden">Augusta, GA Family Photography</h1>
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
        I'm a family photographer in Augusta, GA who loves to create vibrant
        family portraits for families all over. Because of this, my desire for
        you is to get you to “have your moment”. That “moment” I'm referring to
        is when you finally receive those beautiful portraits that you have been
        anxiously waiting for. This moment doesn't just come once. Rather, it
        gets to be relived throughout generations when your children and
        grandchildren can look at those photographs and remember some
        heart-warming past times.
      </p>

      <NuxtLink to="about" class="about-btn">
        <button class="ctv-btn">Tell Me More</button>
      </NuxtLink>
    </div>
  </div>

  <OfferingsPane
    v-if="homeImageData !== undefined"
    :imageData="homeImageData"
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
      @ctvphotovideo
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
  @apply mt-5 w-3/4 mx-auto;
}
</style>
