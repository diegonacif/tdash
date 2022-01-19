
import { useEffect, useState } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { RiAddFill, RiEditLine } from "react-icons/ri";
import { VscTrash } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import PermissionComponent from "../../components/PermissionComponent";
import { Sidebar } from "../../components/Sidebar";
import { Summary } from "../../components/Summary";
import { api } from "../../services/api";
import { Container, Table } from "./styles";



interface Customer {
  id: string;
  name: string;
  email: number;
  phone: string;
  created_at: Date
}



export function Customers() {


  const [data, setData] = useState<Customer[]>([])
  useEffect(() => {
    api.get("customers")
      .then(response => {
        console.log(response.data)
        setData(response.data)
      }).catch(error => console.log(error));

  }, [])

  // Deletar um equipamento
  async function deleteCustomer(id: string) {

    if (window.confirm("Deseja realmente excluir esse cliente?")) {
      await api.delete(`customers/deletar/${id}`)
      await api.get("customers")
        .then(response => {
          setData(response.data)

        })
    }

  }


  return (
    <Container>
      <Navbar />
      <Sidebar />
      <Summary />

      <Table>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Criado em</th>
              <th>
                <PermissionComponent role="root, admin">
                  <Link to="/novo-equipamento">
                    <button>
                      <div className="addIcon"><RiAddFill size="18" /></div>
                      <div className="addText">Adicionar</div>
                    </button>
                  </Link>

                </PermissionComponent>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(customer => {
              return (
                <tr key={customer.id}>
                  <td className="dark-td">{0}</td>

                  <td className="dark-td">{customer.name}</td>

                  <td>{customer.email} </td>

                  <td>{customer.phone}</td>

                  <td> {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(customer.created_at)
                  )}</td>            

                  <td>
                    <div className="actionButtons">
                      <button className="show" >
                        <Link to={`/cliente/${customer.id}`}> <AiOutlineUnorderedList size={23} /></Link>
                      </button>
                      <PermissionComponent role="root, admin">
                        <button className="edit">
                          <RiEditLine size={23} />
                        </button>

                        <button type="submit" className="delete" onClick={() => deleteCustomer(customer.id)}>
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



    </Container>
  )
}