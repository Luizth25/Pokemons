import { DetailsContainer } from "./style";

import PokemonInfo from "components/PokemonInfo";
import PokemonMoves from "components/PokemonMoves";
import useGetDetails from "hooks/useGetDetails";
import NavButton from "components/NavButton";

const PokemonDetails = () => {
  const { isLoading, pokemonsDetails } = useGetDetails();

  return (
    <>
      <NavButton link="/search-type" title="Back" />
      <DetailsContainer>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <PokemonInfo
              name={pokemonsDetails.name}
              id={pokemonsDetails.id}
              image={pokemonsDetails.image}
            />
            {pokemonsDetails?.moves.map((e) => (
              <PokemonMoves key={e.move.name} move={e.move.name} />
            ))}
          </>
        )}
      </DetailsContainer>
    </>
  );
};

export default PokemonDetails;
