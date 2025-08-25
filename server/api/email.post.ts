export default defineEventHandler(async event => {
  const config = useRuntimeConfig();
  const BASE_URL =
    import.meta.env.MODE === "development"
      ? "http://localhost:2222"
      : config.baseUrlMailer;
  console.log("boom", event);
});
