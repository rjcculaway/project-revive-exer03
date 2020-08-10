<template>
    <b-row>
        <b-col>
            <h1 class="text-center" style="line-height: 65%">IAQ</h1>
            <h1 class="text-center">TAU</h1>
            <h6 class="logoname text-center mb-4">Integrated Articulator for the Questionable Text Airing Underworld</h6>
            <h6 class="logoname text-center mb-4">by Rene Jotham Culaway</h6>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'Logo'
}
</script>

<style scoped lang='scss'>

    $e-Matrix-3-rgba: rgba(191,223,33, 0.5);
    // Glowing animation for the acronym
    h1 {
        font-family: 'Audiowide', cursive;
        font-size: 5em;
        font-weight: 800;

        text-shadow: 0 0 25px $e-Matrix-3-rgba;

        animation: 1.5s infinite glowing;
    }

</style>