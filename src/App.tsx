import "./App.sass";
import AdressComponent from "./components/AdressComponent";
import GeneralComponent from "./components/GeneralComponent";
import SendingAdressComponent from "./components/SendingAdressComponent";

function App() {
  return (
    <>
      <div className="container">
        <nav>
          <button>General</button>
          <button>Direccion de Facturacion</button>
          <button>Direccion de Envio</button>
        </nav>
        <main>
          <GeneralComponent />
          <AdressComponent />
          <SendingAdressComponent />
        </main>
      </div>
    </>
  );
}

export default App;
