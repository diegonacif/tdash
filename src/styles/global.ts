import { createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #e52e4d;
    --green: #1a8e5f;
    --green2: ${lighten(0.045, '#e8f3ef')};
    --green3: #d6ede3;
    --blue: #5429cc;
    --darkblue: #0314fa;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --background: #f5f6fa;
    --shape: #ffffff;
    --silver: #cacaca;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  } */

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    width: 1.2rem;

    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.6);
    }
  }
`