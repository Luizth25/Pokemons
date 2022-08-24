import PokemonInfo from "components/PokemonInfo";
import PokemonMoves from "components/PokemonMoves";
import { RawPokemon, TPokemonDetails } from "pages/PokemonDetails/type";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api, searchNamePath } from "services/Api/api";
import { DetailsContainer } from "./style";

const PokemonDetails = () => {
  const params = useParams();
  const paramId = params["id"] as string;

  const [pokemonsDetails, setPokemonsDetails] = useState<TPokemonDetails>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    api
      .get<RawPokemon>(`${searchNamePath}/${paramId}`)
      .then((response) => {
        setPokemonsDetails({
          id: response.data.id,
          name: response.data.name,
          image: response.data.sprites.front_default,
          moves: response.data.moves.slice(0, 5),
        });
      })
      .catch((err) => err)
      .finally(() => setIsLoading(false));
  }, [paramId]);

  return (
    <DetailsContainer>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <PokemonInfo
            name={pokemonsDetails?.name ?? ""}
            id={pokemonsDetails?.id ?? 0}
            image={pokemonsDetails?.image ?? ""}
          />
          {pokemonsDetails?.moves.map((e) => (
            <PokemonMoves key={e.move.name} move={e.move.name} />
          ))}
        </>
      )}
    </DetailsContainer>
  );
};
export default PokemonDetails;
