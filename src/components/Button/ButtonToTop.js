import React from "react";
import styled from "styled-components";

function ButtonToTop() {
  return (
    <ScrollToTopButton
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      &uarr;
    </ScrollToTopButton>
  );
}

export default ButtonToTop;

export const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 5%;
  right: 2%;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: transform 0.4s ease-in-out;
  &:hover {
    transform: translateY(-0.2rem);
  }
  @media screen and (max-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.mobile};
    width: 2rem;
    height: 2rem;
  }
`;
