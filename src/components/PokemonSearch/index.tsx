import TPokemonSearchProps from "components/PokemonSearch/type";

import * as s from "./style";

const PokemonSearch = ({
  title,
  onClick,
  onChange,
  value,
}: TPokemonSearchProps) => (
  <>
    <s.Input type="text" value={value} onChange={onChange} />
    <s.Button onClick={onClick}>{title}</s.Button>
  </>
);
export default PokemonSearch;
