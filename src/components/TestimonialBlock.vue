<template>
  <div class="flex mb-10">
    <div class="w-3/5 mr-10">
      <slot name="image"></slot>
    </div>
    <div class="w-2/5">
      <p class="font-bold"><slot name="reviewer"></slot></p>
      <p><slot name="location"></slot></p>
    </div>
  </div>
  <slot name="review"></slot>
</template>
