<template>
  <p id="question">
    <slot name="question"></slot>
  </p>

  <p id="answer">
    <slot name="answer"></slot>
  </p>
</template>

<style scoped>
@reference "tailwindcss";

#question {
  @apply lg:text-7xl text-4xl lg:mb-5 mb-3 lg:leading-20 leading-11 text-orange-700;
}

#answer {
  @apply lg:text-3xl text-xl;
}
</style>
