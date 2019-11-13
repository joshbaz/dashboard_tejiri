import Vue from 'vue'
import Router from 'vue-router'
//import store from './store/store'

import main from './views/main.vue'
import login from './views/login.vue'
import signup from './views/signup.vue'
import register from './views/register.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: main,
    },
    {
      path: '/login',
      name: 'login',
      component: login,   
    },
    {
      path: '/signup',
      name: 'Signup',
      component: signup,
    },
    {
      path: '/register',
      name: 'register',
      component: register,
    },
    {
      path: '/overview',
      name: 'overview',
      component: () => import('./views/overview.vue'),
      meta: {
        requiresAuth: true
      } 
    },
    {
      path: '/media',
      name: 'media',
      component: () => import('./views/media.vue'),
      meta: {
        requiresAuth: true
      } 
    },
    {
      path: '/activities',
      name: 'activities',
      component: () => import('./views/activities.vue'),
      meta: {
        requiresAuth: true
      } 
    }
  ]
})


/* router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
}) */

  export default router