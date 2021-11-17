import styled from "styled-components";

export const Container = styled.main`
  max-width: 280px;
  margin: 0;
  padding: 0 0.7rem;
  background-color: var(--shape);
  grid-area: sidebar;
  border-radius: 4px;
  
  .filtersBackground {
    background-color: var(--green2);
    padding: 0.5rem;
  }

  .filtersTitle {
      padding: 0;
      margin: 0;
    h3 {
      text-align: center;
      padding: 0.5rem;
      background-color: var(--green3);
      color: var(--green);
      margin-bottom: 0.5rem;
    }
    svg {
    position: relative;
    top: -40px;
    left: 65px;
    width: 20px;
    height: 20px;
    color: var(--green);    
    }
  }

  p, label {
    color: var(--text-title);
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
