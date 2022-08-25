import { useEffect } from "react";
import { useParams } from "react-router-dom";

import PokemonInfo from "components/PokemonInfo";
import PokemonMoves from "components/PokemonMoves";
import NavButton from "components/NavButton";
import useGetPokemonInfo from "hooks/useGetPokemonInfo";

import { DetailsContainer } from "./style";

const PokemonDetails = () => {
  const { id } = useParams();
  const { pokemon, getPokemon, isLoading } = useGetPokemonInfo();
  console.log("fora do useeffect");
  useEffect(() => {
    getPokemon(id);
  }, [getPokemon, id]);

  return (
    <>
      <NavButton link="/search-type" title="Back" />
      <DetailsContainer>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <PokemonInfo
              name={pokemon.name}
              id={pokemon.id}
              image={pokemon.image}
            />
            {pokemon?.moves.map((moveName) => (
              <PokemonMoves key={moveName} move={moveName} />
            ))}
          </>
        )}
      </DetailsContainer>
    </>
  );
};

export default PokemonDetails;
