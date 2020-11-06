import styled from "styled-components";

export const BeersPageContainer = styled.section`
  width: 100%;
  height: 120vh;
  padding: 2rem 1rem;
`;

export const AllBeersContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 1rem;
`;

export const BeerItemContainer = styled.div`
  max-width: 400px;
`;

export const ModalBackground = styled.div`
  width: 100%;
  opacity: ${({ modal }) => (modal ? 1 : 0)};
  pointer-events: none;
  transition: opacity 0.5s ease-in-out;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: grey;
  z-index: 999;
`;

export const ButtonOpenModal = styled.button`
  border: none;
  cursor: pointer;
  color: white;
  background: black;
  border-radius: 30px;
  padding: 10px 20px;
`;
