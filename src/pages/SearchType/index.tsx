import { Link } from "react-router-dom";

import NavButton from "components/NavButton";
import PokemonSearch from "components/PokemonSearch";
import SearchContainer from "components/SearchContainer";
import { TypeContainer } from "pages/SearchType/style";
import useGetType from "hooks/useGetType";

const SearchType = () => {
  const {
    setPokemonListSearch,
    getPokemonList,
    isLoading,
    pokemonList,
    pokemonListSearch,
  } = useGetType();

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
