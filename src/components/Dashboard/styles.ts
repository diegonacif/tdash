import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-areas:
    "navbar navbar"
    "sidebar summary"
    "sidebar mainTable";
  grid-template-columns: 280px auto;
  grid-template-rows: 3rem 10rem auto;
  grid-gap: 15px;
  height: 90vh;
  margin: 0 auto;
  padding: 0;
  max-width: 100%;
`;