import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-areas:
    "sidebar summary"
    "sidebar mainTable";
  grid-template-columns: 280px auto;
  grid-template-rows: 8rem auto;
  max-width: 1120px;
  grid-gap: 15px;
  height: 90vh;
  margin: 0 auto;
  padding: 1.5rem 2.5rem;
`;