<template>
    <b-row align-v="center">
        <b-col>
            <b-form-textarea id="msg_input" class="textarea-auto-height" rows="2" no-resize> </b-form-textarea>
        </b-col>
        <b-col cols="auto">
            <b-form>
                <b-button size="sm" v-on:click="send_message()" type="submit">Send</b-button>  
            </b-form>
        </b-col>
    </b-row>
</template>

<script>
import { db } from '../firebase/db'

export default {
    name: 'ChatArea',
    props: {
        name: String
    },
    methods: {
        send_message: function () {
            var message_input = document.getElementById("msg_input").value
            console.log('NAME: ' + this.name)
            var message = {
                msg: message_input,
                name: this.name
            } 
            db.ref('messages/').push(message)
                .catch(error => {
                    console.log(error)
                })
            document.getElementById("msg_input").value = ''
        }
        
    }
}
</script>

<style scoped lang='scss'>
</style>