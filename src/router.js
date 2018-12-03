import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Users from '@/views/Users.vue'
import Edit from '@/views/Edit.vue'
import Add from '@/views/Add.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/users',
      component: Users
    },
    {
      path: '/edit/:id',
      component: Edit
    },
    {
      path: '/add',
      component: Add
    }
  ]
})
