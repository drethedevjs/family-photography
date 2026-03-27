<script lang="ts" setup>
defineProps<{
  contactPaneTracker?: () => void;
}>();
</script>

<template>
  <section class="relative bg-cream overflow-hidden py-24 lg:py-32">
    <!-- Warm radial accents -->
    <div
      class="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-30"
      style="background: radial-gradient(ellipse, #e8b75d 0%, transparent 70%)"
    />
    <div
      class="pointer-events-none absolute -bottom-16 -right-16 w-96 h-96 rounded-full opacity-20"
      style="background: radial-gradient(ellipse, #b8462f 0%, transparent 70%)"
    />

    <div class="relative max-w-3xl mx-auto px-6 text-center">
      <!-- Eyebrow -->
      <p
        class="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-5"
      >
        Let's Get Together
      </p>

      <!-- Headline -->
      <h2
        class="font-brand text-6xl lg:text-8xl text-charcoal leading-none mb-4"
      >
        Contact Me
      </h2>

      <!-- Tagline -->
      <div class="flex items-center justify-center gap-4 mb-12">
        <div class="h-px w-8 bg-honey" />
        <p class="font-heading text-xs tracking-[0.25em] uppercase text-honey">
          Natural Light · Timeless Warmth
        </p>
        <div class="h-px w-8 bg-honey" />
      </div>

      <!-- Body copy -->
      <p
        class="font-body text-charcoal/70 text-lg leading-relaxed max-w-xl mx-auto mb-12"
      >
        Great photographs start with comfort. If your kids are stiff and you're
        nervous, I can feel it through the lens — and so can the camera. Before
        the session even starts, my job is to make sure you feel like yourself.
        That's why families come back: not just because they love their images,
        but because they actually
        <em class="font-brand text-xl not-italic text-primary">enjoyed</em>
        the experience of making them.
      </p>

      <!-- CTA -->
      <NuxtLink to="/contact" @click="contactPaneTracker?.()">
        <button class="nf-btn-transparent">Let's Talk</button>
      </NuxtLink>
    </div>
  </section>
</template>
