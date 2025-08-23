<script lang="ts" setup>
import ContactFormData from "@/classes/ContactFormData";
import { toTypedSchema } from "@vee-validate/yup";
import { Field, useForm } from "vee-validate";
import { reactive, ref } from "vue";
import { number, object, string } from "yup";

import emailService from "@/services/emailService";

const formData = reactive<ContactFormData>(new ContactFormData());
const showNotification = ref<boolean>(false);

const { resetForm, handleSubmit, isSubmitting, errors } =
  useForm<ContactFormData>({
    validationSchema: toTypedSchema(
      object({
        firstName: string()
          .transform(x => x.trim())
          .required("First name is required"),
        lastName: string().required("Last name is required"),
        email: string().email().required("Must be a valid email address."),
        message: string().min(15, "Must be at least 15 characters."),
        numOfSubjects: number().min(1).required("Must put family size.")
      })
    )
  });

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const submitForm = handleSubmit(
  async (values: ContactFormData) => {
    try {
      const response = await emailService.sendEmail(values);
      if (!response.isSuccess) throw new Error(response.message);

      showNotification.value = true;

      setTimeout(() => {
        showNotification.value = false;
      }, 5000);

      resetForm();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(
        error?.message ??
          "There was an issue with sending the form. Please try again."
      );
    }

    scrollToTop();
  },
  () => scrollToTop()
);
</script>

<template>
  <section>
    <div
      class="notification-container"
      :class="showNotification ? 'flex' : 'hidden'"
    >
      <p class="notification">✅ Form Sent!</p>
    </div>
    <div class="container mx-auto px-5">
      <form @submit.prevent="submitForm" class="flex flex-col">
        <div class="space-y-12">
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="md:col-span-3 sm:col-span-full">
              <label for="firstName">First name</label>
              <div class="mt-2">
                <Field
                  name="firstName"
                  id="firstName"
                  autocomplete="given-name"
                  v-model.lazy.trim="formData.firstName"
                  placeholder="First Name"
                />
                <small class="error-message">{{ errors.firstName }}</small>
              </div>
            </div>

            <div class="md:col-span-3 sm:col-span-full">
              <label for="lastName">Last name</label>
              <div class="mt-2">
                <Field
                  name="lastName"
                  id="lastName"
                  autocomplete="family-name"
                  v-model.lazy.trim="formData.lastName"
                  placeholder="Last Name"
                />
                <small class="error-message">{{ errors.lastName }}</small>
              </div>
            </div>

            <div class="col-span-full">
              <label for="phone">Phone</label>
              <div class="mt-2">
                <Field
                  name="phone"
                  id="phone"
                  autocomplete="phone"
                  type="phone"
                  v-model.lazy.trim="formData.phone"
                  placeholder="Phone"
                />
              </div>
            </div>

            <div class="col-span-full">
              <label for="email">Email address</label>
              <div class="mt-2">
                <Field
                  name="email"
                  id="email"
                  autocomplete="email"
                  type="email"
                  v-model.lazy.trim="formData.email"
                  placeholder="Email Address"
                />
                <small class="error-message">{{ errors.email }}</small>
              </div>
            </div>

            <div class="col-span-full">
              <label for="numOfSubjects">Family Size</label>
              <div class="mt-2">
                <Field
                  name="numOfSubjects"
                  id="numOfSubjects"
                  type="number"
                  min="1"
                  v-model.lazy="formData.numOfSubjects"
                  placeholder="Family Size"
                />
                <small class="error-message">{{ errors.numOfSubjects }}</small>
              </div>
            </div>

            <div class="col-span-full">
              <label for="message">Message</label>
              <div class="mt-2">
                <Field
                  name="message"
                  id="message"
                  autocomplete="message"
                  as="textarea"
                  v-model.lazy.trim="formData.message"
                  placeholder="Let me know what you're looking for!"
                />
                <small class="error-message">{{ errors.message }}</small>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          :disabled="isSubmitting"
          class="ctv-btn mt-5 ml-auto"
        >
          Send
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped>
@reference "tailwindcss";

textarea {
  @apply border-b-2  w-full h-36 p-5 text-2xl;
}

.contact-container {
  @apply container mx-auto xl:px-60 px-10 mt-10;
}

label {
  @apply sm:text-3xl text-xl font-semibold hidden;
}

small {
  @apply text-xl;
}

input {
  @apply h-24 pl-5 sm:text-4xl text-2xl block w-full py-1.5 border-b-2 border-x-0 border-t-0;
}

h1 {
  @apply text-center sm:text-8xl text-5xl font-bold uppercase border-b-2 pb-3 mb-10;
}

.error-message {
  @apply text-red-600 mt-1 inline-block;
}

.notification-container {
  @apply fixed justify-center inset-x-0 bg-gradient-to-r from-orange-700 to-white rounded-lg p-5 md:w-52 w-3/4 mx-auto border-2 md:ml-10;
}

.notification {
  @apply text-xl animate-bounce;
}
</style>
