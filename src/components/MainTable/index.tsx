import { Container } from "./styles";
import { VscTrash } from 'react-icons/vsc';
import { RiEditLine } from 'react-icons/ri';
import { FiPrinter } from 'react-icons/fi'
import { RiAddFill } from 'react-icons/ri';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import PermissionComponent from "../PermissionComponent";
import { useEffect, useState } from "react";
import { api } from "../../services/api";


interface Equipment {
  id: string;
  description: string;
  patrimony: number;
  serial: string;
  count_initial?: number;
  count_final?: number;
  category: {
    name: string
  };
  customer: {
    name: string
  };
  status: string;
  obs?: string
  supply: string;
  updated_at: Date
}


export const MainTable = () => {

  const [data, setData] = useState<Equipment[]>([])
  useEffect(() => {
    api.get("equipments")
      .then(response => {
        setData(response.data)
      }).catch(error => console.log(error));

  }, [])

  // Deletar um equipamento
  async function deleteEquipment(id: string) {

    if (window.confirm("Deseja realmente excluir esse equipamneto?")) {
      await api.delete(`equipments/${id}`)
      await api.get("equipments")
        .then(response => {
          setData(response.data)

        })
    }

  }

  return (

    <Container>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Modelo</th>
            <th>Tombo</th>
            <th>Série</th>
            <th>Cliente</th>
            <th>Status</th>
            <th>Suprimento</th>
            <th>Atualização</th>
            <th>
              <PermissionComponent role="ROLE_ROOT,ROLE_ADMIN">
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
          {data.map(equipment => {
            return (
              <tr key={equipment.id}>
                <td className="dark-td">{0}</td>

                <td className="dark-td">{equipment.description}</td>

                <td>{equipment.patrimony} </td>

                <td>{equipment.serial}</td>

                <td>{equipment.customer.name}</td>

                <td className={equipment.status} >
                  {equipment.status === "" && "-"}
                  <span>
                    <FiPrinter />
                  </span>

                  {equipment.status}

                </td>

                <td>{equipment.supply}</td>

                <td> {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(equipment.updated_at)
                )}</td> 

                <td>
                  <div className="actionButtons">
                    <button className="show" >
                      <Link to={`/equipamento/${equipment.id}`}> <AiOutlineUnorderedList size={23} /></Link>
                    </button>
                    <PermissionComponent role="ROLE_ROOT,ROLE_ADMIN">
                      <button className="edit">
                        <RiEditLine size={23} />
                      </button>

                      <button type="submit" className="delete" onClick={() => deleteEquipment(equipment.id)}>
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

    </Container>
  )
};