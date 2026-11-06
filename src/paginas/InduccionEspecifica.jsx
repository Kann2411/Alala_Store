import { Link } from 'react-router'
import { IndiceLateral, VisorBoton } from '../componentes/interaccion.jsx'
import { Confirmar, Datos, ListaCorazon, Portada, Recuerda } from '../componentes/piezas.jsx'
import * as c from '../contenido/induccion.js'

/* Bloque de un tema, con su título numerado y, si tiene, una foto a la derecha. */
function Tema({ id, numero, titulo, entrada, foto, children }) {
  return (
    <section className="bloque" id={id}>
      <div className={foto ? 'bloque-cabeza con-foto' : 'bloque-cabeza'}>
        <div>
          <h2 className="titulo-num">
            <b>{numero}.</b> {titulo}
          </h2>
          {entrada && <p className="entrada" style={{ marginTop: 12 }}>{entrada}</p>}
        </div>
        {foto && <img src={foto.src} alt={foto.alt} width={foto.ancho} height={foto.alto} loading="lazy" />}
      </div>
      {children}
    </section>
  )
}

/* Rejilla de tarjetas con imagen, título y texto. */
function TarjetasFoto({ carpeta, items, className = 'rejilla rejilla-fotos' }) {
  return (
    <div className={className}>
      {items.map(([img, titulo, texto, ancho, alto]) => (
        <article className="tarjeta tarjeta-foto" key={img}>
          <img src={`/img/${carpeta}/${img}.webp`} alt="" width={ancho} height={alto} loading="lazy" />
          <h3>{titulo}</h3>
          <p>{texto}</p>
        </article>
      ))}
    </div>
  )
}

export default function InduccionEspecifica() {
  return (
    <>
      <Portada
        etiqueta="Cargo: Operaria de confección"
        titulo="Inducción"
        destacado="específica"
        imagen={{ src: '/img/fotos/operaria.webp', alt: 'Operaria de Alalá Store cosiendo una tela rosada en una máquina plana', ancho: 585, alto: 885 }}
      >
        <p className="entrada">
          Bienvenida al equipo Alalá. Esta inducción te ayudará a conocer tu cargo, los procesos de confección, los riesgos y las medidas de seguridad para trabajar de forma segura y con calidad.
        </p>
        <div className="botones">
          <a className="boton" href="#objetivo">Empezar</a>
          <VisorBoton className="boton boton-sec" src="/img/laminas/lamina-02.webp" titulo="Agenda de inducción: Operaria de confección">
            Ver agenda completa
          </VisorBoton>
        </div>
      </Portada>

      <div className="contenedor con-indice">
        <IndiceLateral items={c.temas} etiqueta="Temas de la inducción" />

        <div>
          <Tema id="objetivo" numero="02" titulo="Objetivo">
            <p className="entrada">{c.objetivo}</p>
            <h3>Objetivos específicos</h3>
            <ListaCorazon items={c.objetivosEspecificos} style={{ marginTop: 10 }} />
          </Tema>

          <section className="bloque" id="funciones">
            <div className="bloque-cabeza con-foto">
              <div>
                <h2 className="titulo-num"><b>03.</b> Funciones del cargo</h2>
                <ListaCorazon items={c.funciones} style={{ marginTop: 16 }} />
              </div>
              <img src="/img/fotos/bolsos.webp" alt="Morral y bolso de mano confeccionados" width="420" height="420" loading="lazy" />
            </div>
          </section>

          <section className="bloque" id="cargo">
            <div className="bloque-cabeza con-foto">
              <div>
                <h2 className="titulo-num"><b>04.</b> Información del cargo</h2>
                <Datos
                  style={{ margin: '14px 0 0' }}
                  items={c.infoCargo.map(([dato, valor, confirmar]) => [dato, confirmar ? <>{valor} <Confirmar /></> : valor])}
                />
              </div>
              <img src="/img/fotos/bolso.webp" alt="Bolso de mano magenta con broche dorado" width="305" height="320" loading="lazy" />
            </div>
            <p><strong>Propósito del cargo:</strong> {c.proposito}</p>
            <p style={{ margin: 0 }}><strong>Competencias:</strong> {c.competencias}</p>
          </section>

          <Tema id="elementos" numero="05" titulo="Elementos de producción" entrada="Estos son los principales elementos y materiales que utilizamos en el área de confección.">
            <TarjetasFoto carpeta="elementos" items={c.elementos} />
            <Recuerda titulo="Regla de oro:">
              utilizar cada elemento únicamente para la función para la cual fue diseñado. Todos los elementos deben ser usados correctamente, mantenidos en buen estado y ubicados en su lugar después de cada jornada.
            </Recuerda>
          </Tema>

          <Tema
            id="riesgos"
            numero="06"
            titulo="Riesgos y peligros"
            entrada="En el área de confección existen riesgos que pueden afectar tu salud y seguridad. Es importante identificarlos y prevenirlos."
            foto={{ src: '/img/fotos/maquina.webp', alt: 'Máquina de coser con tela, hilos y tijeras', ancho: 585, alto: 412 }}
          >
            <TarjetasFoto carpeta="riesgos" items={c.riesgos} className="rejilla rejilla-4" />
            <Recuerda titulo="Medidas de prevención:">
              usa correctamente las máquinas y herramientas, mantén el área limpia y ordenada, no retires protecciones, realiza pausas activas y reporta cualquier condición insegura.
            </Recuerda>
          </Tema>

          <Tema
            id="epp"
            numero="07"
            titulo="Elementos de protección personal"
            entrada={<>Usar correctamente los elementos de protección personal es fundamental para tu seguridad. Son tu mejor protección. <Confirmar>Lista por confirmar</Confirmar></>}
            foto={{ src: '/img/fotos/operaria-2.webp', alt: 'Operaria cosiendo con su delantal de Alalá Store', ancho: 527, alto: 474 }}
          >
            <TarjetasFoto carpeta="epp" items={c.epp} className="rejilla rejilla-4" />
            <Recuerda titulo="Medidas de prevención:">
              usa tus EPP de forma correcta, verifica su estado antes de iniciar la jornada, límpialos después de usarlos y guárdalos en el lugar asignado. El cabello debe permanecer recogido. No uses accesorios que puedan engancharse en las máquinas.
            </Recuerda>
          </Tema>

          <Tema id="situaciones" numero="08" titulo="¿Qué hacer en caso de alguna situación?">
            <div className="rejilla rejilla-2" style={{ marginTop: 18 }}>
              {c.situaciones.map((s) => (
                <article className="tarjeta situacion" style={{ '--tono': s.tono }} key={s.id}>
                  <img src={`/img/situaciones/${s.id}.webp`} alt="" width={s.ancho} height={s.alto} loading="lazy" />
                  <h3>{s.titulo}</h3>
                  <ul>
                    {s.pasos.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </article>
              ))}
            </div>
            <Recuerda titulo="RECUERDA:">tu seguridad y la de tus compañeras es lo más importante.</Recuerda>
          </Tema>

          <Tema
            id="normas"
            numero="09"
            titulo="Normas de seguridad en el área de confección"
            entrada="Cumplir con las normas de seguridad protege tu vida, la de tus compañeras y la calidad de nuestro trabajo."
            foto={{ src: '/img/fotos/operaria-3.webp', alt: 'Operaria cosiendo en el área de confección', ancho: 529, alto: 473 }}
          >
            <div className="rejilla rejilla-2">
              {c.normas.map(([titulo, texto, revisar], i) => (
                <article className="tarjeta norma" key={titulo}>
                  <img src={`/img/normas/norma-${String(i + 1).padStart(2, '0')}.webp`} alt="" width="112" height="112" loading="lazy" />
                  <div>
                    <h3>{i + 1}. {titulo}</h3>
                    <p>{texto} {revisar && <Confirmar>Redacción por revisar</Confirmar>}</p>
                  </div>
                </article>
              ))}
            </div>
            <Recuerda titulo="RECUERDA:">la seguridad es responsabilidad de todas. Juntas creamos un ambiente seguro y productivo.</Recuerda>
          </Tema>

          <Tema
            id="procedimientos"
            numero="10"
            titulo="Procedimientos de trabajo seguro"
            entrada="Seguir los procedimientos de trabajo seguro nos ayuda a prevenir accidentes, proteger nuestra salud y garantizar la calidad de nuestros productos."
            foto={{ src: '/img/fotos/operaria-4.webp', alt: 'Operaria trabajando en la máquina de coser', ancho: 519, alto: 454 }}
          >
            <ol className="proceso">
              {c.procedimientos.map(([titulo, pasos]) => (
                <li className="tarjeta" key={titulo}>
                  <h3>{titulo}</h3>
                  <ul>{pasos.map((p) => <li key={p}>{p}</li>)}</ul>
                </li>
              ))}
            </ol>
            <Recuerda titulo="RECUERDA:">
              tu seguridad es tu responsabilidad. Cumplir los procedimientos es proteger tu vida y la de tus compañeras. Si tienes dudas, pregunta siempre a tu jefe o supervisora. No te confíes, los accidentes pueden ocurrir en cualquier momento.
            </Recuerda>
          </Tema>

          <section className="bloque" id="calidad">
            <div className="bloque-cabeza con-foto">
              <div>
                <h2 className="titulo-num"><b>11.</b> Valores y calidad en la confección</h2>
                <p className="entrada" style={{ marginTop: 12 }}>Cada detalle cuenta. Nos aseguramos de que nuestros productos cumplan con los más altos estándares.</p>
                <Link className="enlace-lamina" to="/quienes-somos">Ver todos nuestros valores</Link>
              </div>
              <img src="/img/fotos/operaria-5.webp" alt="Operaria revisando una costura" width="519" height="453" loading="lazy" />
            </div>
            <div className="rejilla rejilla-2">
              <article className="tarjeta">
                <h3>Calidad en la confección</h3>
                <ListaCorazon items={c.calidadConfeccion} style={{ marginTop: 10 }} />
              </article>
              <article className="tarjeta">
                <h3>Revisión de calidad</h3>
                <ListaCorazon items={c.revisionCalidad} style={{ marginTop: 10 }} />
              </article>
            </div>
            <Recuerda titulo="RECUERDA:">nuestros valores se reflejan en la calidad de nuestro trabajo y en la satisfacción de quienes confían en nosotros.</Recuerda>
          </section>

          <section className="bloque" id="agenda">
            <h2 className="titulo">Agenda del día de inducción <Confirmar /></h2>
            <p style={{ marginTop: 10 }}>
              Los documentos traen dos versiones: esta agenda de un día y un <Link to="/bienestar#induccion">cronograma de una semana</Link>.
            </p>
            <ol className="agenda">
              {c.agenda.map(([hora, tema]) => (
                <li key={hora}>
                  <time>{hora}</time>
                  <span>{tema}</span>
                </li>
              ))}
            </ol>
            <Recuerda titulo="¡Bienvenida al equipo Alalá!">Cada puntada cuenta, cada detalle hace la diferencia.</Recuerda>
          </section>
        </div>
      </div>
    </>
  )
}
