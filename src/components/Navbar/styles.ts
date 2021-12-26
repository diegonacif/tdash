import styled from "styled-components";
import { lighten } from "polished";
import avatar from "../../assets/icon-depoimento-white.png";

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

    
    .css-1e6y48t-MuiButtonBase-root-MuiButton-root {
      min-width: 1rem;
      padding: 6px 3px;
      
      &:hover {
        background-color: ${lighten (0.03, '#1a8e5f')};
      }
    }
    
    h3 {
      padding: 0;
      margin: 0;
    }
    
    p {
      font-weight: bold;
    }
    
    .loginAvatarArea {
      background-image: url(${avatar});
      background-size: 124%;
      background-color: #000000;
      background-position: center;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      margin-right: 0.4rem;        
    }
    

    button {
      border-radius: 0.5rem;
      border: 0;
      color: #000000;
      transition: background-color 0.5s;

      &:hover {
        background-color: ${lighten (0.56, '#1a8e5f')};
      }
    }
  }

 
`;
