import * as s from "./style";
import TPokemonItemProps from "./type";

const PokemonItem = ({ children }: TPokemonItemProps) => (
  <s.PokemonContainer>{children}</s.PokemonContainer>
);

export default PokemonItem;
