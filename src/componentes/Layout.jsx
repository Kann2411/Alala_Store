import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, ScrollRestoration, useLocation } from 'react-router'
import { menu } from '../contenido/config.js'
import { AvisoProveedor, VisorProveedor } from './Proveedores.jsx'

const iconos = {
  pasion: <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20Z" />,
  respeto: (
    <>
      <circle cx="8" cy="8" r="3" />
      <circle cx="16.5" cy="9" r="2.5" />
      <path d="M2.5 19c.5-3.5 2.7-5.5 5.5-5.5s5 2 5.5 5.5M15 13.7c3-.4 5.8 1.3 6.5 5.3" />
    </>
  ),
  compromiso: (
    <>
      <path d="M12 3 5 5.5v6c0 4.5 3 7.8 7 9.5 4-1.7 7-5 7-9.5v-6L12 3Z" />
      <path d="m8.8 12 2.2 2.2 4.3-4.4" />
    </>
  ),
  calidad: <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.1 5.9-.8L12 3.5Z" />,
  equipo: (
    <>
      <circle cx="12" cy="7.5" r="3" />
      <circle cx="5.5" cy="10" r="2" />
      <circle cx="18.5" cy="10" r="2" />
      <path d="M6.5 20c0-4 2.4-6.5 5.5-6.5s5.5 2.5 5.5 6.5M2 18.5c.2-2.5 1.5-4 3.5-4M22 18.5c-.2-2.5-1.5-4-3.5-4" />
    </>
  ),
}

const valoresPie = [
  ['pasion', 'Pasión'],
  ['respeto', 'Respeto'],
  ['compromiso', 'Compromiso'],
  ['calidad', 'Calidad'],
  ['equipo', 'Trabajo en equipo'],
]

function Cabecera() {
  const [abierto, setAbierto] = useState(false)
  const { pathname } = useLocation()

  // Al elegir una página, el menú del celular se cierra solo.
  const cerrar = () => setAbierto(false)

  return (
    <header className="cabecera">
      <a className="saltar" href="#contenido">
        Saltar al contenido
      </a>
      <div className="cabecera-fila">
        <Link className="marca" to="/" aria-label="Alalá Store, ir al inicio" onClick={cerrar}>
          <img src="/img/logo.webp" alt="" width="116" height="64" />
        </Link>
        {/* En la portada el nombre es el título principal; en las demás páginas lo es el título de cada una. */}
        {pathname === '/' ? <h1 className="marca-texto">Alalá Store</h1> : <span className="marca-texto">Alalá Store</span>}
        <button
          className="menu-boton"
          type="button"
          aria-expanded={abierto}
          aria-controls="menu-principal"
          onClick={() => setAbierto(!abierto)}
        >
          <span className="menu-rayas" aria-hidden="true"></span>
          Menú
        </button>
      </div>
      <nav id="menu-principal" className={abierto ? 'menu abierto' : 'menu'} aria-label="Secciones del portal">
        <ul>
          {menu.map((item) => (
            <li key={item.ruta}>
              <NavLink to={item.ruta} onClick={cerrar}>{item.titulo}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

function Pie() {
  return (
    <footer className="pie">
      <ul className="pie-valores">
        {valoresPie.map(([icono, nombre]) => (
          <li key={icono}>
            <span className="pie-icono">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                {iconos[icono]}
              </svg>
            </span>
            {nombre}
          </li>
        ))}
      </ul>
      <p className="pie-lema">¡Juntos llevamos nuestro estilo más lejos!</p>
      <p className="pie-nota">Alalá Store · Bolsos y accesorios</p>
    </footer>
  )
}

/* Si la dirección trae #seccion, baja hasta esa sección. */
function IrAlAncla() {
  const { hash, pathname } = useLocation()
  useEffect(() => {
    if (!hash) return
    // Espera a que el router termine de acomodar la página antes de bajar.
    const espera = setTimeout(() => {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior: 'auto' })
    }, 50)
    return () => clearTimeout(espera)
  }, [hash, pathname])
  return null
}

export default function Layout() {
  return (
    <AvisoProveedor>
      <VisorProveedor>
        <Cabecera />
        <main id="contenido">
          <Outlet />
        </main>
        <Pie />
        <ScrollRestoration />
        <IrAlAncla />
      </VisorProveedor>
    </AvisoProveedor>
  )
}
