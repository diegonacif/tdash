import { Card, Container } from "./styles";

export function Summary() {
  return (
    <Container>
      {/* <div>
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
      </div> */}
      <Card>
       <h2>Clientes</h2>
       <span>59</span>
      </Card>
      <Card>
       <h2>Impressoras em estoque</h2>
       <span>24</span>
      </Card>
      <Card>
       <h2>Impressoras em cliente</h2>
       <span>24</span>
      </Card>
      <Card>
       <h2>Impressoras em manutenção</h2>
       <span>24</span>
      </Card>
      <Card>
       <h2>Total de impressoras</h2>
       <span>24</span>
      </Card>
    </Container>
  )
};