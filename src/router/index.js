import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProblemList from '../views/ProblemList.vue'
import SignIn from '../views/SignIn.vue'
import ProblemEntryView from '../views/ProblemEntryView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/problemlist',
    name: 'ProblemList',
    component: ProblemList
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/problementryview',
    name: 'ProblemEntryView',
    component: ProblemEntryView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
