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
import { Table } from './styles'
import PermissionComponent from '../../components/PermissionComponent';
import { RiEditLine } from 'react-icons/ri';
import { VscTrash } from 'react-icons/vsc';
import moment from 'moment';


interface ProfileUser {
  id: string;
  name: string;
  email: string;
  roles: Array<Roles>;
  created_at: Date;
  updated_at: Date
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


  //formatação de data
  function formatDate(updated_at: Date | undefined) {
    return moment(updated_at).format("DD/MM/YYYY")
  }

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

  // Deletar um usúario
  async function deleteUser(id: string) {

    if (window.confirm(`Deseja realmente excluir esse Usúario?`)) {
      await api.delete(`users/delete/${id}`)
      await api.get("users")
        .then(response => {
          setlistProfile(response.data)

        })
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
                  <option value="">Permissão</option>
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

          <Table>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Permissão</th>
                  <th>Criado em</th>
                  <th>Última atualização</th>
                  <th>
                  </th>
                </tr>
              </thead>
              <tbody>
                {listUsers.map(user => {
                  return (
                    <tr key={user.id}>
                      <td className="dark-td">{0}</td>

                      <td className="dark-td">{user.name}</td>

                      <td>{user.email} </td>

                      {user.roles.map(role => {

                        return (
                          <td key={user.id}>{role.name}</td>
                        )
                      })}

                      <td> {formatDate(user.created_at)}</td>

                      <td>{formatDate(user.updated_at)} </td>
                      <td>
                        <div className="actionButtons">

                          <PermissionComponent role="root,admin">
                            <button className="edit">
                              <RiEditLine size={23} />
                            </button>

                            <button type="submit" className="delete" onClick={() => deleteUser(user.id)}>
                              <VscTrash size={23} />
                            </button>
                          </PermissionComponent>

                        </div>
                      </td>

                    </tr>

                  )
                })}

              </tbody>
            </table>

          </Table>




        </Form>

      </Content>



    </Container>
  )
}