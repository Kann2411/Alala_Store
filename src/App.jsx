import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './componentes/Layout.jsx'
import Bienestar from './paginas/Bienestar.jsx'
import Dotacion from './paginas/Dotacion.jsx'
import EvaluacionDesempeno from './paginas/EvaluacionDesempeno.jsx'
import Formacion from './paginas/Formacion.jsx'
import FormatoDotacion from './paginas/FormatoDotacion.jsx'
import InduccionEspecifica from './paginas/InduccionEspecifica.jsx'
import InduccionGeneral from './paginas/InduccionGeneral.jsx'
import Inicio from './paginas/Inicio.jsx'
import NoEncontrada from './paginas/NoEncontrada.jsx'
import QuienesSomos from './paginas/QuienesSomos.jsx'

/* Cada página tiene su propia dirección. El título se muestra en la pestaña del navegador. */
const paginas = [
  { path: '/', Componente: Inicio, titulo: 'Alalá Store' },
  { path: '/quienes-somos', Componente: QuienesSomos, titulo: 'Quiénes somos' },
  { path: '/induccion-general', Componente: InduccionGeneral, titulo: 'Inducción general' },
  { path: '/induccion-especifica', Componente: InduccionEspecifica, titulo: 'Inducción específica: Operaria de confección' },
  { path: '/dotacion', Componente: Dotacion, titulo: 'Manual de dotación' },
  { path: '/formato-dotacion', Componente: FormatoDotacion, titulo: 'Formato de entrega de dotación' },
  { path: '/bienestar', Componente: Bienestar, titulo: 'Plan de bienestar y cronogramas' },
  { path: '/evaluacion-desempeno', Componente: EvaluacionDesempeno, titulo: 'Evaluación de desempeño' },
  { path: '/formacion', Componente: Formacion, titulo: 'Modelo de formación empresarial' },
  { path: '*', Componente: NoEncontrada, titulo: 'Página no encontrada' },
]

const router = createBrowserRouter([
  {
    Component: Layout,
    children: paginas.map(({ path, Componente, titulo }) => ({
      path,
      element: (
        <>
          <title>{path === '/' ? titulo : `${titulo} · Alalá Store`}</title>
          <Componente />
        </>
      ),
    })),
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
