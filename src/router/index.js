import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoList from '../views/TodoList.vue'
import MyVue from '@/views/MyVue.vue'
import IssueList from '@/views/IssueList.vue'
import TodoIssues from '@/views/TodoIssues.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todo-list',
    name: 'todo-list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: TodoList
  },
  {
    path: '/my-vue',
    name: 'my-vue',
    component: MyVue
  },
  {
    path: '/issue-list',
    name: 'issue-list',
    component: IssueList
  },
  {
    path: '/todos-issues',
    name: 'todos-issues',
    component: TodoIssues
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
