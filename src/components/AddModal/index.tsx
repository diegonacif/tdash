import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import { Container } from './styles';

interface AddModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function AddModal({ isOpen, onRequestClose } : AddModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >        
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar equipamento</h2>

        <input 
          type="text"
          placeholder="Modelo"
        />

        <input
          type="number"
          placeholder="Tombo"
        />

        <input
          type="text"
          placeholder="Nº de Série"
        />

        <input
          type="text"
          placeholder="Cliente"
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )  
}