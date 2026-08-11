<script lang="ts" setup>
const submitted = ref(false);

useHead({
  title: "Flare Families | Honey & Flare Family Photography",
  meta: [
    {
      name: "description",
      content:
        "Flare Families is a seasonal portfolio collaborator call for CSRA families: apply for a complimentary golden hour photo session with Honey & Flare, a CSRA family photographer, in exchange for marketing usage rights."
    }
  ]
});

if (import.meta.server) {
  useSeoMeta({
    ogUrl: "https://honeyandflare.photo/flare-families",
    ogType: "website",
    ogTitle: "Flare Families | Honey & Flare Portfolio Collaborator",
    ogDescription:
      "A seasonal call for CSRA families: apply for a complimentary golden hour session in exchange for marketing usage rights.",
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
  <main class="min-h-screen bg-cream text-charcoal font-body">
    <!-- ── Hero / Announcement ──────────────────────────────────────────── -->
    <section class="px-6 py-20 md:py-28 text-center border-b border-honey/30">
      <p class="nf-eyebrow mb-4">Portfolio Collaborator</p>
      <h1 class="font-brand text-5xl md:text-6xl lg:text-7xl text-charcoal">
        Flare Families
      </h1>
      <div class="flex items-center justify-center mt-6">
        <div class="nf-divider" />
      </div>

      <div class="max-w-2xl mx-auto mt-10 space-y-6 text-left">
        <p
          class="font-body text-base md:text-lg leading-relaxed text-charcoal/80"
        >
          This season, I'm inviting a few CSRA families to do something a little
          different with me.
        </p>
        <p
          class="font-body text-base md:text-lg leading-relaxed text-charcoal/80"
        >
          I'm looking for families in that specific stretch of life: parents
          with kids still young enough to complain about a photo session, but
          old enough to actually listen when you ask them to walk toward the
          light one more time. I want to spend an evening in the golden hour
          with you, in your favorite park or your own backyard, doing whatever
          your family actually does on a Tuesday.
        </p>
        <p
          class="font-body text-base md:text-lg leading-relaxed text-charcoal/80"
        >
          In exchange, I'm asking for permission to share the images here and on
          my website. That's the whole trade.
        </p>
        <p
          class="font-body text-base md:text-lg leading-relaxed text-charcoal/80"
        >
          If that sounds like your people, tell me a little about your family
          below.
        </p>
      </div>
    </section>

    <!-- ── Application Form ─────────────────────────────────────────────── -->
    <section v-if="!submitted" class="max-w-2xl mx-auto px-6 py-16">
      <div class="nf-card">
        <FlareFamiliesForm @success="submitted = true" />
      </div>
    </section>

    <!-- ── Thank You ─────────────────────────────────────────────────────── -->
    <section v-else class="max-w-5xl mx-auto px-6 py-16">
      <ThankYouMessage />
    </section>
  </main>
</template>
