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
 max-width: 100%;
  min-width: 700px;
  margin: 0 1rem 0 0;
  padding: 1rem 2rem;
  background-color: var(--shape);
  border-radius: 4px;

  
`;

export const Form = styled.form`
  .row1 {
    display: flex;
    flex-direction: row;
    gap: 1rem;

      .modelo {
        width: 70%;
        .css-4mzek5-MuiFormControl-root-MuiTextField-root {
          width: 100%;
        }
      }
    
      .fabricante {        
        width: 30%;
        .css-4mzek5-MuiFormControl-root-MuiTextField-root {
          width: 100%;
        }
      }
  }

  .row2 {
    display: flex;
    flex-direction: row;
    gap: 1rem;

      .tombo {
        width: 50%;
        .css-4mzek5-MuiFormControl-root-MuiTextField-root {
          width: 100%;
        }
      }
    
      .suprimento {        
        width: 50%;
        .css-4mzek5-MuiFormControl-root-MuiTextField-root {
          width: 100%;
        }
      }
  }

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 1.5rem;    
  }


  .buttonContainer {
    display: flex;
    justify-content: center;

    button[type="submit"] {
      width: 70%;
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
      transition: font-size 0.1s;
  
      &:hover {
        filter: brightness(1.1);
        font-size: 1.05rem;
      }
    }
  }
`;


