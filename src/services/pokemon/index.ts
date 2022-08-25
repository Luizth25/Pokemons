import { api } from "api";

import * as t from "./types";

const getByNameOrID = (pokemonNameOrID: string): Promise<t.TPokemonInfo> =>
  api.get<t.TPokemonRaw>(`/pokemon/${pokemonNameOrID}`).then((response) => ({
    id: response.data.id,
    name: response.data.name,
    image:
      response.data.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
    moves: response.data.moves
      .slice(0, 5)
      .map((moveInfo) => moveInfo.move.name),
  }));

export default getByNameOrID;
