import { LogoContent } from "../LogoContent";
import { Container } from "./styles";
import { FaSearch } from "react-icons/fa";


export function Sidebar() {
  return (
    <Container>
      <LogoContent />
      <div className="filtersBackground">
        <div className="filtersTitle">
        <h3>Filtros</h3>
        <FaSearch />
        </div>
        <label>
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
        <input type="date" />
      </div>
    </Container>
  )
};