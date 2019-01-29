<style lang="css" scoped>

.card {
  padding: 30px 40px;
  width: 60%;
  margin-top: 100px;
}

</style>

<template lang="html">

<div id="register">
  <div class="card mx-auto shadow-lg">
    <div class="card-body">
      <h1 class="card-title h3 text-center">Register</h1>
      <form @submit.prevent="onSubmit">
          <div class="form-group">
              <label for="nameInput">Name</label>
              <input id="nameInput" class="form-control" type="text" placeholder="Name" v-model="name">
          </div>
          <div class="form-group">
              <label for="emailInput">Email</label>
              <input id="emailInput" class="form-control" placeholder="Your email" type="email" v-model="email">
          </div>
          <div class="form-group">
              <label for="passwordInput">Password</label>
              <input id="passwordInput" class="form-control" placeholder="Password" type="password" v-model="password">
          </div>
          <div class="form-group">
              <label for="confirmPasswordInput">Confirm Password</label>
              <input id="confirmPasswordInput" class="form-control" placeholder="Confirm password" type="password" v-model="confirmPassword">
          </div>
          <button class="btn btn-primary" type="submit">Register</button>
      </form>
    </div>
  </div>
</div>

</template>

<script>

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  },
  methods: {
    onSubmit() {
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword
      }
      console.log(formData)
      this.$store.dispatch('signup', formData)
    }
  }
}

</script>
