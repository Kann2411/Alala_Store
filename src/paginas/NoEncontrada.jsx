import { Link } from 'react-router'
import { Portada } from '../componentes/piezas.jsx'

export default function NoEncontrada() {
  return (
    <Portada etiqueta="Error 404" titulo="Página no" destacado="encontrada">
      <p className="entrada">La dirección que abriste no existe en el portal.</p>
      <div className="botones">
        <Link className="boton" to="/">Volver al inicio</Link>
      </div>
    </Portada>
  )
}
