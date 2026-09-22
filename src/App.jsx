import Titulo from './Componets/Titulo/Titulo.jsx'
import TodoCounter from './Componets/TodoCounter/TodoCounter.jsx'
import AccionesAlumno from './Componets/AccionesAlumno/AccionesAlumno.jsx'
import Contador from './Componets/Contador/Contador.jsx'
import Alumno from './Componets/Alumno/Alumno.jsx'
import ClienteList from './ClienteList/ClienteList.jsx'

export default function App() {
  return (
    <>
      <Titulo text="Creando mi primera app en React" />
      <TodoCounter totalTodos={5} completedTodos={2} />
      <Alumno alumno="Lizy Tagliani" curso="Ingeniería de Software II" anio={2026} />
      <AccionesAlumno />
      <Contador />
      <ClienteList />
    </>
  )
}

