<script lang="ts" setup>
useHead({ title: "Component Library — Honey & Flare" });
useSeoMeta({ robots: "noindex, nofollow" });

const modalOpen = ref(false);
</script>

<template>
  <main class="min-h-screen bg-cream text-charcoal font-body">
    <!-- ── Page Header ──────────────────────────────────────────────────── -->
    <section class="border-b border-honey/30 px-8 py-16 text-center">
      <p class="nf-eyebrow mb-3">Internal Reference</p>
      <h1 class="font-brand text-6xl md:text-7xl text-charcoal">
        Component Library
      </h1>
      <p class="font-body text-lg text-charcoal/60 mt-4 max-w-xl mx-auto">
        Reusable pieces built from the Honey &amp; Flare brand guidelines
      </p>
      <NuxtLink
        to="/brand"
        class="inline-flex items-center gap-2 mt-6 font-heading text-xs tracking-[0.2em] uppercase text-honey/70 hover:text-honey transition-colors"
      >
        <span>&larr; Brand Guidelines</span>
      </NuxtLink>
    </section>

    <div class="max-w-6xl mx-auto px-6 py-16 space-y-24">
      <!-- ── Buttons ──────────────────────────────────────────────────── -->
      <section>
        <h2>Buttons</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="nf-card flex flex-col items-start gap-4">
            <button class="nf-btn">Tell Me More</button>
            <code class="text-xs bg-cream px-2 py-1 rounded font-mono text-primary"
              >.nf-btn</code
            >
          </div>
          <div class="nf-card flex flex-col items-start gap-4">
            <button class="nf-btn-transparent">Let's Talk</button>
            <code class="text-xs bg-cream px-2 py-1 rounded font-mono text-primary"
              >.nf-btn-transparent</code
            >
          </div>
          <div class="nf-card flex flex-col items-start gap-4">
            <button class="nf-btn-sm">Book Me</button>
            <code class="text-xs bg-cream px-2 py-1 rounded font-mono text-primary"
              >.nf-btn-sm</code
            >
          </div>
          <div class="rounded-xl bg-charcoal p-6 flex flex-col items-start gap-4">
            <button class="nf-btn-transparent">On Dark Backgrounds</button>
            <code class="text-xs bg-white/10 px-2 py-1 rounded font-mono text-honey"
              >.nf-btn-transparent</code
            >
          </div>
          <div class="nf-card flex flex-col items-start gap-4">
            <button class="nf-btn opacity-40 pointer-events-none" disabled>
              Unavailable
            </button>
            <code class="text-xs bg-cream px-2 py-1 rounded font-mono text-primary"
              >.nf-btn + disabled</code
            >
          </div>
        </div>
      </section>

      <!-- ── Section Headers ──────────────────────────────────────────── -->
      <section>
        <h2>Section Headers</h2>
        <p class="font-body text-sm text-charcoal/50 -mt-3 mb-6">
          The eyebrow + brand headline + divider pattern used to open the
          About, Testimonial, and Contact panes.
        </p>
        <div class="grid lg:grid-cols-2 gap-6">
          <!-- Light variant -->
          <div class="nf-card">
            <p class="nf-eyebrow mb-4">Behind the Camera</p>
            <h3 class="font-brand text-4xl text-charcoal leading-none mb-6">
              Left Aligned
            </h3>
            <div class="flex items-center gap-4">
              <div class="nf-divider" />
              <div class="h-px flex-1 bg-honey/30" />
            </div>
          </div>
          <!-- Dark variant -->
          <div class="rounded-xl bg-charcoal p-6">
            <p class="font-heading text-xs tracking-[0.3em] uppercase text-honey mb-4">
              From the Families
            </p>
            <h3 class="font-brand text-4xl text-cream leading-none mb-6">
              On Dark Sections
            </h3>
            <div class="flex items-center gap-4">
              <div class="h-px w-10 bg-honey" />
              <div class="h-px flex-1 bg-cream/10" />
            </div>
          </div>
          <!-- Centered / bookended variant -->
          <div class="nf-card text-center lg:col-span-2">
            <p class="nf-eyebrow mb-4">Let's Get Together</p>
            <h3 class="font-brand text-4xl text-charcoal leading-none mb-4">
              Centered &amp; Bookended
            </h3>
            <div class="flex items-center justify-center gap-4">
              <div class="h-px w-8 bg-honey" />
              <p class="font-heading text-xs tracking-[0.25em] uppercase text-honey">
                Natural Light &middot; Timeless Warmth
              </p>
              <div class="h-px w-8 bg-honey" />
            </div>
          </div>
        </div>
      </section>

      <!-- ── Cards ────────────────────────────────────────────────────── -->
      <section>
        <h2>Cards</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Testimonial card -->
          <div
            class="group relative rounded-2xl overflow-hidden bg-charcoal border border-cream/10"
          >
            <div class="relative h-40 overflow-hidden bg-blush/40" />
            <div class="px-7 pb-8 pt-6">
              <div
                class="font-brand text-7xl leading-none text-honey/30 select-none -mt-4 mb-2"
                aria-hidden="true"
              >
                "
              </div>
              <p class="font-body text-cream/75 leading-relaxed text-sm">
                Andre made our kids laugh so hard we forgot the camera was
                even there.
              </p>
              <div class="flex items-center gap-4 mt-6">
                <div class="h-px w-6 bg-primary" />
                <p class="font-heading text-xs tracking-widest uppercase text-honey">
                  The Whitfield Family
                </p>
              </div>
              <div class="flex gap-1 mt-3">
                <span v-for="s in 5" :key="s" class="text-amber text-sm">&#9733;</span>
              </div>
            </div>
          </div>

          <!-- Pricing card -->
          <div id="packages" class="package-card">
            <h3 class="package-header">Honey Half</h3>
            <p class="font-brand text-3xl text-honey mb-4">$350</p>
            <p class="package-text">A 30 minute golden-hour session for one location.</p>
            <ul class="package-list">
              <li>30 minute session</li>
              <li>One location</li>
              <li>25+ edited images</li>
            </ul>
          </div>

          <!-- Simple content card -->
          <div class="nf-card">
            <p class="font-heading text-xs tracking-widest uppercase text-charcoal/40 mb-5">
              Tone Traits
            </p>
            <ul class="space-y-4">
              <li class="flex gap-3">
                <span class="mt-0.5 h-2 w-2 rounded-full bg-primary shrink-0 translate-y-1.5" />
                <div>
                  <span class="font-heading text-sm font-semibold text-charcoal">Warm — </span>
                  <span class="font-body text-sm text-charcoal/70"
                    >Write like a trusted friend, never corporate.</span
                  >
                </div>
              </li>
            </ul>
          </div>

          <!-- Image feature card -->
          <div class="relative flex">
            <div
              class="hidden sm:block absolute top-6 left-6 w-full h-[calc(100%-1.5rem)] rounded-2xl border border-honey/40"
              style="background-color: #e8c5b5; opacity: 0.35"
            />
            <div class="relative sm:m-6 sm:ml-0 rounded-2xl overflow-hidden w-full h-48 bg-sage/30 shadow-2xl" />
          </div>
        </div>
      </section>

      <!-- ── Badges & Tags ────────────────────────────────────────────── -->
      <section>
        <h2>Badges &amp; Tags</h2>
        <div class="nf-card flex flex-wrap items-center gap-3">
          <span class="nf-badge">
            <UIcon name="i-heroicons-x-mark" class="w-3 h-3" />
            Book NOW
          </span>
          <span class="nf-badge-honey">Golden Hour</span>
          <span class="nf-badge-sage">Available</span>
          <div class="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-lg border border-honey/30">
            <span class="w-2 h-2 rounded-full bg-primary shrink-0" />
            <span class="font-heading text-xs tracking-widest uppercase text-charcoal">Augusta &middot; Aiken &middot; CSRA</span>
          </div>
        </div>
      </section>

      <!-- ── Alerts ───────────────────────────────────────────────────── -->
      <section>
        <h2>Alerts</h2>
        <div class="space-y-4">
          <div class="nf-alert-success">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-sage shrink-0" />
            <p>Your session request was sent — I'll reply within a day or two.</p>
          </div>
          <div class="nf-alert-info">
            <UIcon name="i-heroicons-information-circle" class="w-5 h-5 text-honey shrink-0" />
            <p>Golden hour sessions book quickly in the fall — reach out early.</p>
          </div>
          <div class="nf-alert-error">
            <UIcon name="i-heroicons-exclamation-circle" class="w-5 h-5 text-primary shrink-0" />
            <p>That date is unavailable. Try picking another day on the calendar.</p>
          </div>
        </div>
      </section>

      <!-- ── Form Fields ──────────────────────────────────────────────── -->
      <section>
        <h2>Form Fields</h2>
        <div class="nf-card grid sm:grid-cols-2 gap-6 max-w-2xl">
          <div>
            <label class="nf-label" for="demo-name">First Name</label>
            <input id="demo-name" class="nf-input" placeholder="Jane" />
          </div>
          <div>
            <label class="nf-label" for="demo-email">Email Address</label>
            <input id="demo-email" class="nf-input" placeholder="jane@example.com" />
          </div>
          <div class="sm:col-span-2">
            <label class="nf-label" for="demo-message">Message</label>
            <textarea
              id="demo-message"
              class="nf-input resize-none"
              rows="3"
              placeholder="Let me know what you're looking for!"
            />
          </div>
        </div>
      </section>

      <!-- ── Modal ────────────────────────────────────────────────────── -->
      <section>
        <h2>Modal</h2>
        <div class="nf-card flex items-center justify-between gap-6 flex-wrap">
          <p class="font-body text-sm text-charcoal/60 max-w-md">
            A lightweight, brand-styled dialog for quick confirmations or
            inquiries — see <code class="text-xs bg-cream px-2 py-1 rounded font-mono text-primary">BrandModal.vue</code>.
          </p>
          <button class="nf-btn-sm" @click="modalOpen = true">Open Modal</button>
        </div>

        <BrandModal
          v-model="modalOpen"
          eyebrow="Quick Question"
          title="Golden Hour or Overcast?"
        >
          <p>
            Both make for beautiful light, but golden hour gives that warm,
            glowing look I'm known for. Want help picking a time that works
            for your family?
          </p>
          <template #footer="{ close }">
            <button class="nf-btn-sm" @click="close">Sounds Good</button>
            <button
              class="font-heading text-xs tracking-widest uppercase text-charcoal/50 hover:text-primary transition-colors"
              @click="close"
            >
              Maybe Later
            </button>
          </template>
        </BrandModal>
      </section>
    </div>
    <!-- /max-w -->
  </main>
</template>
