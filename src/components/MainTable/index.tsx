import { Container } from "./styles";
import { VscTrash } from 'react-icons/vsc';
import { RiEditLine } from 'react-icons/ri';
import { FiPrinter } from 'react-icons/fi'
import { RiAddFill } from 'react-icons/ri';
import { AiOutlineUnorderedList } from 'react-icons/ai';

import { useEquipments } from "../../hooks/listEquipments";
import PermissionComponent from "../PermissionComponent";
//import { useState } from "react";


/* interface IResponse {
  id: string;
  description: string;
  patrimony: number;
  serial: string;
  customer_id: string;
  status: string;
  supply: string;
  updated_at: Date
} */

interface MainTableProps {
  onOpenAddModal: () => void;
}

export const MainTable = ({ onOpenAddModal }: MainTableProps) => {

  const { equipments } = useEquipments()

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
                <button onClick={onOpenAddModal}>
                  <div className="addIcon"><RiAddFill size="18" /></div>
                  <div className="addText">Adicionar</div>
                </button>
              </PermissionComponent>
            </th>
          </tr>
        </thead>
        <tbody>
          {equipments.map(equipment => {
            return (
              <tr key={equipment.id}>
                <td className="dark-td">{0}</td>

                <td className="dark-td">{equipment.description}</td>

                <td>{equipment.patrimony} </td>

                <td>{equipment.serial}</td>

                <td>{equipment.customer.name}</td>

                <td className={equipment.status}>
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
                    <button className="show">
                      <AiOutlineUnorderedList size={23} />
                    </button>
                    <PermissionComponent role="ROLE_ROOT,ROLE_ADMIN">
                    <button className="edit">
                      <RiEditLine size={23} />
                    </button>
                    <button className="delete">
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