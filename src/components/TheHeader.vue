<script lang="ts" setup>
import imageHelper from "@/utils/ImageHelper";
import type { _Object } from "@aws-sdk/client-s3";
import { onBeforeMount, ref } from "vue";

const logoImageData = ref<_Object[]>();
onBeforeMount(async () => {
  logoImageData.value = await imageHelper.getImageData("logo");
});
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
          <RouterLink to="/">
            <img
              v-if="logoImageData !== undefined"
              :src="imageHelper.getImageSrc(logoImageData, 'family')"
              width="150"
              height="150"
            />
          </RouterLink>
          <ul class="gap-10 mt-4 menu-horizontal px-1 indent-0">
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/investment">Investment</RouterLink></li>
            <!-- <li><RouterLink to="/portfolio">Portfolio</RouterLink></li> -->
            <li><RouterLink to="/contact">Contact</RouterLink></li>
          </ul>
        </div>
      </div>
      <div class="navbar-end"></div>
    </nav>
  </header>
</template>

<style scoped>
li {
  @apply uppercase text-primary hover:text-secondary transition;
}
</style>
