<template>
    <b-row>
        <b-col>
            <b-navbar>
                <b-navbar-brand class="logonav">IAQ TAU</b-navbar-brand>
                <b-navbar-nav class="ml-auto">
                    <b-button v-on:click="$emit('log-out')" type="submit">Log Out</b-button>
                </b-navbar-nav>
            </b-navbar>
        </b-col>
    </b-row>
</template>

<script>

export default {
    name: 'TopBar',
    components: {
    }
}
</script>

<style scoped lang='scss'>
</style>