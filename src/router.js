import Vue from 'vue'
import Router from 'vue-router'

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
      meta: {
        guest: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        guest: true
      }    
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup,
      meta: {
        guest: true
      } 
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {
        guest: true
      } 
    },
    {
      path: '/overview',
      name: 'overview',
      component: () => import('./views/overview.vue'),
      meta: {
        requiresAuth: true,
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


router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(localStorage.getItem('token') == null) {
       next({
          path: '/login',
          params: {nextURL: to.fullPath}
        })
      }
    }else {
     //const user = JSON.parse(localStorage.getItem('userToken'))
     /*  if (to.matched.some(record => record.meta.is_admin)) {      
        if (user.is_admin == 1 ) {
          next()
        }
        else { 
          next({ 
            path:'/overview' 
          })
        }
      } else { */
        next()
      //}
    }
  })

  export default router