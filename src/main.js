import Vue from 'vue'
import Axios from 'axios'
import App from './App.vue'
import '@babel/polyfill'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.prototype.$http = Axios;

 const token = localStorage.getItem('token');
 if (token) {
   Vue.prototype.$http.defaults.headers.common['Authorization'] = token
 }

Vue.config.productionTip = false 

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
