import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-areas:
    "navbar navbar"
    "sidebar summary"
    "sidebar mainTable";
  grid-template-columns: 280px auto;
  grid-template-rows: 3rem 5rem auto;
  grid-gap: 1rem;
  height: 90vh;
  margin: 0 auto;
  padding: 0;
  max-width: 100%;
`;