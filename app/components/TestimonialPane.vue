<script lang="ts" setup>
import imageHelper from "@/utils/ImageHelper";
import type { _Object } from "@aws-sdk/client-s3";
import TestimonialBlock from "./TestimonialBlock.vue";

const props = defineProps<{
  imageData: _Object[];
}>();
</script>
<template>
  <div class="mx-auto p-20 flex border-b-2">
    <div class="side">
      <h2>Kind Words</h2>
      <TestimonialBlock>
        <template #image>
          <NuxtImg
            provider="cloudflare"
            format="avif"
            :src="imageHelper.getImageSrc(props.imageData, '4')"
            class="rounded-md"
            alt="A family of four are bunched together. The son is sitting on dad's shoulders and a little girl lays on moms chest."
          />
        </template>

        <template #reviewer>Yamel Patterson-Munoz</template>
        <!-- <template #location>Lexington, KY</template> -->
        <template #review>
          <p>
            Andre is one of the best photographers that we have had. He is
            incredible with my kids, full of patience, respectful, adaptable and
            very responsible. We have chosen him for two years in a row and we
            can't wait for many years to come. Thanks Andre because you are very
            amicable, relatable and just overall an awesome person. PS. We LOVE
            the pictures too!
          </p>
        </template>
      </TestimonialBlock>
    </div>
    <div class="side">
      <TestimonialBlock>
        <template #image>
          <NuxtImg
            provider="cloudflare"
            format="avif"
            :src="imageHelper.getImageSrc(props.imageData, '2')"
            class="rounded-md"
            alt="A mom and dad hold their new born while smiling at the camera."
          />
        </template>

        <template #reviewer>Serriea Johnson</template>
        <!-- <template #location>Lexington, KY</template> -->
        <template #review>
          <p>
            Andre did an amazing job on our family fall pics. Our son was not
            feeling the best so he was not in a good mood. The pictures came out
            so good. Andre and his wife are dear friends of ours so we are
            always happy to have him take our pics. I don't know if we outdid
            our 2016 fall family photo shoot but we came really close. 😂 Thank
            you again for taking our pictures. They are great! 👍🏾👌🏾5 stars
          </p>
        </template>
      </TestimonialBlock>

      <a
        href="https://www.facebook.com/ctvphotovideo/reviews"
        target="_blank"
        class="more-testimonials-link"
      >
        View More Testimonials
      </a>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

h2 {
  @apply text-7xl mb-28;
}

.side {
  @apply w-1/2 flex flex-col 2xl:p-20 md:p-10;
}

.more-testimonials-link {
  @apply uppercase mt-24 text-xl tracking-widest hover:scale-105 transition-all animate-pulse;
}
</style>
