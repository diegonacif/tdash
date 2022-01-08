import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-areas:
    "navbar navbar"
    "sidebar summary"
    "sidebar mainTable";
  grid-template-columns: 280px auto;
  grid-template-rows: 3rem 5rem auto;
  grid-gap: 1rem;
  height: 90vh;
  margin: 0 auto;
  padding: 0;
  max-width: 100%;
`;


export const Content = styled.div`
  position: relative;
  max-width: 100%;
  min-width: 700px;
  margin: 0 1rem 0 0;
  padding: 1rem 2rem;
  background-color: var(--shape);
  border-radius: 4px;

  h1 {
    display: flex;
    padding-top: 1.5rem;
    padding-bottom: 1rem;
    justify-content: center;
    align-items: center;
    background-color: var(--background);
  }
`;


export const Form = styled.form`
  display: grid;
  justify-content: center;
  padding: 1rem 6rem;
  height: 89%;

  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(7, 3.7rem);
  grid-auto-flow: row;
  grid-row-gap: 0;
  grid-column-gap: 1rem;

  background-color: var(--background);

  /* divs */  
  .modelo {
    width: 100%;
    grid-column-start: span 3;
    .css-4mzek5-MuiFormControl-root-MuiTextField-root {
      width: 100%;
    }
  }
  
  .tombo {
    width: 100%;
    .css-4mzek5-MuiFormControl-root-MuiTextField-root {
      width: 100%;
    }
  }

  .suprimento {
    width: 100%;
    .css-4mzek5-MuiFormControl-root-MuiTextField-root {
      width: 100%;
    }
  }

  .serie {
    width: 100%;
    grid-column-start: span 2;
    .css-4mzek5-MuiFormControl-root-MuiTextField-root {
      width: 100%;
    }
  }

  .obs {
    width: 100%;
    grid-column-start: span 4;
    .css-4mzek5-MuiFormControl-root-MuiTextField-root {
      width: 100%;
    }
  }

  .buttonContainer {
    display: flex;
    justify-content: center;
    grid-column-start: span 4;

    button[type="submit"] {
      width: 12rem;
      padding: 0 1.5rem;
      height: 4rem;
      background: var(--green);
      color: #fff;
      border-radius: 0.25rem;
      border: 0;
      font-size: 1rem;
      font-weight: 600;
      margin-top: 1.5rem;
      margin-left: auto;
      margin-right: auto;
  
      transition: filter 0.2s;
  
      &:hover {
        filter: brightness(1.1);
      }
    }
  }

  .status {
    display: flex;
    align-items: center;
    padding-bottom: 0.1rem;

    select {
      width: 100%;
      height: 2.6rem;
      padding-left: 0.6rem;
      border-radius: 0.25rem;
      background-color: var(--shape);
      font-size: 1rem;
      color: var(--text-title);
      border: 1px solid #969696;
    }
  }

  .cliente {
    display: flex;
    align-items: center;
    padding-bottom: 0.1rem;
    
    select {
      width: 100%;
      height: 2.6rem;
      padding-left: 0.6rem;
      border-radius: 0.25rem;
      background-color: var(--shape);
      font-size: 1rem;
      color: var(--text-title);
      border: 1px solid #969696;
    }
  }

  .categoria {
    display: flex;
    align-items: center;
    padding-bottom: 0.1rem;
    
    select {
      width: 100%;
      height: 2.6rem;
      padding-left: 0.6rem;
      border-radius: 0.25rem;
      background-color: var(--shape);
      font-size: 1rem;
      color: var(--text-title);
      border: 1px solid #969696;
    }
  }
  /* divs end */

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    /* background: #e7e9ee; */
    background-color: var(--shape);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  
`;


