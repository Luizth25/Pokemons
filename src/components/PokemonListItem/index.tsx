import TPokemonItemListProps from "./type";
import { Title } from "./style";

const PokemonItemList = ({ title, children }: TPokemonItemListProps) => (
  <>
    <Title>{title}</Title>
    <ol>{children}</ol>
  </>
);

export default PokemonItemList;
