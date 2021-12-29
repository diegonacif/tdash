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
export const Content = styled.div`
  position: relative;
  max-width: 100%;
  min-width: 700px;
  margin: 0 1rem 0 0;
  padding: 1rem 2rem;
  background-color: var(--shape);
  border-radius: 4px; 

  display: grid;

  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(7, 3rem);
  grid-auto-flow: row;
  grid-row-gap: 1rem;

  h1 {
    grid-column-start: span 4;
    grid-row-start: span 2;
    align-self: center;
  }

  a {
    position: absolute;
    top: 15px;
    left: 15px;
  }


`;

