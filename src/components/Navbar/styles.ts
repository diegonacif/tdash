import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 1120px;
  width: 100%;
  height: 3rem;
  margin: 0 auto;
  padding: 1rem;
  background: var(--green);
  color: var(--shape);

  h3 {
    padding: 0;
    margin: 0;
  }
`;
