<template>
    <b-row>
        <b-col>
            <div class="mt-5">
                <Logo />
            </div>
        </b-col>
    </b-row>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
    name: 'TopBar',
    components: {
        Logo
    }
}
</script>

<style scoped lang='scss'>
</style>