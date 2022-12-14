import { useState } from "react";

import { RawPokemonList, TPokemonList } from "hooks/useGetType/type";
import { api } from "api";

export default function useGetType() {
  const [pokemonListSearch, setPokemonListSearch] = useState("");
  const [pokemonList, setPokemonList] = useState<TPokemonList>({
    pokemons: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getPokemonList = () => {
    setIsLoading(true);
    api
      .get<RawPokemonList>(`/type/${pokemonListSearch}`)
      .then((response) => {
        setPokemonList({
          pokemons: response.data.pokemon,
        });
      })
      .catch((err) => err)
      .finally(() => setIsLoading(false));
  };
  return {
    setPokemonListSearch,
    pokemonList,
    isLoading,
    getPokemonList,
    pokemonListSearch,
  };
}
