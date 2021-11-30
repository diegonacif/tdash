
import { Container } from "./styles";
import { RiAddFill } from 'react-icons/ri';

interface AddButtonProps {
  onOpenAddModal: () => void;
}



export function AddButton ({ onOpenAddModal }: AddButtonProps) {
  return (
    <Container>
      <button onClick={onOpenAddModal}>
        <div className="addIcon"><RiAddFill size="18" /></div>
        <div className="addText">Adicionar</div>
      </button>
    </Container>
  )
};