import { createApp } from 'vue'
import App from './App.vue'
import '@coreui/coreui/dist/css/coreui.min.css'
// import '@coreui/coreui/dist/css/coreui-rtl.min.css'
import { CHeaderNav, CNavItem, CNavLink } from '@coreui/vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue' 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

const app = createApp(App)

app.component('CHeaderNav', CHeaderNav)
app.component('CNavItem', CNavItem)
app.component('CNavLink', CNavLink)
app.use(router)

app.mount('#app')