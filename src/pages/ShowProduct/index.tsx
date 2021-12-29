import { useEffect, useState } from 'react';
import { TiArrowBack } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';
import { Summary } from "../../components/Summary";
import { api } from '../../services/api';
import { Container, Content } from "./styles";

interface Equipment {
  id: string,
  status: string,
  count_initial: number,
  count_final: number,
  description: string
  patrimony: number
  serial: string
  supply: string
  obs: string,
  transformer: number,
  created_at: Date,
  updated_at: Date
  customer: {
    name: string
  },
  category: {
    name: string
  }
}

export const ShowProduct = (props: any) => {

  const [equipment, setEquipment] = useState<Equipment | null>(null)

  const [id] = useState(props.match.params.id);

  useEffect(() => {
    api.get(`equipments/show/${id}`)
      .then(response => {
        setEquipment(response.data)
      })
  }, [id])


  return (
    <Container>
      <Navbar />
      <Sidebar />
      <Summary />
      <Content>

        <div className="rollBackButton">
          <Link to="/dashboard" style={{ textDecoration: 'none' }}> <TiArrowBack size={22} /> </Link>          
        </div>

        <h1>Detalhes do Equipamento</h1>

        <div className="showInnerContent">
          <div className="showModel">
            <h3>Modelo</h3>
            <span>{equipment?.description}</span>
          </div>

          <div className="showCategory">
            <h3>Categoria</h3>
            <span>{equipment?.category.name}</span>
          </div>

          <div className="showStatus">
            <h3>Status</h3>
            <span >{equipment?.status}</span>
          </div>

          <div className="showClient">
            <h3>Cliente</h3>
            <span>{equipment?.customer.name}</span>
          </div>

          <div className="showPatrimony">
            <h3>Patrimônio</h3>
            <span>{equipment?.patrimony}</span>
          </div>

          <div className="showSerialNumber">
            <h3>Nº série</h3>
            <span>{equipment?.supply}</span>
          </div>

          <div className="showInitialCounter">
            <h3>Contador Inicial</h3>
            <span>{equipment?.count_initial}</span>
          </div>

          <div className="showFinalCounter">
            <h3>Contador Final</h3>
            <span>{equipment?.count_final}</span>
          </div>

          <div className="showTransformerPatrimony">
            <h3>Patri. do transformador</h3>
            <span>{equipment?.transformer}</span>
          </div>

          <div className="showCreatedAt">
            <h3>Data do Cadastro</h3>
            <span>{equipment?.created_at}</span>
          </div>

          <div className="showUpdatedAt">
            <h3>Data última Atualização</h3>
            <span>{equipment?.updated_at}</span>
          </div>

          <div className="showObs">
            <h3>Observação</h3>
            <span>{equipment?.obs}</span>
          </div>
        </div>


      </Content>

    </Container>
  )
}