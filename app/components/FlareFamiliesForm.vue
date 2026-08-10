<script lang="ts" setup>
import emailService from "@/services/emailService";

const formEl = ref<HTMLFormElement | null>(null);
const status = ref<"idle" | "submitting" | "success" | "error">("idle");
const errorMessage = ref("");

async function handleSubmit() {
  if (!formEl.value) return;

  status.value = "submitting";
  errorMessage.value = "";

  const formData = new FormData(formEl.value);
  const response = await emailService.sendEmail(formData);

  if (response.isSuccess) {
    status.value = "success";
    formEl.value.reset();
    return;
  }

  errorMessage.value = response.message;
  status.value = "error";
}
</script>

<template>
  <div>
    <div v-if="status === 'success'" class="nf-alert-success">
      <UIcon
        name="i-heroicons-check-circle"
        class="w-5 h-5 text-sage shrink-0"
      />
      <p>Thanks! Your application is in. I'll be in touch soon.</p>
    </div>

    <form
      v-else
      ref="formEl"
      class="space-y-6"
      enctype="multipart/form-data"
      @submit.prevent="handleSubmit"
    >
      <input
        type="hidden"
        name="_subject"
        value="New Flare Families Application"
      />
      <!-- Honeypot field for spam prevention, kept hidden from real visitors -->
      <input
        type="text"
        name="_gotcha"
        class="hidden"
        tabindex="-1"
        autocomplete="off"
      />

      <div v-if="status === 'error'" class="nf-alert-error">
        <UIcon
          name="i-heroicons-exclamation-circle"
          class="w-5 h-5 text-primary shrink-0"
        />
        <p>{{ errorMessage }}</p>
      </div>

      <!-- 1 & 2: Parent name(s), Email -->
      <div class="grid sm:grid-cols-2 gap-6">
        <div>
          <label class="nf-label" for="ff-name">Parent Name(s)</label>
          <input
            id="ff-name"
            class="nf-input"
            type="text"
            name="name"
            autocomplete="name"
            required
          />
        </div>
        <div>
          <label class="nf-label" for="ff-email">Email</label>
          <input
            id="ff-email"
            class="nf-input"
            type="email"
            name="email"
            autocomplete="email"
            required
          />
        </div>
      </div>

      <!-- 3 & 4: Phone, Location -->
      <div class="grid sm:grid-cols-2 gap-6">
        <div>
          <label class="nf-label" for="ff-phone">Phone</label>
          <input
            id="ff-phone"
            class="nf-input"
            type="tel"
            name="phone"
            autocomplete="tel"
            required
          />
        </div>
        <div>
          <label class="nf-label" for="ff-location">Location</label>
          <select
            id="ff-location"
            class="nf-input"
            name="location"
            required
          >
            <option value="" disabled selected>Select your area</option>
            <option value="Augusta">Augusta</option>
            <option value="Evans">Evans</option>
            <option value="Martinez">Martinez</option>
            <option value="Grovetown">Grovetown</option>
            <option value="Aiken SC">Aiken SC</option>
            <option value="North Augusta SC">North Augusta SC</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <!-- 5: Who's in your family -->
      <div>
        <label class="nf-label" for="ff-family">Who's in Your Family?</label>
        <input
          id="ff-family"
          class="nf-input"
          type="text"
          name="familyMembers"
          placeholder="Names and ages of everyone who'd be in the session"
          required
        />
      </div>

      <!-- 6: Typical Tuesday evening -->
      <div>
        <label class="nf-label" for="ff-evening"
          >What Does a Typical Tuesday Evening Usually Look Like for Your
          Family?</label
        >
        <textarea
          id="ff-evening"
          class="nf-input resize-none"
          name="typicalEvening"
          rows="4"
          required
        />
      </div>

      <!-- 8: Availability -->
      <div>
        <label class="nf-label" for="ff-availability"
          >What Times/Days Generally Work for Your Family?</label
        >
        <input
          id="ff-availability"
          class="nf-input"
          type="text"
          name="availability"
          required
        />
      </div>

      <!-- 9: Marketing usage consent -->
      <div>
        <p class="nf-label">
          Are You Open to a Complimentary Session in Exchange for Full
          Marketing Usage of the Images (Website, Instagram, Facebook, Print
          Marketing)?
        </p>
        <div class="flex items-center gap-8 mt-1">
          <label class="flex items-center gap-2 font-body text-charcoal">
            <input
              type="radio"
              name="marketingConsent"
              value="Yes"
              class="accent-primary"
              required
            />
            Yes
          </label>
          <label class="flex items-center gap-2 font-body text-charcoal">
            <input
              type="radio"
              name="marketingConsent"
              value="No"
              class="accent-primary"
              required
            />
            No
          </label>
        </div>
      </div>

      <!-- 10: Anything else -->
      <div>
        <label class="nf-label" for="ff-notes"
          >Anything Else You'd Like Me to Know?</label
        >
        <textarea
          id="ff-notes"
          class="nf-input resize-none"
          name="additionalNotes"
          rows="3"
          placeholder="Optional"
        />
      </div>

      <button
        type="submit"
        class="nf-btn-sm"
        :disabled="status === 'submitting'"
      >
        {{ status === "submitting" ? "Sending..." : "Submit Application" }}
      </button>
    </form>
  </div>
</template>
