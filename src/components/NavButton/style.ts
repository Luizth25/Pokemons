import styled, { css } from "styled-components";

export const NavButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.componentBackground};
    border: 3px solid ${theme.colors.borderColor};
    color: ${theme.colors.paragraphColor};
    border-radius: 5px;
    width: 150px;
    padding: 5px;
    cursor: pointer;
    margin: 20px;
  `}
`;
