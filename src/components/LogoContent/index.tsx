import { Container } from "./styles";
import logo from "../../assets/logo.png"

export function LogoContent() {
  return (
    <Container>
      <img src={logo} alt="logo"/>
      <span>Total Ink</span>
    </Container>
  )
}