import styled from 'styled-components';

export const Container = styled.form`
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

  /* input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  } */

    button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;

    transition: filter 0.2s;
    transition: font-size 0.1s;

    &:hover {
      filter: brightness(1.1);
      font-size: 1.05rem;
    }
  }
`;