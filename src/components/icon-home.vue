<template>
  <svg
    :width="size"
    :height="size"
    class="icon"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
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
  stroke-width: 1.4;
}
</style>
