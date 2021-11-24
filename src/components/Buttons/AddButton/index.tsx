
import { Container } from "./styles";
import { RiAddFill } from 'react-icons/ri';


export function AddButton() {
  return (
    <Container>
      <button>
        <div className="addIcon"><RiAddFill size="18" /></div>
        <div className="addText">Adicionar</div>
      </button>
    </Container>
  )
};