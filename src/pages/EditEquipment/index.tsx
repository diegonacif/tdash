import { TextField } from '@material-ui/core';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';
import { Summary } from "../../components/Summary";
import { useEquipments } from '../../hooks/listEquipments';
import { api } from '../../services/api';
import { Container, Content, Form } from "./styles";
import { AiOutlineLeft } from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';

interface EquipmentId {
  id: string;
};

interface Equipment {
  id?: string;
  description: string;
  patrimony: string;
  serial: string;
  count_initial: string;
  count_final: string;
  category_id: string;
  customer_id: string;
  status: string;
  obs: string;
  supply: string;
  transformer: string;
  customer: {
    name: string
  };
  category: {
    name: string
  }
};

interface Category {
  id: string;
  name: string;
};

interface Customer {
  id: string;
  name: string;
};

export const EditEquipment = () => {

  const [equipment, setEquipment] = useState<Equipment>({
    description: '',
    patrimony: '',
    serial: '',
    count_initial: '',
    count_final: '',
    category_id: '',
    customer_id: '',
    status: '',
    obs: '',
    supply: '',
    transformer: '',
    customer: {
      name: ''
    },
    category: {
      name: ''
    },
  })

  /* function updateEquipment (e: ChangeEvent<HTMLInputElement>) {
    setEquipment({
      ...equipment,
      [e.target.name]: e.target.value
    })
  } */

  const { id } = useParams<EquipmentId>();

  useEffect(() => {
    findEquipment(id)
  }, [id]);

  async function findEquipment(id: string) {
    const response = await api.get(`equipments/show/${id}`)
    setEquipment({
      description: response.data.description,
      patrimony: response.data.patrimony,
      serial: response.data.serial,
      count_initial: response.data.count_initial,
      count_final: response.data.count_final,
      category_id: response.data.category_id,
      customer_id: response.data.customer_id,
      supply: response.data.supply,
      status: response.data.status,
      obs: response.data.obs,
      transformer: response.data.transformer,
      customer: {
        name: response.data.customer.name,
      },
      category: {
        name: response.data.category.name,
      },
    })
    //console.log(response)
  } 

  const [description, setDescription] = useState('')
  const [category_id, setCategory_id] = useState('')
  const [customer_id, setCustomer_id] = useState('')
  const [patrimony, setPatrimony] = useState('')
  const [serial, setSerial] = useState('')
  const [supply, setSupply] = useState('')
  const [count_initial, setCount_initial] = useState('')
  const [status, setStatus] = useState('')
  const [obs, setObs] = useState('')
  const [transformer, setTransformer] = useState('')
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
  }

  console.log(equipment)

  return (
    <Container>
      <Navbar />
      <Sidebar />
      <Summary />
      <Content>

        <Form onSubmit={handleCreateNewEquipment} >
          
          <div className="rollBackButton">
            <Link to="/dashboard" style={{ textDecoration: 'none' }}> <TiArrowBack size={22} /> </Link>          
          </div>
        
          <h1>Editar equipamento</h1>

          <div className="modelo">
            <TextField
              required
              value={equipment.description}
              id="outlined-size-small"
              placeholder="Description"
              label="Modelo" size="small"
              margin="dense"
              color="success"
              onChange={event => setDescription(event.target.value)}
            />
          </div>

          <div className="tombo">
            <TextField
              required
              type="number"
              value={equipment.patrimony}
              id="outlined-size-small"
              placeholder="Patrimônio"
              label="Patrimônio" size="small"
              margin="dense"
              color="success"
              onChange={event => setPatrimony((event.target.value))}
            />
          </div>

          <div className="suprimento">
            <TextField
              required
              value={equipment.supply}
              id="outlined-size-small"
              placeholder="Suprimento"
              label="Suprimento" size="small"
              margin="dense"
              color="success"
              onChange={event => setSupply(event.target.value)}
            />
          </div>          

          <div className="serie">
            <TextField
              required
              value={equipment.serial}
              id="outlined-size-small"
              placeholder="N-Serie"
              label="N-Serie" size="small"
              margin="dense"
              color="success"
              onChange={event => setSerial(event.target.value)}
            />
          </div>          

          <div className="contador-inicial">
            <TextField
              value={equipment.count_initial}
              id="outlined-size-small"
              placeholder="Contador Inicial"
              label="Contador Inicial" size="small"
              margin="dense"
              color="success"
              onChange={event => setCount_initial((event.target.value))}
            />
          </div>

          <div className="transformado">
            <TextField
              type="number"
              value={equipment.transformer}
              id="outlined-size-small"
              placeholder="Transformador"
              label="Transformador" size="small"
              margin="dense"
              color="success"
              onChange={event => setTransformer((event.target.value))}
            />
          </div>          

          <div className="status">
            <select onChange={event => setStatus(event.target.value)} required>
              <option value="">{equipment.status}</option>
              <option value={selectStatus.status = "estoque"}>estoque</option>
              <option value={selectStatus.status = "cliente"}>cliente</option>
              <option value={selectStatus.status = "manutenção"}>manutenção</option>
              <option value={selectStatus.status = "aguardando peças"}>aguardando peças</option>
              <option value={selectStatus.status = "sem conserto"}>sem conserto</option>

            </select>
          </div>

          <div className="cliente">
            <select onChange={event => setCustomer_id(event.target.value)} value={customer_id} required>
              <option value="">{equipment.customer.name}</option>
              {customers.map((customer) => (
                <option key={customer.name} value={customer.id}>{customer.name}</option>
              ))}
            </select>
          </div>

          <div className="categoria">
            <select onChange={event => setCategory_id(event.target.value)} value={category_id} required>
              <option value="">{equipment.category.name}</option>
              {categories.map((category) => (
                <option key={category.name} value={category.id} >{category.name}</option>
              ))}
            </select>
          </div>

          <div className="obs">
            <TextField
              value={equipment.obs}
              id="outlined-size-small"
              placeholder="Observação"
              label="Observação" size="small"
              margin="dense"
              color="success"
              onChange={event => setObs(event.target.value)}
            />
          </div>

          <div className="buttonContainer">
            <button type="submit">
              Salvar
            </button>
          </div>

        </Form>

      </Content>
    
    </Container>
  )
}