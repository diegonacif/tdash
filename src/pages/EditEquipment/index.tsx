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

  const { id } = useParams<EquipmentId>();

  /* useEffect(() => {
    findEquipment(id)
  }, [id]); */

  useEffect(() => {
    if (id) {
      api.get(`equipments/show/${id}`)
      .then((response) => {
        setValues(response.data);
      })
    }
  }, [])

  /* async function findEquipment(id: string) {
    const response = await api.get(`equipments/show/${id}`)
    .then((response) => {
      console.log(response.data);
      setValues(response.data);
    })
  
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
  } */
  

  // código criado baseado nas aulas do Vinicius Dacal
  const initialValue = {
    description: '',
    patrimony: 0,
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
  }

  const [values, setValues] = useState(initialValue);

  function onChange(ev: { target: { name: any; value: any; }; }) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }
  // fim do trecho Vinicius Dacal 
  

  //const [description, setDescription] = useState('')
  const [category_id, setCategory_id] = useState('')
  const [customer_id, setCustomer_id] = useState('')
  //const [patrimony, setPatrimony] = useState('')
  //const [serial, setSerial] = useState('')
  //const [supply, setSupply] = useState('')
  //const [count_initial, setCount_initial] = useState('')
  //const [status, setStatus] = useState('')
  //const [obs, setObs] = useState('')
  //const [transformer, setTransformer] = useState('')
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

  /* async function handleCreateNewEquipment(event: FormEvent) {
    event.preventDefault()   
  } */

  async function onSubmit (ev: ChangeEvent<HTMLFormElement>) {
    ev.preventDefault();
    console.log(values)
  }

  console.log(values.description);

  return (
    <Container>
      <Navbar />
      <Sidebar />
      <Summary />
      <Content>

        <Form onSubmit={onSubmit} >
          
          <div className="rollBackButton">
            <Link to="/dashboard" style={{ textDecoration: 'none' }}> <TiArrowBack size={22} /> </Link>          
          </div>
        
          <h1>Editar equipamento</h1>

          <div className="modelo">
            {/* <label htmlFor="description">Modelo</label>
            <input
              type="text"
              id="description"
              name="description"              
              onChange={onChange}
              value={values.description}
            /> */}
            <TextField
              required
              value={values.description}
              id="outlined-size-small"
              placeholder="Description"
              label="Modelo" size="small"
              margin="dense"
              color="success"
              name="description"
              onChange={onChange}
            />
          </div>

          <div className="tombo">
            <TextField
              required
              type="number"
              value={values.patrimony}
              id="outlined-size-small"
              placeholder="Patrimônio"
              label="Patrimônio" size="small"
              margin="dense"
              color="success"
              name="patrimony"
              onChange={onChange}
            />
          </div>

          <div className="suprimento">
            <TextField
              required
              value={values.supply}
              id="outlined-size-small"
              placeholder="Suprimento"
              label="Suprimento" size="small"
              margin="dense"
              color="success"
              name="supply"
              onChange={onChange}
            />
          </div>          

          <div className="serie">
            <TextField
              required
              value={values.serial}
              id="outlined-size-small"
              placeholder="N-Serie"
              label="N-Serie" size="small"
              margin="dense"
              color="success"
              name="serial"
              onChange={onChange}
            />
          </div>          

          <div className="contador-inicial">
            <TextField
              value={values.count_initial}
              id="outlined-size-small"
              placeholder="Contador Inicial"
              label="Contador Inicial" size="small"
              margin="dense"
              color="success"
              name="count_initial"
              onChange={onChange}
            />
          </div>

          <div className="transformado">
            <TextField
              type="number"
              value={values.transformer}
              id="outlined-size-small"
              placeholder="Transformador"
              label="Transformador" size="small"
              margin="dense"
              color="success"
              name="transformer"
              onChange={onChange}
            />
          </div>          

          <div className="status">
            <select onChange={onChange} required>
              <option value="">Status</option>
              <option value={selectStatus.status = "estoque"}>estoque</option>
              <option value={selectStatus.status = "cliente"}>cliente</option>
              <option value={selectStatus.status = "manutenção"}>manutenção</option>
              <option value={selectStatus.status = "aguardando peças"}>aguardando peças</option>
              <option value={selectStatus.status = "sem conserto"}>sem conserto</option>

            </select>
          </div>

          <div className="cliente">
            <select onChange={event => setCustomer_id(event.target.value)} value={customer_id} required>
              <option value="">Cliente</option>
              {customers.map((customer) => (
                <option key={customer.name} value={customer.id}>{customer.name}</option>
              ))}
            </select>
          </div>

          <div className="categoria">
            <select onChange={event => setCategory_id(event.target.value)} value={category_id} required>
              <option value="">Categoria</option>
              {categories.map((category) => (
                <option key={category.name} value={category.id} >{category.name}</option>
              ))}
            </select>
          </div>

          <div className="obs">
            <TextField
              value={values.obs}
              id="outlined-size-small"
              placeholder="Observação"
              label="Observação" size="small"
              margin="dense"
              color="success"
              onChange={onChange}
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