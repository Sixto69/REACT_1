import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from './components/Registro';
import { useState } from 'react'

function App() {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [pass1, setPass1] = useState("")
  const [pass2, setPass2] = useState("")
  const [errorllenado, setErrorllenado] = useState(false)
  const [errorigualdadpass, setErrorigualdadpass] = useState(false)
  const [errorpass, setErrorpass] = useState(false)
  const [erroremail, setErroremail] = useState(false)
  const [errorllenadomsg, setErrorllenadomsg] = useState(false)
  const [errorigualdadpassmsg, setIgualdadpassmsg] = useState(false)
  const [errorpassmsg, setErrorpassmsg] = useState(false)
  const [erroremailmsg, setErroremailmsg] = useState(false)
  const [noerror, setNoerror] = useState(false)
  const [noerrormsg, setNoerrormsg] = useState("")


  function esPasswordSeguro(password) {
    // Validar longitud mínima de 8 caracteres
    const longitudValida = password.length >= 10;
    // Validar la inclusión de al menos una letra mayúscula
    const contieneMayuscula = /[A-Z]/.test(password);
    // Validar la inclusión de al menos una letra minúscula
    const contieneMinuscula = /[a-z]/.test(password);
    // Validar la inclusión de al menos un número
    const contieneNumero = /\d/.test(password);
    // Validar la inclusión de al menos un carácter especial
    const contieneEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return longitudValida && contieneMayuscula && contieneMinuscula && contieneNumero && contieneEspecial;
  }

  const validarLlenadoCampos = (e) => {
    e.preventDefault()
    if (nombre == '' || email == '' || pass1 == '' || pass2 == '') {
      /*             alert("Completa todos los campos!") */
      setErrorllenado(true)
      setNoerror(false)
      setErrorllenadomsg("Completa todos los campos!")
      return
    } else {
      setErrorllenado(false)
      validarPass(e)
    }
  }

  const validarIgualdadPass = (e) => {
    e.preventDefault()
    if (pass1 !== pass2) {
      setErrorigualdadpass(true)
      setErrorpass(false)
      setNoerror(false)
      setIgualdadpassmsg("Los contraseñas no coinciden!")
      return
    } else {
      setErrorllenado(false)
      setErroremail(false)
      setErrorpass(false)
      setErrorigualdadpass(false)
      setNoerror(true)
      setNoerrormsg("Registro exitoso!")
      setNombre("")
      setEmail("")
      setPass1("")
      setPass2("")
    }
  }

  const validarPass = (e) => {
    e.preventDefault()
    if (esPasswordSeguro(pass1)) {
      validarIgualdadPass(e)
    } else {
      setErrorpass(true)
      setNoerror(false)
      setErrorpassmsg("La contraseña elegida no cumple con los requisitos de seguridad necesarios. Asegúrate de que tu contraseña tenga al menos 8 caracteres y contenga al menos una letra mayúscula, una letra minúscula, un número y un carácter especial (como !@#$%^&*). Intenta crear una contraseña que sea difícil de adivinar para otros, combinando estos elementos de manera única.")
      return
    }
  }

  const validarEmail = (e) => {
    e.preventDefault()
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email)) {
      setErroremail(true)
      setNoerror(false)
      setErroremailmsg("El email debe ser valido!")
      return
    }
    setErroremail(false)
  }

  const validarDatos = (e) => {
    e.preventDefault()
    //Validación
    validarLlenadoCampos(e)
    validarEmail(e)

  }
  return (
    <>
      <div className='contenedorForm'>
        <h1>Crea tu cuenta</h1>
        <Registro errorllenado={errorllenado}
          errorllenadomsg={errorllenadomsg}
          validarDatos={validarDatos}
          nombre={nombre}
          setNombre={setNombre}
          email={email}
          setEmail={setEmail}
          pass1={pass1}
          setPass1={setPass1}
          pass2={pass2}
          setPass2={setPass2}
          erroremail={erroremail}
          erroremailmsg={erroremailmsg}
          errorigualdadpass={errorigualdadpass}
          errorigualdadpassmsg={errorigualdadpassmsg}
          errorpass={errorpass}
          errorpassmsg={errorpassmsg}
          noerror={noerror}
          noerrormsg={noerrormsg}
        />
        <br />
      </div>
    </>
  )
}

export default App