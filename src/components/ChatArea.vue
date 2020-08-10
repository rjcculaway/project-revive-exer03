<template>
    <b-row align-v="center">
        <b-col>
            <b-form-textarea id="msg_input" class="textarea-auto-height" rows="2" max-rows="5" no-resize> </b-form-textarea>
        </b-col>
        <b-col cols="auto">
            <b-form>
                <b-button size="sm" v-on:click="send_message()" type="submit">Send</b-button>  
                <br />
                <b-button size="sm" class="mt-2" v-on:click="$emit('log-out')" type="submit">Log Out</b-button>
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