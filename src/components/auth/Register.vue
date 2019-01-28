<style lang="css" scoped>



</style>

<template lang="html">

<div id="register">
    <form @submit.prevent="onSubmit">
        <div class="form-group">
            <input class="form-control" type="text" placeholder="Name" v-model="name">
        </div>
        <div class="form-group">
            <input class="form-control" placeholder="Your email" type="email" v-model="email">
        </div>
        <div class="form-group">
            <input class="form-control" placeholder="Password" type="password" v-model="password">
        </div>
        <div class="form-group">
            <input class="form-control" placeholder="Confirm password" type="password" v-model="confirmPassword">
        </div>
        <button class="btn btn-primary" type="submit">Register</button>
    </form>
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
      console.log(formData);
    }
  }
}

</script>
