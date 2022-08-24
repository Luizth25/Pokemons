import { PokemonList, PokemonImage, PokemonName } from "./style";
import TPokemonProps from "./type";

const Pokemon = ({ name, link, image }: TPokemonProps) => (
  <PokemonList>
    <PokemonName>{name}</PokemonName>
    <a href={link} target="_black">
      <PokemonImage src={image} alt={name} />
    </a>
  </PokemonList>
);

export default Pokemon;
