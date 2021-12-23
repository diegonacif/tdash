import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.main`
  grid-area: navbar;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 1120px;
  width: 100%;
  height: 3rem;
  margin: 0 auto;
  padding: 1rem;
  background: var(--green);
  color: var(--shape);

  .loginArea {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;

    h3 {
      padding: 0;
      margin: 0;
    }

    p {
      font-weight: bold;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }

    button {
      border-radius: 0.5rem;
      color: #000000;

      &:hover {
        background-color: var(--green);
        background-color: ${lighten (0.56, '#1a8e5f')};
      }
    }
  }

 
`;
