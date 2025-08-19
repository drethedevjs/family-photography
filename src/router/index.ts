import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import { createRouter, createWebHistory, type RouteLocationNormalizedGeneric } from "vue-router";
import HomeView from "../views/HomeView.vue";
import InvestmentView from "../views/InvestmentView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/investment",
      name: "investment",
      component: InvestmentView,
    },
    // {
    //   path: "/portfolio",
    //   name: "portfolio",
    //   component: PortfolioView,
    // },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
  ],
});

router.afterEach((to: RouteLocationNormalizedGeneric) => {
  if (to.name && to.name !== "home")
    document.title = `${to.name.toString().toUpperCase()} | Capture the Vision`;
  else if (to.name?.toString().toLowerCase() === "home")
    document.title = `Augusta, GA Family Photographer | Capture the Vision`;
});

export default router;
