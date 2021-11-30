import { useState } from 'react';
import { AddModal } from '../AddModal';

import { MainTable } from "../MainTable";
import { Navbar } from "../Navbar";
import { Sidebar } from "../Sidebar";
import { Summary } from "../Summary";
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