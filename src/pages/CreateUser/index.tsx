import { TextField } from '@material-ui/core';
import { FormEvent, useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';
import { Summary } from "../../components/Summary";
import { api } from '../../services/api';
import { Container, Content, Form } from "./styles";
import { AiOutlineLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import swal from "sweetalert";


interface ProfileUser {
  id?: string;
  name: string;
  email: string;
  roles: Array<Roles>
  created_at: Date
}
interface Roles {
  id: string;
  name: string;
  description: string
}
interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  roles: string
}

export const CreateUser = () => {

  const history = useHistory()

  const [data, setData] = useState<Roles[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [listUsers, setlistProfile] = useState<ProfileUser[]>([])

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [roles, setRoles] = useState('')


  async function createUser(userInput: User) {
    try {
      const response = await api.post('users', {
        ...userInput,
      })

      const user = response.data
      setUsers([
        ...users,
        user

      ]);
      swal({
        title: "Feito",
        text: "Usúario cadastrado com sucesso!",
        icon: "success",
      });

      history.push("/gerenciar-usuarios")


//atualizar a listagem apos o cadastro
      api.get("users")
        .then(response => {
          setlistProfile(response.data)
        }).catch(error => console.log(error));



    } catch (error) {
      swal({
        icon: "error",
        title: "Oops",
        text: "Algo deu errado, tente novamente mais tarde!",
      });


    }

  }
  //buscar todas as roles de usuario
  useEffect(() => {
    api.get("users/roles")
      .then(response => {
        setData(response.data)
      }).catch(error => console.log(error));

  }, [])

  //buscar perfil do usuario
  useEffect(() => {
    api.get("users")
      .then(response => {
        setlistProfile(response.data)
      }).catch(error => console.log(error));

  }, [])


  async function handleCreateNewUser(event: FormEvent) {
    event.preventDefault()

    createUser({
      name,
      roles,
      email,
      password

    })
    setName('')
    setRoles('')
    setEmail('')
    setPassword('')

  }

  return (
    <Container>
      <Navbar />
      <Sidebar />
      <Summary />
      <Content>


        <Link to="/dashboard"> <AiOutlineLeft /> </Link>

        <Form onSubmit={handleCreateNewUser} >

          <h2>Cadastrar Usúario</h2>

          <div className="row1">
            <div className="name">
              <TextField
                required
                value={name}
                id="outlined-size-small"
                placeholder="Nome"
                label="Nome" size="small"
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
                placeholder="e-Mail"
                label="e-Mail" size="small"
                margin="dense"
                color="success"
                onChange={event => setEmail(event.target.value)}
              />


            </div>
            <div className="password">
              <TextField
                required
                value={password}
                id="outlined-size-small"
                placeholder="password"
                label="password" size="small"
                margin="dense"
                color="success"
                type="password"
                onChange={event => setPassword(event.target.value)}
              />


            </div>

            <div className="roles">
              <div className="categoria">

                <select onChange={event => setRoles(event.target.value)} value={roles} required>
                  <option value="">Roles</option>
                  {data.map((role) => (
                    <option key={role.id} value={role.id} >{role.name}</option>
                  ))}
                </select>
              </div>

            </div>

          </div>





          <button type="submit">
            Cadastrar
          </button>


          <h2>Usúarios do Sistema</h2>

          {listUsers.map(user => {
            return (
              <li>
                <div>
                  <h4> nome </h4>
                  <span>{user?.name}</span>
                </div>
                <div>
                  <h4> email </h4>
                  <span>{user?.email}</span>
                </div>
                <div>
                  <h4> permissão </h4>
                  {user.roles.map(role => {
                    return (
                      <span>{role.name}</span>
                    )
                  })}
                </div>
                <div>
                  <h4> data de crição </h4>
                  <span>{user?.created_at}</span>
                </div>
              </li>
            )
          })}




        </Form>

      </Content>



    </Container>
  )
}