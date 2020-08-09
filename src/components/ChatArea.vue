<template>
    <b-row>
        <b-col>
            <b-form inline>
                <b-form-textarea id="msg_input" class="textarea-auto-height" rows="2" max-rows="5" no-resize> </b-form-textarea>
                <b-button v-on:click="send_message()" type="submit">Send</b-button>
            </b-form>
        </b-col>
    </b-row>
</template>

<script>
import { db } from '../firebase/db'

export default {
    name: 'ChatArea',
    methods: {
        send_message: function () {
            var message = {
                msg: document.getElementById("msg_input").value,
                name: 'Rene'
            } 
            db.ref('messages/').push(message)
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>

<style scoped lang='scss'>
</style>