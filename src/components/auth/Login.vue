<style lang="css" scoped>



</style>

<template lang="html">

<div id="form">
    <form class="login" @submit.prevent="onSubmit">
        <div class="form-group">
            <label>User name</label>
            <input class="form-control" v-model="email" type="email" />
        </div>
        <div class="form-group">
            <label>Password</label>
            <input class="form-control" v-model="password" type="password" />
        </div>
        <button class="btn btn-primary" type="submit">Login</button>
    </form>
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
      console.log(formData);
    }
  }
}

</script>
