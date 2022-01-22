
import moment from "moment";
import { useEffect, useState } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FiPrinter } from "react-icons/fi";
import {RiEditLine } from "react-icons/ri";
import { VscTrash } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import PermissionComponent from "../../components/PermissionComponent";
import { Sidebar } from "../../components/Sidebar";
import { Summary } from "../../components/Summary";
import { api } from "../../services/api";
import { Container, Table } from "./styles";



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



export function EquipmentsCustomer() {


  //formatação de data
  function formatDate(updated_at: Date | undefined) {
    return moment(updated_at).format("DD/MM/YYYY")
  }

  const [data, setData] = useState<Equipment[]>([])
  useEffect(() => {
    api.get("equipments/em_cliente")
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
      <Navbar />
      <Sidebar />
      <Summary />

      <Table>
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
              <th></th>

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

                  <td> {formatDate(equipment.updated_at)}</td>

                  <td>
                    <div className="actionButtons">
                      <button className="show" >
                        <Link to={`/equipamento/${equipment.id}`}> <AiOutlineUnorderedList size={23} /></Link>
                      </button>
                      <PermissionComponent role="root, admin">
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

      </Table>



    </Container>
  )
}