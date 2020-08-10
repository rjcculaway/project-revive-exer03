<template>
    <b-row>
        <b-col>
            <b-card class="chat-display text-right">
                <ChatBubble v-on:delete-button="deleteMessage" v-for="message in messages" :key="message.key" :msg="message.msg" :name="message.name" :self="message"/>
            </b-card>
            <ChatArea class="my-3" :name="name" />
        </b-col>
    </b-row>
</template>

<script>
import ChatArea from '@/components/ChatArea.vue'
import ChatBubble from '@/components/ChatBubble.vue'
import { db } from '../firebase/db'

export default {
    name: 'ChatContainer',
    props: {
        name: String
    },
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
    .chat-display {
        overflow-y: auto;
        height: 75vh;
    }
</style>