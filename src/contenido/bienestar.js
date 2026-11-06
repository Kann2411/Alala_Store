/*
  Plan anual de bienestar laboral y cronograma de inducción.
  Fuentes: Plan_de_Bienestar_Laboral_ALALA_STORE_final.pdf, Plan_de_Bienestar_ALALA_STORE_completado.xlsx
  y alala.docx (img 12).
*/

export const plan = {
  objetivoGeneral:
    'Contribuir al mejoramiento de la calidad de vida de los colaboradores, fortaleciendo su motivación, salud, desarrollo personal y desempeño laboral.',
  responsable: 'Gestión Humana, con apoyo de SST y administración.',
  dirigidoA: 'Todos los colaboradores. También contempla actividades de integración que podrán involucrar a sus familias.',
  periodicidad: 'Durante todo el año, según el cronograma establecido.',
  presupuesto: 'Por definir según recursos, cotizaciones y presupuesto anual.',
  elaborado: '5 de noviembre de 2026',
}

export const objetivosEspecificos = [
  'Promover hábitos saludables que permitan prevenir el cansancio físico y mental durante las actividades laborales.',
  'Fortalecer la motivación, la comunicación y el trabajo en equipo para mejorar el ambiente laboral y la atención al cliente.',
  'Fomentar el crecimiento personal, educativo y financiero de los colaboradores mediante actividades de formación y participación.',
]

export const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

const todos = 'Todos los colaboradores de Alalá Store'

/*
  Cada actividad: nombre, mes, objetivo, descripción, para quién y cómo participar.
  Al agregar o cambiar una, el calendario anual se actualiza solo.
*/
export const componentes = [
  {
    id: 'fisico',
    nombre: 'Físico',
    tono: '#c32c6f',
    objetivo: 'Promover el cuidado de la salud física de los colaboradores, especialmente por las actividades que implican permanecer de pie, caminar, organizar bolsos y manipular mercancía.',
    actividades: [
      { nombre: 'Pausas activas en la tienda', mes: 'Enero', objetivo: 'Disminuir la fatiga y prevenir molestias musculares.', descripcion: 'Realizar estiramientos de brazos, piernas, cuello y espalda durante pequeños espacios de descanso en la jornada laboral.', paraQuien: todos, comoParticipar: 'Ser colaborador de la empresa; participación durante los espacios programados.' },
      { nombre: 'Día de hábitos saludables', mes: 'Marzo', objetivo: 'Fomentar el autocuidado y la alimentación saludable.', descripcion: 'Organizar una jornada de hidratación, alimentación balanceada y recomendaciones para mantener hábitos saludables.', paraQuien: todos, comoParticipar: 'Ser colaborador de la empresa; asistir a la jornada.' },
      { nombre: 'Cuida tu postura', mes: 'Mayo', objetivo: 'Prevenir dolores y lesiones durante las actividades laborales.', descripcion: 'Realizar una capacitación sobre posturas adecuadas al organizar bolsos, levantar cajas, acomodar estanterías y permanecer de pie.', paraQuien: 'Todos los colaboradores, especialmente ventas y organización de mercancía', comoParticipar: 'Ser colaborador de la empresa y participar en la capacitación programada.' },
    ],
  },
  {
    id: 'mental',
    nombre: 'Mental',
    tono: '#5b3a8c',
    objetivo: 'Favorecer la salud mental de los colaboradores y brindar herramientas para manejar el estrés relacionado con las ventas, la atención al cliente y el cumplimiento de metas.',
    actividades: [
      { nombre: 'Respira y relájate', mes: 'Abril', objetivo: 'Disminuir el estrés durante la jornada laboral.', descripcion: 'Realizar ejercicios de respiración y relajación en espacios establecidos, especialmente en temporadas de mayor movimiento comercial.', paraQuien: todos, comoParticipar: 'Ser colaborador de la empresa; participar en los espacios establecidos.' },
      { nombre: 'Organiza tu tiempo', mes: 'Julio', objetivo: 'Mejorar la organización y planificación de las tareas.', descripcion: 'Desarrollar un taller sobre distribución de actividades, prioridades y manejo del tiempo en ventas, inventarios y atención al cliente.', paraQuien: todos, comoParticipar: 'Ser colaborador de la empresa y asistir al taller.' },
      { nombre: 'Espacios de escucha', mes: 'Octubre', objetivo: 'Promover el cuidado de la salud mental.', descripcion: 'Crear espacios de orientación donde los colaboradores puedan expresar sus preocupaciones laborales y recibir acompañamiento cuando lo necesiten.', paraQuien: todos, comoParticipar: 'Ser colaborador de la empresa; solicitar o aceptar voluntariamente el espacio de orientación.' },
    ],
  },
  {
    id: 'emocional',
    nombre: 'Emocional',
    tono: '#b3261e',
    objetivo: 'Fortalecer la autoestima, la inteligencia emocional y la capacidad de manejar situaciones difíciles con clientes y compañeros.',
    actividades: [
      { nombre: 'Aprende a manejar tus emociones', mes: 'Febrero', objetivo: 'Fortalecer el autocontrol y la empatía.', descripcion: 'Realizar talleres sobre inteligencia emocional y manejo de situaciones difíciles durante la atención al cliente.', paraQuien: 'Todos los colaboradores, especialmente personal de ventas y atención al cliente', comoParticipar: 'Ser colaborador de la empresa y asistir al taller.' },
      { nombre: 'Reconociendo tu esfuerzo', mes: 'Junio', objetivo: 'Aumentar la motivación y el sentido de pertenencia.', descripcion: 'Reconocer a los colaboradores por su compromiso, responsabilidad, buena atención al cliente y trabajo en equipo.', paraQuien: todos, comoParticipar: 'Ser colaborador de la empresa; reconocimiento según compromiso, responsabilidad, atención y trabajo en equipo.' },
      { nombre: 'Actitud positiva en el trabajo', mes: 'Septiembre', objetivo: 'Fortalecer la confianza y las relaciones interpersonales.', descripcion: 'Realizar dinámicas sobre comunicación asertiva, respeto, empatía y solución de conflictos.', paraQuien: todos, comoParticipar: 'Ser colaborador de la empresa y participar en la dinámica.' },
    ],
  },
  {
    id: 'financiero',
    nombre: 'Financiero',
    tono: '#1c6128',
    objetivo: 'Fortalecer los conocimientos financieros de los colaboradores para promover una mejor administración de sus ingresos y recursos económicos.',
    actividades: [
      { nombre: 'Aprende a manejar tu dinero', mes: 'Enero', objetivo: 'Enseñar a organizar los ingresos y gastos personales.', descripcion: 'Realizar un taller práctico sobre elaboración de presupuestos, control de gastos y planificación financiera.', paraQuien: todos, comoParticipar: 'Ser colaborador de la empresa y asistir al taller.' },
      { nombre: 'Reto del ahorro', mes: 'Abril', objetivo: 'Fomentar el hábito del ahorro.', descripcion: 'Motivar a los colaboradores a establecer metas de ahorro mensuales y compartir recomendaciones para alcanzarlas.', paraQuien: todos, comoParticipar: 'Participación voluntaria de los colaboradores interesados.' },
      { nombre: 'Finanzas inteligentes', mes: 'Agosto', objetivo: 'Promover el uso responsable del dinero y el crédito.', descripcion: 'Realizar una capacitación sobre manejo de deudas, tarjetas de crédito, intereses y compras responsables.', paraQuien: todos, comoParticipar: 'Ser colaborador de la empresa y asistir a la capacitación.' },
    ],
  },
  {
    id: 'educativo',
    nombre: 'Educativo',
    tono: '#17608f',
    objetivo: 'Fortalecer las habilidades y conocimientos de los colaboradores para mejorar su desempeño y crecimiento dentro de Alalá Store.',
    actividades: [
      { nombre: 'Aprende a vender mejor', mes: 'Febrero', objetivo: 'Fortalecer las habilidades comerciales y de atención al cliente.', descripcion: 'Capacitar al personal en técnicas de venta, comunicación, asesoría sobre bolsos y manejo de objeciones.', paraQuien: 'Personal de ventas y atención al cliente; abierta a los demás colaboradores', comoParticipar: 'Desempeñar funciones comerciales o de atención; los demás colaboradores podrán participar según programación.' },
      { nombre: 'Exhibición y organización de productos', mes: 'Junio', objetivo: 'Mejorar las habilidades de organización y presentación de mercancía.', descripcion: 'Realizar talleres sobre exhibición de bolsos, organización de vitrinas, rotación de productos y control de inventarios.', paraQuien: 'Personal de ventas y organización de mercancía e inventarios', comoParticipar: 'Desempeñar funciones relacionadas con exhibición, mercancía o inventarios.' },
      { nombre: 'Fortalecimiento de habilidades digitales', mes: 'Agosto', objetivo: 'Desarrollar competencias para apoyar los procesos comerciales.', descripcion: 'Capacitar a los colaboradores en herramientas digitales, redes sociales, fotografía de productos y atención de clientes por medios virtuales.', paraQuien: 'Todos los colaboradores que apoyan procesos comerciales', comoParticipar: 'Ser colaborador de la empresa; prioridad para quienes apoyan ventas y atención virtual.' },
    ],
  },
  {
    id: 'social',
    nombre: 'Social',
    tono: '#9a4a00',
    objetivo: 'Fortalecer la integración, el compañerismo y las relaciones positivas entre los colaboradores de Alalá Store.',
    actividades: [
      { nombre: 'Día de integración Alalá Store', mes: 'Mayo', objetivo: 'Fortalecer la unión y el trabajo en equipo.', descripcion: 'Organizar actividades recreativas, juegos y dinámicas para compartir fuera de las responsabilidades habituales de ventas.', paraQuien: todos, comoParticipar: 'Ser colaborador de la empresa; participación según programación.' },
      { nombre: 'Compartiendo en familia', mes: 'Septiembre', objetivo: 'Promover la integración entre la empresa y las familias de los colaboradores.', descripcion: 'Realizar una jornada especial con juegos, actividades recreativas y espacios de integración familiar.', paraQuien: 'Colaboradores y sus familias', comoParticipar: 'Colaborador de Alalá Store; inscripción o confirmación previa para organizar la jornada.' },
      { nombre: 'Alalá Store solidaria', mes: 'Noviembre', objetivo: 'Fomentar la solidaridad y el compromiso social.', descripcion: 'Organizar una campaña voluntaria de recolección de ropa, alimentos o útiles escolares para apoyar a personas que lo necesiten.', paraQuien: 'Todos los colaboradores de Alalá Store y comunidad beneficiaria', comoParticipar: 'Aporte o participación voluntaria.' },
    ],
  },
  {
    id: 'espiritual',
    nombre: 'Espiritual',
    tono: '#00696b',
    objetivo: 'Promover el crecimiento personal, la tranquilidad interior y los valores humanos, respetando las creencias de todos los colaboradores.',
    actividades: [
      { nombre: 'Construyendo mis sueños', mes: 'Marzo', objetivo: 'Motivar a los colaboradores a identificar sus propósitos y metas personales.', descripcion: 'Desarrollar una actividad en la que cada trabajador escriba sus sueños, metas y propósitos para el futuro.', paraQuien: todos, comoParticipar: 'Ser colaborador de la empresa; participación voluntaria.' },
      { nombre: 'Valores que nos unen', mes: 'Julio', objetivo: 'Fortalecer los valores personales y organizacionales.', descripcion: 'Realizar dinámicas sobre respeto, honestidad, solidaridad, responsabilidad y empatía.', paraQuien: todos, comoParticipar: 'Ser colaborador de la empresa y participar en la actividad.' },
      { nombre: 'Un momento para agradecer', mes: 'Diciembre', objetivo: 'Fomentar la gratitud y el pensamiento positivo.', descripcion: 'Realizar una actividad voluntaria donde los colaboradores puedan expresar aquello por lo que se sienten agradecidos en su vida personal y laboral.', paraQuien: todos, comoParticipar: 'Participación voluntaria, respetando las creencias de cada persona.' },
    ],
  },
]

export const seguimiento = [
  'Registro de asistencia a las actividades.',
  'Encuestas de satisfacción a los colaboradores.',
  'Evaluación del cumplimiento del cronograma.',
  'Recolección de opiniones y sugerencias.',
  'Identificación de oportunidades de mejora para el siguiente año.',
]

export const marcoNormativo = [
  'Decreto 614 de 1984: bases para la organización y administración de la salud ocupacional.',
  'Ley 100 de 1993: Sistema de Seguridad Social Integral.',
  'Decreto Ley 1567 de 1998: sistema de estímulos y programas de bienestar. Dirigido principalmente a entidades públicas; se incluye como referente académico y no como obligación específica de Alalá Store.',
  'Ley 1010 de 2006: medidas para prevenir y sancionar el acoso laboral.',
  'Resolución 2646 de 2008: disposiciones sobre factores de riesgo psicosocial.',
  'Decreto 1072 de 2015: reglamenta el sector trabajo y el SG-SST.',
  'Resolución 0312 de 2019: estándares mínimos del SG-SST.',
]

/* Cronograma de inducción específica: primera semana. El horario es igual todos los días. */
export const horasInduccion = [
  ['8:00 – 10:00 a. m.', '2 horas'],
  ['10:15 a. m. – 12:00 m.', '1 hora 45 min'],
  ['2:00 – 3:30 p. m.', '1 hora 30 min'],
]

export const semanaInduccion = [
  { dia: 'Lunes', tono: '#c40f46', temas: [
    ['Bienvenida y presentación al área de confección', ['Presentación del equipo de trabajo', 'Recorrido por el área de confección', 'Presentación de la empresa Alalá']],
    ['Presentación del cargo y funciones específicas', ['Funciones y responsabilidades', 'Metas y estándares de calidad', 'Flujo del proceso de confección']],
    ['Normas y políticas internas del área', ['Normas de convivencia y reglamento interno', 'Presentación del manual de seguridad', 'Políticas de calidad']],
  ] },
  { dia: 'Martes', tono: '#5b3a8c', temas: [
    ['Sistema de gestión SST en el área', ['Políticas de seguridad y salud en el trabajo', 'Responsabilidades en seguridad', 'Reporte de condiciones inseguras']],
    ['Riesgos y peligros en la confección', ['Identificación de peligros en el área', 'Uso correcto de elementos de protección (EPP)', 'Medidas de prevención y autocuidado']],
    ['Procedimientos de emergencia', ['Plan de emergencias y evacuación', 'Extintores y salidas de emergencia', 'Simulacro y puntos de encuentro']],
  ] },
  { dia: 'Miércoles', tono: '#2c7a3a', temas: [
    ['Conocimiento de máquinas y herramientas', ['Máquinas de confección (plana, fileteadora, collareta, recubridora, ojaladora, etc.)', 'Herramientas manuales y sus usos']],
    ['Materiales e insumos', ['Telas, forros, herrajes, hilos, cierres, avíos', 'Cuidado, almacenamiento y manejo']],
    ['Proceso de confección paso a paso', ['Explicación del proceso de elaboración de bolsos y accesorios', 'Secuencia de operaciones']],
  ] },
  { dia: 'Jueves', tono: '#17608f', temas: [
    ['Práctica guiada en máquina', ['Enhebrado, regulación y puntadas básicas', 'Costuras rectas, curvas y remates']],
    ['Elaboración de piezas simples', ['Confección de piezas básicas', 'Revisión y corrección']],
    ['Práctica aplicada', ['Ensamble de piezas', 'Revisión de calidad del trabajo']],
  ] },
  { dia: 'Viernes', tono: '#c32c6f', temas: [
    ['Evaluación de aprendizajes', ['Evaluación teórica y práctica', 'Retroalimentación individual']],
    ['Estándares de calidad en la confección', ['Criterios de calidad Alalá', 'Detalles que marcan la diferencia']],
    ['Cierre de inducción y compromiso', ['Resolución de dudas', 'Entrega de dotación (si aplica)', 'Firma de compromiso y bienvenida oficial']],
  ] },
]
