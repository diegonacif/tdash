import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'

import { Container } from './styles';
import React, { FormEvent, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useEquipments } from '../../hooks/listEquipments';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';



interface Category {
  id: string;
  name: string;
}
interface Customer {
  id: string;
  name: string;
}


interface AddModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function AddModal({ isOpen, onRequestClose }: AddModalProps) {

  const { createEquipment } = useEquipments()

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




  //buscar todas as categorias 
 
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    api.get("categories")
      .then(response => {
        console.log(response.data)
        setCategories(response.data)
      }).catch(error => console.log(error));

  }, [])

  // buscando todos os clientes
  const [customers, setCustomers] = useState<Customer[]>([])

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
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"

    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewEquipment} >

        <h2>Cadastrar equipamento</h2>

        <div className="row1">
          <div className="modelo">
            <TextField
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

      



          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Categoria</InputLabel>
          
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={category_id}
                label="Cliente"
                onChange={event => setCategory_id(event.target.value)}
              >
                 {categories.map((category) => {         
              
                <MenuItem key={category.name} value={category.id}>{category.name}</MenuItem>               
              })}
              </Select>
          
           
          </FormControl>

          <div className="categoria">

          <select onChange={event => setCategory_id(event.target.value)}
            value={category_id}
          >
            {categories.map((category) => (
              <option key={category.name} value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>

        <div className="cliente">
          <select onChange={event => setCustomer_id(event.target.value)}
            value={customer_id}
          >
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

              >

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


      </Container>
    </Modal>
  )
}