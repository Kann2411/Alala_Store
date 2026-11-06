import { useCallback, useEffect, useRef, useState } from 'react'
import { AvisoContexto, VisorContexto } from './contextos.js'

/* Muestra un aviso abajo de la pantalla durante 4 segundos. */
export function AvisoProveedor({ children }) {
  const [texto, setTexto] = useState('')
  const [visible, setVisible] = useState(false)
  const temporizador = useRef()

  const avisar = useCallback((nuevo) => {
    setTexto(nuevo)
    setVisible(true)
    clearTimeout(temporizador.current)
    temporizador.current = setTimeout(() => setVisible(false), 4000)
  }, [])

  useEffect(() => () => clearTimeout(temporizador.current), [])

  return (
    <AvisoContexto.Provider value={avisar}>
      {children}
      <div className={visible ? 'aviso visible' : 'aviso'} role="status">
        {texto}
      </div>
    </AvisoContexto.Provider>
  )
}

/* Ventana para ver una imagen en grande. */
export function VisorProveedor({ children }) {
  const dialogo = useRef(null)
  const [imagen, setImagen] = useState({ src: '', titulo: '' })

  const abrir = useCallback((src, titulo = '') => {
    setImagen({ src, titulo })
    dialogo.current?.showModal()
  }, [])

  const cerrar = () => dialogo.current?.close()

  return (
    <VisorContexto.Provider value={abrir}>
      {children}
      <dialog
        className="visor"
        ref={dialogo}
        onClick={(e) => {
          if (e.target === dialogo.current) cerrar()
        }}
      >
        <button className="visor-cerrar" type="button" onClick={cerrar}>
          Cerrar
        </button>
        {imagen.src && <img src={imagen.src} alt={imagen.titulo} />}
        <p className="visor-pie">{imagen.titulo}</p>
      </dialog>
    </VisorContexto.Provider>
  )
}
