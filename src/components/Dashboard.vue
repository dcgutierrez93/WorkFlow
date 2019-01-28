<template lang="html">
  <div id="dashboard">
    <h1>Dashboard</h1>
    <p>Welcome {{ email }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: ''
    }
  },
  created() {
    axios.get('/users.json')
      .then(res => {
        const data = res.data
        const users = []
        for (let key in data) {
          const user = data[key]
          user.id = key
          users.push(user)
        }
        console.log(users)
        this.email = users[0].email
      })
      .catch(error => console.log(error))
  }
}
</script>

<style lang="css" scoped>

</style>
