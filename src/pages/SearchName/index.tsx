import { useState } from "react";

import { NameIdContainer } from "./style";
import { RawPokemon, TPokemonInfo } from "./type";

import NavButton from "components/NavButton";
import PokemonSearch from "components/PokemonSearch";
import PokemonMoves from "components/PokemonMoves";
import PokemonInfo from "components/PokemonInfo";
import { api, searchNamePath } from "services/Api/api";
import SearchContainer from "components/SearchContainer";

const SearchName = () => {
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
          image: response.data.sprites.front_default,
          moves: response.data.moves.slice(0, 5),
        });
      })
      .catch((err) => err)
      .finally(() => setIsLoading(true));
  };

  return (
    <>
      <NavButton title="Home" link="/" />

      <SearchContainer title="Enter pokemon name or ID">
        <PokemonSearch
          onClick={getPokemon}
          title="Search"
          value={pokemonSearch}
          onChange={(e) => setPokemonSearch(e.target.value)}
        />
      </SearchContainer>

      <NameIdContainer>
        {pokemon ? (
          <>
            <PokemonInfo
              image={pokemon?.image ?? ""}
              id={pokemon?.id ?? 0}
              name={pokemon?.name ?? ""}
            />
            {pokemon?.moves.map((e) => (
              <PokemonMoves key={e.move.name} move={e.move.name} />
            ))}
          </>
        ) : null}
      </NameIdContainer>
    </>
  );
};
export default SearchName;
