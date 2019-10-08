<template>
  <div id="app" :class="colorClass">
    <info-screen v-if="showInfoScreen" />
    <home-screen v-if="!showInfoScreen" />
  </div>
</template>

<script>
import 'typeface-roboto'
import homeScreen from './home-screen.vue'
import infoScreen from './info-screen.vue'

export default {
  components: {
    homeScreen,
    infoScreen
  },
  computed: {
    colorClass() {
      const mode = this.$store.state.selectedMode
      if (mode) {
        return {
          [`color-${mode}`]: true
        }
      }
      return {
        'color-off': true
      }
    },
    showInfoScreen() {
      return this.$store.state.showInfoScreen
    }
  }
}
</script>

<style>
html {
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  background-color: black;
  overflow: hidden;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

/* Hide kweb scroolbar */
#element::-webkit-scrollbar {
  display: none;
}

.color-cool {
  color: #6ad0ff;
}

.color-heat {
  color: #fda64e;
}

.color-humidity {
  color: rgb(147,60,255);
}

.color-fan {
  color: #75ff65;
}

.color-hotwater {
  color: aqua;
}

.color-off {
  color: #e0e5e8;
}

/* Prevent dragging screen text when tapping */
.unselectable {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: -moz-none; /* Firefox */
  -ms-user-select: none; /* IE */
  user-select: none; /* Standard */
}
</style>
