// perguntar se está correto

export type TPokemonList = {
  pokemons: Array<TPokemonType>;
};
export type RawPokemonList = {
  pokemon: Array<TPokemonType>;
};

type TPokemonType = {
  pokemon: {
    name: string;
    url: string;
  };
};
