import styled from 'styled-components';
import inputIconEmail from '../../assets/inputIconEmail.png';
import inputIconPassword from '../../assets/inputIconPassword.jpeg';
import logo from '../../assets/logo.png';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  gap: 0.5rem;
  background-color: var(--green);
  

  .formContainer {
    display: flex;
    flex-direction: column;
    min-width: 320px;
    max-width: 50vw;
    min-height: 350px;
    max-height: 50vh;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 2rem;
    
    backdrop-filter: blur(5px) saturate(180%);
    -webkit-backdrop-filter: blur(5px) saturate(180%);
    background-color: var(--shape);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .loginLogo {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #ffffff;
    font-weight: bold;
    border: 2px solid #ffffff;
    width: 9rem;
    height: 3.5rem;
    border-radius: 5px;
  }

  h2 {
    color: var(--text-title);
    font-weight: normal;
    padding: 3rem 0 0 0;
  }
  
  .form-group {
    display: flex;
    position: relative;
    flex-direction: column;
    min-width: 200px;
    margin-top: 0;
    padding: 1rem 0;
    color: #000000;
    width: 100%;

    .logoArea {
      position: absolute;
      top: -167px;
      left: 47px;
      width: 10rem;
      height: 10rem;
      /* background-color: var(--background); */
      background-image: url(${logo});
      background-repeat: no-repeat;
      background-size: 80%;
      background-position: center;
      border-radius: 50%;
      /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    }

    .inputIconEmail {
      position: absolute;
      top: 43px;
      left: 13px;
      background-image: url(${inputIconEmail});
      background-size: cover;
      width: 1rem;
      height: 1rem;
    }

    .inputIconPassword {
      position: absolute;
      top: 44px;
      left: 15px;
      background-image: url(${inputIconPassword});
      background-size: cover;
      width: 0.85rem;
      height: 1rem;
    }

    .logoImg {
      position: absolute;
      top: -128px;
      left: 72px;
      width: 40%;
    }

    input {
      height: 2rem;
      border: 1px solid var(--text-body);
      border-radius: 3px;
      width: 100%;
      padding-left: 3rem;
      
    }

    label {
      padding-bottom: 0.3rem;
      font-size: 0.95rem;
    }

    button {
      margin-top: 0.6rem;
      height: 3rem;
      background: var(--green);
      color: #fff;
      border-radius: 0.25rem;
      border: 0;
      font-size: 1rem;
      font-weight: 600;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(1.1);
      }      
    }

    :nth-child(1) {
      margin-top: 3rem;
    }
  }

`