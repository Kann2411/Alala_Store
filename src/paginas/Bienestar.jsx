import { useState } from 'react'
import { Pestanas, VisorBoton } from '../componentes/interaccion.jsx'
import { Datos, ListaCorazon, Portada, Seccion, Titulo } from '../componentes/piezas.jsx'
import * as b from '../contenido/bienestar.js'

function Actividad({ actividad }) {
  return (
    <article className="tarjeta actividad">
      <span className="mes-chip">{actividad.mes}</span>
      <h3>{actividad.nombre}</h3>
      <p><strong>Objetivo:</strong> {actividad.objetivo}</p>
      <p>{actividad.descripcion}</p>
      <dl className="mini">
        <div><dt>Para quién</dt><dd>{actividad.paraQuien}</dd></div>
        <div><dt>Cómo participar</dt><dd>{actividad.comoParticipar}</dd></div>
      </dl>
    </article>
  )
}

/* Calendario de 12 meses armado a partir de las actividades. Resalta el mes actual. */
function Calendario() {
  const [mesActual] = useState(() => new Date().getMonth())
  return (
    <ol className="calendario">
      {b.meses.map((mes, n) => {
        const delMes = b.componentes.flatMap((c) => c.actividades.filter((a) => a.mes === mes).map((a) => ({ ...a, componente: c })))
        return (
          <li className={n === mesActual ? 'mes mes-actual' : 'mes'} key={mes}>
            <h3>
              {mes} {n === mesActual && <span className="mes-etiqueta">Este mes</span>}
            </h3>
            <ul>
              {delMes.map((a) => (
                <li key={a.nombre} style={{ '--tono': a.componente.tono }}>
                  <span>{a.nombre}</span>
                  <small>{a.componente.nombre}</small>
                </li>
              ))}
            </ul>
          </li>
        )
      })}
    </ol>
  )
}

function DiaInduccion({ dia }) {
  const bloque = (i) => {
    const [titulo, puntos] = dia.temas[i]
    return (
      <div className="bloque-hora">
        <div className="hora">{b.horasInduccion[i][0]}<small>{b.horasInduccion[i][1]}</small></div>
        <div><h3>{titulo}</h3></div>
        <ul>{puntos.map((p) => <li key={p}>{p}</li>)}</ul>
      </div>
    )
  }
  const pausa = (hora, texto) => (
    <div className="bloque-hora bloque-pausa">
      <div className="hora">{hora}</div>
      <h3>{texto}</h3>
    </div>
  )
  return (
    <>
      {bloque(0)}
      {pausa('10:00 – 10:15 a. m.', 'Receso (15 min)')}
      {bloque(1)}
      {pausa('12:00 m. – 1:00 p. m.', 'Almuerzo (1 hora)')}
      {pausa('1:00 – 2:00 p. m.', 'Receso (1 hora)')}
      {bloque(2)}
    </>
  )
}

export default function Bienestar() {
  const pestanasComponentes = b.componentes.map((c) => ({
    id: c.id,
    titulo: c.nombre,
    panelStyle: { '--tono': c.tono },
    contenido: (
      <>
        <p className="entrada"><strong>Objetivo del componente:</strong> {c.objetivo}</p>
        <div className="rejilla">
          {c.actividades.map((a) => <Actividad actividad={a} key={a.nombre} />)}
        </div>
      </>
    ),
  }))

  const pestanasDias = b.semanaInduccion.map((d) => ({
    id: d.dia.toLowerCase(),
    titulo: d.dia,
    panelClassName: 'dia',
    panelStyle: { '--tono': d.tono },
    contenido: <DiaInduccion dia={d} />,
  }))

  return (
    <>
      <Portada
        etiqueta="Bienestar que inspira, motiva y transforma"
        titulo="Plan anual de"
        destacado="bienestar laboral"
        imagen={{ src: '/img/presentacion/bolsos-proposito.webp', alt: 'Bolso crema, bolso acolchado rosado y termo de Alalá Store', ancho: 480, alto: 455 }}
      >
        <p className="entrada">Una propuesta para cuidar, motivar y fortalecer a las personas que hacen parte de nuestra tienda.</p>
        <div className="botones">
          <a className="boton" href="#calendario">Ver actividades del año</a>
          <a className="boton boton-sec" href="#induccion">Cronograma de inducción</a>
        </div>
      </Portada>

      <Seccion>
        <Titulo>¿Por qué un plan de bienestar?</Titulo>
        <p className="entrada">
          Alalá Store reconoce que sus colaboradores son fundamentales para el crecimiento y buen funcionamiento de la empresa. Este plan busca mejorar su calidad de vida, fortalecer la motivación y promover un ambiente de trabajo agradable.
        </p>
        <div className="rejilla rejilla-2">
          <div>
            <h3>Objetivo general</h3>
            <p style={{ marginTop: 6 }}>{b.plan.objetivoGeneral}</p>
            <Datos
              items={[
                ['Responsable', b.plan.responsable],
                ['Dirigido a', b.plan.dirigidoA],
                ['Periodicidad', b.plan.periodicidad],
                ['Presupuesto', b.plan.presupuesto],
                ['Elaborado', b.plan.elaborado],
              ]}
            />
          </div>
          <div>
            <h3>Objetivos específicos</h3>
            <ListaCorazon items={b.objetivosEspecificos} style={{ marginTop: 10 }} />
          </div>
        </div>
      </Seccion>

      <Seccion suave>
        <Titulo>21 actividades en 7 componentes</Titulo>
        <Pestanas items={pestanasComponentes} etiqueta="Componentes del bienestar" />
      </Seccion>

      <Seccion id="calendario">
        <Titulo>Cronograma anual</Titulo>
        <p className="entrada">
          Las fechas específicas se definirán de acuerdo con la operación de la tienda y la disponibilidad de los colaboradores.
        </p>
        <Calendario />
      </Seccion>

      <Seccion suave>
        <blockquote className="cita cita-grande">
          En Alalá Store creemos que el éxito no solo está en vender productos, sino también en cuidar, valorar y motivar a las personas que hacen parte de nuestra historia.
        </blockquote>
      </Seccion>

      <Seccion>
        <div className="rejilla rejilla-2">
          <div>
            <Titulo>Seguimiento y evaluación</Titulo>
            <ListaCorazon items={b.seguimiento} />
          </div>
          <div>
            <Titulo>Marco normativo</Titulo>
            <details className="desplegable">
              <summary>Ver normas de referencia</summary>
              <ul>{b.marcoNormativo.map((n) => <li key={n}>{n}</li>)}</ul>
            </details>
          </div>
        </div>
      </Seccion>

      <Seccion suave id="induccion">
        <Titulo>Cronograma de inducción específica: primera semana</Titulo>
        <div className="botones" style={{ marginBottom: 16 }}>
          <VisorBoton src="/img/laminas/lamina-12.webp" titulo="Cronograma de inducción específica: primera semana">
            Ver cronograma original
          </VisorBoton>
        </div>
        <Pestanas items={pestanasDias} etiqueta="Días de la semana" />
      </Seccion>
    </>
  )
}
