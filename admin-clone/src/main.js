import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
//bootstrap-vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrash, faArrowUp, faUser, faCoins, faWallet,faCartShopping,faCircleUser,faPlus } from '@fortawesome/free-solid-svg-icons'
//VueGoogleMaps
import * as VueGoogleMaps from "vue2-google-maps" 
//font awesome
library.add(faTrash, faArrowUp, faUser, faCoins, faWallet,faCartShopping, faCircleUser, faPlus)
Vue.component('font-awesome-icon', FontAwesomeIcon)
//bootstrap-vue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
//VueGoogleMaps 
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCKe33yyvj0jUrzOwe3s6it6MJChJkC218",
    libraries: "places"
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
