<template>
    <b-row>
        <b-col>
            <h1 class="text-center">IAQ</h1>
            <h1 class="text-center">TAU</h1>
            <h6 class="text-center mb-4">Integrated Articulator for the Questionable Text Airing Underworld</h6>
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

    h1 {
        font-family: 'Press Start 2P', cursive;
        font-size: 5em;
        font-weight: 800;
        margin: 0;

        text-shadow: 0 0 25px $e-Matrix-3-rgba;

        animation: 1.5s infinite glowing;
    }
    h6 {
        font-family: 'Press Start 2P', cursive;
        font-size: 0.75em;
    }

    @keyframes glowing {
        0% {
            text-shadow: 0 0 15px $e-Matrix-3-rgba;
        }

        50% {
            text-shadow: 0 0 30px $e-Matrix-3-rgba;
        }

        100% {
            text-shadow: 0 0 15px $e-Matrix-3-rgba;
        }
    }
</style>