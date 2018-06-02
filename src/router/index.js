import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/fight/index'
import AddUser from '@/page/fight/addUser'
import Todolist from '@/page/todolist'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },{
      path: '/addUser',
      component: AddUser
    },
    {
      path: '/todolist',
      component: Todolist
    },

  ]
})
