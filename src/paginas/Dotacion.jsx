import { Link } from 'react-router'
import { Pestanas, VisorBoton } from '../componentes/interaccion.jsx'
import { Confirmar, Datos, ListaCorazon, Portada, Recuerda, Seccion, Temporal, Titulo } from '../componentes/piezas.jsx'
import * as d from '../contenido/dotacion.js'

/* Rejilla de prendas o elementos, cada uno con su foto recortada de la lámina. */
function Elementos({ items, className = 'elementos' }) {
  return (
    <ul className={className}>
      {items.map(([img, texto]) => (
        <li key={img}>
          <img src={d.recorte(img)} alt="" loading="lazy" />
          <span>{texto}</span>
        </li>
      ))}
    </ul>
  )
}

/* Enlace que abre la lámina original en el visor. */
function VerLamina({ n, titulo, texto = 'Ver lámina completa' }) {
  return (
    <VisorBoton src={d.lamina(n)} titulo={titulo}>
      {texto}
    </VisorBoton>
  )
}

/* Cajero(a): no tiene lámina nueva, sigue con el formato de la presentación. */
function CargoPresentacion({ cargo }) {
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
          <ul className="uso-no">
            {d.noUsarCajero.map((texto, i) => (
              <li key={texto}>
                <img src={`/img/presentacion/no-${i + 1}.webp`} alt="" width="140" height="140" loading="lazy" />
                <span>{texto}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Recuerda titulo="Recuerda:">{cargo.recuerda}</Recuerda>
      <Recuerda titulo="Importante:">{cargo.importante}</Recuerda>
    </>
  )
}

/* Cargos con lámina nueva: prendas con foto, persona y enlace a la lámina. */
function CargoLamina({ cargo }) {
  return (
    <>
      <div>
        {cargo.intro && <p className="entrada">{cargo.intro}</p>}
        <Elementos items={cargo.prendas} />
        {cargo.lema && <p style={{ margin: '16px 0 0' }}><strong>{cargo.lema}</strong></p>}
        {cargo.recuerda && <Recuerda titulo="Recuerda:">{cargo.recuerda}</Recuerda>}
        <p style={{ margin: '12px 0 0' }}><VerLamina n={cargo.lamina} titulo={cargo.titulo} /></p>
      </div>
      <img className="foto-persona" src={cargo.foto.src} alt={cargo.foto.alt} width={cargo.foto.ancho} height={cargo.foto.alto} loading="lazy" />
    </>
  )
}

function Proteccion({ area }) {
  if (area.anterior) {
    return (
      <>
        <p className="entrada">
          Esta área no tiene lámina nueva. Estos elementos son del manual anterior. <Confirmar>Por confirmar</Confirmar>
        </p>
        <ListaCorazon items={area.anterior} />
        <Recuerda titulo="Importante:">{area.recuerda}</Recuerda>
      </>
    )
  }
  return (
    <>
      {area.intro && <p className="entrada">{area.intro}</p>}
      <Elementos items={area.items} />
      <Recuerda titulo="Recuerda:">{area.recuerda}</Recuerda>
      <p style={{ margin: '12px 0 0' }}><VerLamina n={area.lamina} titulo={`Elementos de protección: ${area.titulo}`} /></p>
    </>
  )
}

export default function Dotacion() {
  const pestanasCargos = d.cargos.map((cargo) => ({
    id: cargo.id,
    titulo: cargo.titulo,
    panelClassName: cargo.prendas ? 'tarjeta cargo-lamina' : 'tarjeta cargo',
    contenido: cargo.prendas ? <CargoLamina cargo={cargo} /> : <CargoPresentacion cargo={cargo} />,
  }))

  const pestanasProteccion = d.proteccion.map((area) => ({
    id: `epp-${area.id}`,
    titulo: area.titulo,
    panelClassName: 'tarjeta',
    contenido: <Proteccion area={area} />,
  }))

  return (
    <>
      <Portada
        etiqueta="Para todos los colaboradores"
        titulo="Manual de"
        destacado="dotación"
        imagen={{ src: d.recorte('personas/equipo'), alt: 'Cinco colaboradores de Alalá con polo blanco con logo, jean azul y tenis blancos', ancho: 640, alto: 607 }}
      >
        <p className="entrada">{d.introduccion}</p>
        <p className="entrada"><strong>Juntos vestimos la esencia de Alalá.</strong></p>
        <div className="botones">
          <a className="boton" href="#cargos">Ver la dotación de mi cargo</a>
          <VisorBoton className="boton boton-sec" src={d.lamina('01')} titulo="Manual de dotación">
            Ver lámina del manual
          </VisorBoton>
        </div>
      </Portada>

      <Seccion>
        <div className="duo">
          <div>
            <Titulo>¿Qué es la dotación?</Titulo>
            <p className="entrada">{d.queEs}</p>
            <h3 style={{ margin: '18px 0 10px' }}>Tipos de dotación</h3>
            <ListaCorazon items={d.tipos} />
          </div>
          <img className="panel-foto" src={d.recorte('personas/grupo-objetivo')} alt="Cinco colaboradores sonrientes con polo blanco de Alalá y jean azul" width="640" height="480" loading="lazy" />
        </div>
        <Recuerda titulo="Recuerda:">
          usa siempre tu dotación completa, manténla en buen estado y cuídala, porque es parte de tu trabajo y tu seguridad.
        </Recuerda>
        <p style={{ margin: '12px 0 0' }}><VerLamina n="04" titulo="Introducción a la dotación" /></p>
      </Seccion>

      <Seccion suave>
        <Titulo>Objetivo y alcance</Titulo>
        <Datos items={d.objetivoYAlcance} />
        <div className="rejilla rejilla-2" style={{ marginTop: 24 }}>
          <article className="tarjeta">
            <h3 style={{ marginBottom: 10 }}>Funciones de la dotación</h3>
            <ListaCorazon items={d.funciones} />
          </article>
          <article className="tarjeta">
            <h3 style={{ marginBottom: 10 }}>Importante</h3>
            <ListaCorazon items={d.importante} />
          </article>
        </div>
        <p style={{ margin: '18px 0 0' }}><strong>Tu imagen también hace parte de nuestro equipo.</strong></p>
        <p style={{ margin: '4px 0 0' }}><VerLamina n="05" titulo="Objetivo y alcance" /></p>
      </Seccion>

      <Seccion>
        <Titulo>Prendas por área</Titulo>
        <div className="rejilla rejilla-fotos">
          {d.prendasPorArea.map(([img, area, prendas]) => (
            <article className="tarjeta tarjeta-foto" key={img}>
              <img src={d.recorte(`areas/${img}`)} alt="" loading="lazy" />
              <h3>{area}</h3>
              <p>{prendas}</p>
            </article>
          ))}
        </div>
        <h3 style={{ margin: '28px 0 10px' }}>Recomendaciones</h3>
        <ListaCorazon items={d.recomendaciones} />
        <Recuerda titulo="Recuerda:">
          tu presentación y el uso adecuado de la dotación reflejan tu compromiso con Alalá.
        </Recuerda>
        <p style={{ margin: '12px 0 0' }}><VerLamina n="06" titulo="Dotación y presentación" /></p>
      </Seccion>

      <Seccion suave>
        <div className="duo">
          <div>
            <Titulo>Código de vestuario</Titulo>
            <p className="entrada">{d.vestuario.intro}</p>
            <h3 className="uso-titulo uso-ok" style={{ marginTop: 18 }}>¿Cómo debe ser?</h3>
            <ListaCorazon items={d.vestuario.comoDebeSer} />
          </div>
          <img className="panel-foto" src={d.recorte('personas/vestuario')} alt="Tres colaboradoras con polo blanco de Alalá, jean azul y cabello bien peinado" width="599" height="518" loading="lazy" />
        </div>
        <div className="vestuario-rejilla">
          <article className="tarjeta imagen-adecuada">
            <img src={d.recorte('vestuario/adecuada')} alt="Polo blanco de Alalá, jean azul y zapatos blancos cerrados" width="200" height="295" loading="lazy" />
            <div>
              <h3 className="uso-titulo uso-ok">Imagen adecuada</h3>
              <ListaCorazon items={d.vestuario.imagenAdecuada} />
            </div>
          </article>
          <div>
            <h3 className="uso-titulo uso-mal">Evita esto</h3>
            <Elementos items={d.vestuario.evita.map(([img, texto]) => [`vestuario/${img}`, texto])} className="elementos elementos-no" />
          </div>
        </div>
        <Recuerda titulo="Recuerda:">tu imagen también habla de nuestra empresa. ¡Viste con orgullo Alalá!</Recuerda>
        <p style={{ margin: '12px 0 0' }}><VerLamina n="08" titulo="Código de vestuario" /></p>
      </Seccion>

      <Seccion id="cargos">
        <Titulo>Dotación por cargo</Titulo>
        <Pestanas items={pestanasCargos} etiqueta="Cargos" />
      </Seccion>

      <Seccion suave>
        <Titulo>Elementos de protección por área</Titulo>
        <Pestanas items={pestanasProteccion} etiqueta="Áreas" />
      </Seccion>

      <Seccion>
        <Titulo>Cuidados del uniforme</Titulo>
        <ListaCorazon items={d.cuidados} />
        <p style={{ margin: '14px 0 0' }}>El buen cuidado del uniforme prolonga su vida útil y mantiene nuestra imagen impecable.</p>
      </Seccion>

      <Seccion suave>
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

      <Seccion>
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

      <Seccion suave>
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

      <Seccion>
        <Titulo>Compromiso del colaborador</Titulo>
        <p><strong>Me comprometo a:</strong></p>
        <ListaCorazon items={d.compromiso} />
        <div className="botones" style={{ marginTop: 22 }}>
          <Link className="boton" to="/formato-dotacion">Ir a la planilla de entrega</Link>
        </div>
      </Seccion>

      <Seccion suave>
        <Titulo>Láminas del manual</Titulo>
        <ul className="galeria galeria-vertical">
          {d.laminas.map(([n, titulo]) => (
            <li key={n}>
              <VisorBoton className="" src={d.lamina(n)} titulo={titulo} aria-label={`Ampliar lámina: ${titulo}`}>
                <img src={d.lamina(n)} alt="" loading="lazy" width="1000" height="1094" />
              </VisorBoton>
            </li>
          ))}
        </ul>
        <details className="anteriores">
          <summary>Ver las láminas del manual anterior</summary>
          <p>Donde estas láminas no coinciden con lo que ves en esta página, manda lo que ves en esta página.</p>
          <ul className="galeria">
            {d.laminasAnteriores.map((titulo, i) => {
              const src = `/img/manual/lamina-${String(i + 1).padStart(2, '0')}.webp`
              return (
                <li key={titulo}>
                  <VisorBoton className="" src={src} titulo={titulo} aria-label={`Ampliar lámina anterior: ${titulo}`}>
                    <img src={src} alt="" loading="lazy" width="600" height="400" />
                  </VisorBoton>
                </li>
              )
            })}
          </ul>
        </details>
      </Seccion>
    </>
  )
}
