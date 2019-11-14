import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import main from './views/main.vue'
import login from './views/auth/login.vue'
import signup from './views/auth/signup.vue'
import register from './views/auth/welcom.vue'
import overview from './views/overview.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
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
      component: overview,
      meta: {
        requiresAuth: true
      } 
    },
    {
      path: '/media',
      name: 'media',
      component: () => import('./views/media.vue'), 
    },
    {
      path: '/activities',
      name: 'activities',
      component: () => import('./views/activities.vue'),

    }
  ]
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

  export default router