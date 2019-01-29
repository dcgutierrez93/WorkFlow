<style lang="css" scoped>

.card {
  padding: 30px 40px;
  width: 60%;
  margin-top: 100px;
}

</style>

<template lang="html">

<div id="login">
  <div class="card mx-auto shadow-lg">
    <div class="card-body">
      <h1 class="card-title h3 text-center">Login</h1>
        <form class="login" @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="emailInput">Email</label>
                <input class="form-control" id="emailInput" placeholder="e.g. tom@workflow.com" v-model="email" type="email" />
            </div>
            <div class="form-group">
                <label for="passwordInput">Password</label>
                <input class="form-control" id="passwordInput" placeholder="*************" v-model="password" type="password" />
            </div>
            <button class="btn btn-primary" type="submit">Login</button>
        </form>
        <div class="text-center">
          <p>Not a member?</p>
          <router-link to="/register">Register</router-link>
        </div>
    </div>
  </div>
</div>


</template>

<script>
export default {
  data() {
    return {
      email : "",
      password : ""
    }
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password
      }
      console.log(formData)
      this.$store.dispatch('login', {
        email: formData.email,
        password: formData.password
      })
    }
  }
}

</script>
