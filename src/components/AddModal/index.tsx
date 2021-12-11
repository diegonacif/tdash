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

        <div className="row1">
          <div className="modelo">
            <TextField
              id="outlined-size-small"
              label="Modelo" size="small"
              margin="dense"
              color="success"
            />
            
          </div>
          <div className="fabricante">
            <TextField
              id="outlined-size-small"
              label="Fabricante" size="small"
              margin="dense"
              color="success"
            />
          </div>
        </div>

        <div className="row2">
          <div className="tombo">
            <TextField
              type="number"
              id="outlined-size-small"
              label="Tombo"
              size="small"
              margin="dense"
              color="success"
            />
          </div>

          <div className="suprimento">
            <TextField
              id="outlined-size-small"
              label="Suprimento"
              size="small"
              margin="dense"
              color="success"
            />
          </div>
        </div>

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

        <TextField
          fullWidth
          multiline
          maxRows={3}
          id="outlined-size-small"
          label="Observações"
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