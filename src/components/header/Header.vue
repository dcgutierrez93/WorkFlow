
<template>
  <v-navigation-drawer
     :mini-variant.sync="mini"
     v-model="drawer"
     hide-overlay
     stateless
     app
   >
     <v-toolbar flat class="transparent">
       <v-list class="pa-0">
         <v-list-tile avatar>
           <v-list-tile-avatar>
             <v-icon>home</v-icon>
           </v-list-tile-avatar>

           <v-list-tile-content>
             <v-list-tile-title>WorkFlow</v-list-tile-title>
           </v-list-tile-content>

           <v-list-tile-action>
             <v-btn
               icon
               @click.stop="mini = !mini"
             >
               <v-icon>chevron_left</v-icon>
             </v-btn>
           </v-list-tile-action>
         </v-list-tile>
       </v-list>
     </v-toolbar>

     <v-list class="pt-0" dense>
       <v-divider></v-divider>

       <v-list-tile
         v-for="item in items"
         :key="item.title"
         :to="item.path"

       >
         <v-list-tile-action>
           <v-icon>{{ item.icon }}</v-icon>
         </v-list-tile-action>

         <v-list-tile-content>
           <v-list-tile-title>{{ item.title }}</v-list-tile-title>
         </v-list-tile-content>
       </v-list-tile>

       <v-divider></v-divider>

       <v-list-tile
         v-for="userAction in userActions"
         :key="userAction.title"


       >
         <v-list-tile-action>
           <v-icon>{{ userAction.icon }}</v-icon>
         </v-list-tile-action>

         <v-list-tile-content>
           <v-list-tile-title>{{ userAction.title }}</v-list-tile-title>
         </v-list-tile-content>
       </v-list-tile>

     </v-list>

   </v-navigation-drawer>

</template>

<style lang="css" scoped>

</style>

<script>
import axios from 'axios'

export default {
  name: 'Header',
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'dashboard', path: '/' },
        { title: 'Dashboard', icon: 'account_circle', path: '/dashboard'  }
        // { title: 'New Folder', icon: 'create_new_folder' },
        // { title: 'New File', icon: 'cloud_upload' }
      ],
      userActions: [
        { title: 'My Projects', icon: 'folder' },
        { title: 'New Folder', icon: 'create_new_folder' },
        { title: 'New File', icon: 'cloud_upload' }
      ],
      // cruds: [
      //   ['New Folder', 'add'],
      //   ['New File', 'insert_drive_file'] //,
      //   // ['Update', 'update'],
      //   // ['Delete', 'delete']
      // ],
      mini: true,
      right: null
    }
  },
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated
    }
  },
  created() {
    this.$store.dispatch('fetchUser')
  }//,
  // computed: {
  //   auth() {
  //     return this.$store.getters.isAuthenticated
  //   }
  // }
}
</script>
