<template>
    <b-row align-h="end" align-v="center">
        <!-- This represents a chat bubble. -->
        <!-- When hovered, a delete button is displayed. -->
        <b-col class="text-right" cols="auto" @mouseover="hovering=true" @mouseleave="hovering=false">
            <div class="bubble p-3 m-2">
                <p>{{msg}}</p>
                <p class="name">&lt;{{name}}&gt;</p>
            </div>
            <b-link v-if="hovering" style="line-height: 0" v-on:click="$emit('delete-button', self['.key'])">Delete</b-link>
        </b-col>
    </b-row>
</template>

<script>



export default {
    name: 'ChatBubble',
    data() {
        return {
            hovering: false
        }
    },
    props: {
        name: String,
        msg: String,
        self: Object
    }
}
</script>

<style lang='scss'>

</style>