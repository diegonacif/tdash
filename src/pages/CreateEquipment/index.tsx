import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';
import { Summary } from "../../components/Summary";
import { Container, Content } from "./styles";

/*
interface Equipment {
  id: string,
  status: string,
  count_initial: number,
  count_final: number,
  description: string
  patrimony: number
  serial: string
  supply: string
  obs: string,
  transformer: number,
  created_at: Date,
  updated_at: Date
  customer: {
    name: string
  },
  category: {
    name: string
  }
}
*/

export const CreateProduct = () => {

  

  return (
    <Container>
      <Navbar />
      <Sidebar />
      <Summary />
      <Content>
      <h1></h1>

      </Content>

    </Container>
  )
}