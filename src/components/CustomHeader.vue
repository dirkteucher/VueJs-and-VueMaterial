<template>

<div class="container">



  <div class="phone-viewport">





    <md-toolbar>








      <md-layout :md-gutter="8">
        <md-layout>
          <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
            <md-icon>menu</md-icon>
          </md-button>
        </md-layout>

        <md-layout md-flex="8">
          <router-link to="/">
            <md-button class="md-raised md-primary">
              Home
            </md-button>
          </router-link>
        </md-layout>

        <md-layout md-flex="8">
          <router-link to="/TabExample">
            <md-button class="md-raised md-primary">
              Tabs
            </md-button>
          </router-link>
        </md-layout>

        <md-layout md-flex="8">
          <router-link to="/FormsExample">
            <md-button class="md-raised md-primary">
                Forms
            </md-button>
          </router-link>
        </md-layout>


        <md-layout md-flex="8">
          <router-link to="/Users">
            <md-button class="md-raised md-primary">
                Users
            </md-button>
          </router-link>
        </md-layout>


        <md-layout md-flex="60">
          <span></span>
        </md-layout>

        <md-layout>
          <md-avatar @click.native="toggleRightSidenav">
            <img src="/static/Dave.jpg" alt="Avatar">
          </md-avatar>

        </md-layout>
      </md-layout>



























    </md-toolbar>



    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Sidenav content</h3>
        </div>
      </md-toolbar>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>
    </md-sidenav>

    <md-sidenav class="md-right" ref="rightSidenav" @open="open('Right')" @close="close('Right')">
      <md-toolbar>
        <div class="md-toolbar-container">
          <h3 class="md-title">Sidenav content</h3>
        </div>
      </md-toolbar>

      <md-button class="md-raised md-accent" @click.native="closeRightSidenav">Close</md-button>
    </md-sidenav>
  </div>









</div>



</template>


<script>

export default {
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    toggleRightSidenav() {
      this.$refs.rightSidenav.toggle();
    },
    closeRightSidenav() {
      this.$refs.rightSidenav.close();
    },
    open(ref) {
      console.log('Opened: ' + ref);
    },
    close(ref) {
      console.log('Closed: ' + ref);
    }
  }
};

</script>
