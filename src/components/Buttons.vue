<script setup lang="ts">
import { usePokemonsStore } from "../stores/pokemons";
import { storeToRefs } from "pinia";

const { getPokemonsNext, getPokemonsPrevious } = usePokemonsStore();
const { next_url, previous_url } = storeToRefs(usePokemonsStore());
</script>

<template>
    <section class="flex gap-1 justify-center">
        <button
            :disabled="!previous_url"
            class="p-4 bg-blue-500 rounded-md font-bold cursor-pointer hover:opacity-90"
            @click="getPokemonsPrevious"
        >
            Atras
        </button>
        <button
            :disabled="!next_url"
            class="p-4 bg-blue-500 rounded-md font-bold cursor-pointer hover:opacity-90"
            @click="getPokemonsNext"
        >
            Adelante
        </button>
    </section>
</template>
