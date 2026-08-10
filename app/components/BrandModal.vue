<script lang="ts" setup>
const props = defineProps<{
  modelValue: boolean;
  eyebrow?: string;
  title?: string;
}>();

const emit = defineEmits<{ (e: "update:modelValue", value: boolean): void }>();

const close = () => {
  emit("update:modelValue", false);
};

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === "Escape") close();
};

watch(
  () => props.modelValue,
  isOpen => {
    if (isOpen) {
      document.addEventListener("keydown", onKeydown);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", onKeydown);
      document.body.style.overflow = "";
    }
  }
);

onBeforeUnmount(() => {
  document.removeEventListener("keydown", onKeydown);
  document.body.style.overflow = "";
});
</script>

<template>
  <Teleport to="body">
    <Transition name="nf-modal-fade">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center px-4"
      >
        <div
          class="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
          @click="close"
        />

        <div
          class="relative w-full max-w-md rounded-2xl bg-cream shadow-2xl overflow-hidden"
          role="dialog"
          aria-modal="true"
        >
          <div
            class="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-20"
            style="
              background: radial-gradient(
                ellipse at center,
                #d4a574 0%,
                #e8b75d 50%,
                transparent 75%
              );
            "
          />

          <button
            class="absolute top-5 right-5 text-charcoal/40 hover:text-primary transition-colors"
            aria-label="Close"
            @click="close"
          >
            <UIcon name="i-heroicons-x-mark" class="w-5 h-5" />
          </button>

          <div class="relative px-8 py-10">
            <p v-if="eyebrow" class="nf-eyebrow mb-3">{{ eyebrow }}</p>
            <h3 v-if="title" class="font-brand text-3xl text-charcoal mb-4">
              {{ title }}
            </h3>
            <div class="font-body text-charcoal/70 leading-relaxed space-y-4">
              <slot />
            </div>
            <div class="mt-8 flex items-center gap-4">
              <slot name="footer" :close="close" />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.nf-modal-fade-enter-active,
.nf-modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.nf-modal-fade-enter-from,
.nf-modal-fade-leave-to {
  opacity: 0;
}
</style>
