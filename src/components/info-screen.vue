<template>
  <div class="container color-off">
    <div class="close" @click="toggleInfoScreen">
      <icon-close size="74%" />
    </div>
    <div class="info-table unselectable">
      <table>
        <tr>
          <td>Public IP</td><td>{{ wanip }}</td>
        </tr>
        <tr>
          <td>Local IP</td><td>{{ wlanip }}</td>
        </tr>
        <tr>
          <td>WiFi SSID</td><td>{{ ssid }}</td>
        </tr>
        <tr>
          <td>WiFi Strength</td><td>{{ wlaninfo }}</td>
        </tr>
        <tr>
          <td>WiFi MAC</td><td>{{ wlanmac }}</td>
        </tr>
        <tr>
          <td>CPU Temp</td><td>{{ cputemp }}</td>
        </tr>
        <tr>
          <td>CPU Load</td><td>{{ cpuload }}</td>
        </tr>
        <tr>
          <td>Used Disk</td><td>{{ useddisk }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import iconClose from './icon-close.vue'

export default {
  components: {
    iconClose
  },
  computed: {
    wanip() {
      return this.$store.state.info.wanip
    },
    wlanip() {
      return this.$store.state.info.wlanip
    },
    ssid() {
      return this.$store.state.info.ssid
    },
    wlaninfo() {
      return this.$store.state.info.wlaninfo + ' dBm'
    },
    wlanmac() {
      return this.$store.state.info.wlanmac
    },
    cputemp() {
      return this.$store.state.info.cputemp + ' °C'
    },
    cpuload() {
      return this.$store.state.info.cpuload + ' %'
    },
    useddisk() {
      return this.$store.state.info.useddisk
    }
  },
  methods: {
    toggleInfoScreen() {
      this.$store.commit('toggleInfoScreen')
    }
  }
}
</script>

<style scoped>
.close {
  cursor: pointer;
  float: right;
  height: 26vh;
  margin-right: -2.3vh;
  margin-top: 2.9vh;
  position: absolute;
  right: 0;
  top: 0;
  width: 26vh;
}

.container {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.info-table {
  font-size: 5vw;
  position: absolute;
  text-align: left;
  top: 10vh;
  width: 85%;
}

.info-table td:first-child {
  width: 50%;
}

.info-table td:last-child {
  width: 50%;
}
</style>
