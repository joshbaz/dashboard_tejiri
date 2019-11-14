import Vue from 'vue'
import VeeValidate from 'vee-validate';
import App from './App.vue'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'

import store from './store'
import { router } from './helpers';

Vue.use(VeeValidate);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
