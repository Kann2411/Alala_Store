import { Link } from 'react-router'
import { Pestanas, VisorBoton } from '../componentes/interaccion.jsx'
import { Confirmar, Datos, ListaCorazon, Portada, Recuerda, Seccion, Temporal, Titulo } from '../componentes/piezas.jsx'
import * as d from '../contenido/dotacion.js'

function UsoIncorrecto({ items }) {
  return (
    <ul className="uso-no">
      {items.map(([img, texto, ancho = 140, alto = 140]) => (
        <li key={texto}>
          <img src={`/img/presentacion/${img}.webp`} alt="" width={ancho} height={alto} loading="lazy" />
          <span>{texto}</span>
        </li>
      ))}
    </ul>
  )
}

/* Contenido de la pestaña de cada cargo. */
function Cargo({ cargo }) {
  const foto = <img className="foto-cargo" src={cargo.foto.src} alt={cargo.foto.alt} width={cargo.foto.ancho} height={cargo.foto.alto} loading="lazy" />

  // Cargos del manual anterior: solo lista de prendas y foto.
  if (cargo.prendas) {
    const prendas = cargo.prendas.map((p, i) =>
      i === cargo.prendas.length - 1 && cargo.confirmarUltima ? <span key={p}>{p} <Confirmar>{cargo.confirmarUltima}</Confirmar></span> : p,
    )
    return (
      <>
        <div>
          <ListaCorazon items={prendas} />
          {cargo.lema && <p style={{ margin: '14px 0 0' }}><strong>{cargo.lema}</strong></p>}
        </div>
        {foto}
      </>
    )
  }

  // Cargos de la presentación: uso correcto, foto y uso incorrecto.
  const noUsar = d.noUsarCargo.map((texto, i) => [`no-${i + 1}`, i === 0 && cargo.primerNoUsar ? cargo.primerNoUsar : texto])
  return (
    <>
      <p className="entrada">{cargo.intro}</p>
      <div className="cargo-rejilla">
        <div>
          <h3 className="uso-titulo uso-ok">Uso correcto</h3>
          <ListaCorazon items={cargo.correcto} />
        </div>
        <img className="foto-persona" src={cargo.foto.src} alt={cargo.foto.alt} width={cargo.foto.ancho} height={cargo.foto.alto} loading="lazy" />
        <div>
          <h3 className="uso-titulo uso-mal">Uso incorrecto</h3>
          <UsoIncorrecto items={noUsar} />
        </div>
      </div>
      <Recuerda titulo="Recuerda:">{cargo.recuerda}</Recuerda>
      <Recuerda titulo="Importante:">{cargo.importante}</Recuerda>
    </>
  )
}

export default function Dotacion() {
  const pestanas = d.cargos.map((cargo) => ({
    id: cargo.id,
    titulo: cargo.titulo,
    panelClassName: cargo.prendas ? 'tarjeta rejilla rejilla-2' : 'tarjeta cargo',
    contenido: <Cargo cargo={cargo} />,
  }))

  return (
    <>
      <Portada
        etiqueta="Para todos los colaboradores"
        titulo="Manual de"
        destacado="dotación"
        imagen={{ src: '/img/presentacion/equipo.webp', alt: 'Tres colaboradores de Alalá Store con polo blanco, pantalón azul oscuro y carné; una con delantal negro', ancho: 710, alto: 840 }}
      >
        <p className="entrada">Lineamientos para el uso, cuidado y presentación de nuestros uniformes y elementos de protección personal.</p>
        <p className="entrada"><strong>¡Juntos llevamos nuestro estilo más lejos!</strong></p>
        <div className="botones">
          <VisorBoton className="boton boton-sec" src="/img/laminas/lamina-11.webp" titulo="Manual de dotación anterior: las 24 láminas">
            Ver manual anterior
          </VisorBoton>
        </div>
      </Portada>

      <Seccion>
        <Titulo>Objetivos del manual</Titulo>
        <div className="rejilla rejilla-2">
          <ListaCorazon items={d.objetivos} />
          <p style={{ margin: 0 }}><strong>Aplica para</strong> {d.alcance}</p>
        </div>
      </Seccion>

      <Seccion>
        <Titulo>Códigos de vestuario</Titulo>
        <p className="entrada">Nuestro código de vestuario refleja la imagen profesional, ordenada y coherente de Alalá Store.</p>
        <div className="codigos">
          <div>
            <h3 className="uso-titulo uso-ok">Uso correcto</h3>
            <div className="rejilla codigos-ok">
              {d.usoCorrecto.map(([img, titulo, texto, ancho, alto]) => (
                <article className="tarjeta tarjeta-foto" key={img}>
                  <img src={`/img/presentacion/${img}.webp`} alt="" width={ancho} height={alto} loading="lazy" />
                  <h4>{titulo}</h4>
                  <p>{texto}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <h3 className="uso-titulo uso-mal">Uso incorrecto</h3>
            <UsoIncorrecto items={d.usoIncorrecto} />
          </div>
        </div>
        <h3 style={{ marginTop: 24 }}>Reglas generales</h3>
        <ListaCorazon items={d.reglasGenerales} style={{ marginTop: 10 }} />
      </Seccion>

      <Seccion suave>
        <Titulo>Dotación por cargo</Titulo>
        <Pestanas items={pestanas} etiqueta="Cargos" />
      </Seccion>

      <Seccion>
        <Titulo>Elementos de protección por área</Titulo>
        <div className="tabla-marco">
          <table>
            <thead>
              <tr><th scope="col">Área</th><th scope="col">Elementos</th><th scope="col">Importante</th></tr>
            </thead>
            <tbody>
              {d.eppPorArea.map(([area, elementos, nota]) => (
                <tr key={area}><th scope="row">{area}</th><td>{elementos}</td><td>{nota}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Seccion>

      <Seccion suave>
        <Titulo>Cuidados del uniforme</Titulo>
        <ListaCorazon items={d.cuidados} />
        <p style={{ margin: '14px 0 0' }}>El buen cuidado del uniforme prolonga su vida útil y mantiene nuestra imagen impecable.</p>
      </Seccion>

      <Seccion>
        <Titulo extra={<Confirmar />}>Especificaciones de prendas por área</Titulo>
        <div className="tabla-marco">
          <table>
            <thead>
              <tr><th scope="col">Área</th><th scope="col">Camiseta</th><th scope="col">Pantalón</th><th scope="col">Calzado</th></tr>
            </thead>
            <tbody>
              {d.especificaciones.map(([area, camiseta, pantalon, calzado, telaPorConfirmar]) => (
                <tr key={area}>
                  <th scope="row">{area}</th>
                  <td>{camiseta} {telaPorConfirmar && <Confirmar>Tela por confirmar</Confirmar>}</td>
                  <td>{pantalon}</td>
                  <td>{calzado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Seccion>

      <Seccion suave>
        <Titulo>Guía de tallas</Titulo>
        <div className="rejilla rejilla-2">
          <div>
            <h3>Cómo medirte</h3>
            <Datos items={d.comoMedirte} style={{ margin: '8px 0 16px' }} />
            <p>Las medidas son aproximadas y pueden variar según el tipo de prenda.</p>
          </div>
          <Temporal titulo="Tabla de medidas">
            La imagen disponible no permite leer las medidas con seguridad. La tabla se publicará cuando llegue el documento original.
          </Temporal>
        </div>
      </Seccion>

      <Seccion>
        <Titulo>Presentación personal</Titulo>
        <div className="tabla-marco">
          <table>
            <thead>
              <tr><th scope="col">Aspecto</th><th scope="col">Asesora comercial</th><th scope="col">Operario(a) de confección</th></tr>
            </thead>
            <tbody>
              {d.presentacionPersonal.map(([aspecto, asesora, operario]) => (
                <tr key={aspecto}><th scope="row">{aspecto}</th><td>{asesora}</td><td>{operario}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Seccion>

      <Seccion suave>
        <Titulo>Compromiso del colaborador</Titulo>
        <p><strong>Me comprometo a:</strong></p>
        <ListaCorazon items={d.compromiso} />
        <div className="botones" style={{ marginTop: 22 }}>
          <Link className="boton" to="/formato-dotacion">Ir a la planilla de entrega</Link>
        </div>
      </Seccion>

      <Seccion>
        <Titulo>Láminas del manual anterior</Titulo>
        <p className="entrada">Donde estas láminas no coinciden con lo que ves en esta página, manda lo que ves en esta página.</p>
        <ul className="galeria">
          {d.laminasAnteriores.map((titulo, i) => {
            const src = `/img/manual/lamina-${String(i + 1).padStart(2, '0')}.webp`
            return (
              <li key={titulo}>
                <VisorBoton className="" src={src} titulo={titulo} aria-label={`Ampliar lámina: ${titulo}`}>
                  <img src={src} alt="" loading="lazy" width="600" height="400" />
                </VisorBoton>
              </li>
            )
          })}
        </ul>
      </Seccion>
    </>
  )
}
