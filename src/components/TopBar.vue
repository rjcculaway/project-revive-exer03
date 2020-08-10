<template>
    <b-row>
        <b-col>
            Integrated Articulator for the Questionable Text Airing Underworld
        </b-col>
        <b-col cols="2">
            <b-button v-on:click="$emit('log-out')" type="submit">Log Out</b-button>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'TopBar'
}
</script>

<style scoped lang='scss'>
</style>