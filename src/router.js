import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/users',
      component: () => import('@/views/Users.vue')
    },
    {
      path: '/edit/:id',
      component: () => import('@/views/Edit.vue')
    },
    {
      path: '/add',
      component: () => import('@/views/Add.vue')
    }
  ]
})
