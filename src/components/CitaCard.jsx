function CitaCard({ cliente, fecha, servicio }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{cliente}</h3>
      <p>Fecha: {fecha}</p>
      <p>Servicio: {servicio}</p>
    </div>
  );
}

export default CitaCard;