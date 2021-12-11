
import { BrowserRouter } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { AuthProvider } from './hooks/authContext';
import { EquipmentProvider } from './hooks/listEquipments';
import Login from './pages/Login';

import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <EquipmentProvider>
        <Login/>
        <Dashboard />
        <GlobalStyle />
      </EquipmentProvider>
    </AuthProvider>
    </BrowserRouter>

  );
}
