import { Link } from "react-router-dom";

import NavButton from "components/NavButton";
import PokemonItemList from "components/PokemonListItem";
import PokemonList from "components/PokemonListItem/PokemonList";
import PokemonItem from "components/PokemonListItem/PokemonList/PokemonItem";
import Pokemon from "components/PokemonListItem/PokemonList/PokemonItem/Pokemon";
import * as s from "pages/Home/style";

const Home = () => (
  <>
    <PokemonItemList title="Types of Pokemons">
      <PokemonList pokemonType="Water">
        <PokemonItem>
          <Pokemon
            name="Mudkip"
            link="https://www.serebii.net/pokedex-swsh/mudkip/"
            image="https://www.serebii.net/pokedex-swsh/icon/258.png"
          />
          <Pokemon
            name="Magikarp"
            link="https://www.serebii.net/pokedex-swsh/magikarp/"
            image="https://www.serebii.net/pokedex-swsh/icon/129.png"
          />
          <Pokemon
            name="Mudkip"
            link="https://www.serebii.net/pokedex-swsh/empoleon/"
            image="https://www.serebii.net/pokedex-swsh/icon/395.png"
          />
        </PokemonItem>
      </PokemonList>

      <PokemonList pokemonType="Poison">
        <PokemonItem>
          <Pokemon
            name="Venusaur"
            link="https://www.serebii.net/pokedex-swsh/venusaur/"
            image="https://www.serebii.net/pokedex-swsh/icon/003.png"
          />
          <Pokemon
            name="Nidoking"
            link="https://www.serebii.net/pokedex-swsh/nidoking/"
            image="https://www.serebii.net/pokedex-swsh/icon/034.png"
          />
          <Pokemon
            name="Nidoqueen"
            link="https://www.serebii.net/pokedex-swsh/nidoqueen/"
            image="https://www.serebii.net/pokedex-swsh/icon/031.png"
          />
        </PokemonItem>
      </PokemonList>

      <PokemonList pokemonType="Normal">
        <PokemonItem>
          <Pokemon
            name="Snorlax"
            link="https://www.serebii.net/pokedex-swsh/snorlax/"
            image="https://www.serebii.net/pokedex-swsh/icon/143.png"
          />
          <Pokemon
            name="Slakoth"
            link="https://www.serebii.net/pokedex-swsh/slakoth/"
            image="https://www.serebii.net/pokedex-swsh/icon/287.png"
          />
          <Pokemon
            name="Farfetch'd"
            link="https://www.serebii.net/pokedex-swsh/farfetch'd/"
            image="https://www.serebii.net/pokedex-swsh/icon/083.png"
          />
        </PokemonItem>
      </PokemonList>
    </PokemonItemList>
    <s.NavContainer>
      <Link to="/search-name">
        <NavButton title="Search for Name" />
      </Link>
      <Link to="/search-type">
        <NavButton title="Search for Type" />
      </Link>
    </s.NavContainer>
  </>
);
export default Home;
