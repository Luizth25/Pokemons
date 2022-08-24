export type TPokemonDetails = {
  name: string;
  id: number;
  image: string;
  moves: Array<TMovesPokemon>;
};

export type TMovesPokemon = {
  move: {
    name: string;
  };
};

export type RawPokemon = {
  name: string;
  id: number;
  sprites: {
    front_default: string;
  };
  moves: Array<TMovesPokemon>;
};
