import { NameIdContainer } from "./style";

import NavButton from "components/NavButton";
import PokemonSearch from "components/PokemonSearch";
import PokemonMoves from "components/PokemonMoves";
import PokemonInfo from "components/PokemonInfo";
import SearchContainer from "components/SearchContainer";
import useGetNameId from "hooks/useGetNameId";

const SearchName = () => {
  const { pokemon, setPokemonSearch, pokemonSearch, getPokemon, isLoadign } =
    useGetNameId();

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
        {isLoadign ? (
          <p>Loading...</p>
        ) : (
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
        )}
      </NameIdContainer>
    </>
  );
};

export default SearchName;
