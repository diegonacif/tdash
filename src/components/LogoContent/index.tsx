import { Container } from "./styles";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";

export function LogoContent() {
  return (
    <Container>
     <Link to="/dashboard"> <img src={logo} alt="logo"/> </Link>
    </Container>
  )
}