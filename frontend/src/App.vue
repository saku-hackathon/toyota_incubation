<template>
  <div id="app">
    <DefaultHeader/>
    <CHeaderNav class="sticky-top">
      <CNavItem v-for="(tab, index) in tabs" :key="index">
        <CNavLink :to="tab.name" exact @click="activeTab = tab.name">{{ tab.name }}</CNavLink>
      </CNavItem>
    </CHeaderNav>

    <div class="tab-content" style="padding-top: 70px;" v-for="(tab, index) in tabs" :key="index" v-show="activeTab === tab.name">
      <h1>{{ tab.name }} Content</h1>
    </div>
    <router-view></router-view>
    <!-- <MainHeader/> -->
    <MetamaskLogin/>
  </div>
</template>

<script>
import MetamaskLogin from './components/MetamaskLogin.vue'
// import DefaultHeader from "./components/DefaultHeader.vue"
// import MainHeader from './components/MainHeader.vue'

export default {
  name: 'App',
  components: {
    MetamaskLogin,
    // DefaultHeader
    // MainHeader
  },
  data() {
    return {
      activeTab: 'tab1',
      tabs: [
        { name: 'tab1', label: 'Tab 1' },
        { name: 'Projects', label: 'Projects' },
        { name: 'tab3', label: 'Tab 3' }
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
</style>
