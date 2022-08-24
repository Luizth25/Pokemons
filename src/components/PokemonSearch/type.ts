type TButtonProps = {
  title: string;
  onClick: () => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default TButtonProps;
