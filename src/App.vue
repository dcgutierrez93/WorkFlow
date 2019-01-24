<template>
  <div id="app">
    <Header />
    <Sidenav />
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Sidenav from './components/header/Sidenav.vue'
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'app',
  components: {
    Dashboard,
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
