<script lang="ts" setup>
import type CtvImageData from "~/interfaces/ICtvImageData";
import imageHelper from "~/utils/ImageHelper";

const props = defineProps<{
  imageData: CtvImageData[] | undefined;
}>();
</script>

<template>
  <section id="offerings" class="flex">
    <div class="w-7/12 hidden place-items-center md:grid">
      <div class="w-3/4 my-32 mx-auto overflow-hidden relative">
        <NuxtImg
          provider="cloudinary"
          format="avif"
          :src="
            imageHelper.getCloudinaryImageSrc(props.imageData, 'weismueller')
          "
          class="object-cover h-full w-full rounded-lg"
          alt="A mom and dad talking while walking away from the camera and their small kids lead them."
          placeholder
          quality="80"
        />

        <div class="absolute inset-0 bg-black opacity-25 rounded-lg"></div>

        <div id="lifestyle-overlay" class="absolute inset-0 flex flex-col p-7">
          <h2 id="lifestyle-overlay-heading">Lifestyle Photography</h2>
          <p id="lifestyle-overlay-text">
            Any idea, any location. Bring your best mood and I'll do the rest.
          </p>
        </div>
      </div>
    </div>
    <div class="md:w-5/12 bg-green-100 overflow-hidden">
      <div class="relative w-full h-full object-cover">
        <NuxtImg
          provider="cloudinary"
          format="avif"
          :src="
            imageHelper.getCloudinaryImageSrc(props.imageData, 'nithyanandam')
          "
          class="w-full h-full object-cover"
          alt="A dad holding baby girl in the air while mom hugs him from behind."
          placeholder
          quality="80"
        />

        <div class="absolute inset-0 bg-black opacity-25"></div>

        <div id="session-overlay" class="absolute inset-0">
          <h2
            id="session-overlay-heading"
            class="md:w-4/5 text-center lg:text-left"
          >
            Full & Half Sessions
          </h2>
          <p id="session-overlay-text">
            Choose a session that suits your needs. A shorter session. Maybe
            longer.
          </p>
          <div
            class="flex bottom-0 absolute lg:static place-self-center md:place-self-auto"
          >
            <NuxtLink to="contact" @click="bookASessionTracker">
              <button class="ctv-btn session-btn">Book a Session</button>
            </NuxtLink>
            <NuxtLink to="investment" @click="offeringDetailsTracker">
              <button class="ctv-btn session-btn lg:ml-10 ml-5">Details</button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "tailwindcss";

.session-btn {
  @apply lg:mt-10 mb-5 border-0 shadow-none;
}

#lifestyle-overlay,
#session-overlay {
  @apply lg:pl-16 lg:pt-20 pt-8;
}

#lifestyle-overlay-heading,
#session-overlay-heading {
  @apply mb-3 font-semibold drop-shadow-lg;
}

#lifestyle-overlay-text,
#session-overlay-text {
  @apply text-5xl drop-shadow-lg text-center lg:text-left leading-16;
}

#lifestyle-overlay-heading,
#lifestyle-overlay-text,
#session-overlay-heading,
#session-overlay-text {
  @apply text-white;
}

#offerings {
  @apply flex w-full;
}

h2 {
  @apply mt-10 text-4xl tracking-widest font-light;
}

h3 {
  @apply mt-5 text-7xl font-semibold;
}
</style>
