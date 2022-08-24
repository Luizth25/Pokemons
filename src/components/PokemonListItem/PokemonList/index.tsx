import { PokemonType } from "./style";
import TPokemonListProps from "./type";

const PokemonList = ({ pokemonType, children }: TPokemonListProps) => (
  <li>
    <PokemonType>{pokemonType}</PokemonType>
    {children}
  </li>
);

export default PokemonList;
