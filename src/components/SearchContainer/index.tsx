import TSearchContainerProps from "components/SearchContainer/type";
import { Container } from "./style";

const SearchContainer = ({ title, children }: TSearchContainerProps) => (
  <Container>
    <h3>{title}</h3>
    {children}
  </Container>
);

export default SearchContainer;
