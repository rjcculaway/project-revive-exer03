<template>
  <b-row class="home">
        <b-col>
          <TopBar v-on:log-out="logOut" />
          <ChatContainer :name="this.user.displayName" />
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
      user: {}
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      }
    });
  },
  methods: {
    logOut: function () {
      firebase.auth().signOut().then(() => this.$router.replace({
        name: "Login"
      }));
    }
  }
}
</script>
