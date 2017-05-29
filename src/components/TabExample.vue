<template>

  <div class="hello">
    <div class="mainContainer">

      <CustomHeader></CustomHeader>




      <md-tabs>
        <md-tab id="movies" md-label="Step-1">
          <div>
            <div class="has-ripple">
              <md-ink-ripple />
              This div has ripple effect
            </div>

            <div class="has-ripple purple">
              <md-ink-ripple />
              This div has ripple effect
            </div>

            <div class="has-ripple blue">
              <md-ink-ripple />
              This div has ripple effect
            </div>

            <div class="has-ripple red">
              <md-ink-ripple />
              This div has ripple effect
            </div>

            <md-card class="card-ripple" md-with-hover>
              <md-card-media>
                <md-ink-ripple />
                <img src="/static/Dave.jpg" alt="People">
              </md-card-media>

              <md-card-actions>
                <md-button class="md-icon-button">
                  <md-icon>favorite</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                  <md-icon>bookmark</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                  <md-icon>share</md-icon>
                </md-button>
              </md-card-actions>
            </md-card>
          </div>
        </md-tab>

        <md-tab id="music" md-label="Step-2">
          <h2>Progress bar</h2>
          <md-progress md-indeterminate></md-progress>
          <md-progress class="md-accent" md-indeterminate></md-progress>
          <md-progress class="md-warn" md-indeterminate></md-progress>
        </md-tab>

        <md-tab id="books" md-label="Step-3">
          <p>Spinners</p>
          <md-spinner :md-size="20" md-indeterminate class="md-accent"></md-spinner>
          <md-spinner :md-size="60" md-indeterminate class="md-warn"></md-spinner>
          <md-spinner :md-size="150" md-indeterminate></md-spinner>

          <md-spinner :md-size="20" :md-stroke="2" md-indeterminate class="md-accent"></md-spinner>
          <md-spinner :md-size="60" :md-stroke="1.5" md-indeterminate class="md-warn"></md-spinner>
          <md-spinner :md-size="150" :md-stroke="1" md-indeterminate></md-spinner>
        </md-tab>

        <md-tab id="pictures" md-label="Step-4" md-tooltip="This is the pictures tab!">
          <md-layout md-gutter>
            <md-layout md-column md-gutter>
              <md-layout md-flex="100">
                <md-card>
                  <md-card-media>
                    <img src="/static/Dave.jpg" alt="People">
                  </md-card-media>
                </md-card>
              </md-layout>
              <md-layout></md-layout>
            </md-layout>

            <md-layout md-column md-gutter>
              <md-layout md-flex="50"></md-layout>
              <md-layout></md-layout>
              <md-layout></md-layout>
            </md-layout>
          </md-layout>
        </md-tab>


        <md-tab id="Grid" md-label="Step-5" md-tooltip="This is the pictures tab!">
          <h2>Grid example and responsive design (Re-size the browser)</h2>
          <md-layout md-gutter>
            <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
              md-flex-xsmall <br>
              md-flex-small="50" <br>
              md-flex-medium="33"
              <img src="/static/infinity.jpg"  />

            </md-layout>

            <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
              md-flex-xsmall <br>
              md-flex-small="50" <br>
              md-flex-medium="33"
              <img src="/static/infinity.jpg"  />

            </md-layout>

            <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
              md-flex-xsmall <br>
              md-flex-small="50" <br>
              md-flex-medium="33"
              <img src="/static/infinity.jpg"  />

            </md-layout>

            <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
              md-flex-xsmall <br>
              md-flex-small="50" <br>
              md-flex-medium="33"
              <img src="/static/infinity.jpg"  />

            </md-layout>

            <md-layout md-flex-small="100" md-flex-medium="33" md-hide-xsmall>
              md-flex-medium="33" <br>
              md-hide-xsmall
              <img src="/static/infinity.jpg"  />

            </md-layout>

            <md-layout md-flex md-flex-medium="33" md-hide-small>
              md-flex-medium="33" <br>
              md-hide-small
              <img src="/static/infinity.jpg"  />

            </md-layout>
          </md-layout>

        </md-tab>


      </md-tabs>





    </div>
    <!--/mainContainer-->

  </div>



</template>

<script>
export default {
  name: 'TabExample',
  data () {
    return {
      msg: 'This is the tabbing component'
    }
  }
}
</script>

<style scoped>


</style>

<!--Tab 1 styles-->
<style scoped>
.has-ripple {
  margin-bottom: 16px;
  padding: 20px;
  display: inline-block;
  position: relative;
}

.blue {
  color: #2196F3;
}

.purple {
  color: #9C27B0;
}

.red {
  color: #F44336;
}

.card-ripple {
  width: 300px;
  margin-top: 24px;
}
</style>



<!--Tab 5 specific bootstrap grid styles-->
<style scoped>
div#Grid div {
    background-color: #c8c8c8;
    border: solid 1px cornflowerblue;
}
inspector-stylesheet:1
div#Grid {
    background-color: grey;
}

#Grid img {
  height: 80% !important;
}
</style>
