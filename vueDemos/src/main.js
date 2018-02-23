import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

let vm = new Vue ({
  el: '#app',
  data: {
    name: 'deejay'
  },
  template: "<App />",
  components: { App },
})