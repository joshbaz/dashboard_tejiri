import Vue from 'vue'
import Router from 'vue-router'
import main from './views/main.vue'
import login from './views/login.vue'
import signup from './views/signup.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: main
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ './views/register.vue')
    },
    {
      path: '/overview',
      name: 'overview',
      component: () => import(/* webpackChunkName: "about" */ './views/overview.vue')
    },
    {
      path: '/media',
      name: 'media',
      component: () => import(/* webpackChunkName: "about" */ './views/media.vue')
    },
    {
      path: '/activities',
      name: 'activities',
      component: () => import(/* webpackChunkName: "about" */ './views/activities.vue')
    }
  ]
})
