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
      <v-toolbar color="white" fixed app>
        <v-spacer></v-spacer>
        <v-toolbar-items class="text-black">
          <v-btn href="/login" flat v-if="!auth">Login</v-btn>
          <v-btn href="/register" flat v-if="!auth">Register</v-btn>
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
    },
    data() {
      return {

      }
    }

}

</script>
