import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/fight/index'
import AddUser from '@/page/fight/addUser'
import ModifyUser from '@/page/fight/modifyUser'
import Personal from '@/page/fight/personal'
import ChoosePerson from '@/page/fight/choosePerson'
import ContinueGame from '@/page/fight/continueGame'
import Game from '@/page/fight/game'
import History from '@/page/fight/history'
import HistoryDataList from '@/page/fight/history-data-list'
import Login from '@/page/fight/login'


Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    }, {
      path: '/addUser',
      component: AddUser
    }, {
      path: '/modifyUser',
      component: ModifyUser
    },
    {
      path: '/game/:recordId',
      component: Game
    },
    {
      path: '/choosePerson',
      component: ChoosePerson
    }, {
      path: '/continueGame',
      component: ContinueGame
    },{
      path: '/login',
      component: Login
    },{
      path: '/personal',
      component: Personal
    },{
      path: '/history',
      component: History
    },{
      path: '/historyDataList/:recordId',
      component: HistoryDataList
    },

  ]
})
