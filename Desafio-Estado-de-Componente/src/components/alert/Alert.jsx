const Alert = ({ mensaje, tipo }) => {
    return (
      <div className="w-100">
      <div className={`alert alert-${tipo}`} role="alert">
        {mensaje}
      </div>
      </div>
    );
  };
  
  export default Alert;