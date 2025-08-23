<script lang="ts" setup>
import { ref } from "vue";
import imageHelper from "~/utils/ImageHelper";

const { data: logoData } = await imageHelper.getImageData("logo");
const logoImageData = ref(logoData);
</script>

<template>
  <header>
    <nav class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
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
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
      </div>
      <div class="navbar-center hidden lg:flex">
        <div class="flex flex-col items-center">
          <NuxtLink to="/">
            <img
              v-if="logoImageData !== undefined"
              :src="imageHelper.getImageSrc(logoImageData, 'family')"
              width="150"
              height="150"
              alt="Capture the Vision logo."
            />
          </NuxtLink>
          <ul class="gap-10 mt-4 menu-horizontal px-1 indent-0">
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/investment">Investment</NuxtLink></li>
            <li>
              <a
                href="https://www.instagram.com/ctvphotovideo/"
                target="_blank"
              >
                Portfolio
              </a>
            </li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </div>
      </div>
      <div class="navbar-end"></div>
    </nav>
  </header>
</template>

<style scoped>
@reference "tailwindcss"

li {
  @apply uppercase text-primary hover:text-secondary transition;
}
</style>
