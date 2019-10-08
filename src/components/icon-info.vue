<template>
  <svg
    :width="size"
    :height="size"
    class="icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12" y2="8"></line>
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
  stroke-width: 1.8;
}
</style>
