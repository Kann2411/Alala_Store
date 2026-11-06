import { Confirmar, Datos, ListaCorazon, Portada, Recuerda, Seccion, Temporal, Titulo } from '../componentes/piezas.jsx'
import { areas, cultura, mision, objetivos, proposito, queHacemos, valores, vision } from '../contenido/empresa.js'

export default function QuienesSomos() {
  return (
    <>
      <Portada
        etiqueta="Bolsos y accesorios"
        titulo="Quiénes"
        destacado="somos"
        imagen={{ src: '/img/presentacion/bolsos-quienes.webp', alt: 'Bolso magenta con bolsos y accesorios rosados de Alalá Store', ancho: 775, alto: 550 }}
      >
        <p className="entrada">{queHacemos}</p>
      </Portada>

      <Seccion>
        <Recuerda titulo="Nuestro propósito:">{proposito}</Recuerda>
        <div style={{ marginTop: 18 }}>
          <Temporal titulo="Nuestra historia">Aquí irá la historia de la empresa.</Temporal>
        </div>
      </Seccion>

      <Seccion suave>
        <div className="duo">
          <div>
            <Titulo>Nuestra misión</Titulo>
            <blockquote className="cita">{mision}</blockquote>
            <p className="palabras">Calidad · Creatividad · Servicio · Compromiso</p>
          </div>
          <img className="panel-foto" src="/img/presentacion/bolsos-mision.webp" alt="Bolso rosado grande, bolso acolchado magenta y cartera rosada" width="635" height="715" loading="lazy" />
        </div>
      </Seccion>

      <Seccion>
        <div className="duo duo-inversa">
          <img className="panel-foto" src="/img/presentacion/bolsos-vision.webp" alt="Bolso rosado, morral crema y bolso acolchado" width="780" height="725" loading="lazy" />
          <div>
            <Titulo>Nuestra visión</Titulo>
            <blockquote className="cita">{vision}</blockquote>
            <p className="palabras">Crecer juntos para llegar cada vez más lejos.</p>
          </div>
        </div>
      </Seccion>

      <Seccion suave>
        <div className="duo">
          <div>
            <Titulo>Nuestros objetivos</Titulo>
            <Datos items={objetivos} />
          </div>
          <img className="panel-foto" src="/img/presentacion/bolsos-objetivos.webp" alt="Bolsos rosados y magenta con la frase Grandes metas, mejores juntas" width="745" height="760" loading="lazy" />
        </div>
      </Seccion>

      <Seccion>
        <div className="duo duo-inversa">
          <img className="panel-foto" src="/img/presentacion/bolsos-cultura.webp" alt="Bolso crema, morral rosado y bolso acolchado con la frase Personas que inspiran, marcas que crecen" width="640" height="740" loading="lazy" />
          <div>
            <Titulo>Nuestra cultura</Titulo>
            <p className="entrada">En Alalá Store promovemos una cultura basada en:</p>
            <Datos items={cultura} />
          </div>
        </div>
      </Seccion>

      <Seccion suave>
        <Titulo extra={<Confirmar>Lista por confirmar</Confirmar>}>Nuestros valores</Titulo>
        <p className="entrada">Nuestros valores nos guían cada día y se reflejan en la calidad de cada producto que confeccionamos.</p>
        <div className="rejilla rejilla-fotos">
          {valores.map(([icono, nombre, texto]) => (
            <article className="tarjeta valor" key={icono}>
              <img src={`/img/valores/${icono}.webp`} alt="" width="104" height="100" loading="lazy" />
              <h3>{nombre}</h3>
              <p>{texto}</p>
            </article>
          ))}
        </div>
      </Seccion>

      <Seccion>
        <Titulo>Nuestras áreas</Titulo>
        <ListaCorazon items={areas} />
      </Seccion>
    </>
  )
}
