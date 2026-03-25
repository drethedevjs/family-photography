<script lang="ts" setup>
import imageHelper from "@/utils/ImageHelper";
import {
  avoidPhrases,
  brandColors,
  fonts,
  styleNotes,
  voiceTraits
} from "~/data/brandData";
import type HfImageData from "~/interfaces/IHfImageData";

useHead({ title: "Brand Guidelines — Honey & Flare" });

// Fetch logos from Cloudinary
const { data: primaryLogos } =
  await imageHelper.getImageAndTagData("logos/primary");
const { data: secondaryLogos } =
  await imageHelper.getImageAndTagData("logos/secondary");

// ── Copy utility ─────────────────────────────────────────────────────────────
const copiedHex = ref<string | null>(null);

async function copyHex(hex: string) {
  await navigator.clipboard.writeText(hex);
  copiedHex.value = hex;
  setTimeout(() => (copiedHex.value = null), 2000);
}

// ── Logo helpers ─────────────────────────────────────────────────────────────
function partitionLogos(logos: HfImageData[] | undefined) {
  if (!logos) return { transparent: [], colored: [] };
  return logos.reduce(
    (
      acc: { transparent: HfImageData[]; colored: HfImageData[] },
      img: HfImageData
    ) => {
      if (img.tags?.includes("transparent")) {
        acc.transparent.push(img);
      } else {
        acc.colored.push(img);
      }
      return acc;
    },
    { transparent: [], colored: [] }
  );
}

const primary = partitionLogos(primaryLogos.value);
const secondary = partitionLogos(secondaryLogos.value);
</script>

<template>
  <main class="min-h-screen bg-cream text-charcoal font-body">
    <!-- ── Page Header ──────────────────────────────────────────────────── -->
    <section class="border-b border-honey/30 px-8 py-16 text-center">
      <p
        class="font-heading text-xs tracking-[0.3em] uppercase text-primary mb-3"
      >
        Internal Reference
      </p>
      <h1 class="font-brand text-6xl md:text-7xl text-charcoal">
        Brand Guidelines
      </h1>
      <p class="font-body text-lg text-charcoal/60 mt-4 max-w-xl mx-auto">
        Honey & Flare Family Photography — CSRA's natural light studio
      </p>
    </section>

    <div class="max-w-6xl mx-auto px-6 py-16 space-y-24">
      <!-- ── Primary Logos ────────────────────────────────────────────── -->
      <section>
        <h2>Primary Logo</h2>

        <!-- Transparent background -->
        <LogoGroup
          title="Transparent Background"
          bg-class="bg-charcoal/5 border border-charcoal/10"
        >
          <a
            :key="i"
            :href="img.metadata.url"
            v-for="(img, i) in primary.transparent"
            rel="noopener noreferrer"
            target="_blank"
          >
            <NuxtImg
              provider="cloudinary"
              :src="img.fileName"
              class="h-28 max-w-md object-contain"
              format="avif"
              quality="80"
            />
          </a>
          <EmptyState v-if="!primary.transparent.length" />
        </LogoGroup>

        <!-- Colored background -->
        <LogoGroup
          title="On Background"
          bg-class="bg-primary border border-primary"
        >
          <NuxtImg
            v-for="(img, i) in primary.colored"
            :key="i"
            provider="cloudinary"
            :src="img.fileName"
            class="h-28 w-auto object-contain"
            format="avif"
            quality="80"
          />
          <EmptyState v-if="!primary.colored.length" dark />
        </LogoGroup>
      </section>

      <!-- ── Secondary Logos ──────────────────────────────────────────── -->
      <section>
        <h2>Secondary Logo</h2>

        <LogoGroup
          title="Transparent Background"
          bg-class="bg-charcoal/5 border border-charcoal/10"
        >
          <NuxtImg
            v-for="(img, i) in secondary.transparent"
            :key="i"
            provider="cloudinary"
            :src="img.fileName"
            class="h-28 w-auto object-contain"
            format="avif"
            quality="80"
          />
          <EmptyState v-if="!secondary.transparent.length" />
        </LogoGroup>

        <LogoGroup
          title="On Background"
          bg-class="bg-honey border border-honey"
        >
          <NuxtImg
            v-for="(img, i) in secondary.colored"
            :key="i"
            provider="cloudinary"
            :src="img.fileName"
            class="h-28 w-auto object-contain"
            format="avif"
            quality="80"
          />
          <EmptyState v-if="!secondary.colored.length" dark />
        </LogoGroup>
      </section>

      <!-- ── Colors ───────────────────────────────────────────────────── -->
      <section>
        <h2>Brand Colors</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <div
            v-for="color in brandColors"
            :key="color.hex"
            class="rounded-xl overflow-hidden shadow-sm border border-charcoal/10 group"
          >
            <!-- Swatch -->
            <div class="h-24 w-full" :style="{ backgroundColor: color.hex }" />
            <!-- Meta -->
            <div
              class="bg-white px-3 py-3 flex items-center justify-between gap-2"
            >
              <div class="min-w-0">
                <p
                  class="font-heading text-xs font-semibold text-charcoal truncate"
                >
                  {{ color.label }}
                </p>
                <p class="font-body text-xs text-charcoal/50 font-mono">
                  {{ color.hex }}
                </p>
              </div>
              <!-- Copy button -->
              <UButton
                :icon="
                  copiedHex === color.hex
                    ? 'i-heroicons-check'
                    : 'i-heroicons-clipboard-document'
                "
                size="xs"
                variant="ghost"
                :color="copiedHex === color.hex ? 'primary' : 'neutral'"
                :aria-label="`Copy ${color.hex}`"
                class="shrink-0 transition-colors"
                @click="copyHex(color.hex)"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- ── Typography ────────────────────────────────────────────────── -->
      <section>
        <h2>Typography</h2>
        <div class="space-y-6">
          <div
            v-for="font in fonts"
            :key="font.name"
            class="rounded-xl border border-charcoal/10 bg-white overflow-hidden"
          >
            <!-- Sample -->
            <div class="px-8 py-8 border-b border-charcoal/10 bg-cream/50">
              <p
                class="text-3xl md:text-4xl text-charcoal leading-snug"
                :style="font.style"
              >
                {{ font.sample }}
              </p>
            </div>
            <!-- Meta -->
            <div class="px-8 py-5 flex flex-wrap items-center gap-x-8 gap-y-2">
              <div>
                <p
                  class="font-heading text-[10px] tracking-widest uppercase text-charcoal/40 mb-0.5"
                >
                  Typeface
                </p>
                <p class="font-heading text-sm font-semibold text-charcoal">
                  {{ font.name }}
                </p>
              </div>
              <div>
                <p
                  class="font-heading text-[10px] tracking-widest uppercase text-charcoal/40 mb-0.5"
                >
                  Role
                </p>
                <p class="font-heading text-sm text-charcoal">
                  {{ font.role }}
                </p>
              </div>
              <div>
                <p
                  class="font-heading text-[10px] tracking-widest uppercase text-charcoal/40 mb-0.5"
                >
                  Class
                </p>
                <code
                  class="text-xs bg-cream px-2 py-1 rounded font-mono text-primary"
                  >{{ font.variable }}</code
                >
              </div>
              <p class="w-full font-body text-sm text-charcoal/50 mt-1">
                {{ font.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ── Brand Voice ───────────────────────────────────────────────── -->
      <section>
        <h2>Brand Voice</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Traits -->
          <div class="rounded-xl border border-charcoal/10 bg-white p-6">
            <p
              class="font-heading text-xs tracking-widest uppercase text-charcoal/40 mb-5"
            >
              Tone Traits
            </p>
            <ul class="space-y-4">
              <li v-for="v in voiceTraits" :key="v.trait" class="flex gap-3">
                <span
                  class="mt-0.5 h-2 w-2 rounded-full bg-primary shrink-0 translate-y-1.5"
                />
                <div>
                  <span class="font-heading text-sm font-semibold text-charcoal"
                    >{{ v.trait }} —
                  </span>
                  <span class="font-body text-sm text-charcoal/70">{{
                    v.description
                  }}</span>
                </div>
              </li>
            </ul>
          </div>
          <!-- Avoid -->
          <div class="rounded-xl border border-charcoal/10 bg-white p-6">
            <p
              class="font-heading text-xs tracking-widest uppercase text-charcoal/40 mb-5"
            >
              Words &amp; Phrases to Avoid
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="phrase in avoidPhrases"
                :key="phrase"
                class="inline-flex items-center gap-1.5 bg-primary/10 text-primary font-heading text-xs px-3 py-1.5 rounded-full"
              >
                <UIcon name="i-heroicons-x-mark" class="w-3 h-3" />
                {{ phrase }}
              </span>
            </div>
            <p class="font-body text-xs text-charcoal/40 mt-5">
              Avoid urgency triggers, superlatives, and anything that feels like
              pressure. Let the work speak.
            </p>
          </div>
        </div>
      </section>

      <!-- ── Photography Style ─────────────────────────────────────────── -->
      <section>
        <h2>Photography Style</h2>
        <div
          class="rounded-xl border border-charcoal/10 bg-white overflow-hidden"
        >
          <div
            v-for="(note, i) in styleNotes"
            :key="note.label"
            class="flex gap-6 px-7 py-5"
            :class="
              i < styleNotes.length - 1 ? 'border-b border-charcoal/10' : ''
            "
          >
            <span
              class="font-heading text-xs font-semibold tracking-widest uppercase text-primary w-20 shrink-0 pt-0.5"
            >
              {{ note.label }}
            </span>
            <p class="font-body text-sm text-charcoal/70 leading-relaxed">
              {{ note.note }}
            </p>
          </div>
        </div>
      </section>
    </div>
    <!-- /max-w -->
  </main>
</template>
