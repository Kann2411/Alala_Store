import { Link } from 'react-router'
import { Portada, Recuerda, Seccion, Titulo } from '../componentes/piezas.jsx'
import { estructura, introduccion, proposito } from '../contenido/formacion.js'

export default function Formacion() {
  return (
    <>
      <Portada
        etiqueta="Aprender cada día"
        titulo="Modelo de"
        destacado="formación empresarial"
        imagen={{ src: '/img/fotos/maquina.webp', alt: 'Máquina de coser con hilos, tela, cinta métrica y tijeras', ancho: 585, alto: 412 }}
      >
        <p className="entrada">{introduccion}</p>
      </Portada>

      <Seccion>
        <Recuerda titulo="Nuestro propósito:">{proposito}</Recuerda>
      </Seccion>

      <Seccion suave>
        <Titulo>Estructura del modelo</Titulo>
        <p className="entrada">El modelo se organiza en cinco etapas:</p>
        <ol className="proceso">
          {estructura.map(([etapa, texto]) => (
            <li className="tarjeta" key={etapa}>
              <h3>{etapa}</h3>
              <p>{texto}</p>
            </li>
          ))}
        </ol>
      </Seccion>

      <Seccion>
        <Recuerda titulo="Participa en las capacitaciones.">Tu aprendizaje constante fortalece nuestra seguridad y calidad.</Recuerda>
        <div className="botones" style={{ marginTop: 18 }}>
          <Link className="boton boton-sec" to="/bienestar">Ver el plan de bienestar</Link>
        </div>
      </Seccion>
    </>
  )
}
