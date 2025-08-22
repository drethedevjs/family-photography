// import { createHead } from "unhead/client";
import { createHead } from "@unhead/vue/client";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";

const head = createHead({
  init: [
    {
      title: "Augusta, GA Family Photographer",
      titleTemplate: "%s | Capture the Vision",
      htmlAttrs: { lang: "en" },
    },
  ],
});

const app = createApp(App);

app.use(router);
app.use(head);
app.mount("#app");
