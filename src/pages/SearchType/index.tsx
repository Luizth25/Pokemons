import { useState } from "react";
import { Link } from "react-router-dom";

import NavButton from "components/NavButton";
import PokemonSearch from "components/PokemonSearch";
import { RawPokemonList, TPokemonList } from "pages/SearchType/type";
import { api, searchTypePath } from "services/Api/api";
import SearchContainer from "components/SearchContainer";
import { TypeContainer } from "pages/SearchType/style";

const SearchType = () => {
  const [pokemonListSearch, setPokemonListSearch] = useState("");
  const [pokemonList, setPokemonList] = useState<TPokemonList>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getPokemonList = () => {
    setIsLoading(true);
    api
      .get<RawPokemonList>(`${searchTypePath}/${pokemonListSearch}`)
      .then((response) => {
        setPokemonList({
          pokemons: response.data.pokemon,
        });
      })
      .catch((err) => err)
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <NavButton title="Home" link="/" />

      <SearchContainer title="Search Pokemons For Type">
        <PokemonSearch
          title="Search"
          onClick={getPokemonList}
          value={pokemonListSearch}
          onChange={(e) => setPokemonListSearch(e.target.value)}
        />
      </SearchContainer>

      <TypeContainer>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {pokemonList?.pokemons?.map((e) => (
              <li key={e.pokemon.name}>
                <Link
                  to={`/pokemon-details/${e.pokemon.url
                    .split("/")
                    .slice(6, 7)}`}
                >
                  {e.pokemon.url.split("/").slice(6, 7)} {e.pokemon.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </TypeContainer>
    </>
  );
};

export default SearchType;
