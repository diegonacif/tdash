import { TextField } from '@material-ui/core';
import { FormEvent, useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';
import { Summary } from "../../components/Summary";
import { useEquipments } from '../../hooks/listEquipments';
import { api } from '../../services/api';
import { Container, Content, Form } from "./styles";
import { AiOutlineLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom';



interface Category {
  id: string;
  name: string;
}
interface Customer {
  id: string;
  name: string;
}


export const CreateProduct = () => {


  const { createEquipment} = useEquipments()

  const [description, setDescription] = useState('')
  const [category_id, setCategory_id] = useState('')
  const [customer_id, setCustomer_id] = useState('')
  const [patrimony, setPatrimony] = useState(0)
  const [serial, setSerial] = useState('')
  const [supply, setSupply] = useState('')
  const [count_initial, setCount_initial] = useState(0)
  const [status, setStatus] = useState('')
  const [obs, setObs] = useState('')
  const [transformer, setTransformer] = useState(0)



  const [categories, setCategories] = useState<Category[]>([])

  //buscar todas as categorias 
  useEffect(() => {
    api.get("categories")
      .then(response => {
        setCategories(response.data)
      }).catch(error => console.log(error));

  }, [])


  const [customers, setCustomers] = useState<Customer[]>([])

  // buscando todos os clientes
  useEffect(() => {
    api.get("customers")
      .then(response => {

        setCustomers(response.data)
      }).catch(error => console.log(error));

  }, [])

  const selectStatus = {
    status: "estoque" || "cliente" || "manutenção" || "aguardando peças" || "sem conserto",
  };


  async function handleCreateNewEquipment(event: FormEvent) {
    event.preventDefault()

    await createEquipment({
      description,
      category_id,
      customer_id,
      patrimony,
      serial,
      supply,
      count_initial,
      status,
      obs,
      transformer
    })
    setDescription('')
    setCategory_id('')
    setCustomer_id('')
    setPatrimony(0)
    setSerial('')
    setSupply('')
    setCount_initial(0)
    setStatus('')
    setObs('')
    setTransformer(0)
  }

  return (
    <Container>
      <Navbar />
      <Sidebar />
      <Summary />
      <Content>


        <Link to="/dashboard"> <AiOutlineLeft /> </Link>

        <Form onSubmit={handleCreateNewEquipment} >

          <h2>Cadastrar equipamento</h2>

          <div className="row1">
            <div className="modelo">
              <TextField
                required
                value={description}
                id="outlined-size-small"
                placeholder="Description"
                label="Modelo" size="small"
                margin="dense"
                color="success"
                onChange={event => setDescription(event.target.value)}
              />
            </div>

          </div>


          <div className="row2">

            <div className="tombo">
              <TextField
                required
                value={patrimony}
                id="outlined-size-small"
                placeholder="Patrimônio"
                label="Patrimônio" size="small"
                margin="dense"
                color="success"
                onChange={event => setPatrimony(Number(event.target.value))}
              />

            </div>


            <div className="suprimento">
              <TextField
                required
                value={supply}
                id="outlined-size-small"
                placeholder="Suprimento"
                label="Suprimento" size="small"
                margin="dense"
                color="success"
                onChange={event => setSupply(event.target.value)}
              />

            </div>

          </div>


          <div className="row2">

            <div className="transformado">
              <TextField
                value={transformer}
                id="outlined-size-small"
                placeholder="Transformador"
                label="Transformador" size="small"
                margin="dense"
                color="success"
                onChange={event => setTransformer(Number(event.target.value))}
              />

            </div>

            <div className="serie">
              <TextField
                required
                value={serial}
                id="outlined-size-small"
                placeholder="N-Serie"
                label="N-Serie" size="small"
                margin="dense"
                color="success"
                onChange={event => setSerial(event.target.value)}
              />

            </div>

          </div>

          <div />


          <div className="categoria">

            <select onChange={event => setCategory_id(event.target.value)} value={category_id} required>
              <option selected disabled hidden>Categoria</option>
              {categories.map((category) => (
                <option key={category.name} value={category.id} >{category.name}</option>
              ))}
            </select>
          </div>

          <div className="cliente">
            <select onChange={event => setCustomer_id(event.target.value)} value={customer_id} required>
              <option selected disabled hidden>Cliente</option>
              {customers.map((customer) => (
                <option key={customer.name} value={customer.id}>{customer.name}</option>
              ))}
            </select>
          </div>

          <div className="row2">
            <div className="contador-inicial">
              <TextField
                value={count_initial}
                id="outlined-size-small"
                placeholder="Contador Inicial"
                label="Contador Inicial" size="small"
                margin="dense"
                color="success"
                onChange={event => setCount_initial(Number(event.target.value))}
              />

            </div>



            <div className="status">

              <div className="status">
                <select onChange={event => setStatus(event.target.value)}

                > <option selected disabled hidden>Status</option>
                  <option value={selectStatus.status = "estoque"}>estoque</option>
                  <option value={selectStatus.status = "cliente"}>cliente</option>
                  <option value={selectStatus.status = "manutenção"}>manutenção</option>
                  <option value={selectStatus.status = "aguardando peças"}>aguardando peças</option>
                  <option value={selectStatus.status = "sem conserto"}>sem conserto</option>

                </select>
              </div>


            </div>
          </div>


          <div className="obs">
            <TextField
              value={obs}
              id="outlined-size-small"
              placeholder="Observação"
              label="Observação" size="small"
              margin="dense"
              color="success"
              onChange={event => setObs(event.target.value)}
            />
          </div>


          <button type="submit">
            Cadastrar
          </button>


        </Form>

      </Content>



    </Container>
  )
}