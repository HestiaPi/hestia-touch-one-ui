<!-- This component is the dialog box you see when you tap on a mode -->

<template>
  <div class="power-settings-modal-container" :class="[colorClass]">
    <table>
      <tr v-for="option in options" :key="option.key">
        <td class="unselectable" @click="selectOption(option.key)">{{ option.label }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      required: true,
      type: String
    },
    onOptionSelect: {
      required: true,
      type: Function
    }
  },
  computed: {
    colorClass() {
      return `color-${this.mode}`
    },
    options() {
      if (this.mode === 'heat' || this.mode === 'cool') {
        return [
          {
            key: 'ON',
            label: 'Auto'
          },
          {
            key: 'OFF',
            label: 'Off',
          },
          {
            key: 'Boost',
            label: 'Boost'
          }
        ]
      } else if (this.mode === 'humidity' || this.mode === 'hotwater')  {
        return [
          {
            key: 'ON',
            label: 'On'
          },
          {
            key: 'OFF',
            label: 'Off',
          },
          {
            key: 'Boost',
            label: 'Boost'
          }
        ]
      } else { //Fan
        return [
          {
            key: 'ON',
            label: 'On'
          },
          {
            key: 'OFF',
            label: 'Off',
          }
        ]
      }
    },
    selectOption() {
      return this.onOptionSelect
    }
  }
}
</script>

<style scoped>
.power-settings-modal-container {
  background-color: black;
  border-radius: 6px;
  border-style: solid;
  border-width: 2px;
  height: 80%;
  left: 10%;
  position: absolute;
  top: 10%;
  width: 80%;
  z-index: 1;
}

table {
  font-size: 1.8em;
  height: 100%;
  width: 100%;
}

tr > td {
  border-style: solid;
  border-width: 0 0 2px 0;
  cursor: pointer;
}

tr:last-child > td {
  border-style: none;
}
</style>
