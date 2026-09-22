import { useState } from "react";
import logo from "../../assets/mono.proyec.win.jpg";
export default function Alumno({ alumno, curso, anio }) {
  const [nombre, setNombre] = useState(alumno);
  const [mostrarImagen, setMostrarImagen] = useState(true);
  

  return (
    <div>
      <p>Nombre: {nombre}</p>
      <p>Curso: {curso}</p>
      <p>Año: {anio}</p>
      <p>Suma: {10 + 20}</p>
      {mostrarImagen && <img src={logo} width={100} alt="Logo ISP20" />}
      <br />
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" value={nombre}
        onChange={(evento) => setNombre(evento.target.value)}
      />
      <br />
      <label htmlFor="mostrarImagen">Mostrar Imagen:</label>
      <input type="checkbox" id="mostrarImagen" name="mostrarImagen" checked={mostrarImagen}
        onChange={(evento) => setMostrarImagen(evento.target.checked)}
      />
      <br />
      <a
        href="https://www.harrypotter.com/es"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ir el Planeta Tierra
      </a>
    </div>
  );
}

