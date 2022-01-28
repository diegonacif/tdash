import { TextField } from '@material-ui/core';
import { FormEvent, useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';
import { Summary } from "../../components/Summary";
import { useEquipments } from '../../hooks/listEquipments';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import { Container, Content, Form } from './styles';
import { Modal, Button } from 'react-bootstrap'


interface Category {
  id: string;
  name: string;
}
interface Customer {
  id: string;
  name: string;
}




export const CreateEquipment = () => {


  //função para converter primeira letra para maiuscula
  function firstCapitalLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  //modal bootstrap
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const { createCategory } = useEquipments()

  const [name, SetName] = useState('')


  //função para cadastrar categoria
  async function handleCreateNewCategory(event: FormEvent) {
    event.preventDefault()

    await createCategory(
      { name }
    )
    SetName('')

    await api.get("categories")
      .then(response => {
        setCategories(response.data)
      }).catch(error => console.log(error));

  }



  const { createEquipment } = useEquipments()

  const [description, setDescription] = useState('')
  const [category_id, setCategory_id] = useState('')
  const [customer_id, setCustomer_id] = useState('')
  const [patrimony, setPatrimony] = useState('')
  const [serial, setSerial] = useState('')
  const [supply, setSupply] = useState('')
  const [count_initial, setCount_initial] = useState('')
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
    setPatrimony('')
    setSerial('')
    setSupply('')
    setCount_initial('')
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


      <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Nova Categoria</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleCreateNewCategory}  >

                <div className="name">
                  <TextField
                    required
                    value={name}
                    id="outlined-size-small"  
                    placeholder="Nome da catégoria"
                    label="Nome da categoria" size="small"
                    margin="dense"
                    color="success"
                    style={{ width: "30vh" }}
                    onChange={event => SetName(event.target.value)}
                  />
                </div>

                <div className="buttonContainer">
                  <Button type="submit" variant="primary" onClick={handleClose} >
                    Cadastrar
                  </Button>
                </div>

              </Form>
            </Modal.Body>
            <Modal.Header>

            </Modal.Header>
          </Modal>





          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Nova Categoria</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleCreateNewCategory}  >

                <div className="name">
                  <TextField
                    required
                    value={name}
                    id="outlined-size-small"  
                    placeholder="Nome da catégoria"
                    label="Nome da categoria" size="small"
                    margin="dense"
                    color="success"
                    style={{ width: "30vh" }}
                    onChange={event => SetName(event.target.value)}
                  />
                </div>

                <div className="buttonContainer">
                  <Button type="submit" variant="primary" onClick={handleClose} >
                    Cadastrar
                  </Button>
                </div>

              </Form>
            </Modal.Body>
            <Modal.Header>

            </Modal.Header>
          </Modal>





        <Form onSubmit={handleCreateNewEquipment} >

          <div className="rollBackButton">
            <Link to="/dashboard" style={{ textDecoration: 'none' }}> <TiArrowBack size={22} /> </Link>
          </div>

          <h1>Cadastrar equipamento</h1>

          <div className="modelo">
            <TextField
              required
              value={firstCapitalLetter(description)}
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
              value={patrimony}
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
              value={supply.toUpperCase()}
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
              value={serial.toUpperCase()}
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
              value={count_initial}
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
              value={transformer}
              id="outlined-size-small"
              placeholder="Transformador"
              label="Transformador" size="small"
              margin="dense"
              color="success"
              onChange={event => setTransformer(Number(event.target.value))}
            />
          </div>

          <div className="status">
            <select onChange={event => setStatus(event.target.value)} required>
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
          <Link to="/novo-cliente">  <Button variant="success" > Add+ </Button>	</Link>
          </div>

          <div className="categoria">
            <select onChange={event => setCategory_id(event.target.value)} value={category_id} required>
              <option value="">Categoria</option>
              {categories.map((category) => (
                <option key={category.name} value={category.id} >{category.name}</option>
              ))}
            </select>
            <Button variant="success" onClick={handleShow}>
              Add+
            </Button>	
          </div>

          <div className="obs">
            <TextField
              value={firstCapitalLetter(obs)}
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
              Cadastrar
            </button>
          </div>



        </Form>

      </Content>



    </Container>
  )
}