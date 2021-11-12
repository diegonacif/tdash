import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;
  margin: 0;
  padding: 3rem 1.5rem;
  background-color: var(--green2);
  grid-area: sidebar;
  border-radius: 4px;

  p, label {
    color: var(--shape);
    font-weight: 600;
  }

  input, select {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 2px;
    height: 1.5rem;
    margin-bottom: 0.7rem;
    caret-color: var(--green2);
  }

  select {
    background-color: var(--shape);
  }
`;
