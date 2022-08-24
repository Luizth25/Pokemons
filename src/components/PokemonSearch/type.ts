type TPokemonSearchProps = {
  title: string;
  onClick: () => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default TPokemonSearchProps;
