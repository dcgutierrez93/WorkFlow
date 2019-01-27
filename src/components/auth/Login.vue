<style lang="css" scoped>



</style>

<template lang="html">

<div id="form">
    <form class="login" @submit.prevent="login">
        <div class="form-group">
            <label>User name</label>
            <input class="form-control" required v-model="username" type="text" placeholder="Snoopy" />
        </div>
        <div class="form-group">
            <label>Password</label>
            <input class="form-control" required v-model="password" type="password" placeholder="Password" />
        </div>
        <button class="btn btn-primary" type="submit">Login</button>
    </form>
</div>

</template>

<script>

export default {

}

</script>
