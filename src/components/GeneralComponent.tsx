const GeneralComponent = () => {
  return (
    <div className="form-container">
      <label htmlFor="name">
        Nombre:
        <input type="text" name="name" id="name" required />
      </label>

      <label htmlFor="last-name">
        Apellido:
        <input type="text" name="last-name" id="last-name" required />
      </label>

      <label htmlFor="email">
        Correo:
        <input type="email" name="email" id="email" required />
      </label>

      <label htmlFor="phone">
        Celular:
        <input type="number" name="phone" id="phone" required />
      </label>
    </div>
  );
};

export default GeneralComponent;
