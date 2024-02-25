<script setup lang="ts">
import Layout from "./components/Layout.vue";

import Buttons from "./components/Buttons.vue";
import Pokemons from "./components/Pokemons.vue";

import { usePokemonsStore } from "./stores/pokemons";

const { getPokemons } = usePokemonsStore();

getPokemons("https://pokeapi.co/api/v2/pokemon");
</script>

<template>
    <Layout>
        <h2 class="text-5xl font-bold text-center">
            Poke<span class="font-extrabold text-green-500">Vue</span>
        </h2>
        <Buttons />
        <Pokemons />
    </Layout>
</template>

<style scoped>
.pokemons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}
</style>
