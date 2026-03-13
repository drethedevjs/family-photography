<script lang="ts" setup>
import { ref } from "vue";
import imageHelper from "~/utils/ImageHelper";

const { data: logoData } = await imageHelper.getImageData("logo");
const logoImageData = ref(logoData);
</script>

<template>
  <header>
    <nav class="navbar bg-base-100 dark:bg-primary pb-5">
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
            class="gap-10 mt-4 menu-horizontal px-1 indent-0 font-family-heading"
          >
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/investment">Investment</NuxtLink></li>
            <li id="home-logo" class="font-family-brand text-4xl! text-center">
              <NuxtLink to="/">Honey & Flare </NuxtLink>
            </li>
            <li><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </div>
        <div class="flex lg:hidden">
          <p id="home-logo" class="font-family-brand text-4xl text-center">
            <NuxtLink to="/">Honey & Flare</NuxtLink>
          </p>
        </div>
      </div>
      <div class="navbar-end"></div>
    </nav>
  </header>
</template>
