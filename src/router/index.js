import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Q1 from '../views/Q1.vue'
import Q2 from '../views/Q2.vue'
import Q3 from '../views/Q3.vue'
import Q4 from '../views/Q4.vue'
import Q5 from '../views/Q5.vue'
import EditInfo from '../views/EditInfo.vue'

import Leaderboard from '../views/Leaderboard.vue'
import NewFriends from '../views/NewFriends.vue'
import Score from '../views/Score.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: Leaderboard
  },
  {
    path: '/newfriends',
    name: 'newfriends',
    component: NewFriends
  },
  {
    path: '/q1',
    name: 'Q1',
    component: Q1
  },
  {
    path: '/q2',
    name: 'Q2',
    component: Q2
  },
  {
    path: '/q3',
    name: 'Q3',
    component: Q3
  },
  {
    path: '/q4',
    name: 'Q4',
    component: Q4
  },
  {
    path: '/q5',
    name: 'Q5',
    component: Q5
  },
  {
    path: '/score',
    name: 'Score',
    component: Score
  },
  {
    path: '/editinfo',
    name: 'Edit Info',
    component: EditInfo
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
