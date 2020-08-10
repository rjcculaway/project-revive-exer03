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
    props: {
        name: String
    },
    methods: {
        send_message: function () {
            console.log('NAME: ' + this.name)
            var message = {
                msg: document.getElementById("msg_input").value,
                name: this.name
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