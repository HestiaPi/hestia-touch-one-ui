import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

export default defineConfig(() => ({
  build: {
    minify: false
  },
  define: {
    MQTT_SERVER: JSON.stringify(process.env.MQTT_SERVER || 'localhost')
  },
  plugins: [
    vue()
  ],
  server: {
    host: true,
    port: 8080
  },
  target: 'es2015'
}))

