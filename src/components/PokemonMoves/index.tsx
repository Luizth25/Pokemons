import TMovesProps from "components/PokemonMoves/types";
import { PokemonMove } from "./style";

const PokemonMoves = ({ move }: TMovesProps) => (
  <li>
    <PokemonMove>{move}</PokemonMove>
  </li>
);
export default PokemonMoves;
