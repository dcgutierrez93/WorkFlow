
<template lang="html">
    <sidebar-menu :menu="menu" :theme="selectedTheme"/>
</template>


  <script>
  import NewFolder from '../NewFolder.vue'

    export default {
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'WorkFlow',
                        // component: componentName
                        // visibleOnCollapse: true
                    },
                    {
                        href: '/',
                        title: 'Dashboard',
                        icon: 'fa fa-user',
                        badge: {
                          class: 'header-link'
                        }
                        /*
                        disabled: true
                        badge: {
                            text: 'new',
                            // class:''
                        }
                        */
                    },
                    {
                        title: 'New Folder',
                        icon: 'fa fa-folder-plus',
                        component: 'NewFolder'
                        // child: [
                        //     {
                        //         href: '/charts/sublink',
                        //         title: 'Sub Link',
                        //     }
                        // ]
                    },
                    {
                      title: 'New File',
                      icon: 'fa fa-file-upload',
                    },
                    {
                      title: 'Login',
                      href: '/login',
                      icon: 'fa fa-sign-in-alt'
                    },
                    {
                      title: 'Register',
                      href: '/register',
                      icon: 'fa fa-user-plus'
                    },
                ],
                collapsed: false,
                themes: ['', 'white-theme'],
                selectedTheme: 'white-theme'
            }
        },
    }
</script>

<style lang="css">
.collapse-btn {
  background-color: #4285f4;
}
/* .vsm-list {
  position: sticky;
  top: 50px;
  height: calc(100vh - 4rem);
} */
</style>
