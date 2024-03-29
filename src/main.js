import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/vuefire'
import App from './App.vue'
import router from './router'
import './style/custom.scss'

import firebase from 'firebase'

Vue.config.productionTip = false

new Vue({
  router,
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.$router.push('/home')
      } else {
        this.$router.push('/login')
      }
     });
  },
  render: h => h(App)
}).$mount('#app')
