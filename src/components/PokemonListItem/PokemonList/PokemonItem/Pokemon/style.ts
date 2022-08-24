import styled, { keyframes } from "styled-components";

export const PokemonList = styled.li`
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.componentBackground};
  width: 300px;
  height: 80px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.borderColor};
  }

  &:hover img {
    width: 100px;
    height: 100px;
    transition: 4s;
  }
`;

const fadeIn = keyframes`
from{
  opacity: 0
}
to{
  opacity: 1
}
`;

export const PokemonImage = styled.img`
  animation: ${fadeIn} 4s linear;
  width: 40px;
  height: 40px;
`;

export const PokemonName = styled.p`
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin-top: 10px;
`;
