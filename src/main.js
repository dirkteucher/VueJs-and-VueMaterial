// Importing css/js here will be made available globally
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

//Get requests
import vueResource from 'vue-resource'
Vue.use(vueResource)

//Routing
import router from './router'

import App from './App'


//Vue material design
var VueMaterial = require('vue-material')
Vue.use(VueMaterial)
// Registering a custom theme
Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'black',
  warn: 'red',
  background: 'white'
})



import CustomFooter from './components/CustomFooter.vue'
Vue.component('CustomFooter', CustomFooter)

import CustomHeader from './components/CustomHeader.vue'
Vue.component('CustomHeader', CustomHeader)

import FormsExample from './components/FormsExample.vue'
Vue.component('FormsExample', FormsExample)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
