export type TMovePokemonRaw = {
  move: {
    name: string;
  };
};

export type TPokemonRaw = {
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
  moves: Array<TMovePokemonRaw>;
};

export type TPokemonInfo = {
  name: string;
  id: number;
  image: string;
  moves: Array<string>;
};
