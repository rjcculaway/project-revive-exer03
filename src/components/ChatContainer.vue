<template>
    <b-row>
        <b-col>
            <ChatBubble v-on:delete-button="deleteMessage" v-for="message in messages" :key="message.key" :msg="message.msg" :name="message.name" :self="message"/>
            <ChatArea />
        </b-col>
    </b-row>
</template>

<script>
import ChatArea from '@/components/ChatArea.vue'
import ChatBubble from '@/components/ChatBubble.vue'
import { db } from '../firebase/db'

export default {
    name: 'ChatContainer',
    components: {
        ChatArea,
        ChatBubble
    },
    data () {
        return {
            messages: []
        }
    },
    methods: {
        deleteMessage: function (message_id) {
            db.ref('messages/' + message_id).remove()
        }
    },

    firebase: {
        messages: db.ref('messages/')
    }
}
</script>

<style scoped lang='scss'>
</style>