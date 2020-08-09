<template>
  <b-row class="home">
        <b-col>
          <TopBar />
          <ChatContainer />
        </b-col>
    </b-row> 
</template>

<script>
// @ is an alias to /src
import ChatContainer from '@/components/ChatContainer.vue'
import TopBar from '@/components/TopBar.vue'

export default {
  name: 'Home',
  components: {
    ChatContainer,
    TopBar
  }
}
</script>
