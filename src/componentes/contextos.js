import { createContext, useContext } from 'react'

/* Aviso flotante (por ejemplo, "este botón aún no tiene link"). */
export const AvisoContexto = createContext(() => {})
export const useAviso = () => useContext(AvisoContexto)

/* Visor de imágenes ampliadas. */
export const VisorContexto = createContext(() => {})
export const useVisor = () => useContext(VisorContexto)
