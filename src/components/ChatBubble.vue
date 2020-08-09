<template>
    <b-row>
        <b-col class="text-right">
            <b-card class="text-right">
                <b-card-text>
                {{msg}}
                </b-card-text>
            </b-card>
            <a>Delete</a>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'ChatBubble',
    props: {
        name: String,
        msg: String
    }
}
</script>

<style scoped lang='scss'>
</style>