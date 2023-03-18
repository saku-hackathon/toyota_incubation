<template>
  <div id="app">
    <router-view/>
    <MetamaskLogin/>
  </div>
</template>

<script>
import MetamaskLogin from './components/MetamaskLogin.vue'

export default {
  name: 'App',
  components: {
    MetamaskLogin
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
  margin-top: 60px;
}
</style>
