import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";

// Interface para o Estado
interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionInput {
  title: string;
  amount: number;
  type: string;
  category: string;
}

// Interface que diz qual o valor que vai ser passado pelo childrend
// nesse caso, usamos o ReactNode que avisa o typescript que qualquer valor do react
//  é válido
interface TransactonsProviderProps {
  children: ReactNode;
}

// Interface que mostra quais valores vao ser passados pelo contexto
interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  // O typescript reclama por esse objeto estar vazio, pois ele precisa ter os valores
  // declarados pelo TransactionsContextData, por isso nós "forçamos" ele a enxergar
  // esse objeto vazio como um objeto que contém esse valores
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactonsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("transactions").then((response) => {
      const { transactions } = response.data;
      setTransactions(transactions);
    });
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });

    // const transaction = response.data as unknown as Transaction; --gambiarra que talvez funcione

    // tentar entender pq o TS reclama do nome da key DENTRO da response do axios
    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
