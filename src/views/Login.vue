<template>
  <b-row class="login">
    <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css" />
    <b-col>
      <div id="firebaseui-auth-container">
      </div>
      <h5 class="text-center">
        or sign-in anonymously:
      </h5>
      <div id="anonymous-sign-in">

        <b-form @submit="onSubmit">
          <b-form-group id="name_group" label="Display Name" label-for="display_name">
            <b-form-input id="display_name" v-model="name_anonymous" :state="validation" required placeholder="Enter name"></b-form-input>
            <!-- Validation States -->
            <b-form-invalid-feedback :state="validation">
              Your display name is invalid.
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="validation">
              Looking good!
            </b-form-valid-feedback>
            <b-form-text id="name-guide">Your display name can only contain alphanumeric characters, hyphens, underscores, and must be 4 to 20 characters.</b-form-text>
          </b-form-group>

          <b-button type="submit" v-if="validation">Submit</b-button>
        </b-form>
        
      </div>
      
    
    </b-col>
  </b-row> 
</template>

<script>

var firebase = require('firebase');
var firebaseui = require('firebaseui');

export default {
  name: 'Login',
  components: {
  },
  data() {
    return {
      name_anonymous: ''
    }
  },
  methods: {
    onSubmit: function () {
      firebase.auth().signInAnonymously().catch();
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          if (user.isAnonymous) user.temporaryName = this.name_anonymous
        }
      });
    }
  },
  computed: {
    validation() {
      // Constantly checks if the name meets the requirements.
      const regex = RegExp('^[-_a-zA-z0-9]{4,20}$')
      if (regex.test(this.name_anonymous)) {
        return true
      } else {
        return false
      }
    }
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
