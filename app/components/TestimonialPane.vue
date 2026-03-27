<script lang="ts" setup>
import imageHelper from "@/utils/ImageHelper";
import { testimonials } from "~/data/testimonials";
import type HfImageData from "~/interfaces/IHfImageData";

const props = defineProps<{
  imageData: HfImageData[] | undefined;
}>();
</script>

<template>
  <section class="relative bg-charcoal overflow-hidden py-24 lg:py-32">
    <!-- Warm background accents -->
    <div
      class="pointer-events-none absolute top-0 right-0 w-96 h-96 opacity-10 rounded-full"
      style="background: radial-gradient(ellipse, #d4a574 0%, transparent 70%)"
    />
    <div
      class="pointer-events-none absolute bottom-0 left-0 w-72 h-72 opacity-10 rounded-full"
      style="background: radial-gradient(ellipse, #b8462f 0%, transparent 70%)"
    />

    <div class="relative max-w-7xl mx-auto px-6 lg:px-12">
      <!-- Section header -->
      <div
        class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 lg:mb-20"
      >
        <div>
          <p
            class="font-heading text-xs tracking-[0.3em] uppercase text-honey mb-3"
          >
            From the Families
          </p>
          <h2 class="font-brand text-6xl lg:text-7xl text-cream leading-none">
            Kind Words
          </h2>
        </div>
        <a
          href="https://www.facebook.com/honeyandflare/reviews"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center gap-3 font-heading text-xs tracking-[0.2em] uppercase text-honey/60 hover:text-honey transition-colors duration-300 shrink-0 pb-2"
        >
          <span>View All Reviews</span>
          <span
            class="h-px w-8 bg-honey/40 group-hover:w-14 group-hover:bg-honey transition-all duration-300"
          />
        </a>
      </div>

      <!-- Testimonials grid — scales naturally with more cards -->
      <div class="grid md:grid-cols-2 gap-6 lg:gap-8">
        <div
          v-for="(t, i) in testimonials"
          :key="i"
          class="group relative rounded-2xl overflow-hidden bg-cream/5 border border-cream/10 hover:border-honey/30 transition-colors duration-500"
        >
          <!-- Image — fixed height, full width, covers top -->
          <div class="relative h-72 lg:h-80 overflow-hidden">
            <NuxtImg
              provider="cloudinary"
              format="avif"
              :src="
                imageHelper.getCloudinaryImageSrc(props.imageData, t.imageIndex)
              "
              :alt="t.alt"
              placeholder
              quality="80"
              class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
            <!-- Gradient fade into card body -->
            <div
              class="absolute bottom-0 left-0 right-0 h-24"
              style="background: linear-gradient(to top, #2e2e2e, transparent)"
            />
          </div>

          <!-- Card body -->
          <div class="px-7 pb-8 pt-6">
            <!-- Opening quote mark -->
            <div
              class="font-brand text-7xl leading-none text-honey/30 select-none -mt-4 mb-2"
              aria-hidden="true"
            >
              "
            </div>

            <!-- Review text -->
            <p
              class="font-body text-cream/75 leading-relaxed text-sm lg:text-base"
            >
              {{ t.review }}
            </p>

            <!-- Divider + reviewer -->
            <div class="flex items-center gap-4 mt-6">
              <div class="h-px w-6 bg-primary" />
              <p
                class="font-heading text-xs tracking-widest uppercase text-honey"
              >
                {{ t.reviewer }}
              </p>
            </div>

            <!-- Star row -->
            <div class="flex gap-1 mt-3">
              <span v-for="s in 5" :key="s" class="text-amber text-sm">★</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
