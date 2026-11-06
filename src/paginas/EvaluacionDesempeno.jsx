import { BotonEvaluacion } from '../componentes/interaccion.jsx'
import { Portada, Seccion, Temporal } from '../componentes/piezas.jsx'

export default function EvaluacionDesempeno() {
  return (
    <>
      <Portada
        etiqueta="App externa"
        titulo="Evaluación"
        destacado="de desempeño"
        imagen={{ src: '/img/fotos/diana.webp', alt: 'Diana con una flecha en el centro', ancho: 170, alto: 175, estilo: { maxWidth: 240 } }}
      />

      <Seccion>
        <div className="evaluacion-bloque">
          <div>
            <h2>Presenta tu evaluación</h2>
            <p>La evaluación se hace en una app externa. Este botón te lleva a ella.</p>
          </div>
          <BotonEvaluacion cual="desempeno" />
        </div>
      </Seccion>

      <Seccion>
        <Temporal titulo="Cómo funciona la evaluación">Aquí irá la explicación de la evaluación de desempeño.</Temporal>
      </Seccion>
    </>
  )
}
