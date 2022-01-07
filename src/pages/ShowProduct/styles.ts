import styled from "styled-components";
import { lighten } from "polished";

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
  
  .showInnerContent {
    display: grid;
    justify-content: center;
    padding: 1rem 6rem;
    height: 89%;
  
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(7, 3.7rem);
    grid-auto-flow: row;
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;

    background-color: var(--background);

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: var(--shape);
      border-radius: 4px;
      padding-left: 1.5rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      box-shadow: 2px 2px 2px #dedede;

      h3 {
        padding-bottom: 0.2rem;
      }

      &:hover {
        background-color: var(--green2);
        transition-duration: 0.3s;
      }
    }
  }


  h1 {
    display: flex;
    padding-top: 1.5rem;
    padding-bottom: 1rem;
    justify-content: center;
    align-items: center;
    background-color: var(--background);
  }


  .rollBackButton {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 25px;
    left: 40px;
    width: 2rem;
    height: 2rem;
    background-color: ${lighten (0.6, '#00750c')};
    border-radius: 50%;

    a {
      position: absolute;      
      color: var(--text-title);
      text-decoration: none;
      top: 4px;
      left: 4px;
    }
  }

`;

