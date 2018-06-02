import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/fight/index'
import Todolist from '@/page/todolist'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/todolist',
      component: Todolist
    },

  ]
})
