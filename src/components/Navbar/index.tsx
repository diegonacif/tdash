import { FiPower } from "react-icons/fi";
import { Container } from "./styles";
import { useAuth } from '../../hooks/authContext'
import avatar from '../../assets/avatar.jpg'



export function Navbar() {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <h3>Printers Stock</h3>

      <img
          src={avatar}
          alt="avatar"
        />
        <p>{user.name} </p>

      <h3>
      
        <button type="button" onClick={signOut}>
          <FiPower size={20} />
        </button>
      </h3>
    </Container>
  )
};