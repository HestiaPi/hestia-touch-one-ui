import Vue from 'vue'
import app from './components/app.vue'
import store from './plugins/store'
import './plugins/register-service-worker'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(app)
}).$mount('#app')
