import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style: none;
  font-family: "Roboto", sans-serif
}
body{
  background-color:${({ theme }) => theme.colors.background}
}
h2 , h3 {
  ${({ theme }) => theme.fontStyles.pokemonInfo}
}

`;
