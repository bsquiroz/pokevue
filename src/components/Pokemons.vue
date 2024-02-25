<script setup lang="ts">
import { getTypePokemon, getColorPokemon } from "../utils/colorsPokemons";
import { usePokemonsStore } from "../stores/pokemons";
import { storeToRefs } from "pinia";

const { isLoading, pokemons } = storeToRefs(usePokemonsStore());
</script>

<template>
    <div v-if="isLoading">loading...</div>
    <section v-else class="pokemons">
        <article
            v-for="pokemon in pokemons"
            :key="pokemon.id"
            :style="{
                backgroundColor: getColorPokemon(getTypePokemon(pokemon)),
            }"
            class="flex flex-col p-4 rounded-lg items-center gap-1"
        >
            <h3 class="text-slate-900 font-bold text-2xl">#{{ pokemon.id }}</h3>
            <picture class="flex-1 flex justify-center items-center">
                <img
                    :src="`${pokemon.sprites.other?.dream_world.front_default}`"
                    :alt="`${pokemon.name}`"
                />
            </picture>
            <h2
                class="bg-slate-900 w-full text-center rounded-full font-bold border-4 cursor-pointer border-transparent hover:bg-transparent hover:text-slate-900 hover:border-slate-900"
            >
                {{ pokemon.name }}
            </h2>
        </article>
    </section>
</template>
