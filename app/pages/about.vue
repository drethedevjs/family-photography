<script lang="ts" setup>
import imageHelper from "@/utils/ImageHelper";
import { ref } from "vue";
import pageDescription from "~/data/pageDescription";
import AboutPoint from "../components/AboutPoint.vue";

const { data: tomfamData } = await imageHelper.getCloudinaryImageData("tomfam");
const { data: andreData } =
  await imageHelper.getCloudinaryImageDataByTag("about-page");
const imageData = ref(tomfamData);
const andreImageData = ref(andreData);

const router = useRouter();
const pageName = router.currentRoute.value.fullPath.replace("/", "");
const { description, ogTitle } = pageDescription.find(
  pd => pd.pageName === pageName
)!;
useHead({
  title: `${pageName.toUpperCase()} | Honey & Flare`,
  meta: [{ name: "description", content: description }]
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
    ogSiteName: "Honey and Flare Family Photography",
    twitterCard: "summary",
    robots: "index, follow"
  });
}
</script>

<template>
  <main>
    <h1 class="hidden">About</h1>
    <div id="about-intro">
      <div class="overflow-hidden lg:h-[900px] h-[680px] relative text-center">
        <NuxtImg
          v-if="imageData !== undefined"
          class="object-cover w-full h-full"
          :src="imageHelper.getCloudinaryImageSrc(imageData, '4')"
          format="avif"
          quality="80"
          provider="cloudinary"
          placeholder
        />
        <div id="color-overlay" class="bg-primary"></div>
        <div id="intro-overlay">
          <p
            class="nf-eyebrow text-cream! text-sm! font-semibold self-center rounded-full bg-charcoal/60 backdrop-blur-sm px-5 py-2 mb-5! border border-honey/60"
          >
            Behind the Camera
          </p>
          <h1 class="font-brand">Augusta, GA Family Photographer</h1>
          <p>
            I've spent years photographing families across the Augusta area —
            and the moment that never gets old is the one when a parent sees
            their gallery for the first time. Not because the images are
            beautiful (though they are). Because they suddenly see it: proof
            that this season of life actually happened. Proof that it was warm,
            and real, and worth preserving.
          </p>
          <small class="tracking-widest uppercase animate-pulse"
            >scroll to continue</small
          >
        </div>
      </div>
    </div>
    <section class="bg-cream text-center px-6 py-16 lg:py-24">
      <div class="nf-divider mx-auto mb-8" />
      <blockquote
        class="font-brand text-charcoal text-3xl lg:text-5xl leading-tight max-w-3xl mx-auto"
      >
        Some photographers capture smiles. I capture
        <em class="not-italic text-primary">evidence</em>.
      </blockquote>
      <p class="nf-eyebrow mt-6">Andre Thomas · Honey &amp; Flare</p>
    </section>
    <div id="about-body">
      <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AboutPoint number="01">
          <template #heading>What You Can Expect</template>
          <template #blurb>
            Being in front of a camera is awkward for almost everyone. I know
            this because I've been on that side too. So before we ever talk
            about light or location, I focus on making your family feel like
            themselves. Loose. Comfortable. Occasionally laughing at something
            ridiculous. That's when the best images happen — not when everyone's
            holding their breath waiting for the shutter click. My clients come
            back not just because they love their photos. They come back because
            they actually had a good time.
          </template>
        </AboutPoint>
        <div
          class="hidden lg:block relative rounded-xl overflow-hidden min-h-80"
        >
          <NuxtImg
            v-if="andreImageData !== undefined"
            class="absolute inset-0 object-cover object-top w-full h-full"
            :src="andreImageData[0]?.fileName"
            alt="Andre smiling holding two cameras."
            format="avif"
            quality="80"
            provider="cloudinary"
            placeholder
          />
        </div>
        <AboutPoint number="02">
          <template #heading>My "Why"</template>
          <template #blurb>
            My wife and I are eleven years into marriage with beautiful kids. I
            photograph our life together so that when our grandchildren arrive —
            children I may never meet — they can open an album and feel like
            they know exactly who we were. That's the real reason I do this for
            other families. Because someday, your kids will show your grandkids
            these photos. And everyone in the room will feel something. That's
            the heirloom. That's the point.
          </template>
        </AboutPoint>
        <AboutPoint number="03">
          <template #heading>Let's Meet</template>
          <template #blurb>
            Augusta. Evans. Aiken. North Augusta. Wherever golden hour finds
            your family — I'll be there. Sessions start at $350. Spots fill fast
            in spring and fall.
          </template>
        </AboutPoint>
      </div>
    </div>
  </main>
</template>

<style scoped>
@reference "tailwindcss";

#about-body {
  @apply flex place-content-center lg:p-20 p-8;
}

#intro-overlay {
  @apply absolute inset-0 flex flex-col lg:w-3/5 w-4/5 mx-auto text-white justify-center font-light drop-shadow-lg;
}

#color-overlay {
  @apply absolute inset-0 opacity-25;
}

h1 {
  @apply lg:text-6xl text-4xl leading-none mb-6;
}

#intro-overlay p {
  @apply text-white mb-16 md:font-thin font-semibold text-shadow-2xs;
}
</style>
