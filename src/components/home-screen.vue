<template>
  <div id="home-screen">
    <power-settings-modal
      :mode="lastTappedMode"
      :on-option-select="powerModalCallback"
      v-if="showPowerModal"
      />
    <div class="top-container">
      <div v-if="showHeating"
        class="mode-btn heat"
        :class="{
          animated: modes.heat.running || modes.heat2.running,
          'color-heat': (selectedMode || lastTappedMode) === 'heat',
          'color-off': (selectedMode || lastTappedMode) !== 'heat'
        }"
        @click="openPowerModal('heat')">
        <!-- Switch out icon for 2nd-stage heating -->
        <icon-heat size="76%" v-if="!modes.heat2.running" />
        <icon-heat2 size="76%" v-if="modes.heat2.running" />
      </div>
      <div v-if="showCooling"
        class="mode-btn cool"
        :class="{
          animated: modes.cool.running,
          'color-cool': (selectedMode || lastTappedMode) === 'cool',
          'color-off': (selectedMode || lastTappedMode) !== 'cool'
        }"
        @click="openPowerModal('cool')">
        <icon-cool size="80%" />
      </div>
      <div v-if="showFan"
        class="mode-btn fan"
        :class="{
          animated: modes.fan.running,
          'color-fan': (selectedMode || lastTappedMode) === 'fan',
          'color-off': (selectedMode || lastTappedMode) !== 'fan'
        }"
        @click="openPowerModal('fan')">
        <icon-fan size="82%" />
      </div>
      <div v-if="showHumidity"
        class="mode-btn humidity"
        :class="{
          animated: modes.humidity.running,
          'color-humidity': (selectedMode || lastTappedMode) === 'humidity',
          'color-off': (selectedMode || lastTappedMode) !== 'humidity'
        }"
        @click="openPowerModal('humidity')">
        <icon-humidity size="82%" />
      </div>
      <div v-if="showHotWater"
        class="mode-btn hotwater"
        :class="{
          animated: modes.hotwater.running,
          'color-hotwater': (selectedMode || lastTappedMode) === 'hotwater',
          'color-off': (selectedMode || lastTappedMode) !== 'hotwater'
        }"
        @click="openPowerModal('hotwater')">
        <icon-hotwater size="70%" />
      </div>
      <div class="mode-btn info color-off" @click="toggleInfoScreen">
        <icon-info size="75%" />
      </div>
    </div>
    <div class="grid">
      <!-- row -->
      <div class="active-temp unselectable" v-html="targetTemperature">
      </div>
      <div class="grid-home-icon unselectable">
        <icon-home size="100%" />
      </div>
      <div class="current-temp unselectable">
        {{ currentTemperature }}<span class="symbol">°</span>
      </div>
      <!-- row -->
      <div v-if="showControls" class="value-controls unselectable">
        <div class="decrement" @click="decrement">-</div>
        <div class="increment" @click="increment">+</div>
      </div>
      <div class="grid-humidity-icon">
        <icon-humidity size="100%" />
      </div>
      <div class="current-humidity unselectable">
        {{ currentHumidity }}<span class="symbol">%</span>
      </div>
    </div>
    <div class="bottom-container" v-show="boostEnabled">
      Boost mode enabled.
      <span v-show="boostTimeRemaining">{{ boostTimeRemaining }} min.</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import powerSettingsModal from './power-settings-modal.vue'
import iconCool from './icon-cool.vue'
import iconHeat from './icon-heat.vue'
import iconHeat2 from './icon-heat2.vue'
import iconHome from './icon-home.vue'
import iconFan from './icon-fan.vue'
import iconHumidity from './icon-humidity.vue'
import iconHotwater from './icon-hotwater.vue'
import iconInfo from './icon-info.vue'

export default {
  data() {
    return {
      // Called by the power settings modal when you tap on a mode
      powerModalCallback: () => {},
      // Give the power settings modal context of what options to show
      lastTappedMode: '',
      showPowerModal: false
    }
  },
  components: {
    iconCool,
    iconFan,
    iconHeat,
    iconHeat2,
    iconHome,
    iconHumidity,
    iconHotwater,
    iconInfo,
    powerSettingsModal
  },
  computed: {
    // Some variables in $store.state we want to read
    // https://vuex.vuejs.org/guide/state.html#the-mapstate-helper
    ...mapState([
      'currentTemperature',
      'currentHumidity',
      'icons',
      'modes',
      'selectedMode',
      'showControls',
      'showCooling',
      'showFan',
      'showHeating',
      'showHotWater',
      'showHumidity'
    ]),
    boostEnabled() {
      const modeState = this.$store.state.modes[this.selectedMode]
      return modeState && modeState.boostEnabled
    },
    boostTimeRemaining() {
      const modeState = this.$store.state.modes[this.selectedMode]
      if (modeState) {
        return modeState.boostTimeRemaining
      }
      return null
    },
    targetTemperature() {
      return this.$store.getters.targetTemperature
    }
  },
  methods: {
    openPowerModal(mode) {
      // First tap, only select
      if (this.selectedMode !== mode) {
        this.$store.commit('selectMode', mode)
        return
      }

      // Second tap, open the modal
      this.lastTappedMode = mode
      this.powerModalCallback = powerOption => {
        // Deselect the mode if turned off
        if (powerOption === 'OFF') {
          this.$store.commit('selectMode', '')
        }
        this.$store.commit('selectPowerSetting', { mode, powerOption })
        this.lastTappedMode = ''
        this.showPowerModal = false
      }
      this.showPowerModal = true
    },
    decrement() {
      this.$store.commit('decrementTargetValue')
    },
    increment() {
      this.$store.commit('incrementTargetValue')
    },
    toggleInfoScreen() {
      this.$store.commit('toggleInfoScreen')
    }
  }
}
</script>

<!-- "scoped" attribute limits CSS to this component only -->
<style scoped>
@keyframes changecolor {
  from {
    color: black;
  }

  to {
  }
}

/* Apply to any mode that is running to give it a glowing effect */
.animated {
  animation: changecolor 2s steps(8) infinite alternate;
}

.active-temp {
  font-size: 30vh;
  left: 3%;
  line-height: 100%;
  top: 29%;
  width: 50vw;
}

.active-temp > .symbol {
  font-size: 18vh;
  vertical-align: text-top;
}

.bottom-container {
  bottom: 0;
  height: 8vh;
  left: 4%;
  position: absolute;
  width: 100%;
}

.current-temp {
  font-size: 24vh;
  right: 8%;
  text-align: right;
  top: 30%;
  width: 40%;
}

.current-temp > .symbol {
  font-size: 14vh;
  vertical-align: text-top;
}

.current-humidity {
  bottom: 8%;
  font-size: 24vh;
  right: 6.5%;
  text-align: right;
  width: 40%;
}

.current-humidity > .symbol {
  font-size: 10vh;
}

.grid {
  height: 100%;
  width: 100%;
}

.grid > div {
  position: absolute;
}

.grid-home-icon {
  height: 6vw;
  width: 6vw;
  right: 0;
  bottom: 51%;
}

.grid-humidity-icon {
  bottom: 20%;
  height: 5vw;
  right: 1vw;
  width: 5vw;
}

.mode-btn {
  cursor: pointer;
  display: inline-block;
  float: left;
  height: 100%;
  margin-top: 4vh;
  width: 26vh;
}

.mode-btn.cool {
  margin-top: 3vh;
}

.mode-btn.heat {
  margin-top: 4.4vh;
}

.mode-btn.humidity {
  margin-top: 2.8vh;
}

.mode-btn.hotwater {
  margin-top: 4.4vh;
}

.mode-btn.info {
  position: absolute;
  right: 0;
}

.top-container {
  color: #e0e5e8;
  height: 25%;
  max-height: 25%;
  position: absolute;
  top: 0;
  width: 100%;
}

.value-controls {
  bottom: 0;
  height: 50vh;
  width: 50vw;
  left: 3%;
}

.value-controls > div {
  border-style: solid;
  border-width: 2px;
  border-radius: 6px;
  bottom: 20%;
  cursor: pointer;
  height: 24vh;
  font-size: 20vh;
  display: inline-block;
  text-align: center;
  width: 46%;
}

.value-controls > .decrement {
  position: absolute;
  left: 0;
}

.value-controls > .increment {
  position: absolute;
  right: 0;
}
</style>
