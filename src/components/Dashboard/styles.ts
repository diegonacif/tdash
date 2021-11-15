import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-areas:
    "sidebar summary"
    "sidebar mainTable";
  grid-template-columns: 280px auto;
  grid-template-rows: 8rem auto;
  grid-gap: 15px;
  height: 90vh;
  margin: 0 auto;
  padding: 2rem 1rem;
`;