import { NameIdContainer } from "./style";

import NavButton from "components/NavButton";
import PokemonSearch from "components/PokemonSearch";
import PokemonMoves from "components/PokemonMoves";
import PokemonInfo from "components/PokemonInfo";
import SearchContainer from "components/SearchContainer";
import useGetPokemonInfo from "hooks/useGetPokemonInfo";
import { useState } from "react";

const SearchName = () => {
  const [pokemonNameOrId, setPokemonNameOrId] = useState<string>("");
  const { pokemon, getPokemon, isLoading } = useGetPokemonInfo();

  const getContent = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (!isLoading && pokemon) {
      <>
        <PokemonInfo
          image={pokemon.image}
          id={pokemon.id}
          name={pokemon.name}
        />
        {pokemon.moves.map((moveName) => (
          <PokemonMoves key={moveName} move={moveName} />
        ))}
      </>;
    }

    return null;
  };

  return (
    <>
      <NavButton title="Home" link="/" />

      <SearchContainer title="Enter pokemon name or ID">
        <PokemonSearch
          onClick={() => getPokemon(pokemonNameOrId)}
          title="Search"
          value={pokemonNameOrId}
          onChange={({ target: { value } }) => setPokemonNameOrId(value)}
        />
      </SearchContainer>

      <NameIdContainer>{getContent()}</NameIdContainer>
    </>
  );
};

export default SearchName;
