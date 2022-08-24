export type TPokemonInfo = {
  name: string;
  id: number;
  image: string;
  moves: Array<TMovePokemon>;
};

export type TMovePokemon = {
  move: {
    name: string;
  };
};

export type RawPokemon = {
  name: string;
  id: number;
  sprites: {
    versions: {
      "generation-v": {
        "black-white": {
          animated: {
            front_default: string;
          };
        };
      };
    };
  };
  moves: Array<TMovePokemon>;
};
