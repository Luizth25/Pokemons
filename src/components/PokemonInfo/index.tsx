import { TBuscaProps } from "./type";

const PokemonInfo = ({ id, image, name }: TBuscaProps) => (
  <>
    <h2>{name}</h2>
    <h3># {id}</h3>
    <img src={image} alt={name} />
  </>
);

export default PokemonInfo;
