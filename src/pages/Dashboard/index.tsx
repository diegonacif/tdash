
import { MainTable } from "../../components/MainTable";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { Summary } from "../../components/Summary";
import { Container } from "./styles";



export function Dashboard() {


  return (
    <Container>
      <Navbar />
      <Sidebar />
      <Summary />
      <MainTable/>
     

    </Container>
  )
}