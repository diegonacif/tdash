import { Dashboard } from './components/Dashboard';
import { EquipmentsProvider } from './hooks/listEquipments';
import { GlobalStyle } from './styles/global';

export function App() {
  return (

    <EquipmentsProvider>
      <Dashboard />
      <GlobalStyle />
    </EquipmentsProvider>

  );
}
