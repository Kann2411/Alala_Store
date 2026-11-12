import { useState } from 'react'
import { Link } from 'react-router'
import { VisorBoton } from '../componentes/interaccion.jsx'
import { Separador } from '../componentes/piezas.jsx'
import { categorias, productos } from '../contenido/catalogo.js'

/* Catálogo con filtro por categoría. Cada foto se abre en grande en el visor. */
function Catalogo() {
  const [filtro, setFiltro] = useState('Todos')
  const visibles = filtro === 'Todos' ? productos : productos.filter((p) => p[1] === filtro)
  const filtros = ['Todos', ...categorias]

  return (
    <>
      <div className="filtros" role="group" aria-label="Filtrar el catálogo">
        {filtros.map((f) => (
          <button key={f} type="button" className="pestana" aria-pressed={f === filtro} onClick={() => setFiltro(f)}>
            {f} <span className="filtro-cuenta">{f === 'Todos' ? productos.length : productos.filter((p) => p[1] === f).length}</span>
          </button>
        ))}
      </div>
      <p className="visually-hidden" aria-live="polite">{visibles.length} productos</p>
      <ul className="catalogo">
        {visibles.map(([archivo, categoria, texto, ancho, alto, referencia]) => (
          <li key={archivo}>
            <VisorBoton className="producto" src={`/img/catalogo/${archivo}.webp`} titulo={texto} aria-label={`Ampliar foto: ${texto}`}>
              <img src={`/img/catalogo/${archivo}.webp`} alt="" width={ancho} height={alto} loading="lazy" />
              <span className="producto-texto">
                <span className="producto-categoria">{categoria}</span>
                <span className="producto-nombre">{texto}</span>
                {referencia && <span className="producto-ref">Ref. {referencia}</span>}
              </span>
            </VisorBoton>
          </li>
        ))}
      </ul>
    </>
  )
}

export default function Inicio() {
  return (
    <>
      <section className="portada">
        <div className="contenedor portada-rejilla">
          <div>
            <p className="etiqueta">Bolsos y accesorios</p>
            <Separador />
            <p className="entrada">
              Encuentra en un solo lugar la información de inducción, dotación, bienestar, desempeño y formación de Alalá Store.
            </p>
            <div className="botones">
              <Link className="boton" to="/induccion-especifica">Ver inducción específica</Link>
              <Link className="boton boton-sec" to="/dotacion">Manual de dotación</Link>
              <a className="boton boton-sec" href="#catalogo">Ver catálogo</a>
            </div>
          </div>
          <img
            className="portada-foto"
            src="/img/fotos/operaria.webp"
            alt="Operaria de Alalá Store cosiendo una tela rosada en una máquina plana"
            width="585"
            height="885"
          />
        </div>
      </section>

      <section className="seccion seccion-suave" id="catalogo">
        <div className="contenedor">
          <p className="etiqueta">Catálogo</p>
          <h2 className="titulo">Nuestros bolsos y accesorios</h2>
          <Separador />
          <Catalogo />
        </div>
      </section>
    </>
  )
}
