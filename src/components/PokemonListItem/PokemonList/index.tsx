import TPokemonListProps from "./type";
import { PokemonType } from "./style";

const PokemonList = ({ pokemonType, children }: TPokemonListProps) => (
  <li>
    <PokemonType>{pokemonType}</PokemonType>
    {children}
  </li>
);

export default PokemonList;
