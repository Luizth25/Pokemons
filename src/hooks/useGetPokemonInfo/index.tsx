import { useCallback, useState } from "react";

import getByNameOrID from "services/pokemon";
import { TPokemonInfo } from "services/pokemon/types";

export default function useGetPokemonInfo() {
  const [pokemon, setPokemon] = useState<TPokemonInfo>({
    id: 0,
    name: "",
    moves: [],
    image: "",
  });
  // const [pokemon, setPokemon] = useState<TPokemonInfo>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getPokemon = useCallback((pokemonNameOrId: string | undefined) => {
    console.log("dentro");
    if (pokemonNameOrId) {
      setIsLoading(true);
      getByNameOrID(pokemonNameOrId)
        .then(({ id, image, moves, name }) => {
          setPokemon({
            id,
            name,
            image,
            moves,
          });
        })
        .catch((err) => err)
        .finally(() => setIsLoading(false));
    }
  }, []);

  return { pokemon, getPokemon, isLoading };
}
