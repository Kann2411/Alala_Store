import { Link } from 'react-router'
import { BotonEvaluacion, VisorBoton } from '../componentes/interaccion.jsx'
import { Confirmar, Datos, ListaCorazon, ListaPasos, Portada, Recuerda, Seccion, Tarjetas, Titulo } from '../componentes/piezas.jsx'
import { afiliaciones, ambiente, contrato, comoPromovemos, loQueNosRepresenta, mision, nosMueve, sst, vision } from '../contenido/empresa.js'

export default function InduccionGeneral() {
  return (
    <>
      <Portada
        etiqueta="Para todo el equipo"
        titulo="Inducción"
        destacado="general"
        imagen={{ src: '/img/presentacion/bienvenida.webp', alt: 'Colaboradora de Alalá Store sonriendo, con polo blanco y carné', ancho: 825, alto: 848 }}
      >
        <p className="entrada">
          <strong>¡Bienvenido(a) a Alalá Store!</strong> Nos alegra que hagas parte de nuestro equipo. Aquí encontrarás información esencial para tu integración, seguridad y desarrollo dentro de nuestra empresa.
        </p>
        <p className="entrada"><strong>Juntos crecemos, aprendemos y brillamos.</strong></p>
        <div className="botones">
          <a className="boton" href="#video">Empezar</a>
          <a className="boton boton-sec" href="#evaluacion">Ir a la evaluación</a>
        </div>
      </Portada>

      <Seccion suave id="video">
        <Titulo>Conoce Alalá Store</Titulo>
        <video className="video" controls preload="none" poster="/video/poster.webp" width="800" height="368">
          <source src="/video/presentacion.mp4" type="video/mp4" />
          Tu navegador no puede reproducir este video.
        </video>
      </Seccion>

      <Seccion>
        <Titulo>Nuestra empresa</Titulo>
        <Tarjetas className="rejilla rejilla-2" items={[['Misión', mision], ['Visión', vision]]} />
        <div className="botones" style={{ marginTop: 16 }}>
          <Link className="boton boton-sec" to="/quienes-somos">Ver objetivos, cultura y valores</Link>
        </div>
      </Seccion>

      <Seccion suave>
        <div className="duo">
          <div>
            <Titulo>Un ambiente donde todos pueden brillar</Titulo>
            <p className="entrada">Nuestro clima organizacional busca generar un espacio:</p>
            <Datos items={ambiente} />
          </div>
          <img className="panel-foto" src="/img/presentacion/bolsos-ambiente.webp" alt="Bolsos rosados con la frase Somos un gran equipo" width="655" height="580" loading="lazy" />
        </div>
        <h3 style={{ marginTop: 24 }}>¿Cómo lo promovemos?</h3>
        <ListaCorazon items={comoPromovemos} style={{ marginTop: 10 }} />
      </Seccion>

      <Seccion>
        <Titulo>Lo que nos representa</Titulo>
        <p className="entrada">En Alalá Store trabajamos con valores que nos guían en cada paso y nos ayudan a construir la empresa que soñamos.</p>
        <Tarjetas items={loQueNosRepresenta} />
        <Recuerda titulo="Más que un trabajo, somos un gran equipo." />
      </Seccion>

      <Seccion suave>
        <div className="duo">
          <div>
            <Titulo>Nos mueve un mismo propósito</Titulo>
            <p className="entrada">En Alalá Store no solo diseñamos y vendemos bolsos y accesorios, también construimos un lugar donde las personas pueden crecer, ser ellas mismas y dejar huella.</p>
          </div>
          <img className="panel-foto" src="/img/presentacion/bolsos-proposito.webp" alt="Bolso crema, bolso acolchado rosado y termo de Alalá Store" width="480" height="455" loading="lazy" />
        </div>
        <div style={{ marginTop: 16 }}>
          <Tarjetas items={nosMueve} />
        </div>
        <Recuerda titulo="¡Que los sueños también se lleven en los bolsos!" />
      </Seccion>

      <Seccion>
        <div className="duo">
          <div>
            <Titulo>Tu contrato</Titulo>
            <p className="entrada">{contrato.definicion}</p>
          </div>
          <img className="panel-foto" src="/img/dotacion/personas/contrato.webp" alt="Tabla con un contrato de trabajo firmado y un bolígrafo" width="587" height="510" loading="lazy" />
        </div>
        <div className="rejilla rejilla-2" style={{ marginTop: 16 }}>
          <article className="tarjeta">
            <h3 style={{ marginBottom: 10 }}>¿Qué incluye?</h3>
            <ListaCorazon items={contrato.incluye} />
          </article>
          <article className="tarjeta">
            <h3 style={{ marginBottom: 10 }}>Tu contrato te brinda</h3>
            <ListaCorazon items={contrato.brinda} />
          </article>
        </div>
        <Recuerda titulo="Recuerda:">{contrato.recuerda}</Recuerda>
        <p style={{ margin: '12px 0 0' }}>
          <VisorBoton src="/img/dotacion/laminas/03.webp" titulo="Contrato">Ver lámina completa</VisorBoton>
        </p>
      </Seccion>

      <Seccion suave>
        <div className="duo">
          <div>
            <Titulo>Seguridad y Salud en el Trabajo</Titulo>
            <p className="entrada">En Alalá Store nos preocupamos por el bienestar de nuestro equipo. Por eso, contamos con un Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST), que nos permite prevenir riesgos, cuidar la salud y crear un ambiente laboral seguro y saludable para todos.</p>
          </div>
          <img className="icono-grande" src="/img/presentacion/casco.webp" alt="Dibujo de un casco de seguridad con un corazón" width="300" height="210" loading="lazy" />
        </div>
        <div style={{ marginTop: 16 }}>
          <Tarjetas className="rejilla rejilla-2" items={sst} />
        </div>
        <Recuerda titulo="¡Tu seguridad también es parte de nuestro éxito!">¡Prevenir también es cuidar!</Recuerda>
      </Seccion>

      <Seccion>
        <div className="duo">
          <div>
            <Titulo extra={<Confirmar />}>Afiliaciones y protección del colaborador</Titulo>
            <p className="entrada">Tu bienestar también es parte de nuestro éxito. Juntos construimos un mejor lugar para trabajar.</p>
          </div>
          <img className="panel-foto" src="/img/presentacion/afiliaciones.webp" alt="Casco rosado, cuaderno con la frase Tu futuro también importa y alcancía" width="576" height="560" loading="lazy" />
        </div>
        <div className="rejilla rejilla-2" style={{ marginTop: 16 }}>
          {afiliaciones.map((a) => (
            <article className="tarjeta" key={a.titulo}>
              <img className="icono-tarjeta" src={a.icono} alt="" width={a.ancho} height={a.alto} loading="lazy" />
              <h3>{a.titulo}</h3>
              <p>{a.texto}</p>
              <h4 className="subtitulo">Pasos de afiliación</h4>
              <ListaPasos items={a.pasos} />
            </article>
          ))}
        </div>
      </Seccion>

      <Seccion suave>
        <div className="evaluacion-bloque">
          <div>
            <h2>Tu presentación también cuenta</h2>
            <p>Revisa los códigos de vestuario y la dotación de tu cargo.</p>
          </div>
          <Link className="boton boton-sec" to="/dotacion">Ver manual de dotación</Link>
        </div>
      </Seccion>

      <Seccion id="evaluacion">
        <div className="evaluacion-bloque">
          <div>
            <h2>Evaluación de inducción general</h2>
            <p>Cuando termines la inducción, presenta la evaluación en la app externa.</p>
          </div>
          <BotonEvaluacion cual="induccionGeneral" />
        </div>
      </Seccion>
    </>
  )
}
