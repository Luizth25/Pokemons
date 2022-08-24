import { Title } from "./style";
import TPokemonItemListProps from "./type";

const PokemonItemList = ({ title, children }: TPokemonItemListProps) => (
  <>
    <Title>{title}</Title>
    <ol>{children}</ol>
  </>
);

export default PokemonItemList;
