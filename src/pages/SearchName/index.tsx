import { Link } from "react-router-dom";
import { useState } from "react";

import { SearchContainer, SearchContainer2 } from "./style";
import { RawPokemon, TPokemonInfo } from "./type";

import NavButton from "components/NavButton";
import PokemonSearch from "components/PokemonSearch";
import PokemonMoves from "components/PokemonMoves";
import PokemonInfo from "components/PokemonInfo";
import { api, searchNamePath } from "services/Api/api";
import PageTitle from "components/PageTitle";

const SearchName = () => {
  const [pokemonSearch, setPokemonSearch] = useState("");
  const [pokemon, setPokemon] = useState<TPokemonInfo>();

  const getPokemon = () => {
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
      .catch((err) => err);
  };

  return (
    <>
      <Link to="/">
        <NavButton title="Home" />
      </Link>
      <SearchContainer>
        <PageTitle title="Enter pokemon name or ID" />
        <PokemonSearch
          onClick={getPokemon}
          title="Search"
          value={pokemonSearch}
          onChange={(e) => setPokemonSearch(e.target.value)}
        />
      </SearchContainer>
      <SearchContainer2>
        {pokemon ? (
          <PokemonInfo
            image={pokemon?.image ?? ""}
            id={pokemon?.id ?? 0}
            name={pokemon?.name ?? ""}
          />
        ) : null}
        {pokemon?.moves.map((e) => (
          <PokemonMoves key={e.move.name} move={e.move.name} />
        ))}
      </SearchContainer2>
    </>
  );
};
export default SearchName;
