import { TNavButtonProps } from "./type";
import * as s from "./style";

const NavButton = ({ title }: TNavButtonProps) => (
  <s.NavButton>{title}</s.NavButton>
);

export default NavButton;
