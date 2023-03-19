// import Vue from 'vue'
// import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import MetamaskLogin from '@/components/MetamaskLogin.vue'
import Launch from '@/views/Launch.vue'
import Projects from '@/views/Projects.vue'
import MyPage from '@/views/MyPage.vue'

// Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MetamaskLogin',
    component: MetamaskLogin
  },
  {
    path: '/launch',
    name: 'Launch',
    component: Launch
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPage
  }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

export default router
