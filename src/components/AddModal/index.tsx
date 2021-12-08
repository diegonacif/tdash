import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import TextField from '@material-ui/core/TextField';

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

        <TextField
          fullWidth
          id="outlined-size-small"
          label="Modelo" size="small"
          margin="dense"
          color="success"
        />

        <TextField
          fullWidth
          type="number"
          id="outlined-size-small"
          label="Tombo"
          size="small"
          margin="dense"
          color="success"
        />

        <TextField
          fullWidth
          id="outlined-size-small"
          label="Nº de Série"
          size="small"
          margin="dense"
          color="success"
        />

        <TextField
          fullWidth
          id="outlined-size-small"
          label="Cliente"
          size="small"
          margin="dense"
          color="success"
        />
        
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )  
}