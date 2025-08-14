// App.js
import Tarjeta from './Tarjeta';

function App() {
  return (
    <div>
      {/* Tu tarjeta original */}
      <Tarjeta 
        nombre="Ana Pérez"
        profesion="Desarrolladora Web"
        mensaje="¡Bienvenido a mi tarjeta de presentación!"
      />

      {/* La nueva tarjeta de Diana */}
      <Tarjeta 
        nombre="Diana Teresa Lopez Vega"
        profesion="Ingeniera Industrial"
        mensaje="Hola bienvenido"
      />
    </div>
  );
}

export default App;