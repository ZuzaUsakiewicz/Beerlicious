import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  background: ${({ primary, theme }) =>
    primary ? theme.colors.orange : theme.colors.dark};
  padding: 10px 20px;
  color: ${({ primary, theme }) =>
    primary ? theme.colors.dark : theme.colors.orange};
  transition: color 0.4s ease-in-out, background 0.4s ease-in-out;
  &:hover {
    background: ${({ primary, theme }) =>
      primary ? theme.colors.dark : theme.colors.orange};
    padding: 10px 20px;
    color: ${({ primary, theme }) =>
      primary ? theme.colors.orange : theme.colors.dark};
  }
`;
