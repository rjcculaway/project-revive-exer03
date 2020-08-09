<template>
  <b-row class="login">
    <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css" />
    <b-col>
      <div id="firebaseui-auth-container">
      </div>
    </b-col>
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
      signInFlow: 'popup',
      signInOptions:
        [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
      };
      let ui = firebaseui.auth.AuthUI.getInstance();
      if (!ui) {
        ui = new firebaseui.auth.AuthUI(firebase.auth());
      }
      ui.start('#firebaseui-auth-container', uiConfig);
    },
}
</script>
