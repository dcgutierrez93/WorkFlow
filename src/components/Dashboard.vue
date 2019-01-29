<template lang="html">
  <div id="dashboard">
    <h1>Dashboard</h1>
    <p v-if="email">Welcome {{ email }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
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
