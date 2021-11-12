import { Dashboard } from './components/Dashboard';
import { Navbar } from './components/Navbar';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <Navbar />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
