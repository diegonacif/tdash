import { useEffect, useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
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

        <Link to="/dashboard"> <AiOutlineLeft /> </Link>

        <h1>Detalhe do Equipamento</h1>

        <div>
          <h3> Modelo </h3>
          <span>{equipment?.description}</span>
        </div>
        <div>
          <h3> Categoria </h3>
          <span>{equipment?.category.name}</span>
        </div>
        <div>
          <h3> Cliente </h3>
          <span>{equipment?.customer.name}</span>
        </div>

        <div>
          <h3> Patrimônio </h3>
          <span>{equipment?.patrimony}</span>
        </div>

        <div>
          <h3> Nº série </h3>
          <span>{equipment?.supply}</span>
        </div>

        <div>
          <h3> Status </h3>
          <span >{equipment?.status}</span>
        </div>

        <div>
          <h3> Contador Inicial </h3>
          <span>{equipment?.count_initial}</span>
        </div>

        <div>
          <h3> Contador Final </h3>
          <span>{equipment?.count_final}</span>
        </div>

        <div>
          <h3> Patri. do transformador  </h3>
          <span>{equipment?.transformer}</span>
        </div>

        <div>
          <h3> Data do Cadastro</h3>
          <span>{equipment?.created_at}</span>
        </div>


        <div>
          <h3> Data última Atualização</h3>
          <span>{equipment?.updated_at}</span>
        </div>

        <div>
          <h3> Observação</h3>
          <span>{equipment?.obs}</span>
        </div>


      </Content>

    </Container>
  )
}