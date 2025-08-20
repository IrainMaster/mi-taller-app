import { useState } from 'react';
import CitaCard from './components/CitaCard';
import './App.css';

function App() {
  const [citas, setCitas] = useState([
    { id: 1, cliente: 'Irain Navas', fecha: '20/08/2025', servicio: 'Cambio de aceite' },
    { id: 2, cliente: 'Juan Pérez', fecha: '21/08/2025', servicio: 'Revisión de frenos' },
  ]);
  const [nuevaCita, setNuevaCita] = useState({ cliente: '', fecha: '', servicio: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCitas([...citas, { id: citas.length + 1, ...nuevaCita }]);
    setNuevaCita({ cliente: '', fecha: '', servicio: '' });
  };

  return (
    <div>
      <h1>Taller Mecánico</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del cliente"
          value={nuevaCita.cliente}
          onChange={(e) => setNuevaCita({ ...nuevaCita, cliente: e.target.value })}
        />
        <input
          type="text"
          placeholder="Fecha (ej. 20/08/2025)"
          value={nuevaCita.fecha}
          onChange={(e) => setNuevaCita({ ...nuevaCita, fecha: e.target.value })}
        />
        <input
          type="text"
          placeholder="Servicio"
          value={nuevaCita.servicio}
          onChange={(e) => setNuevaCita({ ...nuevaCita, servicio: e.target.value })}
        />
        <button type="submit">Agregar Cita</button>
      </form>
      {citas.map((cita) => (
        <CitaCard
          key={cita.id}
          cliente={cita.cliente}
          fecha={cita.fecha}
          servicio={cita.servicio}
        />
      ))}
    </div>
  );
}

export default App;