import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/fight/index'
import AddUser from '@/page/fight/addUser'
import ChoosePerson from '@/page/fight/choosePerson'
import ContinueGame from '@/page/fight/continueGame'
import Game from '@/page/fight/game'

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
      path: '/game/:id',
      component: Game
    },
    {
      path: '/choosePerson',
      component: ChoosePerson
    }, {
      path: '/continueGame',
      component: ContinueGame
    },

  ]
})
