<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="15" y1="9" x2="9" y2="15"></line>
    <line x1="9" y1="9" x2="15" y2="15"></line>
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
