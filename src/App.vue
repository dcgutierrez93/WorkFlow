<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Sidenav />
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Sidenav from './components/header/Sidenav.vue'

export default {
  name: 'app',
  components: {
    Sidenav,
    Header
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #f2f2f2;
}
</style>
