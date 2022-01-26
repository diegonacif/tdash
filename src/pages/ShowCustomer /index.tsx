import { useEffect, useState } from 'react';
import { TiArrowBack } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';
import { Summary } from "../../components/Summary";
import { api } from '../../services/api';
import { Container, Content } from "./styles";

interface Customer {
  id: string,
  name: string,
  email: string,
  phone: number,
  adresses: Array<FortEdresses>
}

interface FortEdresses {
  zipCode: number;
  street: string;
  number: string;
  district: string;
  complement: string;
  reference: string;
  city: string;
  state: string
}

export const ShowCustomer = (props: any) => {

  const [customer, setCustomer] = useState<Customer | null>(null)

  const [id] = useState(props.match.params.id);

  useEffect(() => {
    api.get(`customers/${id}`)
      .then(response => {

        setCustomer(response.data)
      })
  }, [id])


  return (
    <Container>
      <Navbar />
      <Sidebar />
      <Summary />
      <Content>

        <div className="rollBackButton">
          <Link to="/clientes" style={{ textDecoration: 'none' }}> <TiArrowBack size={22} /> </Link>
        </div>

        <h1>Detalhes do Cliente</h1>

        <div className="showInnerContent">
          <div className="customerName">
            <h4> Nome </h4>
            <span>{customer?.name}</span>
          </div>
          <div>
            <h4> Telefone </h4>
            <span>{customer?.phone}</span>
          </div>
          <div>
            <h4> E-mail </h4>
            <span>{customer?.email}</span>
          </div>

          <h3 className="adressTitle"> Endereço </h3>
            {customer?.adresses.map(add => {
              return (
                <>
                  <div>
                    <h4> Rua </h4>
                    <span>{add.street} </span>
                  </div>
                  <div>
                    <h4> Número </h4>
                    <span>{add.number} </span>
                  </div>
                  <div>
                    <h4> Bairro </h4>
                    <span>{add.district} </span>
                  </div>
                  <div>
                    <h4> Complemento </h4>
                    <span>{add.complement} </span>
                  </div>
                  <div>
                    <h4> Cidade </h4>
                    <span>{add.city} </span>
                  </div>
                  <div>
                    <h4> Estado </h4>
                    <span>{add.state} </span>
                  </div>
                  <div>
                    <h4> Cep </h4>
                    <span>{add.zipCode} </span>
                  </div>
                  <div>
                    <h4> Referencia </h4>
                    <span>{add.reference} </span>
                  </div>
                </>
                
                
              )
            })}
        </div>

        

      </Content>

    </Container>
  )
}