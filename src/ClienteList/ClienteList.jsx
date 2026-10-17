import Cliente from "../Cliente/Cliente";
import {useState} from "react";
import useClientesApi from "../Hooks/useClientesApi";
import { CircularProgress, Button, Card, CardContent, CardActions, CardHeader } from "@mui/material";
import Portal from "../Componets/Portal/Portal";


export default function ClienteList() {
  const { clientes,
          cargando,
           error,
            eliminarCliente,
             crearCliente,
              clienteSeleccionado,
              setClienteSeleccionado,
              actualizarCliente } = useClientesApi();
              
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  

  return (
    <div>
      
        {mostrarFormulario && (
  <Portal>
            <Card variant="h5"  sx={{ marginBottom: 2 }}>
            <Card>
              <CardHeader title="Agregar/Editar Cliente" />
              <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <label htmlFor="firstname">Nombre:</label>
                <input type="text" id="firstname" name="firstname"
                defaultValue={clienteSeleccionado ? clienteSeleccionado.firstname || "" : ""}
                />
                <br />
                <label htmlFor="lastname">Apellido:</label>
                <input type="text" id="lastname" name="lastname"
                defaultValue={clienteSeleccionado ? clienteSeleccionado.lastname || "" : ""}
                />
                <br />
                <label htmlFor="dni">   DNI:</label>
                <input type="text" id="dni" name="dni"
                defaultValue={clienteSeleccionado ? clienteSeleccionado.dni || "" : ""}
                />
                <br />  
                <label htmlFor="address">Dirección:</label>
                <input type="text" id="address" name="address"
                defaultValue={clienteSeleccionado ? clienteSeleccionado.address || "" : ""}
                />
                <br />
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button variant="contained" onClick={async () => {
                  const nuevoCliente = {
                    firstname: (document.getElementById("firstname")).value,
                    lastname: (document.getElementById("lastname")).value,
                    dni: (document.getElementById("dni")).value,
                    address: (document.getElementById("address")).value,
                    localidadId: 1,
                  };
                  if (clienteSeleccionado) {
                    await actualizarCliente(clienteSeleccionado.id, { ...nuevoCliente, id: clienteSeleccionado.id });
                    setClienteSeleccionado(null);
                  } else {
                    await crearCliente(nuevoCliente);
                  }
                  setMostrarFormulario(false);
                }}>
                  Guardar
                </Button>

                <Button variant="outlined" onClick={() => setMostrarFormulario(false)}>
                  Cerrar
                </Button>
              </CardActions>
            </Card>
            </Card>
  </Portal>
        )}
    <h1>Lista de Clientes</h1>
      {cargando && <CircularProgress />}
      {error && <p>Error al cargar clientes</p>}
      {!cargando && !error && (
        <ul>
          <Button variant="contained" color="primary" onClick={() => {
            setClienteSeleccionado(null);
            setMostrarFormulario(true);
          }}>
            Agregar Cliente
          </Button>
          {clientes.map((cliente) => (
            <li key={cliente.id}>
              <Cliente
                cliente={cliente}
                onEliminar={eliminarCliente}
                onSeleccionar={setClienteSeleccionado}
                onModificar={setMostrarFormulario}
                clienteSeleccionado={clienteSeleccionado && clienteSeleccionado.id === cliente.id}


              />
            </li>
          ))}
        </ul>
        
      )}
    </div>
  );
}
