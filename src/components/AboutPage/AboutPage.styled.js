import styled from "styled-components";

export const AboutSectionContainer = styled.section`
  width: 100%;
`;

export const TitleSection = styled.div`
  color: white;
  padding: 2rem 1rem;
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
  min-height: 500px;
  box-shadow: inset 0 0 0 1000px rgba(9, 67, 109, 0.63);
  background-attachment: fixed;
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HistorySection = styled(TitleSection)`
  padding: 0 1rem;
  background-image: url("https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80");
`;

export const FutureSection = styled(TitleSection)`
  padding: 0 1rem;
  background-image: url("https://images.unsplash.com/photo-1584225064536-d0fbc0a10f18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80");
`;
