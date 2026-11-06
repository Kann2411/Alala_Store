/* Piezas pequeñas que se repiten en todas las páginas. */

export function Separador() {
  return (
    <div className="separador">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21s-9-5.6-9-12.3A5.1 5.1 0 0 1 12 5.5a5.1 5.1 0 0 1 9 3.2C21 15.4 12 21 12 21Z" />
      </svg>
    </div>
  )
}

export function Escudo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 5 5.5v6c0 4.5 3 7.8 7 9.5 4-1.7 7-5 7-9.5v-6L12 3Z" />
      <path d="m8.8 12 2.2 2.2 4.3-4.4" />
    </svg>
  )
}

export function Flecha() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

/* Recuadro rosado con escudo: "Recuerda", "Medidas de prevención"... */
export function Recuerda({ titulo, children }) {
  return (
    <div className="recuerda">
      <Escudo />
      <div>
        <p>
          {titulo && <strong>{titulo} </strong>}
          {children}
        </p>
      </div>
    </div>
  )
}

/* Contenido que aún no existe. Se ve a simple vista que no es definitivo. */
export function Temporal({ titulo, children }) {
  return (
    <div className="temporal">
      <span className="temporal-sello">Contenido temporal</span>
      <h3>{titulo}</h3>
      <p>{children}</p>
    </div>
  )
}

/* Etiqueta amarilla para datos que faltan por confirmar. */
export function Confirmar({ children = 'Por confirmar' }) {
  return <span className="confirmar">{children}</span>
}

export function Titulo({ children, extra }) {
  return (
    <>
      <h2 className="titulo">
        {children}
        {extra && <> {extra}</>}
      </h2>
      <Separador />
    </>
  )
}

export function Seccion({ suave, id, children }) {
  return (
    <section className={suave ? 'seccion seccion-suave' : 'seccion'} id={id}>
      <div className="contenedor">{children}</div>
    </section>
  )
}

export function ListaCorazon({ items, style }) {
  return (
    <ul className="lista-corazon" style={style}>
      {items.map((item) => (
        <li key={typeof item === 'string' ? item : item.key}>{item}</li>
      ))}
    </ul>
  )
}

export function ListaPasos({ items }) {
  return (
    <ol className="lista-pasos">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  )
}

/* Lista de definiciones: término en negrita y su explicación. */
export function Datos({ items, style }) {
  return (
    <dl className="datos" style={style}>
      {items.map(([termino, definicion]) => (
        <div key={termino}>
          <dt>{termino}</dt>
          <dd>{definicion}</dd>
        </div>
      ))}
    </dl>
  )
}

export function Tarjetas({ items, className = 'rejilla' }) {
  return (
    <div className={className}>
      {items.map(([titulo, texto]) => (
        <article className="tarjeta" key={titulo}>
          <h3>{titulo}</h3>
          <p>{texto}</p>
        </article>
      ))}
    </div>
  )
}

/* Encabezado de cada página: título grande, entrada y foto. */
export function Portada({ etiqueta, titulo, destacado, imagen, children }) {
  return (
    <section className="portada">
      <div className="contenedor portada-rejilla">
        <div>
          <p className="etiqueta">{etiqueta}</p>
          <h1>
            {titulo} <em>{destacado}</em>
          </h1>
          <Separador />
          {children}
        </div>
        {imagen && (
          <img
            className="portada-foto"
            src={imagen.src}
            alt={imagen.alt}
            width={imagen.ancho}
            height={imagen.alto}
            style={imagen.estilo}
          />
        )}
      </div>
    </section>
  )
}
