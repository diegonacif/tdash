
import { BrowserRouter} from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { AuthProvider } from './hooks/authContext';
import { EquipmentProvider } from './hooks/listEquipments';

import { Routes} from './routes';

import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <EquipmentProvider>
       <Routes />       
        <GlobalStyle />
      </EquipmentProvider>
    </AuthProvider>
    </BrowserRouter>

  );
}
