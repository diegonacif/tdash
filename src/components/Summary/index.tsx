import { Card, Container } from "./styles";
import { BsPerson } from 'react-icons/bs';
import { FiPackage } from 'react-icons/fi';
import { RiStore3Line } from 'react-icons/ri';
import { GrVmMaintenance } from 'react-icons/gr';
import { MdOutlineSummarize } from 'react-icons/md';




export function Summary() {

   return (
        <Container>
      {/* <div>
        <h2>
          <p>Clientes</p>
        </h2>
        <strong>
        <p>"Qtd de clientes"</p>
        </strong>
      </div>
      <div>
        <h2>
          <p>Equipamentos</p>
        </h2>
        <strong>
        <p>"Qtd de equipamentos"</p>
        </strong>
      </div> */}
      <Card>
        <div className="clientIcon">
          <BsPerson />
        </div>
        <h2>59</h2>
        <span>Clientes</span>
      </Card>
      <Card>
        <div className="instockIcon">
          <FiPackage />
        </div>
        <h2>42</h2>
        <span>Em estoque</span>
      </Card>
      <Card>
        <div className="inClientIcon">
          <RiStore3Line />
        </div>
        <h2>678</h2>
        <span>Em cliente</span>
      </Card>
      <Card>
        <div className="inMaintenanceIcon">
          <GrVmMaintenance />
        </div>
        <h2>45</h2>
        <span>Em manutenção</span>
      </Card>
      <Card>
        <div className="totalIcon">
          <MdOutlineSummarize />
        </div>
        <h2>765</h2>
        <span>Total</span>
      </Card>
    </Container>
  )
};