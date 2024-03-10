import { useState } from "react";
import {
  faFacebook,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import SocialButton from "../socialButton/SocialButton";
import Formulario from "../formulario/Formulario";
import Alert from "../alert/Alert";
import "/src/App.css";

const Registro = () => {
  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const [tipoAlerta, setTipoAlerta] = useState("");

  const handleSuccess = (message) => {
    setMensajeAlerta(message);
    setTipoAlerta("success");
  };

  const handleError = (message) => {
    setMensajeAlerta(message);
    setTipoAlerta("danger");
  };

  return (
    <div className=" ">
      <div className="container  d-flex flex-column  align-items-center border border-info">
        <h1 className="fs-2 d-flex flex-column mt-3">Crea una cuenta</h1>
        <SocialButton
          icon1={faFacebook}
          icon2={faLinkedinIn}
          icon3={faGithub}
        />
        <Formulario
          onSuccess={handleSuccess}
          onError={handleError}
          mensajeAlerta={mensajeAlerta}
          tipoAlerta={tipoAlerta}
        />
        <Alert className="bg-primary" mensaje={mensajeAlerta} tipo={tipoAlerta} />
      </div>
    </div>
  );
};

export default Registro;