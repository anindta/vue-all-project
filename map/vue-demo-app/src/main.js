import Vue from 'vue'
import App from './App.vue'

import store from './store'
import * as VueGoogleMaps from "vue2-google-maps" 

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCKe33yyvj0jUrzOwe3s6it6MJChJkC218",
    libraries: "places"
  }
});

Vue.config.productionTip = false

new Vue({
 
  store,
  render: h => h(App)
}).$mount('#app')
