import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0;
  padding: 2rem;
  background-color: var(--green);
  grid-area: mainTable;
  border-radius: 4px;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--shape);
      font-weight: 600;
      padding: 1rem 0.75rem;
      text-align: center;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 0.75rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0;
      text-align: center;

      &:first-child {
        color: var(--text-title);
      }
    }
  }
`;
