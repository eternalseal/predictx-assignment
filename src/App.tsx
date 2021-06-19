import WalletProvider from "./contexts/AppContexts";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <WalletProvider>
      <Header></Header>
      <Dashboard></Dashboard>
    </WalletProvider>
  );
}

export default App;
