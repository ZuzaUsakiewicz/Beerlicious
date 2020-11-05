import styled from "styled-components";
import { Link } from "react-router-dom";

// export const Button = styled.button`
//   border-radius: 10px;
//   border: none;
//   background: ${({ primary }) => (primary ? "red" : "blue")};
//   color: ${({ mainfont }) => (mainfont ? "blue" : "red")};
//   font-size: 40px;
//   cursor: pointer;
// `;

export const Button = styled(Link)`
  text-decoration: none;
  background: ${({ primary, theme }) =>
    primary ? theme.colors.primary : theme.colors.dark};
  padding: 10px 20px;
  color: ${({ primary, theme }) =>
    primary ? theme.colors.dark : theme.colors.primary};
  transition: color 0.4s ease-in-out, background 0.4s ease-in-out;
  &:hover {
    background: ${({ primary, theme }) =>
      primary ? theme.colors.dark : theme.colors.primary};
    padding: 10px 20px;
    color: ${({ primary, theme }) =>
      primary ? theme.colors.primary : theme.colors.dark};
  }
`;
