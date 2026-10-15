<script lang="ts" setup>
import pageDescription from "~/data/pageDescription";

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
  <div class="hf-container">
    <div class="text-center mb-10 mt-5">
      <p class="nf-eyebrow mb-3">Session Options</p>
      <h1
        class="font-brand text-5xl lg:text-7xl text-charcoal dark:text-cream leading-none"
      >
        Packages
      </h1>
      <div class="nf-divider mx-auto mt-6" />
    </div>
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
      <div class="package-card">
        <h2 class="package-header">Honey Half</h2>
        <p class="package-price text-3xl font-brand text-honey mb-4">$350</p>
        <p class="text-base">30 minutes sunset or sunrise</p>
        <p class="package-text">
          Perfect for families who want beautiful portraits without a long time
          commitment. We'll capture authentic moments during the most beautiful
          light of the day.
        </p>
        <ul class="package-list">
          <li>30 minutes of golden hour photography</li>
          <li>1 outdoor location of your choice</li>
          <li>5 family members included</li>
          <li>$15 each additional family member</li>
          <li>20 professionally edited high-resolution images</li>
          <li>Online gallery for viewing and sharing</li>
          <li>Print release for personal use</li>
          <li>Additional images are available for purchase</li>
        </ul>
      </div>
      <div class="package-card">
        <h2 class="package-header">Full Flare</h2>
        <p class="package-price">$425</p>
        <p class="text-base">60 minutes sunset or sunrise</p>
        <p class="package-text">
          Extra time and flexibility for families with young kids, multiple
          locations in mind, or anyone who wants room to breathe during their
          session.
        </p>
        <ul class="package-list">
          <li>60 minutes of golden hour photography</li>
          <li>1-2 outdoor locations for variety</li>
          <li>5 family members included</li>
          <li>$15 each additional family member</li>
          <li>40 professionally edited high-resolution images</li>
          <li>Online gallery for viewing and sharing</li>
          <li>Print release for personal use</li>
          <li>Additional images are available for purchase</li>
        </ul>
      </div>
    </div>
    <div class="text-center mt-16 lg:mt-20">
      <div class="flex items-center justify-center gap-4 mb-8">
        <div class="h-px w-8 bg-honey" />
        <p
          class="font-heading text-xs tracking-[0.25em] uppercase text-honey! lg:text-xs!"
        >
          Natural Light · Timeless Warmth
        </p>
        <div class="h-px w-8 bg-honey" />
      </div>
      <p class="text-xl mb-5">
        Ready to preserve your family's story? Sessions book 2-3 weeks in
        advance during peak season (September-November and March-May).
      </p>
      <NuxtLink to="/contact" class="nf-btn">Book Your Session</NuxtLink>
    </div>
  </div>
</template>
