<template lang="html">
  <div id="dashboard">
    <h1>Dashboard</h1>
    <div class="" v-for="(value, key) in folder">
      {{ key }}: {{ value }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      folder: {
        folderName: "Project 1",
        files: [
          "file one",
          "file two",
          "file three"
        ]
      }
    }
  },
  computed: {
    email() {
      return !this.$store.getters.user ? false : this.$store.getters.user.email
    }
  },
  created() {
    this.$store.dispatch('fetchUser')
  }
}
</script>

<style lang="css" scoped>

</style>
