<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 46 46"
    class="icon"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    >
    <path d="m 20.258073,20.064081 7.867277,1.475523 a 8,8 0 1 1 -9.334546,6.386106 z" />
    <path d="m 18.354155,20.222934 -1.475523,7.867275 a 8,8 0 1 1 -6.386107,-9.334545 z" />
    <path d="M 19.03475,18.354155 11.167474,16.878632 A 8,8 0 1 1 20.50202,10.492525 Z" />
    <path d="M 20.975476,18.603067 22.451,10.735791 a 8,8 0 1 1 6.386105,9.334546 z" />
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
  /* TODO: Fix icon svg so this css alignment isn't needed */
  padding-top: 1vh;
  pointer-events: none;
  stroke-width: 1.8;
}
</style>
