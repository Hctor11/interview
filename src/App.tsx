import { useState } from "react";
import "./App.sass";
import GeneralComponent from "./components/GeneralComponent";
import AdressComponent from "./components/AdressComponent";

function App() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <>
      <div className="form-container">
        <nav>
          <button
            className={activeTab === "general" ? "active" : ""}
            onClick={() => setActiveTab("general")}
          >
            General
          </button>
          <button
            className={activeTab === "billing" ? "active" : ""}
            onClick={() => setActiveTab("billing")}
          >
            Dirección de Facturación
          </button>
          <button
            className={activeTab === "shipping" ? "active" : ""}
            onClick={() => setActiveTab("shipping")}
          >
            Dirección de Envío
          </button>
        </nav>
        <main>
          {activeTab === "general" && <GeneralComponent />}
          {activeTab === "billing" && <AdressComponent />}
          {activeTab === "shipping" && <AdressComponent />}
        </main>
        <button>
          Guardar
        </button>
      </div>

    </>
  );
}

export default App;
