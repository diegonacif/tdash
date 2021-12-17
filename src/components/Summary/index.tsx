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

  const toralEquipments = qtdInEstock + qtdInClient + qtdUnderMaintenance + qtdNoConcert+ qtdWaitingForParts

// buscando todos os clientes
const [customers, setCustomers] = useState<Customer[]>([])

useEffect(() => {
  api.get("customers")
    .then(response => {
      console.log(response.data)
      setCustomers(response.data)
    }).catch(error => console.log(error));

}, [])

const totalCustomers = customers.reduce((total, customer) => {
  if (customer.id === customer.id) {
    return total + 1;
  }    
  return total
}, 0)


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
        <h2>{toralEquipments}</h2>
        <span>Total equip.</span> 
      </Card>
      <Card>
        <div className="clientIcon">
          <BsPerson />
        </div>
        <h2>{totalCustomers}</h2>
        <span>Clientes</span>
      </Card>
    </Container>
  )
};