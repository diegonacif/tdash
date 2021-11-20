import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-area: summary;
  gap: 2rem;
  grid-template-columns: repeat(5, 1fr);
  max-width: 1120px;
  margin: 0 auto;
  padding: 0;

  /* div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: var(--shape);
    padding: 1.5rem 2rem;
    width: 100%;
    border-radius: 0.25rem;
    color: var(--text-title);
    justify-items: center;
  } */
`;

export const Card = styled.div`
  display: grid;
  justify-content: space-evenly;
  align-items: center;
  background: var(--shape);
  padding: 0;
  width: 100%;
  min-width: 10rem;
  border-radius: 0.5rem;
  color: var(--text-title);
  justify-items: center;
  text-align: center;
`