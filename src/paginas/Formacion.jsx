import { Portada, Recuerda, Seccion, Temporal } from '../componentes/piezas.jsx'

export default function Formacion() {
  return (
    <>
      <Portada
        etiqueta="Aprender cada día"
        titulo="Modelo de"
        destacado="formación empresarial"
        imagen={{ src: '/img/fotos/maquina.webp', alt: 'Máquina de coser con hilos, tela, cinta métrica y tijeras', ancho: 585, alto: 412 }}
      />

      <Seccion>
        <Temporal titulo="Modelo de formación">Aquí irá el modelo de formación de la empresa.</Temporal>
        <Recuerda titulo="Participa en las capacitaciones.">Tu aprendizaje constante fortalece nuestra seguridad y calidad.</Recuerda>
      </Seccion>
    </>
  )
}
