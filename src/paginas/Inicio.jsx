import { Link } from 'react-router'
import { Separador } from '../componentes/piezas.jsx'

/* estado: 'listo', 'parcial' o 'falta' — cambia el color de la etiqueta */
const accesos = [
  { ruta: '/quienes-somos', titulo: 'Quiénes somos', texto: 'Historia, misión, visión, objetivos, cultura y valores.', estado: 'listo', etiqueta: 'Con contenido' },
  { ruta: '/induccion-general', titulo: 'Inducción general', texto: 'Lo que toda persona debe conocer al llegar, con su evaluación.', estado: 'parcial', etiqueta: 'Falta el link de evaluación' },
  { ruta: '/induccion-especifica', titulo: 'Inducción específica', texto: 'Funciones, riesgos y normas de cada cargo.', estado: 'listo', etiqueta: 'Con contenido' },
  { ruta: '/dotacion', titulo: 'Manual de dotación', texto: 'Uniformes, protección y cuidados por cargo.', estado: 'listo', etiqueta: 'Con contenido' },
  { ruta: '/formato-dotacion', titulo: 'Formato de dotación', texto: 'Planilla de las 4 entregas del año.', estado: 'listo', etiqueta: 'Con contenido' },
  { ruta: '/bienestar', titulo: 'Bienestar y cronogramas', texto: 'Plan anual con 21 actividades y cronograma de inducción.', estado: 'listo', etiqueta: 'Con contenido' },
  { ruta: '/evaluacion-desempeno', titulo: 'Evaluación de desempeño', texto: 'Acceso a la app de evaluación.', estado: 'falta', etiqueta: 'Falta contenido' },
  { ruta: '/formacion', titulo: 'Formación empresarial', texto: 'Cómo aprendemos y crecemos: las cinco etapas del modelo.', estado: 'listo', etiqueta: 'Con contenido' },
]

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

      <section className="seccion">
        <div className="contenedor">
          <h2 className="titulo">¿Qué falta?</h2>
          <Separador />
          <ul className="accesos">
            {accesos.map((a, i) => (
              <li key={a.ruta}>
                <Link className="acceso" to={a.ruta}>
                  <b>{i + 1}</b>
                  <h3>{a.titulo}</h3>
                  <p>{a.texto}</p>
                  <span className={`estado estado-${a.estado}`}>{a.etiqueta}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
