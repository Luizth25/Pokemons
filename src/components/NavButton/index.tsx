import { Link } from "react-router-dom";

import { TNavButtonProps } from "./type";
import * as s from "./style";

const NavButton = ({ title, link }: TNavButtonProps) => (
  <Link to={link}>
    <s.NavButton>{title}</s.NavButton>
  </Link>
);

export default NavButton;
