import { MainTable } from "../MainTable";
import { Navbar } from "../Navbar";
import { Sidebar } from "../Sidebar";
import { Summary } from "../Summary";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Navbar />
      <Sidebar />
      <Summary />
      <MainTable />
    </Container>
  )
};