<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <router-link :to="{ name: 'Grid'}">Grid</router-link>
    <router-link :to="{ name: 'HelloWorld'}">HelloWorld</router-link>
    <router-link :to="{ name: 'Demo'}">Demo</router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
