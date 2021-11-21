import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  max-width: 100%;
  min-width: 700px;
  margin: 0 1rem 0 0;
  padding: 1rem 2rem;
  background-color: var(--shape);
  grid-area: mainTable;
  border-radius: 4px;

  .vertical-line {
    width: 1px;
    background-color: var(--shape);
    height: 90%;
  }

  table {
    width: 100%;
    min-width: 700px;
    border-spacing: 0 0.5rem;

    tr:hover td {
      background-color: var(--green3);
      color: var(--shape);
      transition-duration: 0.5s;
      color: var(--text-title);
    }

    tr {

      th {
        color: var(--green);
        background-color: var(--green3);
        font-weight: 600;
        padding: 1rem 0.75rem;
        text-align: left;
        line-height: 1.5rem;
        font-size: 14px;
        border-radius: 0;
      }

      td {
        padding: 0.75rem 0.75rem;
        border: 0;
        background: var(--green2);
        color: var(--text-body);
        border-radius: 0;
        text-align: left;
        font-size: 13px;
      
        .actionButtons {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: center;

          button {
            
            border: none;
            width: 28px;
            height: 28px;
            justify-content: center;
            align-items: center;
            border-radius: 3px;
            outline: none;          

            svg {
              position: relative;
              left: 1px;
            }
          }

          button.delete {
            background-color: ${lighten (0.4, '#e52e4d')};
            color: var(--red);

            svg {
              position: relative;
              top: 3px;
            }
          }

          button.edit {
            background-color: ${lighten (0.54, '#000ecc')};
            color: var(--darkblue);
            margin-right: 5px;

            svg {
              position: relative;
              top: 2px;
              left: 2px;
            }
          }

          button.show {
            background-color: ${lighten (0.56, '#1a8e5f')};
            color: var(--green);
            margin-right: 5px;

            svg {
              position: relative;
              top: 3px;
              left: 0;
            }
          }
      }    

        &:first-child {
          color: var(--text-title);
        }
      }
    }
  }
`;
