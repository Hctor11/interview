import { useState } from "react";
import { ADRESS } from "../util/adress";

const AdressComponent = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="form-container">
      <label>Pais:</label>
      <select
        onChange={(e) => handleCountryChange(e)}
        name="countries"
        id="countries"
      >
        {ADRESS.map((country) => {
          return <option value="">{country.name}</option>;
        })}
      </select>

      <label htmlFor="">
        Departamento:
        <select name="" id="">
          <option value="">1</option>
        </select>
      </label>

      <label htmlFor="">
        Municipio:
        <select name="" id="">
          <option value="">1</option>
        </select>
      </label>

      <label htmlFor="">
        Punto de referencia:
        <input type="text" />
      </label>
    </div>
  );
};

export default AdressComponent;
