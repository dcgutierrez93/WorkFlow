<style lang="css" scoped>
body,
html {
  margin: 0;
  padding: 0;
}
</style>

<template>

<v-app>
    <!-- <v-navigation-drawer app> -->
      <Header></Header>
    <!-- </v-navigation-drawer> -->
    <!-- <v-toolbar app></v-toolbar> -->
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
    data() {
        return {
            //
        }
    }
}

</script>
