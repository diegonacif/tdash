import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <h2>
          <p>Clientes</p>
        </h2>
        <strong>
        <p>"Qtd de clientes"</p>
        </strong>
      </div>
      <div>
        <h2>
          <p>Equipamentos</p>
        </h2>
        <strong>
        <p>"Qtd de equipamentos"</p>
        </strong>
      </div>
    </Container>
  )
};