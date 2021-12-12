import { AuthProvider } from '../hooks/authContext';
import { EquipmentProvider } from '../hooks/listEquipments';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <EquipmentProvider>{children}</EquipmentProvider>
  </AuthProvider>
);

export default AppProvider;