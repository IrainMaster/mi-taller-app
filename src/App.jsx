import CitaCard from './components/CitaCard';
import './App.css';

function App() {
  return (
    <div>
      <h1>Taller Mecánico</h1>
      <CitaCard cliente="Irain Navas" fecha="20/08/2025" servicio="Cambio de aceite" />
      <CitaCard cliente="Juan Pérez" fecha="21/08/2025" servicio="Revisión de frenos" />
    </div>
  );
}

export default App;