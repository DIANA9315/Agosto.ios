// Tarjeta.js
function Tarjeta(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px', textAlign: 'center' }}>
      <h2>{props.nombre}</h2>
      <h4>{props.profesion}</h4>
      <p>{props.mensaje}</p>
    </div>
  );
}

export default Tarjeta;