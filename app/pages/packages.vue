<script lang="ts" setup>
import pageDescription from "~/data/pageDescription";

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
      "https://cdn.ctvphotovideo.com/investment:augusta-ga-family-photographer-investment-1.jpg",
    ogLocale: "en_US",
    ogSiteName: "Honey & Flare Family Photography",
    twitterCard: "summary",
    robots: "index, follow"
  });
}
</script>
<template>
  <div class="hf-container">
    <h1 class="text-4xl text-center mb-10 mt-5">Investment</h1>
    <p class="mb-10 text-xl">
      Your family will only be this age once. Let's capture the warmth, the
      laughter, and the honey-sweet chaos of your family life right now—moments
      you'll treasure for generations. Each session takes place outdoors during
      golden hour, where natural light creates the most beautiful, timeless
      portraits.
    </p>
    <div
      id="packages"
      class="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center"
    >
      <div class="border-primary border-2 p-10 rounded-2xl">
        <h2 class="package-header">Honey Half</h2>
        <p class="package-price text-3xl font-brand text-honey mb-4">$350</p>
        <p class="text-base">30 minutes</p>
        <p class="package-text">
          Perfect for families who want beautiful portraits without a long time
          commitment. We'll capture authentic moments during the most beautiful
          light of the day.
        </p>
        <ul class="package-list">
          <li>30 minutes of golden hour photography</li>
          <li>One outdoor location of your choice</li>
          <li>20 professionally edited high-resolution images</li>
          <li>Online gallery for viewing and sharing</li>
          <li>Print release for personal use</li>
          <li>Wardrobe and location guidance</li>
        </ul>
      </div>
      <div class="border-primary border-2 p-10 rounded-2xl">
        <h2 class="package-header">Full Flare</h2>
        <p class="package-price">$425</p>
        <p class="text-base">60 minutes</p>
        <p class="package-text">
          Our most popular session. More time means we can relax, explore
          multiple spots, and really capture your family's unique dynamic and
          story.
        </p>
        <ul class="package-list">
          <li>60 minutes of golden hour photography</li>
          <li>1-2 outdoor locations for variety</li>
          <li>40 professionally edited high-resolution images</li>
          <li>Online gallery for viewing and sharing</li>
          <li>Print release for personal use</li>
          <li>Wardrobe and location guidance</li>
          <li>Complimentary styled 5x7 print set (5 images)</li>
        </ul>
      </div>
    </div>
    <div class="text-center mt-10">
      <p class="text-xl mb-5">
        Ready to preserve your family's story? Sessions book 2-3 weeks in
        advance during peak season (September-November and March-May).
      </p>
      <NuxtLink to="/contact" class="nf-btn">Book Your Session</NuxtLink>
    </div>
  </div>
</template>
