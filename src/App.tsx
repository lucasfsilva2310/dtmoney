import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionsTable } from "./components/TransactionsTable";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <TransactionsTable />
      <GlobalStyle />
    </>
  );
}

export default App;
