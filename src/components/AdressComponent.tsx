import { useState } from "react";
import { ADRESS } from "../util/adress";

const AdressComponent = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [selectedMunicipio, setSelectedMunicipio] = useState<string>("");
  const [selectedDistrito, setSelectedDistrito] = useState<string>("");

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
    setSelectedDepartment("");
    setSelectedMunicipio("");
    setSelectedDistrito("");
  };

  const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDepartment(e.target.value);
    setSelectedMunicipio("");
    setSelectedDistrito("");
  };

  const handleMunicipioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMunicipio(e.target.value);
    setSelectedDistrito("");
  };

  const handleDistritoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDistrito(e.target.value);
  };

  const getDepartments = () => {
    const country = ADRESS.find((c) => c.code === selectedCountry);
    return country?.departments || [];
  };

  const getMunicipios = () => {
    const department = getDepartments().find(
      (d) => d.code === selectedDepartment
    );
    return department?.municipios || [];
  };

  const getDistritos = () => {
    const municipio = getMunicipios().find((m) => m.name === selectedMunicipio);
    return municipio?.distritos || [];
  };

  return (
    <div className="form-container">
      <label>País:</label>
      <select onChange={handleCountryChange} value={selectedCountry}>
        <option value="">Seleccione un país</option>
        {ADRESS.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>

      <label>Departamento:</label>
      <select
        onChange={handleDepartmentChange}
        value={selectedDepartment}
        disabled={!selectedCountry}
      >
        <option value="">Seleccione un departamento</option>
        {getDepartments().map((department) => (
          <option key={department.code} value={department.code}>
            {department.name}
          </option>
        ))}
      </select>

      <label>Municipio:</label>
      <select
        onChange={handleMunicipioChange}
        value={selectedMunicipio}
        disabled={!selectedDepartment}
      >
        <option value="">Seleccione un municipio</option>
        {getMunicipios().map((municipio) => (
          <option key={municipio.name} value={municipio.name}>
            {municipio.name}
          </option>
        ))}
      </select>

      <label>Distrito:</label>
      <select
        onChange={handleDistritoChange}
        value={selectedDistrito}
        disabled={!selectedMunicipio}
      >
        <option value="">Seleccione un distrito</option>
        {getDistritos().map((distrito, index) => (
          <option key={index} value={distrito}>
            {distrito}
          </option>
        ))}
      </select>

      <label>Punto de referencia:</label>
      <input type="text" />
    </div>
  );
};

export default AdressComponent;
