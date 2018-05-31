import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/fight/index'
import Content from '@/page/content'
import Todolist from '@/page/todolist'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    }, {
      path: '/content',
      component: Content
    }, {
      path: '/todolist',
      component: Todolist
    }, {
      path: '/todolist',
      component: Todolist
    }, {
      path: '/todolist',
      component: Todolist
    }, {
      path: '/todolist',
      component: Todolist
    }, {
      path: '/todolist',
      component: Todolist
    }, {
      path: '/todolist',
      component: Todolist
    },
  ]
})
