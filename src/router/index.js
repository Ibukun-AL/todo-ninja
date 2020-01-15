import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import register from '../views/register.vue'
import user from '../views/user.vue'
import task from '../views/task.vue'
import notes from '../views/notes.vue'
import trial from '../views/trial.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/about',
    name: 'about',
    
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/user',
    name: 'user',
    component: user
  },
  {
    path: '/task',
    name: 'task',
    component: task
  },
  {
    path: '/notes',
    name: 'notes',
    component: notes
  },
  {
    path: '/trial',
    name: 'trial',
    component: trial
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
