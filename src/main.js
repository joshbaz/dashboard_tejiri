import Vue from 'vue'
import Axios from 'axios'
import { ValidationProvider }from 'vee-validate'
import App from './App.vue'
import router from './router'
import store from './store/store'
import '@babel/polyfill'
import vuetify from './plugins/vuetify'

Vue.use(ValidationProvider)

Vue.config.productionTip = false

/* 
//  Adding Instance Properties
//  We want to make axios accessble across many of the components, 
//  so we declare it globally. Vue prototype allows packages, objects or functions
//  to be avaliable in all Vue components and instances - 
//  we can use this by declaring this.$http when we want to make a post request.
// read: https://vuejs.org/v2/cookbook/adding-instance-properties.html
*/
 Vue.prototype.$http = Axios;

 const token = localStorage.getItem('token');
 if (token) {
   Vue.prototype.$http.defaults.headers.common['Authorization'] = token
 }

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
