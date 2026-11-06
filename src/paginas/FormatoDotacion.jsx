import { useEffect, useRef, useState } from 'react'
import { useAviso } from '../componentes/contextos.js'
import { Portada } from '../componentes/piezas.jsx'
import { camposPlanilla, entregas } from '../contenido/dotacion.js'

const FILAS_INICIALES = 7

/* Planilla de entrega de dotación. Se llena aquí y se imprime; no se guarda nada. */
export default function FormatoDotacion() {
  const avisar = useAviso()
  const formulario = useRef(null)
  const [filas, setFilas] = useState(FILAS_INICIALES)
  // Cambiar la llave vuelve a crear la tabla, y así queda en blanco al limpiar.
  const [version, setVersion] = useState(0)

  const enfocarNueva = useRef(false)

  // Después de agregar una fila, lleva el cursor a ella.
  useEffect(() => {
    if (!enfocarNueva.current) return
    enfocarNueva.current = false
    formulario.current?.querySelector('#filas tr:last-child input')?.focus()
  }, [filas])

  const agregarFila = () => {
    enfocarNueva.current = true
    setFilas((n) => n + 1)
  }

  const limpiar = () => {
    formulario.current?.reset()
    setFilas(FILAS_INICIALES)
    setVersion((v) => v + 1)
    avisar('La planilla quedó en blanco.')
  }

  return (
    <>
      <Portada
        etiqueta="4 entregas al año"
        titulo="Formato de"
        destacado="entrega de dotación"
        imagen={{ src: '/img/fotos/bolso.webp', alt: 'Bolso de mano magenta con broche dorado', ancho: 305, alto: 320, estilo: { maxWidth: 280 } }}
      >
        <p className="entrada">
          Llena la planilla aquí mismo e imprímela para firmarla, o imprímela en blanco y llénala a mano. Lo que escribas no se guarda en el portal.
        </p>
      </Portada>

      <section className="seccion">
        <div className="contenedor">
          <div className="botones no-imprimir" style={{ marginBottom: 18 }}>
            <button className="boton" type="button" onClick={() => window.print()}>Imprimir o guardar en PDF</button>
            <button className="boton boton-sec" type="button" onClick={agregarFila}>Agregar fila</button>
            <button className="boton boton-sec" type="button" onClick={limpiar}>Limpiar</button>
          </div>

          <form className="planilla" ref={formulario} onSubmit={(e) => e.preventDefault()}>
            <div className="planilla-cabeza">
              <img src="/img/logo.webp" alt="Alalá Store" width="355" height="195" />
              <h2>Planilla de entrega de dotación</h2>
              <p>Registro de 4 entregas al año</p>
            </div>

            <fieldset className="entregas">
              <legend>Entrega</legend>
              {entregas.map(([numero, periodo]) => (
                <label className="entrega" key={numero}>
                  <input type="radio" name="entrega" value={numero} />
                  <b>Entrega {numero}</b>
                  {periodo}
                </label>
              ))}
            </fieldset>

            <div className="campos">
              {camposPlanilla.map(([id, etiqueta, tipo]) => (
                <div className="campo" key={id}>
                  <label htmlFor={id}>{etiqueta}</label>
                  <input id={id} type={tipo} autoComplete="off" inputMode={id === 'cedula' ? 'numeric' : undefined} />
                </div>
              ))}
            </div>

            <h3 style={{ color: 'var(--magenta-oscuro)', textTransform: 'uppercase', marginBottom: 10 }}>
              Detalle de prendas y elementos entregados
            </h3>
            <div className="tabla-marco">
              <table className="tabla-planilla">
                <thead>
                  <tr>
                    <th scope="col">N.º</th>
                    <th scope="col">Descripción de la prenda o elemento</th>
                    <th scope="col" className="col-talla">Talla</th>
                    <th scope="col" className="col-cant">Cantidad</th>
                    <th scope="col" className="col-estado">Estado</th>
                    <th scope="col">Observaciones</th>
                  </tr>
                </thead>
                <tbody id="filas" key={version}>
                  {Array.from({ length: filas }, (_, i) => {
                    const n = i + 1
                    return (
                      <tr key={n}>
                        <td>{n}</td>
                        <td><input type="text" aria-label={`Descripción, fila ${n}`} /></td>
                        <td><input type="text" aria-label={`Talla, fila ${n}`} /></td>
                        <td><input type="number" min="0" aria-label={`Cantidad, fila ${n}`} /></td>
                        <td><input type="text" aria-label={`Estado, fila ${n}`} /></td>
                        <td><input type="text" aria-label={`Observaciones, fila ${n}`} /></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            <div className="campo" style={{ marginTop: 18 }}>
              <label htmlFor="generales">Observaciones generales</label>
              <textarea id="generales" rows="2"></textarea>
            </div>

            <div className="firmas">
              <div className="firma"><b>Entregó</b>Nombre y firma del responsable</div>
              <div className="firma"><b>Recibí a conformidad</b>Nombre y firma del colaborador(a)</div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
