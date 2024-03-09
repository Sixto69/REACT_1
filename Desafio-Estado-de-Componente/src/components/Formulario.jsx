import React from 'react'

function Formulario(props) {

    return (
        <>
            <form className="formulario" onSubmit={props.validarDatos}>
                <div className="form-group">
                    <input
                        type="text" value={props.nombre} placeholder='Nombre' name="nombre" className="form-control" onChange={(e) => props.setNombre(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text" value={props.email} placeholder='tuemail@ejemplo.com' name="email" className="form-control" onChange={(e) => props.setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text" value={props.pass1} placeholder='Contraseña' name="pass1" className="form-control" onChange={(e) => props.setPass1(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text" value={props.pass2} placeholder='Confirma tu contraseña' name="nombre" className="form-control" onChange={(e) => props.setPass2(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary" >Registrarse</button>
            </form>
            <p>
                {props.nombre} - {props.email} - {props.pass1} - {props.pass2}
            </p>
        </>
    )
}

export default Formulario