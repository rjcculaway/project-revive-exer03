<template>
    <b-row align-h="end">
        <b-col class="text-right" cols="auto">
            <div class="bubble p-3 m-2">
                <p>{{msg}}</p>
                <p class="name">{{name}}</p>
            </div>
            <b-link style="line-height: 0" v-on:click="$emit('delete-button', self['.key'])">Delete</b-link>
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

<style lang='scss'>

</style>