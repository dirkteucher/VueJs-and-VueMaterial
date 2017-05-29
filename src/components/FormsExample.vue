<template>
  <div class="hello">
    <div class="mainContainer">

      <CustomHeader></CustomHeader>

      <h1>{{ msg }}</h1>


      <div class="forms md-card example-box-card md-theme-default">
        <form novalidate @submit.stop.prevent="submit">
          <md-input-container>
            <label>Initial value</label>
            <md-input></md-input>
          </md-input-container>

          <md-input-container>
            <label>With label</label>
            <md-input placeholder="My nice placeholder"></md-input>
          </md-input-container>

          <md-input-container md-inline>
            <label>Inline field</label>
            <md-input></md-input>
          </md-input-container>

          <md-input-container>
            <label>Number</label>
            <md-input type="number"></md-input>
          </md-input-container>

          <md-input-container>
            <label>Textarea</label>
            <md-textarea></md-textarea>
          </md-input-container>

          <md-input-container>
            <label>Disabled</label>
            <md-input disabled></md-input>
          </md-input-container>
        </form>
      </div>

      <h2>Passwords</h2>

      <div class="forms md-card example-box-card md-theme-default">

            <form novalidate @submit.stop.prevent="submit">
              <md-input-container>
                <label>Regular Password</label>
                <md-input type="password"></md-input>
              </md-input-container>

              <md-input-container md-has-password>
                <label>Password Reveal</label>
                <md-input type="password"></md-input>
              </md-input-container>
            </form>
      </div>

      <h2 class="md-primary">Icons</h2>

      <div class="forms md-card example-box-card md-theme-default">

        <form novalidate @submit.stop.prevent="submit">
          <md-input-container>
            <md-icon class="md-warn">
              warning
              <md-tooltip>Be careful. You're almost broken!</md-tooltip>
            </md-icon>
            <label>Money</label>
            <md-input type="text"></md-input>
            <md-icon>attach_money</md-icon>
          </md-input-container>

          <md-input-container>
            <md-icon>phone</md-icon>
            <label>Phone</label>
            <md-input type="tel"></md-input>
          </md-input-container>

          <md-input-container>
            <md-icon>speaker_notes</md-icon>
            <label>Notes</label>
            <md-textarea></md-textarea>
          </md-input-container>
        </form>
      </div>




    </div>


  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Vue Material forms'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



.forms {
  width: 400px;
  margin: 0 auto;
}
</style>
