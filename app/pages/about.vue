<script lang="ts" setup>
import imageHelper from "@/utils/ImageHelper";
import { ref } from "vue";
import pageDescription from "~/data/pageDescription";
import AboutPoint from "../components/AboutPoint.vue";

const { data: tomfamData } = await imageHelper.getCloudinaryImageData("tomfam");
const imageData = ref(tomfamData);

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
    ogUrl: "https://honeyandflare.photo",
    ogType: "website",
    ogTitle: ogTitle,
    ogDescription: description,
    ogImage:
      "https://res.cloudinary.com/ctvphotovideo/image/upload/v1774316989/augusta-ga-family-photographer-investment-full-flare.jpg",
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
        <div id="color-overlay"></div>
        <div id="intro-overlay">
          <h1>Augusta, GA Family Photographer</h1>
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
    <div id="about-body">
      <div class="lg:w-1/2 text-center grid grid-cols-1">
        <AboutPoint>
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
        <AboutPoint>
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
        <AboutPoint>
          <template #heading>Let's Meet</template>
          <template #blurb>
            Augusta. Evans. Aiken. North Augusta. Wherever golden hour finds
            your family — I'll be there. Sessions start at $350. Spots fill fast
            in spring and fall.
          </template>
        </AboutPoint>
      </div>
      <div class="w-1/2 px-10 py-20 hidden lg:flex">
        <NuxtImg
          v-if="imageData !== undefined"
          class="rounded-lg object-cover"
          :src="imageHelper.getCloudinaryImageSrc(imageData, '3')"
          format="avif"
          quality="80"
          provider="cloudinary"
          placeholder
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
@reference "tailwindcss";

#about-body {
  @apply flex lg:p-20 p-8;
}
#intro-overlay {
  @apply absolute inset-0 flex flex-col lg:w-3/5 w-4/5 mx-auto text-white justify-center font-light drop-shadow-lg;
}

#color-overlay {
  @apply absolute inset-0 lg:bg-red-400 bg-red-600 opacity-25;
}

h1 {
  @apply lg:text-5xl text-3xl mb-5;
}

p {
  @apply text-white mb-16 md:font-thin font-semibold text-shadow-2xs;
}
</style>
