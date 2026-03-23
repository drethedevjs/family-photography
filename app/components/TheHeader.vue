<script lang="ts" setup>
const isDark = ref(false);

onMounted(() => {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  isDark.value = mq.matches;

  // React to OS changes
  mq.addEventListener("change", e => {
    isDark.value = e.matches;
  });
});

const logoSrc = computed(() =>
  isDark.value
    ? "/images/logo/hf-logo-wht.png"
    : "/images/logo/hf-logo-orange.png"
);

const logoSrcMobile = computed(() =>
  isDark.value
    ? "/images/logo/mobile-logo-wht.png"
    : "/images/logo/mobile-logo-orange.png"
);
</script>

<template>
  <header>
    <nav class="navbar bg-base-100 dark:bg-primary lg:pb-5">
      <div class="navbar-start">
        <div class="dropdown">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost hide-on-desktop justify-between"
          >
            <!-- Hamburger menu -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            id="mobile-header"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-family-heading"
          >
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/investment">Investment</NuxtLink></li>
            <li><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <div class="items-center hide-on-mobile">
          <ul
            id="main-header"
            class="gap-10 mt-4 menu-horizontal px-1 indent-0 font-family-heading"
          >
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/investment">Investment</NuxtLink></li>
            <li class="text-center mx-16">
              <NuxtLink to="/">
                <NuxtImg
                  :src="logoSrc"
                  width="150px"
                  format="avif"
                  quality="80"
                  placeholder
                ></NuxtImg>
              </NuxtLink>
            </li>
            <li><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </div>
        <div class="flex lg:hidden">
          <NuxtLink to="/" class="text-primary dark:text-cream">
            <NuxtImg
              :src="logoSrcMobile"
              width="200px"
              format="avif"
              quality="80"
              placeholder
            ></NuxtImg>
          </NuxtLink>
        </div>
      </div>
      <div class="navbar-end"></div>
    </nav>
  </header>
</template>
