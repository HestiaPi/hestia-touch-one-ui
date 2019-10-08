<template>
  <svg
    :width="size"
    :height="size"
    class="icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    >
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      default: '60%',
      type: String
    }
  }
}
</script>

<style scoped>
.icon {
  pointer-events: none;
  stroke-width: 1.2;
}
</style>
