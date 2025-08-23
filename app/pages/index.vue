<script setup lang="ts">
import pageDescription from "@/data/pageDescription";
import imageHelper from "~/utils/ImageHelper";

const { data: andreData } = await imageHelper.getImageData("andre");
const { data: homeData } = await imageHelper.getImageData("home");
const andreImageData = ref(andreData.value);
const homeImageData = ref(homeData.value);

const { description } = pageDescription.find(pd => pd.pageName === "home")!;
useHead({
  meta: [{ name: "description", content: description }]
});

useSeoMeta({
  ogUrl: "https://ctvphotovideo.com",
  ogType: "website"
});
</script>

<template>
  <HeroSlideShow />
  <main id="homeApp">
    <div class="flex">
      <div class="w-2/5">
        <img
          v-if="andreImageData !== undefined"
          :src="imageHelper.getImageSrc(andreImageData, 'andre-1')"
          class="object-cover h-full w-full"
          alt="Andre smiling holding two cameras."
        />
      </div>
      <div class="w-3/5 flex flex-col place-content-center text-center mb-10">
        <h2>Family Photographer</h2>
        <h3 class="text-primary">Andre Thomas</h3>

        <p class="about-txt">
          I'm a family photographer in Augusta, GA who loves to create vibrant
          family portraits for families all over. Because of this, my desire for
          you is to get you to “have your moment”. That “moment” I'm referring
          to is when you finally receive those beautiful portraits that you have
          been anxiously waiting for. This moment doesn't just come once.
          Rather, it gets to be relived throughout generations when your
          children and grandchildren can look at those photographs and remember
          some heart-warming past times.
        </p>

        <button class="about-btn ctv-btn">Tell Me More</button>
      </div>
    </div>

    <OfferingsPane
      v-if="homeImageData !== undefined"
      :imageData="homeImageData"
    />

    <TestimonialPane
      v-if="homeImageData !== undefined"
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
  </main>
</template>

<style scoped>
@reference "tailwindcss";

.about-btn {
  @apply ml-auto mt-20 mr-32;
}

h2 {
  @apply mt-10 text-4xl tracking-widest font-light;
}

h3 {
  @apply mt-5 text-7xl font-semibold;
}

.about-txt {
  @apply mt-5 text-3xl w-3/4 mx-auto leading-10;
}
</style>
