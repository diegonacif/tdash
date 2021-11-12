import { Container } from "./styles";

export function MainTable() {
  return (
    <Container>
      <table>
        <tr>
          <th>Cliente</th>
          <th>Tombo</th>
          <th>Equipamento</th>
          <th>Status</th>
          <th>Desde</th>
        </tr>
        <tr>
          <td>Interfort</td>
          <td>1958</td>
          <td>Brother DCP-7065DN</td>
          <td>Em cliente</td>
          <td>12/03/2020</td>
        </tr>
        <tr>
          <td>Arituba Park Hotel</td>
          <td>574</td>
          <td>HP LaserJet M1132 MFP</td>
          <td>Manutenção</td>
          <td>10/11/2021</td>
        </tr>
      </table>
    </Container>
  )
};