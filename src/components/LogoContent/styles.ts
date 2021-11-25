import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  border-bottom: 1px solid var(--text-body);
  margin-bottom: 1.5rem;
  padding: 1rem 0;

  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  
  span {
    font-weight: 600;
    color: var(--green);
    font-style: italic;
    font-size: 1.5rem;
  }

  img {
    margin: 0;
    width: 70px;  
    padding: 0;
  }
`;