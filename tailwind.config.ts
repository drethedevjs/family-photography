/** @type {import('tailwindcss').Config} */
// import daisyui from "daisyui";
import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: ["./index.html", "./app/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B8462F", // Your custom primary color for light theme
        secondary: "#5a5a5a"
      }
    }
  }
  // plugins: [daisyui],
  // daisyui: {
  //   themes: ["light"]
  // }
};
