import styled from "styled-components";

export const Container = styled.main`
  max-width: 280px;
  margin: 0 0 0 1rem;
  padding: 0 0.7rem;
  background-color: var(--shape);
  grid-area: sidebar;
  border-radius: 4px;


  
  .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
    margin-top: 0.5rem;
    .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root {
      max-height: 2.6rem;
    }
    .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
      margin: 0;
      padding: 0;
    }
    
  }
   

  div.MuiOutlinedInput-root {
    color: #808080;
  }

  .filtersBackground {
    background-color: var(--green2);
    padding: 0.5rem;
  }

  .filtersTitle {
      padding: 0;
      margin: 0;
      height: 3rem;
    h3 {
      text-align: center;
      padding: 0.5rem;
      background-color: var(--green3);
      color: var(--green);
      margin-bottom: 0.5rem;
    }
    svg {
    position: relative;
    top: -36px;
    left: 65px;
    width: 20px;
    height: 20px;
    color: var(--green);    
    }
  }
`;