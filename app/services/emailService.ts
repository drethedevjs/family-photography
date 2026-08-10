import type HfResponse from "@/interfaces/IHfResponse";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/maewernq";

const emailService = {
  sendEmail: async (formData: FormData): Promise<HfResponse> => {
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const message =
          data?.errors
            ?.map((e: { message: string }) => e.message)
            .join(" ") ||
          "Something went wrong. Please try again or email me directly.";

        return { isSuccess: false, message };
      }

      return { isSuccess: true, message: "Email sent!" };
    } catch (error) {
      return {
        isSuccess: false,
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again or email me directly."
      };
    }
  }
};

export default emailService;
