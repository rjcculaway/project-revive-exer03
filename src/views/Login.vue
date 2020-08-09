<template>
  <b-row class="login">
    <section id="firebaseui-auth-container">
    </section>
  </b-row> 
</template>

<script>

var firebase = require('firebase');
var firebaseui = require('firebaseui');
//import config from '../firebase/credentials';

export default {
  name: 'Login',
  components: {
  },
  mounted() {
    var uiConfig = {
      signInSuccessUrl: '/home',
      signInOptions:
        [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
      };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
    },
}
</script>
