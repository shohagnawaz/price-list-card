import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import PriceList from "./components/PriceList/PriceList";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-7xl text-purple-700 text-center">Md. Shah Nawaz</h1>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
    </>
  );
}

export default App;
