import pluginVue from 'eslint-plugin-vue'
import js from '@eslint/js'

// https://eslint.org/docs/latest/use/configure/
export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/vue2-essential'],
  {
    ignores: ['**/dist/']
  },
  {
    languageOptions: {
      globals: {
        console: true,
        MQTT_SERVER: true,
        process: true
      }
    },
    rules: {
      'no-console': 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
  }
]
