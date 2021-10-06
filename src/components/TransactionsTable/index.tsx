import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export const TransactionsTable = () => {
  useEffect(() => {
    api("transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/10/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="withdraw">- R$11.000,00</td>
            <td>Desenvolvimento</td>
            <td>21/10/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$10.000,00</td>
            <td>Desenvolvimento</td>
            <td>19/10/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
