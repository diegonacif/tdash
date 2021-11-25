import { Card, Container } from "./styles";
import { BsPerson } from 'react-icons/bs';
import { FiPackage } from 'react-icons/fi';
import { RiStore3Line } from 'react-icons/ri';
import { GrVmMaintenance } from 'react-icons/gr';
import { MdOutlineSummarize } from 'react-icons/md';
import { useEquipments } from "../../hooks/listEquipments";


export function Summary() {
  const { equipments } = useEquipments()
  const qtdInEstock = equipments.reduce((total, equipment) => {
    if (equipment.status === "em estoque") {
      return total + 1;
    }
    return total
  }, 0)

  const qtdInClient = equipments.reduce((total, equipment) => {
    if (equipment.status === "em cliente") {
      return total + 1;
    }
    return total
  }, 0)

  const qtdUnderMaintenance = equipments.reduce((total, equipment) => {
    if (equipment.status === "em manutenção") {
      return total + 1;
    }
    return total
  }, 0)

  const toralEquipments = qtdInEstock + qtdInClient + qtdUnderMaintenance

  return (
    <Container>  
      <Card>
        <div className="clientIcon">
          <BsPerson />
        </div>
        <h2>59</h2>
        <span>Total clientes</span>
      </Card>
      <Card>
        <div className="instockIcon">
          <FiPackage />
        </div>
        <h2>{qtdInEstock}</h2>
        <span>Em estoque</span>
      </Card>
      <Card>
        <div className="inClientIcon">
          <RiStore3Line />
        </div>
        <h2>{qtdInClient}</h2>
        <span>Em cliente</span>
      </Card>
      <Card>
        <div className="inMaintenanceIcon">
          <GrVmMaintenance />
        </div>
        <h2>{qtdUnderMaintenance}</h2>
        <span>Em manutenção</span>
      </Card>
      <Card>
        <div className="totalIcon">
          <MdOutlineSummarize />
        </div>
        <h2>{toralEquipments}</h2>
        <span>Total equip.</span> 
      </Card>
    </Container>
  )
};