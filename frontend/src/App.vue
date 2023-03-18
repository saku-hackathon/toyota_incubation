<template>
  <div id="app">
    <DefaultHeader/>
    <!-- <h1>Toyota Incubation Portal</h1>
    <CHeaderNav class="header-nav">
      <CNavItem v-for="(tab, index) in tabs" :key="index" class="nav-item">
        <CNavbarBrand :href="tab.label" @click="activeTab = tab.name">{{ tab.name }}</CNavbarBrand>
      </CNavItem>
    </CHeaderNav> -->

    <div class="tab-content" style="padding-top: 70px;" v-for="(tab, index) in tabs" :key="index" v-show="activeTab === tab.name">
      <h1>{{ activeTab }} Content</h1>
    </div>
    <router-view/>
    <!-- <MainHeader/> -->
    <!-- <MetamaskLogin/> -->
  </div>
</template>

<script>
// import MetamaskLogin from './components/MetamaskLogin.vue'
import DefaultHeader from "./components/DefaultHeader.vue"
// import MainHeader from './components/MainHeader.vue'

// import { CNavbarBrand } from '@coreui/vue';

export default {
  name: 'App',
  components: {
    DefaultHeader
    // CNavbarBrand
},
  data() {
    return {
      activeTab: 'tab1',
      tabs: [
        { name: 'Projects', label: 'Projects' },
        { name: 'Launch Project', label: 'Launch' },
        { name: 'My Page', label: 'MyPage' }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.sticky-top {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.tab-content {
  margin-top: 10px;
}

.header-nav {
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem;
}

.nav-item {
  cursor: pointer;
  font-weight: bold;
  margin-right: 1rem;
}

.nav-item.active {
  border-bottom: 2px solid #fff;
}
</style>
