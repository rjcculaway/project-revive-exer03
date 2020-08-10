<template>
  <b-row class="home" align-h="center">
      <b-col cols="auto">
        <TopBar />
        <ChatContainer :name="displayName" />
      </b-col>
  </b-row> 
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase'
import ChatContainer from '@/components/ChatContainer.vue'
import TopBar from '@/components/TopBar.vue'

export default {
  name: 'Home',
  components: {
    ChatContainer,
    TopBar
  },
  data() {
    return {
      user: {},
      displayName: ''
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
        // If the user is anonymous then we cannot use the displayName attribute to fetch the name, hence we store fetch it in temporaryName.
        if (user.isAnonymous) {
          this.displayName = user.temporaryName
        } else {
          this.displayName = user.displayName
        }
      } else {
        if (this.$router.path !== `/login`) {
          this.$router.replace({
            name: "Login"
          })
        }
      }
    })
  }
}
</script>
