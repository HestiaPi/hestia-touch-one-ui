import Vue from 'vue'
import app from './components/app.vue'
import store from './plugins/store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(app)
}).$mount('#app')
