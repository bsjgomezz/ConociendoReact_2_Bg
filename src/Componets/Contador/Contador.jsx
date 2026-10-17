import { useState } from 'react'

export default function Contador() {
  const [numero, setNumero] = useState(0)
  const [mostrarBotonVer, setMostrarBotonVer] = useState(true)

  function incrementar() {
    setNumero(numero + 1)
    console.log(numero)
  }

  return (
    <>
      <p>{numero}</p>
      {mostrarBotonVer && (<button onClick={incrementar}>Incrementar</button>)}
    </>
  )
}