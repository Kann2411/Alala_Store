import { useEffect, useRef, useState } from 'react'
import { evaluaciones } from '../contenido/config.js'
import { useAviso, useVisor } from './contextos.js'
import { Flecha } from './piezas.jsx'

/*
  Botón que lleva a una evaluación externa. El link sale de contenido/config.js.
  Mientras no haya link, avisa en vez de llevar a una página rota.
*/
export function BotonEvaluacion({ cual, texto = 'Ir a la evaluación', className = 'boton' }) {
  const avisar = useAviso()
  const link = evaluaciones[cual]

  if (link) {
    return (
      <a className={className} href={link} target="_blank" rel="noopener noreferrer">
        {texto} <Flecha />
      </a>
    )
  }
  return (
    <button
      className={className}
      type="button"
      onClick={() => avisar('Este botón llevará a la evaluación cuando el link esté disponible.')}
    >
      {texto} <Flecha />
    </button>
  )
}

/* Botón o enlace que abre una imagen en el visor. */
export function VisorBoton({ src, titulo, className = 'enlace-lamina', children, ...resto }) {
  const abrir = useVisor()
  return (
    <button className={className} type="button" onClick={() => abrir(src, titulo)} {...resto}>
      {children}
    </button>
  )
}

/*
  Pestañas accesibles: se cambian con clic o con las flechas del teclado.
  items: [{ id, titulo, contenido, panelClassName, panelStyle }]
*/
export function Pestanas({ items, etiqueta }) {
  const [activa, setActiva] = useState(0)
  const botones = useRef([])

  const mover = (e, i) => {
    let nueva = null
    if (e.key === 'ArrowRight') nueva = (i + 1) % items.length
    if (e.key === 'ArrowLeft') nueva = (i - 1 + items.length) % items.length
    if (nueva === null) return
    e.preventDefault()
    setActiva(nueva)
    botones.current[nueva]?.focus()
  }

  return (
    <div>
      <div className="pestanas-lista" role="tablist" aria-label={etiqueta}>
        {items.map((item, i) => (
          <button
            key={item.id}
            ref={(el) => (botones.current[i] = el)}
            className="pestana"
            role="tab"
            type="button"
            id={`t-${item.id}`}
            aria-controls={`p-${item.id}`}
            aria-selected={i === activa}
            tabIndex={i === activa ? 0 : -1}
            onClick={() => setActiva(i)}
            onKeyDown={(e) => mover(e, i)}
          >
            {item.titulo}
          </button>
        ))}
      </div>
      {items.map((item, i) => (
        <div
          key={item.id}
          className={item.panelClassName}
          style={item.panelStyle}
          role="tabpanel"
          id={`p-${item.id}`}
          aria-labelledby={`t-${item.id}`}
          hidden={i !== activa}
        >
          {item.contenido}
        </div>
      ))}
    </div>
  )
}

/* Índice lateral que marca la sección que se está leyendo. */
export function IndiceLateral({ items, etiqueta }) {
  const [actual, setActual] = useState(items[0]?.id)
  const lista = useRef(null)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((en) => {
          if (en.isIntersecting) setActual(en.target.id)
        })
      },
      { rootMargin: '-25% 0px -65% 0px' },
    )
    items.forEach(({ id }) => {
      const seccion = document.getElementById(id)
      if (seccion) observador.observe(seccion)
    })
    return () => observador.disconnect()
  }, [items])

  // En celular el índice es una tira horizontal: se desplaza hasta el tema actual.
  useEffect(() => {
    const nav = lista.current
    const enlace = nav?.querySelector('[aria-current]')
    if (nav && enlace && window.matchMedia('(max-width: 999px)').matches) {
      nav.scrollLeft = enlace.offsetLeft - 16
    }
  }, [actual])

  return (
    <nav className="indice" aria-label={etiqueta} ref={lista}>
      <ol>
        {items.map(({ id, titulo }) => (
          <li key={id}>
            <a href={`#${id}`} aria-current={id === actual ? 'true' : undefined}>
              {titulo}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
