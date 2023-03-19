import Vue from 'vue'
import VueRouter from 'vue-router'
import MetamaskLogin from '@/components/MetamaskLogin.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Tab1 from '@/components/Tab1.vue'
import Projects from '@/components/Projects.vue'
import Tab3 from '@/components/Tab3.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MetamaskLogin',
    component: MetamaskLogin
  },
  {
    path: '/about',
    name: 'About',
    component: HelloWorld
  },
  {
    path: '/tab1',
    name: 'Tab1',
    component: Tab1
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/tab3',
    name: 'Tab3',
    component: Tab3
  }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

export default router
