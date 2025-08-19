import { createHead } from "unhead/client";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";

declare global {
  interface Window {
    __UNHEAD__: ReturnType<typeof createHead>;
  }
}

window.__UNHEAD__ = createHead();

const app = createApp(App);

app.use(router);

app.mount("#app");
