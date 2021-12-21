import { Container } from "./styles";
import { VscTrash } from 'react-icons/vsc';
import { RiEditLine } from 'react-icons/ri';
import { FiPrinter } from 'react-icons/fi'
import { RiAddFill } from 'react-icons/ri';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import {Link} from 'react-router-dom'

import { useEquipments } from "../../hooks/listEquipments";
import PermissionComponent from "../PermissionComponent";


export const MainTable = () => {

   const { equipments, deletePost} = useEquipments() 
   
   
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
                    <button className="show" >
                     <Link to={`/equipamento/${equipment.id}`}> <AiOutlineUnorderedList size={23} /></Link>
                    </button>
                    <PermissionComponent role="ROLE_ROOT,ROLE_ADMIN">
                      <button className="edit">
                        <RiEditLine size={23} />
                      </button>                   
                     
                      <button type="submit" className="delete" onClick={()=>deletePost(equipment.id)}>
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