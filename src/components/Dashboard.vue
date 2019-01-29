<style lang="css" scoped>

.display-header {
  background-color: #f2f2f2;
}

</style>

<template lang="html">

<div id="dashboard">
    <div class="container">
        <h1>Dashboard</h1>
        <div class="card">
          <div class="cardbody">
            <table class="table">
                <thead>
                    <tr class="display-header">
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
    </div>
</div>

</template>

<script>

import axios from 'axios'

export default {
    data() {
            return {

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
