

export default function Cliente({firstname, lastname, dni, address, id, onEliminar}) {
    return (
    <div>
      <h2>{firstname} {lastname}</h2>
      <p>DNI: {dni}</p>
      <p>Dirección: {address}</p>
      <p>id: {id}</p>
      <button onClick={() => {onEliminar(id);}}>Eliminar Cliente</button>
    </div>
  );
}
    