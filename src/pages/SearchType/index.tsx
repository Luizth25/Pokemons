import { useState } from "react";
import { Link } from "react-router-dom";

import NavButton from "components/NavButton";
import PageTitle from "components/PageTitle";
import PokemonSearch from "components/PokemonSearch";
import { SearchContainer, SearchContainer2 } from "pages/SearchName/style";
import { RawPokemonList, TPokemonList } from "pages/SearchType/type";
import { api, searchTypePath } from "services/Api/api";

const SearchType = () => {
  const [pokemonListSearch, setPokemonListSearch] = useState("");
  const [pokemonList, setPokemonList] = useState<TPokemonList>();

  const getPokemonList = () => {
    api
      .get<RawPokemonList>(`${searchTypePath}/${pokemonListSearch}`)
      .then((response) => {
        setPokemonList({
          pokemons: response.data.pokemon,
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
        <PageTitle title="Search Pokemons For Type" />
        <PokemonSearch
          title="Search"
          onClick={getPokemonList}
          value={pokemonListSearch}
          onChange={(e) => setPokemonListSearch(e.target.value)}
        />
      </SearchContainer>
      <SearchContainer2>
        {pokemonList?.pokemons?.map((e) => (
          <ul>
            <li key={e.pokemon.name}>
              <Link
                to={`/pokemon-details/${e.pokemon.url.split("/").slice(6, 7)}`}
              >
                {e.pokemon.url.split("/").slice(6, 7)} {e.pokemon.name}
              </Link>
            </li>
          </ul>
        ))}
      </SearchContainer2>
    </>
  );
};

export default SearchType;
