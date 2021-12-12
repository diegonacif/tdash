import { useState } from 'react';
import { AddModal } from '../../components/AddModal';


import { MainTable } from "../../components/MainTable";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { Summary } from "../../components/Summary";
import { Container } from "./styles";



export function Dashboard() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  function handleOpenAddModal() {
    setIsAddModalOpen(true);
  }

  function handleCloseAddModal() {
    setIsAddModalOpen(false);
  }
  
  return (
    <Container>
      <Navbar />
      <Sidebar />
      <Summary />
      <MainTable onOpenAddModal={handleOpenAddModal} />
      <AddModal
        isOpen={isAddModalOpen}
        onRequestClose={handleCloseAddModal}
      />
      
    </Container>
  )
};