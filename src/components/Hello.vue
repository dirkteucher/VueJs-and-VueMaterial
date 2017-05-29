<template>
  <div class="hello">
    <div class="mainContainer ">

      <CustomHeader></CustomHeader>

      <h1>{{ msg }}</h1>
      <hr/>


      <div class="forms md-card example-box-card md-theme-default">
        <h1>Floating action buttons</h1>
         <div>
           <md-button class="md-fab">
             <md-icon>edit</md-icon>
           </md-button>

           <md-button class="md-fab md-primary">
             <md-icon>email</md-icon>
           </md-button>

           <md-button class="md-fab md-warn">
             <md-icon>save</md-icon>
           </md-button>

           <md-button class="md-fab md-clean">
             <md-icon>dialpad</md-icon>
           </md-button>

           <md-button class="md-fab" disabled>
             <md-icon>message</md-icon>
           </md-button>
         </div>
      </div>

<hr/>

      <div class="forms">
        <h1>Icons</h1>
        <md-icon md-iconset="fa fa-home"></md-icon>
        <md-icon md-iconset="fa fa-bars" class="md-size-2x md-primary"></md-icon>
        <md-icon md-iconset="fa fa-users" class="md-size-3x md-accent"></md-icon>
        <md-icon md-iconset="fa fa-clock-o" class="md-size-4x md-disabled"></md-icon>
        <md-icon md-iconset="fa fa-history"></md-icon>
        <md-icon md-iconset="fa fa-heartbeat" class="md-size-2x md-primary"></md-icon>
        <md-icon md-iconset="fa fa-hashtag" class="md-size-3x md-primary"></md-icon>
        <md-icon md-iconset="fa fa-globe" class="md-size-4x md-dense"></md-icon>
        <md-icon md-iconset="fa fa-gamepad" class="md-size-4x md-primary"></md-icon>
      </div>

<hr/>

      <div class="forms md-card example-box-card md-theme-default">
        <h1>Default buttons</h1>
        <md-button class="md-raised">Default</md-button>
        <md-button class="md-raised md-primary">Primary</md-button>
        <md-button class="md-raised md-accent">Accent</md-button>
        <md-button class="md-raised md-warn">Warn</md-button>
        <md-button class="md-raised md-primary" disabled>Disabled</md-button>
        <md-button class="md-raised md-dense">Dense</md-button>
      </div>

<hr/>

      <div class="forms">
        <div>
          <h1 v-on:click="changeTitle">Default switches</h1>
          <md-switch v-model="checked0" id="my-test0" name="my-test0" v-on:click="changeTitle"></md-switch>
          <md-switch v-model="checked1" id="my-test1" name="my-test1" class="md-primary">Primary Color</md-switch>
          <md-switch v-model="checked2" id="my-test2" name="my-test2" class="md-warn">Warn Color</md-switch>
          <md-switch v-model="checked3" id="my-test3" name="my-test3" disabled>Disabled</md-switch>
        </div>

      </div>




    </div>
  </div>
</template>

<script>
export default {
  name: 'hello2',
  data () {
    return {
      msg: 'Vue Material forms.',
      checked0: true,
      checked1: true,
      checked2: true,
      checked3: true
    }
  },
  methods: {
    changeTitle() {
      alert("change ttile");
    }
  }
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>



<style>
.forms {
  width:500px;
  margin: 0 auto;
}
</style>
