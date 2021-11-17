import { LogoContent } from "../LogoContent";
import { Container } from "./styles";
import { FaSearch } from "react-icons/fa";
import TextField from '@material-ui/core/TextField';


export function Sidebar() {
  return (
    <Container>
      <LogoContent />
      <div className="filtersBackground">
        <div className="filtersTitle">
        <h3>Filtros</h3>
        <FaSearch />
        </div>
        <TextField id="outlined-size-small" label="Cliente" size="small" margin="dense" color="success"/>
        <TextField id="outlined-size-small" label="Equipamento" size="small" margin="dense" color="success" />
        <TextField id="outlined-size-small" label="Status" size="small" margin="dense" color="success" />
        <TextField id="outlined-size-small" type="date" InputLabelProps={{ shrink: true }} label="Data Inicial" size="small" margin="dense" color="success" />
        <TextField id="outlined-size-small" type="date" InputLabelProps={{ shrink: true }} label="Data Final" size="small" margin="dense" color="success" />

        
        {/* <label>
          Cliente
          <input type="text" />
        </label>

        <label>
          Equipamento
          <input type="text" />
        </label>

        <p>Status</p>
        <select>
          <option value="todos">Todos</option>
          <option value="estoque">Estoque</option>
          <option value="manutencao">Manutenção</option>
          <option value="cliente">Em cliente</option>
        </select>
      
        <p>Data Inicial</p>
        <input type="date" />
        
        <p>Data Final</p>
        <input type="date" /> */}
      </div>
    </Container>
  )
};