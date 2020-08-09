<template>
    <b-row>
        <b-col class="text-right">
            <b-card class="text-right">
                <b-card-text>
                <p>{{msg}}</p>
                <p>{{name}}</p>
                <p>{{self['.key']}}</p>
                </b-card-text>
            </b-card>
            <b-button v-on:click="$emit('delete-button', self['.key'])">Delete</b-button>
        </b-col>
    </b-row>
</template>

<script>



export default {
    name: 'ChatBubble',
    props: {
        name: String,
        msg: String,
        self: Object
    }
}
</script>

<style scoped lang='scss'>
</style>