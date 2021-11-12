import { MainTable } from "../MainTable";
import { Sidebar } from "../Sidebar";
import { Summary } from "../Summary";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Sidebar />
      <Summary />
      <MainTable />
    </Container>
  )
};