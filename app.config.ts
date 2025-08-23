import { defineAppConfig } from "nuxt/app";

export default defineAppConfig({
  title: "My website",
  ui: {
    colors: {
      primary: { 500: "#B8462F" }, // Your custom primary color for light theme
      secondary: "#5a5a5a"
    }
  }
});
