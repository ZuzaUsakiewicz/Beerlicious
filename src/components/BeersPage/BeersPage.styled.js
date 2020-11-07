import styled from "styled-components";

export const BeersPageContainer = styled.section`
  width: 100%;
  min-height: 110vh;
  padding: 2rem 1rem;
`;

export const AllBeersContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
`;

export const BeerItemContainer = styled.div`
  width: 300px;
  height: 400px;
  border-bottom: 10px solid transparent;
  margin: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: space-between;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.dark};
  box-shadow: 2px 2px 20px 6px rgba(23, 55, 83, 0.6);
  transition: border-bottom 0.3s ease-in, box-shadow 0.3s ease-in;
  &:hover {
    border-bottom: 10px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 2px 2px 25px 10px rgba(23, 55, 83, 0.6);
  }
`;

export const ModalBackground = styled.div`
  width: 100%;
  opacity: ${({ modal }) => (modal ? 1 : 0)};
  pointer-events: ${({ modal }) => (modal ? "showing" : "none")};
  transition: opacity 0.5s ease-in-out;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.modalBG};
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.semidark};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;

export const TextWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;
export const BeerCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const BeerImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2rem 0;
`;

export const BeerImage = styled.img`
  width: 3rem;
  height: auto;
`;

export const BeerNames = styled.div`
  text-align: center;
  height: 100px;
  width: 100%;
`;
