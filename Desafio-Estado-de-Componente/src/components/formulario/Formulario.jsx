import { useState } from "react";

const Formulario = ({ onSuccess, onError }) => {
  // estados del formulario
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmoContrasena, setConfirmoContrasena] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // validaciones del formulario
    if (
      nombre.trim() === "" ||
      mail.trim() === "" ||
      contrasena === "" ||
      confirmoContrasena === ""
    ) {
      onError("Todos los campos son obligatorios");
      return;
    }

    if (contrasena !== confirmoContrasena) {
      onError("Las contraseñas no coinciden");
      return;
    }

    // formulario simulacion
    setTimeout(() => {
      onSuccess("¡Registro exitoso!");
      // limpia los campos del formulario despues del registro exitoso
      setNombre("");
      setMail("");
      setContrasena("");
      setConfirmoContrasena("");
    }, 500); // tiempo de espera 1000 = a 1 segundo
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <form
        className="formulario container border borde-info"
        onSubmit={handleSubmit}
      > */}
        <div className="form-group">
          <label>Nombre Apellido</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className="form-group">
          <label>Correo</label>
          <input
            type="email"
            name="mail"
            placeholder="Correo electronico"
            className="form-control"
            onChange={(e) => setMail(e.target.value)}
            value={mail}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            name="contrasena"
            className="form-control"
            onChange={(e) => setContrasena(e.target.value)}
            value={contrasena}
          />
        </div>
        <div className="form-group">
          <label>Confirma Contraseña</label>
          <input
            type="password"
            name="confirmoContrasena"
            className="form-control"
            onChange={(e) => setConfirmoContrasena(e.target.value)}
            value={confirmoContrasena}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-3 mb-3">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;