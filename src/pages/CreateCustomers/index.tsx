import { TextField } from '@material-ui/core';
import { FormEvent,useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';
import { Summary } from "../../components/Summary";
import { api } from '../../services/api';
import { Container, Content, Form } from "./styles";
import { AiOutlineLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import swal from "sweetalert";


interface Address {
  zipCode: number;
  street: string;
  number: string;
  district: string;
  complement: string;
  reference: string;
  city: string;
  state: string,
  customer_id?: string
}
interface Customer {
  id?: string;
  name: string;
  email: string;
  phone: string;

}

export const CreateCustomer = () => {

  const history = useHistory()

  const [adresses, setAddress] = useState<Address[]>([])

  const [customers, setCustomer] = useState<Customer[]>([])


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')


  const [zipCode, setZipCode] = useState(0)
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [district, setDistrict] = useState('')
  const [complement, setComplement] = useState('')
  const [reference, setReference] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')


// função para criar um cliente
  async function createCustomer() {
    try {
      const response = await api.post<Customer>('customers', {
        name,
        email,
        phone,
      })

      const customer = response.data
      setCustomer([
        ...customers,
        customer

      ]);
      swal({
        title: "Feito",
        text: "Cliente cadastrado com sucesso!",
        icon: "success",
      });

      history.push("/clientes")


      //atualizar a listagem apos o cadastro
      const cust = response.data.id
      api.get(`customers/${cust}`)
        .then(response => {
          setCustomer(response.data)
        }).catch(error => console.log(error));

        // cadastrar um endereço do cliente
      const addressCustomer = await api.post<Address>(`adresses/${cust}`, {
        zipCode,
        street,
        number,
        district,
        complement,
        reference,
        city,
        state,

      })

      const address = addressCustomer.data
      setAddress([
        ...adresses,
        address

      ]);

    } catch (error) {
      swal({
        icon: "error",
        title: "Oops",
        text: "Algo deu errado, tente novamente mais tarde!",
      });
    }


  }

  function handleCreateNewCustomer(event: FormEvent) {
    event.preventDefault()

    createCustomer()
    setName('')
    setEmail('')
    setPhone('')

    setZipCode(0)
    setStreet('')
    setNumber('')
    setDistrict('')
    setComplement('')
    setReference('')
    setCity('')
    setState('')
  }

  return (
    <Container>
      <Navbar />
      <Sidebar />
      <Summary />
      <Content>

        <Link to="/dashboard"> <AiOutlineLeft /> </Link>

        <Form onSubmit={handleCreateNewCustomer} >

          <h2>Cadastrar Usúario</h2>

          <div className="row1">
            <div className="name">
              <TextField
                required
                value={name}
                id="outlined-size-small"
                placeholder="Nome/Razão Social"
                label="name" size="small"
                margin="dense"
                color="success"
                onChange={event => setName(event.target.value)}
              />
            </div>
            <div className="email">
              <TextField
                required
                value={email}
                id="outlined-size-small"
                placeholder="E-mail"
                label="email" size="small"
                type="email"
                margin="dense"
                color="success"
                onChange={event => setEmail(event.target.value)}
              />


            </div>
            <div className="phone">
              <TextField
                required
                value={phone}
                id="outlined-size-small"
                placeholder="Telefone"
                label="telefone" size="small"
                margin="dense"
                color="success"
                onChange={event => setPhone(event.target.value)}
              />

            </div>

          </div>


          <h2>Endereço</h2>

          <div className="row1">
            <div className="zipCode">
              <TextField
                required
                value={zipCode}
                id="outlined-size-small"
                placeholder="Nome/Razão Social"
                label="Cep" size="small"
                margin="dense"
                color="success"
                onChange={event => setZipCode(Number(event.target.value))}
              />
            </div>
            <div className="street">
              <TextField
                required
                value={street}
                id="outlined-size-small"
                placeholder="Rua"
                label="rua" size="small"
                type="text"
                margin="dense"
                color="success"
                onChange={event => setStreet(event.target.value)}
              />


            </div>
            <div className="number">
              <TextField
                required
                value={number}
                id="outlined-size-small"
                placeholder="Número"
                label="número" size="small"
                margin="dense"
                color="success"
                onChange={event => setNumber(event.target.value)}
              />


            </div>
            <div className="district">
              <TextField
                required
                value={district}
                id="outlined-size-small"
                placeholder="Bairro"
                label="bairro" size="small"
                margin="dense"
                color="success"
                onChange={event => setDistrict(event.target.value)}
              />

            </div>
            <div className="complement">
              <TextField
                required
                value={complement}
                id="outlined-size-small"
                placeholder="Complemento"
                label="complemento" size="small"
                margin="dense"
                color="success"
                onChange={event => setComplement(event.target.value)}
              />

            </div>
            <div className="reference">
              <TextField
                required
                value={reference}
                id="outlined-size-small"
                placeholder="Ponto de referência"
                label="referencia" size="small"
                margin="dense"
                color="success"
                onChange={event => setReference(event.target.value)}
              />

            </div>
            <div className="city">
              <TextField
                required
                value={city}
                id="outlined-size-small"
                placeholder="Cidade"
                label="cidade" size="small"
                margin="dense"
                color="success"
                onChange={event => setCity(event.target.value)}
              />

            </div>
            <div className="state">
              <TextField
                required
                value={state}
                id="outlined-size-small"
                placeholder="Estado"
                label="estado" size="small"
                margin="dense"
                color="success"
                onChange={event => setState(event.target.value)}
              />

            </div>

          </div>



          <button type="submit">
            Cadastrar
          </button>



        </Form>

      </Content>



    </Container>
  )
}