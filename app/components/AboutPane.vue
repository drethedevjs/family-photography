<script lang="ts" setup>
import imageHelper from "~/utils/ImageHelper";

const props = defineProps<{
  andreImageData: any;
  tellMeMoreTracker: () => void;
}>();
</script>

<template>
  <!-- ── Meet Andre Section ───────────────────────────────────────────────── -->
  <section class="relative bg-[#F5F1E8] overflow-hidden py-20 lg:py-5">
    <!-- Decorative background brushstroke blob -->
    <div
      class="pointer-events-none absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full opacity-20"
      style="
        background: radial-gradient(
          ellipse at center,
          #d4a574 0%,
          #e8b75d 50%,
          transparent 75%
        );
      "
    />
    <div
      class="pointer-events-none absolute bottom-0 left-10 w-72 h-72 rounded-full opacity-10"
      style="
        background: radial-gradient(
          ellipse at center,
          #b8462f 0%,
          transparent 70%
        );
      "
    />

    <div
      class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-12 lg:min-h-[85vh] items-stretch"
    >
      <!-- ── Image column ── -->
      <div class="lg:col-span-5 relative flex">
        <!-- Offset cream card behind image for depth -->
        <div
          class="hidden lg:block absolute top-10 left-8 w-full h-[calc(100%-2.5rem)] rounded-2xl border border-[#D4A574]/40"
          style="background-color: #e8c5b5; opacity: 0.35"
        />

        <!-- Image -->
        <div
          class="relative lg:m-10 lg:ml-0 rounded-2xl overflow-hidden w-full shadow-2xl"
        >
          <NuxtImg
            v-if="andreImageData !== undefined"
            provider="cloudinary"
            format="avif"
            :src="imageHelper.getCloudinaryImageSrc(andreImageData, 'home')"
            class="w-full h-72 lg:h-full object-cover object-top lg:flex hidden"
            alt="Andre smiling holding two cameras."
            placeholder
            quality="80"
          />
          <!-- Warm gradient overlay at bottom of image -->
          <div
            class="absolute bottom-0 left-0 right-0 h-32 lg:hidden"
            style="background: linear-gradient(to top, #f5f1e8, transparent)"
          />
        </div>

        <!-- Floating tag — "Augusta, GA" -->
        <div
          class="hidden lg:flex absolute bottom-16 -right-5 z-10 items-center gap-2 bg-white rounded-full px-4 py-2 shadow-lg border border-[#D4A574]/30"
        >
          <span class="w-2 h-2 rounded-full bg-[#B8462F] shrink-0" />
          <span
            class="font-heading text-xs tracking-widest uppercase text-[#3A3A3A]"
            >Augusta · Aiken · CSRA</span
          >
        </div>
      </div>

      <!-- ── Text column ── -->
      <div
        class="lg:col-span-7 flex flex-col justify-center px-6 lg:px-16 xl:px-20 lg:py-16"
      >
        <!-- Eyebrow -->
        <p
          class="font-heading text-xs tracking-[0.3em] uppercase text-[#B8462F] mb-4"
        >
          Behind the Camera
        </p>

        <!-- Name heading with brand font -->
        <h2
          class="font-brand text-5xl lg:text-6xl xl:text-7xl text-[#3A3A3A] leading-none mb-2"
        >
          Andre Thomas
        </h2>
        <p
          class="font-heading text-sm tracking-widest uppercase text-[#D4A574] mb-8 lg:mb-10"
        >
          Family Photographer
        </p>

        <!-- Divider -->
        <div class="flex items-center gap-4 mb-8">
          <div class="h-px w-10 bg-[#B8462F]" />
          <div class="h-px flex-1 bg-[#D4A574]/30" />
        </div>

        <!-- Body copy -->
        <div class="space-y-5 max-w-lg">
          <p class="font-body text-[#3A3A3A]/80 text-lg leading-relaxed">
            Some photographers capture smiles. I capture
            <em class="font-brand text-xl not-italic text-[#B8462F]"
              >evidence</em
            >. Evidence that your family laughed like this. That your kids were
            this small. That golden afternoon light fell exactly this way on
            exactly this day.
          </p>
          <p class="font-body text-[#3A3A3A]/70 leading-relaxed">
            I photograph families from Augusta to Aiken during golden hour —
            because that's when everything lines up. The result isn't just a
            portrait. It's the first page of an archive your grandchildren will
            open someday and feel like they know you.
          </p>
        </div>

        <!-- CTA -->
        <div class="mt-10 flex items-center gap-6">
          <NuxtLink to="/about" @click="tellMeMoreTracker">
            <button class="nf-btn">Tell Me More</button>
          </NuxtLink>
          <!-- Subtle secondary detail -->
          <span
            class="hidden sm:block font-heading text-xs tracking-widest uppercase text-[#3A3A3A]/30"
          >
            Natural Light · Golden Hour
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
