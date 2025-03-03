<template>
  <p id="question">
    <slot name="question"></slot>
  </p>

  <p id="answer">
    <slot name="answer"></slot>
  </p>
</template>

<style scoped>
#question {
  @apply text-7xl mb-5;
}
#answer {
  @apply text-3xl;
}
</style>
