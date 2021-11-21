import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  display: grid;
  grid-area: summary;
  gap: 2rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem 0 0;

  /* div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: var(--shape);
    padding: 1.5rem 2rem;
    width: 100%;
    border-radius: 0.25rem;
    color: var(--text-title);
    justify-items: center;
  } */
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  justify-content: space-evenly;
  align-items: center;
  background: var(--shape);
  padding: 0;
  width: 100%;
  min-width: 10rem;
  border-radius: 0.5rem;
  color: var(--text-title);
  justify-items: center;
  text-align: center;
  box-shadow: 2px 2px 2px #dedede;

  &:hover {
    background-color: var(--green2);
  }

  h2 {
    padding-top: 1rem;
    padding-left: 0.6rem;
    justify-self: start;
  }

  span {
    padding-bottom: 1rem;
    font-size: 85%;
    justify-self: start;
    padding-left: 0.6rem;
  }

  .clientIcon {
    display: flex;
    background-color: ${lighten (0.4, '#ff8000')};
    grid-row-start: span 2;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    padding-bottom: 1px;
    margin-left: 0.6rem;
  }

  .instockIcon {
    display: flex;
    background-color: ${lighten (0.6, '#00750c')};
    grid-row-start: span 2;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    padding-bottom: 0;
    margin-left: 0.6rem;
  }

  .inClientIcon {
    display: flex;
    background-color: ${lighten (0.53, '#000ecc')};
    grid-row-start: span 2;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    padding-bottom: 0;
    margin-left: 0.6rem;
  }

  .inMaintenanceIcon {
    display: flex;
    background-color: ${lighten (0.65, '#750000')};
    grid-row-start: span 2;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    padding-bottom: 0;
    margin-left: 0.6rem;
  }

  .totalIcon {
    display: flex;
    background-color: ${lighten (0.87, '#000000')};
    grid-row-start: span 2;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    padding-bottom: 0;
    margin-left: 0.6rem;
  }
`