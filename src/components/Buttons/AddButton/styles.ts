import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;

  button { 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: none;
    width: 6rem;
    height: 28px;
    border-radius: 4px;
    outline: none;
    

    svg {
      margin-top: 3px;
      margin-left: 0.3rem;
      font-weight: bold;
    }

    .addText {
      font-weight: bold;
      color: var(--text-title);
      text-align: end;
      margin-right: 0.7rem;
    }

    &:hover {
      background-color: var(--green);
      transition-duration: 0.4s;
      color: var(--shape);
      
      .addText {
        color: var(--shape);
        transition-duration: 0.4s;
      }
    }
  }
`;