import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  background: none;
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.primary};
  border: 3px solid ${({ theme }) => theme.colors.primary};
  background-image: linear-gradient(to top, #f8ae25, 50%, transparent 50%);
  background-size: 100% 200%;
  background-position: 0% 0%;
  /* background: x-value, y-value */
  will-change: background-position, color;
  transition: background-position 0.4s ease-in-out, color 0.4s ease-in-out;
  &:hover {
    color: #fff;
    background-position: 0% 100%;
  }
`;
