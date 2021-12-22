import { Card, Container } from "./styles";
import { BsPerson } from 'react-icons/bs';
import { FiPackage } from 'react-icons/fi';
import { RiStore3Line } from 'react-icons/ri';
import { GrVmMaintenance } from 'react-icons/gr';
import { MdOutlineSummarize } from 'react-icons/md';
import { useEquipments } from "../../hooks/listEquipments";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface Customer {
  id: string;
  name: string;
}


export function Summary() {
  const { equipments } = useEquipments()
  const qtdInEstock = equipments.reduce((total, equipment) => {
    if (equipment.status === "estoque") {
      return total + 1;
    }
    return total
  }, 0)

  const qtdInClient = equipments.reduce((total, equipment) => {
    if (equipment.status === "cliente") {
      return total + 1;
    }
    return total
  }, 0)

  const qtdNoConcert = equipments.reduce((total, equipment) => {
    if (equipment.status === "sem conserto") {
      return total + 1;
    }
    return total
  }, 0)

  const qtdWaitingForParts = equipments.reduce((total, equipment) => {
    if (equipment.status === "aguardando peças") {
      return total + 1;
    }
    return total
  }, 0)

  const qtdUnderMaintenance = equipments.reduce((total, equipment) => {
    if (equipment.status === "manutenção") {
      return total + 1;
    }
    return total
  }, 0)


  // buscando todos os clientes
  const [customers, setCustomers] = useState<Customer[]>([])

  useEffect(() => {
    api.get("customers")
      .then(response => {
        setCustomers(response.data)
      }).catch(error => console.log(error));

  }, [])

  return (
    <Container>
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
        <h2>{equipments.length}</h2>
        <span>Total equip.</span>
      </Card>
      <Card>
        <div className="clientIcon">
          <BsPerson />
        </div>
        <h2>{customers.length}</h2>
        <span>Clientes</span>
      </Card>
    </Container>
  )
};