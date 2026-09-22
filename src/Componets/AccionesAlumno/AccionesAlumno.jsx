import {useState} from "react";
export default function AccionesAlumno() {
  const [mostrarTitulo, setMostrarTitulo] = useState(true);
  const [mostrarBotonVer, setMostrarBotonVer] = useState(true);

  function mostrarAlertaVerAcciones() {
    console.log("Ver acciones del alumno Nico Marquez");
  }
  
  const mostrarAlertaAlumno = () => {
    console.log("Alumno: Nico Marquez");
  };

  const mostrarAlertaEditar = () => {
    console.log("Editar Alumno: Nico Marquez");
  } 

  const mostrarAlertaEliminar = () => {
    console.log("Eliminar Alumno: Nico Marquez");
  }

  return (
    <>
        <label htmlFor="mostrarBotonVer">Mostrar botón Ver acciones del alumno</label>
        <input type="checkbox" id="mostrarBotonVer" name="mostrarBotonVer" checked={mostrarBotonVer} onChange={(e) => setMostrarBotonVer(e.target.checked)} />
        <label htmlFor="mostrarTitulo">Mostrar acciones del alumno</label>
        <input type="checkbox" id="mostrarTitulo" name="mostrarTitulo" checked={mostrarTitulo} onChange={(e) => setMostrarTitulo(e.target.checked)} />
        {mostrarTitulo && (<h2>Acciones del Alumno</h2>)}
        {mostrarBotonVer && (<button onClick={mostrarAlertaAlumno}>Ver alumno</button>)}
        <br />
        {mostrarBotonVer && (<button onClick={mostrarAlertaEditar}>Editar alumno</button>)}
        <br />
        {mostrarBotonVer && (<button onClick={mostrarAlertaEliminar}>Eliminar alumno</button>)}
    </>
  );
}