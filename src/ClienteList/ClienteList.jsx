import Cliente from "../Cliente/Cliente";
import React from "react";
import useClientesApi from "../Hooks/useClientesApi";

export default function ClienteList() {
  const { clientes, cargando, error, eliminarCliente } = useClientesApi();

  return (
    <div>
    <h1>Lista de Clientes</h1>
      {cargando && <p>Cargando clientes...</p>}
      {error && <p>Error al cargar clientes</p>}
      {!cargando && !error && (
        <ul>
          {clientes.map((cliente) => (
            <li key={cliente.id}>
              <Cliente
                firstname={cliente.firstname}
                lastname={cliente.lastname}
                dni={cliente.dni}
                address={cliente.address}
                id={cliente.id}
                onEliminar={eliminarCliente}
              />
            </li>
          ))}
        </ul>
        
      )}
    </div>
  );
}
