
<template lang="html">
    <sidebar-menu :menu="menu" :theme="selectedTheme"/>
</template>


  <script>
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
                    }
                ],
                collapsed: false,
                themes: ['', 'white-theme'],
                selectedTheme: 'white-theme'
            }
        }
    }
</script>

<style lang="css">
.vsm-list {
  position: sticky;
  top: 50px;
  height: calc(100vh - 4rem);
}
</style>
