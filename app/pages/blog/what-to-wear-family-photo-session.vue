<script setup lang="ts">
import pageDescriptions from "../../data/pageDescription";

const router = useRouter();
const pageName = router.currentRoute.value.fullPath
  .replace("/blog/", "")
  .replaceAll("-", " ");

const { ogTitle, description } = pageDescriptions.find(
  pd => pd.pageName === pageName
)!;

useHead({
  title: `${pageName.toUpperCase()} | Honey & Flare`,
  meta: [{ name: "description", content: "description" }]
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
  <article class="max-w-6xl mx-auto py-10">
    <header class="mb-10">
      <p class="nf-eyebrow mb-4">Session Prep Guide</p>
      <h1
        class="font-brand text-5xl lg:text-7xl text-charcoal dark:text-cream leading-none mb-4"
      >
        Preparing for Your Family Session
      </h1>
      <div class="nf-divider mb-6" />
      <h2 class="font-brand text-3xl">The Ultimate Style & Prep Guide</h2>
    </header>
    <p>
      Hi there! I'm so excited to get you in front of my lens. To make sure we
      capture the best possible versions of you and your family, I've put
      together this guide to help you prepare. A little bit of planning goes a
      long way in creating images you'll love forever!
    </p>

    <section>
      <h2>General Style Philosophy</h2>
      <p>
        My big recommendation?
        <strong>Go dressy or semi-business casual.</strong> Think special
        events, upscale parties, or a "black-tie light" vibe. This is the
        perfect excuse to wear something you wouldn't normally reach for on a
        Tuesday.
      </p>
      <div class="my-6 space-y-5">
        <div>
          <p class="nf-label dark:text-cream!">Color Palette</p>
          <div class="flex flex-wrap gap-2 mb-2">
            <span class="nf-badge-sage">Red</span>
            <span class="nf-badge-sage">Purple</span>
            <span class="nf-badge-sage">Royal blue</span>
            <span class="nf-badge-sage">Emerald green</span>
            <span class="nf-badge-sage">Fuschia</span>
          </div>
          <p class="text-xl">Bold, solid colors photograph beautifully.</p>
        </div>
        <div>
          <p class="nf-label dark:text-cream!">Colors to Avoid</p>
          <div class="flex flex-wrap gap-2 mb-2">
            <span class="nf-badge">Beige</span>
            <span class="nf-badge">White</span>
            <span class="nf-badge">Light pink</span>
          </div>
          <p class="text-xl">Pale tones like these can wash you out.</p>
        </div>
      </div>
      <ul>
        <li>
          <strong>Patterns & Logos:</strong> Avoid heavy patterns, stripes, or
          big logos. We want the focus on your faces, not your shirt's branding!
        </li>
        <li>
          <strong>Fit Matters:</strong> Slim or fitted clothing is highly
          recommended. Loose clothing tends to add visual width on camera.
        </li>
      </ul>
    </section>

    <section
      class="nf-card lg:p-10 p-6 [&_p]:text-charcoal! [&_li]:text-charcoal [&_h3]:text-charcoal"
    >
      <h3 class="font-brand text-4xl mb-3">For the Ladies</h3>
      <p>
        Long flowing dresses, cocktail dresses, or traditional attire like saris
        and ao dai look stunning and add great movement to your photos.
      </p>
      <ul>
        <li>
          <strong>Denim:</strong> If you prefer jeans, go with a dark, slim-fit
          pair to accentuate your silhouette.
        </li>
        <li>
          <strong>Footwear:</strong> If you're rocking heels, definitely bring a
          pair of sandals for walking between setups.
        </li>
        <li>
          <strong>The Details:</strong> Minimalist nails with solid colors work
          best.
        </li>
      </ul>
    </section>

    <section
      class="nf-card lg:p-10 p-6 [&_p]:text-charcoal! [&_li]:text-charcoal [&_h3]:text-charcoal"
    >
      <h3 class="font-brand text-4xl mb-3">For the Gentlemen</h3>
      <p>
        Blazers, sports coats, fitted suits, or a crisp button-down with a vest
        are all winning looks.
      </p>
      <ul>
        <li>
          <strong>The "Iron" Rule:</strong> Please ensure shirts are dry-cleaned
          or ironed. Wrinkles are notoriously difficult to "Photoshop out" and
          can distract from a great shot!
        </li>
        <li>
          <strong>The Belt Rule:</strong> Keep it classic—match your belt color
          to your shoe color (brown with brown, black with black). Unless you're
          the Fonzworth Bentley of fashion, consistency is key!
        </li>
        <li>
          <strong>Accessories:</strong> Bold ties or bow-ties are great accents.
          If wearing a white shirt, please pair it with a blazer or vest so the
          white doesn't dominate the frame.
        </li>
        <li>
          <strong>Grooming:</strong> Don't forget the chapstick! Dry lips show
          up clearly in portraits. Also, keep hands clean and nails trimmed, as
          we may do some close-up shots.
        </li>
      </ul>
    </section>

    <section>
      <h2>Logistics & Comfort</h2>
      <h3>Accessories & Props</h3>
      <p>
        Keep wearable accessories minimal. Most importantly:
        <strong>Empty your pockets!</strong>
        Leave cell phones and keys in a bag or coat pocket so they don't create
        awkward bulges in your photos.
      </p>

      <blockquote class="my-6 border-l-4 border-honey pl-4 italic">
        <strong>The "Go-Bag":</strong> Bring a tote with bobby pins, hairspray,
        a brush, lipstick, a mirror, and oil-remover wipes.
      </blockquote>
      <p>
        <strong>Props:</strong> Instruments, blankets, or flowers are fantastic
        for adding personality, but don't feel pressured to bring them if they
        don't feel like "you."
      </p>
    </section>

    <section>
      <h3>Fueling Up</h3>
      <p>
        The "Goldilocks" rule applies here: don't eat a massive meal right
        before (hello, bloating), but don't arrive starving (hello, "hangry"
        faces). A light snack about two hours before is perfect.
      </p>
      <p>
        <strong>Good ideas:</strong> Apples, bananas, peanut butter on toast, or
        carrots and hummus. Stay hydrated with water and avoid sugary drinks!
      </p>
    </section>

    <section class="nf-alert-info flex-col! items-start! lg:p-8! p-6!">
      <h2 class="font-brand text-3xl">Deep Breath...</h2>
      <p>
        If all of this feels like a lot, just take a deep breath.
        <strong>It's going to be great.</strong>
        My goal is to make sure you have fun and feel comfortable. If you've
        seen my reviews, you know I make the process easy. We're going to get
        some incredible images together!
      </p>
    </section>
  </article>
</template>

<style scoped>
@reference "tailwindcss";

section {
  @apply my-5;
}

ul {
  @apply text-2xl ml-8 mt-3 space-y-3;
}
</style>
