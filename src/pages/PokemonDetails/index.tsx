import PokemonInfo from "components/PokemonInfo";
import PokemonMoves from "components/PokemonMoves";
import { RawPokemon, TPokemonDetails } from "pages/PokemonDetails/type";
import { SearchContainer, SearchContainer2 } from "pages/SearchName/style";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api, searchNamePath } from "services/Api/api";

const PokemonDetails = () => {
  const params = useParams();
  const paramId = params["id"] as string;

  const [pokemonsDetails, setPokemonsDetails] = useState<TPokemonDetails>();

  useEffect(() => {
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
      .catch((err) => err);
  }, [paramId]);

  return (
    <SearchContainer2>
      <PokemonInfo
        name={pokemonsDetails?.name ?? ""}
        id={pokemonsDetails?.id ?? 0}
        image={pokemonsDetails?.image ?? ""}
      />

      {pokemonsDetails?.moves.map((e) => (
        <PokemonMoves key={e.move.name} move={e.move.name} />
      ))}
    </SearchContainer2>
  );
};
export default PokemonDetails;
