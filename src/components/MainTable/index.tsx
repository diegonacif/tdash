import { Container } from "./styles";
import { VscTrash } from 'react-icons/vsc';
import { RiEditLine } from 'react-icons/ri';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { useEffect, useState } from "react";
import { api } from '../../services/api'
import { AddButton } from "../Buttons/AddButton";

interface IResponse {
  id: string;
  description: string;
  patrimony: number;
  serial: string;
  customer_id: string;
  status: string;
  supply: string;
  updated_at: Date


}


export const MainTable = () => {

  const [equipments, setEquipments] = useState<IResponse[]>([])
  useEffect(() => {
    api.get('equipments')
      .then(response => {

        setEquipments(response.data)

      }).catch(error => console.log(error));


  }, [])

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
            <th>Atualiação</th>
            <th><AddButton /></th>
          </tr>

        </thead>
        <tbody>
          {equipments.map(equipment => {
            return (
              <tr key={equipment.id}>
                <td>1</td>
                <td>{equipment.description}</td>
                <td>{equipment.patrimony} </td>
                <td>{equipment.serial}</td>
                <td>{equipment.customer_id}</td>
                <td>{equipment.status}</td>
                <td> {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(equipment.updated_at)
                )}</td>
                <td>
                  <div className="actionButtons">
                    <button className="show">
                      <AiOutlineUnorderedList size={23} />
                    </button>
                    <button className="edit">
                      <RiEditLine size={23} />
                    </button>
                    <button className="delete">
                      <VscTrash size={23} />
                    </button>
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