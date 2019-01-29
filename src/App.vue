<style lang="css" scoped>

body,
html {
  margin: 0;
  padding: 0;
}
</style>

<template>
<!-- <div id="app"> -->
  <v-app>
      <Header />
      <v-toolbar color="cyan" dark fixed app>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn href="/login" flat v-if="!auth">Login</v-btn>
          <v-btn @click="onLogout" v-if="auth" flat>Logout</v-btn>

        </v-toolbar-items>
      </v-toolbar>
      <v-content>
          <v-container fluid>
              <router-view></router-view>
          </v-container>
      </v-content>
      <!-- <v-footer app></v-footer> -->
  </v-app>
</template>

<script>

import Header from './components/header/Header.vue'

export default {
    name: 'App',
    components: {
      Header
    },
    computed: {
      auth() {
        return this.$store.getters.isAuthenticated
      }
    },
    methods: {
      onLogout() {
        this.$store.dispatch('logout')
      }
    }
}

</script>
