import { Dashboard } from './components/Dashboard';
import { TransactionsProvider } from './hooks/listEquipments';
import { GlobalStyle } from './styles/global';

export function App() {  
  return (

    <TransactionsProvider>
      <Dashboard />
      <GlobalStyle />
    </TransactionsProvider>

  );
}
