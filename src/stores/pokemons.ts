import { defineStore } from "pinia";
import { ResponseGetPokemon, ResponseGetPokemons } from "../interfaces";
import { ref } from "vue";

export const usePokemonsStore = defineStore("pokemons", () => {
    const previous_url = ref<null | string>(null);
    const next_url = ref<null | string>(null);

    const pokemons = ref<[] | ResponseGetPokemon[]>([]);
    const isLoading = ref(false);

    const getPokemon = async (urlPokemons: { url: string }[]) => {
        let flagArr = [];

        for (const { url } of urlPokemons) {
            const data = await fetch(url);
            const pokemon: ResponseGetPokemon = await data.json();
            flagArr.push(pokemon);
        }

        pokemons.value = [...flagArr];
        isLoading.value = false;
    };

    const getPokemons = async (url: string) => {
        isLoading.value = true;
        const data = await fetch(url);
        const res: ResponseGetPokemons = await data.json();

        previous_url.value = res.previous;
        next_url.value = res.next;

        getPokemon(res.results);
    };

    const getPokemonsNext = () => {
        if (!next_url.value) return;
        getPokemons(next_url.value);
    };

    const getPokemonsPrevious = () => {
        if (!previous_url.value) return;
        getPokemons(previous_url.value);
    };

    return {
        getPokemonsNext,
        getPokemonsPrevious,
        isLoading,
        previous_url,
        next_url,
        pokemons,
        getPokemons,
    };
});
