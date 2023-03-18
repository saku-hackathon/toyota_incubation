import Vue from 'vue'
import VueRouter from 'vue-router'
import MetamaskLogin from '@/components/MetamaskLogin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MetamaskLogin',
    component: MetamaskLogin
  }
]

const router = new VueRouter({
  routes
})

export default router
