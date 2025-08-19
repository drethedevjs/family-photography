import pageDescriptions from "@/data/pageDescription";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import { useHead, useSeoMeta } from "@unhead/vue";
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

router.beforeEach((to: RouteLocationNormalizedGeneric) => {
  const pageData = pageDescriptions.find((pd) => pd.pageName === to.name);
  useHead({
    htmlAttrs: { lang: "en-US" },
    link: [
      {
        rel: "icon",
        href: "/favicon.ico",
        sizes: "16x16",
      },
      {
        rel: "me",
        href: "https://csra-web-services.vercel.app/about",
      },
    ],
  });

  const pageTitle =
    pageData?.pageName === "home"
      ? "Augusta, GA Family Photographer"
      : to.name?.toString().toUpperCase();

  useSeoMeta({
    title: pageTitle,
    author: "CSRA Web Dev Services",
    creator: "Andre Thomas",
    googleSiteVerification: "DKjTbSA6Q7FyD_ivEr-7oYb9g8ZY7q0unLzUSmhMloU",
    titleTemplate: "%s | Capture the Vision",
    description: pageData?.description,
    robots: "index, follow",
    charset: "utf-8",
    ogType: "website",
    ogTitle: "Augusta, GA Family Photographer",
    ogDescription:
      "Learn how to bake delicious, moist cupcakes with our easy-to-follow guide. Featuring tips and tricks for beginners.",
    twitterTitle: "Augusta, GA Family Photographer",
    twitterDescription:
      "Learn how to bake delicious, moist cupcakes with our easy-to-follow guide. Featuring tips and tricks for beginners.",

    // og image
    ogImage: {
      url: "/images/families/augusta-ga-family-photographer-forrest.jpg",
      width: 1200,
      height: 600,
      alt: "Family walking among the trees in autumn.",
      type: "image/png",
    },
    twitterImage: {
      url: "/images/families/augusta-ga-family-photographer-forrest.jpg",
      width: 1200,
      height: 600,
      alt: "Family walking among the trees in autumn.",
      type: "image/png",
    },
  });
});

export default router;
