import { Container } from "./styles";
import { VscTrash } from 'react-icons/vsc';
import { RiEditLine } from 'react-icons/ri';
import { AiOutlineUnorderedList } from 'react-icons/ai';

export function MainTable() {
  return (
    <Container>
      <table>
        <tr>
          <th>ID</th>
          <th>Modelo</th>
          <th>Tombo</th>
          <th>Série</th>
          <th>Cliente</th>
          <th>Status</th>
          <th>Suprimento</th>
          <th>Atualiação</th>
          <th>
          <div className="actionButtons">
            <button className="show">
              <AiOutlineUnorderedList size={23}/>
            </button>
          </div>
          </th>
        </tr>
        <tr>
          <td>1</td>
          <td>DCP-7065DN</td>
          <td>1958</td>
          <td>U623</td>
          <td>Cicarreli e França</td>
          <td>Estoque</td>
          <td>TN 450</td>
          <td>12/03/2020</td>
          <td>
            <div className="actionButtons">
              <button className="show">
                <AiOutlineUnorderedList size={23}/>
              </button>
              <button className="edit">
                <RiEditLine size={23} />
              </button>
              <button className="delete">
                <VscTrash size={23}/>
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>DCP-7065DN</td>
          <td>1958</td>
          <td>U623</td>
          <td>Cicarreli e França</td>
          <td>Estoque</td>
          <td>TN 450</td>
          <td>12/03/2020</td>
          <td>
            <div className="actionButtons">
              <button className="show">
                <AiOutlineUnorderedList size={23}/>
              </button>
              <button className="edit">
                <RiEditLine size={23} />
              </button>
              <button className="delete">
                <VscTrash size={23}/>
              </button>
            </div>
          </td>
        </tr><tr>
          <td>1</td>
          <td>DCP-7065DN</td>
          <td>1958</td>
          <td>U623</td>
          <td>Cicarreli e França</td>
          <td>Estoque</td>
          <td>TN 450</td>
          <td>12/03/2020</td>
          <td>
            <div className="actionButtons">
              <button className="show">
                <AiOutlineUnorderedList size={23}/>
              </button>
              <button className="edit">
                <RiEditLine size={23} />
              </button>
              <button className="delete">
                <VscTrash size={23}/>
              </button>
            </div>
          </td>
        </tr><tr>
          <td>1</td>
          <td>DCP-7065DN</td>
          <td>1958</td>
          <td>U623</td>
          <td>Cicarreli e França</td>
          <td>Estoque</td>
          <td>TN 450</td>
          <td>12/03/2020</td>
          <td>
            <div className="actionButtons">
              <button className="show">
                <AiOutlineUnorderedList size={23}/>
              </button>
              <button className="edit">
                <RiEditLine size={23} />
              </button>
              <button className="delete">
                <VscTrash size={23}/>
              </button>
            </div>
          </td>
        </tr><tr>
          <td>1</td>
          <td>DCP-7065DN</td>
          <td>1958</td>
          <td>U623</td>
          <td>Cicarreli e França</td>
          <td>Estoque</td>
          <td>TN 450</td>
          <td>12/03/2020</td>
          <td>
            <div className="actionButtons">
              <button className="show">
                <AiOutlineUnorderedList size={23}/>
              </button>
              <button className="edit">
                <RiEditLine size={23} />
              </button>
              <button className="delete">
                <VscTrash size={23}/>
              </button>
            </div>
          </td>
        </tr><tr>
          <td>1</td>
          <td>DCP-7065DN</td>
          <td>1958</td>
          <td>U623</td>
          <td>Cicarreli e França</td>
          <td>Estoque</td>
          <td>TN 450</td>
          <td>12/03/2020</td>
          <td>
            <div className="actionButtons">
              <button className="show">
                <AiOutlineUnorderedList size={23}/>
              </button>
              <button className="edit">
                <RiEditLine size={23} />
              </button>
              <button className="delete">
                <VscTrash size={23}/>
              </button>
            </div>
          </td>
        </tr>
        
      </table>
    </Container>
  )
};