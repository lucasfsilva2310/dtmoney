import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createServer, Model } from "miragejs";

createServer({
  // Com o miragejs vc tambem consegue simular um banco de dados
  //  nesse caso, estou criando uma model chamada transaction
  // e quando a rota /transactions post é chamada, um schema vai ser criado,
  // se baseando na model transactions, e passando o data que enviei
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freela",
          type: "deposit",
          category: "dev",
          amount: 6000,
          createdAt: new Date("2021-02-12 09:00:00"),
        },
        {
          id: 2,
          title: "Mercado",
          type: "withdraw",
          category: "Compras",
          amount: 150,
          createdAt: new Date("2021-02-12 10:00:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
