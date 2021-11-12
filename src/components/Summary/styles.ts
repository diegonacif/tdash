import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 16rem 16rem;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0;

  div {
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
  }
`