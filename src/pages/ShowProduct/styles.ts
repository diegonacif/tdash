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
    justify-content: end;
    padding: 0 4rem;
  
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(7, 3.7rem);
    grid-auto-flow: row;
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: var(--background);
      border-radius: 4px;
      padding-left: 1.5rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      box-shadow: 2px 2px 2px #dedede;

      &:hover {
        background-color: var(--green2);
        transition-duration: 0.3s;
      }
    }
  }


  h1 {
    display: flex;
    padding-top: 0.5rem;
    padding-bottom: 2rem;
    justify-content: center;
  }


  .rollBackButton {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 16px;
    left: 16px;
    width: 1.7rem;
    height: 1.7rem;
    background-color: ${lighten (0.6, '#00750c')};
    border-radius: 50%;

    a {
      position: absolute;      
      color: var(--text-title);
      text-decoration: none;
      top: 2px;
      left: 2px;
    }
  }

`;

