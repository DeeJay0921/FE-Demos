import Vue from 'vue'
import App from './App.vue'

let vm = new Vue ({
  el: '#app',
  data: {
    name: 'deejay'
  },
  template: "<App />",
  components: { App },
})