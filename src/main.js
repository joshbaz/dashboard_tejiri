import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import '@babel/polyfill'
import store from './store'
import Axios from 'axios'

Vue.config.productionTip = false

 /* getting the token */
const token = localStorage.setItem('token')
// This is where get the token from the server side using Axios
 Axios.defaults.headers.common['Authorization'] = token 


new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

