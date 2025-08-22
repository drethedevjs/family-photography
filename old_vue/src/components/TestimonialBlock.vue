<template>
  <div class="flex lg:flex-row flex-col mb-10">
    <div class="2xl:w-3/5 mb-5 w-full mr-10">
      <slot name="image"></slot>
    </div>
    <div class="2xl:w-2/5 w-full">
      <p class="font-bold"><slot name="reviewer"></slot></p>
      <p><slot name="location"></slot></p>
    </div>
  </div>
  <slot name="review"></slot>
</template>
