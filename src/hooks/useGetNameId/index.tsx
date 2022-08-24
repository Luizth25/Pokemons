import { useState } from "react";

import { TPokemonInfo, RawPokemon } from "hooks/useGetNameId/type";
import { api, searchNamePath } from "services/Api/api";

export default function useGetNameId() {
  const [pokemonSearch, setPokemonSearch] = useState("");
  const [pokemon, setPokemon] = useState<TPokemonInfo>();

  const [isLoadign, setIsLoading] = useState<boolean>(false);

  const getPokemon = () => {
    setIsLoading(true);
    api
      .get<RawPokemon>(`${searchNamePath}/${pokemonSearch}`)
      .then((response) => {
        setPokemon({
          id: response.data.id,
          name: response.data.name,
          image:
            response.data.sprites.versions["generation-v"]["black-white"]
              .animated.front_default,
          moves: response.data.moves.slice(0, 5),
        });
      })
      .catch((err) => err)
      .finally(() => setIsLoading(false));
  };
  return { setPokemonSearch, pokemon, pokemonSearch, getPokemon, isLoadign };
}
