import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/fight/index'
import AddUser from '@/page/fight/addUser'
import ChoosePerson from '@/page/fight/choosePerson'
import NewGame from '@/page/fight/newGame'

import Todolist from '@/page/todolist'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    }, {
      path: '/addUser',
      component: AddUser
    },
    {
      path: '/todolist',
      component: Todolist
    },
    {
      path: '/newGame',
      component: NewGame
    },
    {
      path: '/choosePerson',
      component: ChoosePerson
    },

  ]
})
