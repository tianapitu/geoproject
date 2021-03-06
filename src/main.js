
import 'leaflet/dist/leaflet.css';

import Vue from 'vue'
import App from './App.vue'
import 'vue-search-select/dist/VueSearchSelect.css'



Vue.config.productionTip = false

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

new Vue({
  render: h => h(App),
}).$mount('#app')
