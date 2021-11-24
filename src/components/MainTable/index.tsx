import { Container } from "./styles";
import { VscTrash } from 'react-icons/vsc';
import { RiEditLine } from 'react-icons/ri';
import { AiOutlineUnorderedList } from 'react-icons/ai';

import { useEquipments } from "../../hooks/listEquipments";


export const MainTable = () => {

  const{equipments} = useEquipments()
               

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
            <th>Atualiação</th>
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