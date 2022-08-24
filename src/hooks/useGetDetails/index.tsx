import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { RawPokemon, TPokemonDetails } from "hooks/useGetDetails/type";
import { api, searchNamePath } from "services/Api/api";

export default function useGetDetails() {
  const params = useParams();
  const paramId = params["id"] as string;

  const [pokemonsDetails, setPokemonsDetails] = useState<TPokemonDetails>({
    id: 0,
    image: "",
    moves: [],
    name: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    api
      .get<RawPokemon>(`${searchNamePath}/${paramId}`)
      .then((response) => {
        setPokemonsDetails({
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
  }, [paramId]);

  return { pokemonsDetails, isLoading };
}
