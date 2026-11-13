/*
  Datos que se cambian sin tocar los componentes.
  Cuando lleguen los links de las evaluaciones, se pegan aquí y los botones empiezan a funcionar.
*/
export const evaluaciones = {
  induccionGeneral: 'https://pdf-to-quiz.com/s/bTWboSXq', // Quiz en Quizify
  desempeno: '', // Pendiente: link de la app de evaluación de desempeño
}

/* Secciones del menú principal. La ruta del formato de dotación existe, pero no sale en el menú. */
export const menu = [
  { titulo: 'Quiénes somos', ruta: '/quienes-somos' },
  { titulo: 'Inducción general', ruta: '/induccion-general' },
  { titulo: 'Inducción específica', ruta: '/induccion-especifica' },
  { titulo: 'Manual de dotación', ruta: '/dotacion' },
  { titulo: 'Bienestar', ruta: '/bienestar' },
  { titulo: 'Desempeño', ruta: '/evaluacion-desempeno' },
  { titulo: 'Formación', ruta: '/formacion' },
]
