/* Inducción específica: Operaria de confección. Fuente: alala.docx (img 1 a 10). */

export const temas = [
  { id: 'objetivo', titulo: 'Objetivo' },
  { id: 'funciones', titulo: 'Funciones del cargo' },
  { id: 'cargo', titulo: 'Información del cargo' },
  { id: 'elementos', titulo: 'Elementos de producción' },
  { id: 'riesgos', titulo: 'Riesgos y peligros' },
  { id: 'epp', titulo: 'Protección personal' },
  { id: 'situaciones', titulo: 'Qué hacer si ocurre algo' },
  { id: 'normas', titulo: 'Normas de seguridad' },
  { id: 'procedimientos', titulo: 'Trabajo seguro' },
  { id: 'calidad', titulo: 'Valores y calidad' },
  { id: 'agenda', titulo: 'Agenda del día' },
]

export const objetivo =
  'Preparar a la operaria de confección para desempeñar sus funciones de manera segura, eficiente y con calidad, cumpliendo los estándares de la empresa Alalá Store.'

export const objetivosEspecificos = [
  'Reconocer las funciones del cargo.',
  'Identificar máquinas, herramientas y elementos de producción.',
  'Reconocer los peligros y riesgos del área.',
  'Aplicar las normas de seguridad.',
  'Ejecutar correctamente el procedimiento de trabajo.',
  'Promover la calidad y el trabajo en equipo.',
]

export const funciones = [
  'Confeccionar bolsos y accesorios siguiendo las instrucciones.',
  'Operar máquinas de confección de forma segura.',
  'Revisar la calidad de las costuras, acabados y herrajes.',
  'Cumplir con las metas de producción.',
  'Mantener el puesto de trabajo limpio y organizado.',
  'Reportar daños, fallas o situaciones de riesgo.',
]

/* [dato, valor, ¿por confirmar?] */
export const infoCargo = [
  ['Cargo', 'Operaria de confección', false],
  ['Área', 'Confección', true],
  ['Jefe inmediato', 'Supervisor(a) de producción', true],
  ['Horario', 'Según programación', false],
  ['Lugar de trabajo', 'Área de confección – Alalá Store', false],
]

export const proposito =
  'Participar en la elaboración de los productos de Alalá Store mediante el manejo adecuado de máquinas, herramientas y materiales, garantizando seguridad, productividad y calidad.'

export const competencias =
  'Responsabilidad, atención al detalle, organización, trabajo en equipo, disciplina y compromiso con la calidad.'

/* [imagen, nombre, descripción, ancho, alto] — imágenes en public/img/elementos */
export const elementos = [
  ['maquina-plana', 'Máquina plana', 'Para costuras generales.', 175, 170],
  ['fileteadora', 'Fileteadora', 'Para acabados y refilados.', 170, 170],
  ['hilos', 'Hilos', 'En diferentes colores y calibres.', 175, 170],
  ['agujas', 'Agujas', 'Para distintos tipos de tela y costura.', 175, 170],
  ['tijeras', 'Tijeras', 'Para corte de telas e hilos.', 175, 170],
  ['telas', 'Telas y forros', 'Materiales principales para la confección.', 175, 165],
  ['cierres', 'Cierres', 'De diferentes tipos y tamaños.', 175, 165],
  ['herrajes', 'Herrajes', 'Argollas, hebillas, remaches, etc.', 175, 165],
  ['marquillas', 'Marquillas', 'Identidad y marca de nuestros productos.', 175, 165],
  ['otros', 'Otros materiales', 'Elásticos, sesgos, pegantes, etc.', 175, 165],
]

export const riesgos = [
  ['cortes', 'Cortes con tijeras, agujas o herrajes', 'Por manipulación inadecuada de herramientas.', 155, 142],
  ['atrapamiento', 'Atrapamiento en máquinas', 'Por contacto con partes móviles de los equipos.', 150, 142],
  ['pinchazos', 'Pinchazos con agujas', 'Al manipular agujas o materiales.', 150, 142],
  ['electrico', 'Riesgo eléctrico', 'Por uso inadecuado de equipos eléctricos.', 150, 142],
  ['repetitivos', 'Movimientos repetitivos', 'Por posturas prolongadas o movimientos constantes.', 155, 132],
  ['fatiga', 'Fatiga visual y postural', 'Por esfuerzo visual y malas posturas al trabajar.', 150, 132],
  ['caidas', 'Caídas al mismo nivel', 'Por pisos sucios, obstáculos o cables en el área.', 150, 132],
  ['ruido', 'Ruido excesivo', 'Por el uso continuo de máquinas de confección.', 150, 132],
]

export const epp = [
  ['uniforme', 'Bata o uniforme', 'Protege tu ropa y mantiene la imagen institucional.', 175, 176],
  ['tapabocas', 'Tapabocas', 'Previene la inhalación de polvo, pelusas o partículas.', 166, 155],
  ['dedal', 'Dedal (cuando aplique)', 'Protege los dedos al realizar costuras a mano.', 135, 150],
  ['gafas', 'Gafas de seguridad', 'Protegen los ojos de partículas y salpicaduras.', 180, 100],
  ['auditivo', 'Protector auditivo', 'Disminuye el impacto del ruido de las máquinas.', 155, 163],
  ['calzado', 'Calzado cerrado antideslizante', 'Protege tus pies de golpes, caídas de objetos y resbalones.', 210, 133],
  ['guantes', 'Guantes anticorte (cuando aplique)', 'Protegen las manos al manipular materiales o herramientas.', 175, 137],
]

export const situaciones = [
  {
    id: 'accidente',
    titulo: 'Accidente',
    tono: '#c40f12',
    ancho: 115,
    alto: 118,
    pasos: [
      'Detén la actividad.',
      'Informa de inmediato a tu jefe o supervisor.',
      'Solicita primeros auxilios.',
      'Reporta el accidente en el formato correspondiente.',
      'No muevas a la persona lesionada a menos que sea estrictamente necesario.',
    ],
  },
  {
    id: 'incendio',
    titulo: 'Incendio',
    tono: '#c9500c',
    ancho: 95,
    alto: 120,
    pasos: [
      'Mantén la calma.',
      'Usa el extintor si sabes cómo hacerlo y el incendio es pequeño.',
      'Si el fuego se propaga, activa la alarma.',
      'Conoce las salidas y rutas de evacuación.',
      'Sigue las indicaciones del personal autorizado.',
      'No regreses por objetos personales.',
    ],
  },
  {
    id: 'emergencia',
    titulo: 'Emergencia',
    tono: '#157a39',
    ancho: 116,
    alto: 118,
    pasos: [
      'Conoce las salidas y rutas de evacuación.',
      'Sigue las instrucciones del personal de emergencias.',
      'Dirígete al punto de encuentro.',
      'Mantén el orden y evita correr.',
      'Ayuda a personas que lo necesiten.',
      'Permanece en el punto de encuentro hasta nueva orden.',
    ],
  },
  {
    id: 'insegura',
    titulo: 'Condición insegura',
    tono: '#0d66ad',
    ancho: 122,
    alto: 113,
    pasos: [
      'No la ignores.',
      'Repórtala de inmediato a tu jefe o supervisor.',
      'Si es posible, corrige la condición insegura sin ponerte en riesgo.',
      'Ayuda a prevenir accidentes.',
      'Mantén el área de trabajo limpia y organizada.',
    ],
  },
]

/* [título, descripción, ¿redacción por revisar?] — ícono en public/img/normas/norma-NN.webp */
export const normas = [
  ['Usa tu uniforme correctamente', 'Usa el uniforme completo y limpio en todo momento.'],
  ['Usa tus EPP', 'Utiliza correctamente los elementos de protección personal asignados.'],
  ['Conoce y usa correctamente las máquinas', 'Opera solo las máquinas para las que has sido capacitada.'],
  ['Repórtalo todo', 'Informa de inmediato cualquier condición insegura o daño en equipos y herramientas.'],
  ['No tomes atajos', 'Sigue siempre los procedimientos establecidos. No te arriesgues.'],
  ['Mantén el área ordenada', 'Un lugar limpio y organizado previene accidentes y mejora nuestro trabajo.'],
  ['No consumas alimentos ni bebidas en el área', 'Evita derrames, manchas y atraes plagas al área de confección.', true],
  ['Deposita los residuos en su lugar', 'Separa y desecha los residuos en los contenedores correspondientes.'],
  ['Respeta a tus compañeras y sigue las indicaciones', 'El trabajo en equipo y la comunicación son clave para un ambiente seguro.'],
  ['Participa en las capacitaciones', 'Tu aprendizaje constante fortalece nuestra seguridad y calidad.'],
]

export const procedimientos = [
  ['Prepara tu área de trabajo', ['Verifica que tu área esté limpia y ordenada.', 'Revisa que la máquina y herramientas estén en buen estado.', 'Ten los materiales necesarios al alcance y en su lugar.']],
  ['Revisa antes de iniciar', ['Revisa la máquina (ver agujas, hilo, aceite, conexiones).', 'Asegúrate de tener los EPP puestos correctamente.', 'Reporta cualquier falla o condición insegura.']],
  ['Durante el trabajo', ['Mantén las manos lejos de las partes en movimiento.', 'No distraigas tu atención.', 'Sigue las instrucciones del proceso.', 'No realices ajustes con la máquina encendida.']],
  ['Manejo de materiales y herramientas', ['Usa las herramientas solo para lo que fueron diseñadas.', 'Manipula las tijeras, agujas y cuchillas con precaución.', 'Guarda los materiales y herramientas después de usarlos.']],
  ['Al finalizar la jornada', ['Apaga la máquina y desconéctala.', 'Limpia tu área de trabajo y elimina residuos.', 'Deja todo en orden para la siguiente jornada.']],
]

export const calidadConfeccion = [
  'Materiales de excelente calidad.',
  'Costuras firmes y bien terminadas.',
  'Revisión en cada etapa del proceso.',
  'Acabados perfectos y detallados.',
  'Productos duraderos que superan expectativas.',
]

export const revisionCalidad = [
  'Revisar costuras y acabados.',
  'Verificar medidas.',
  'Evitar hilos sueltos.',
  'Revisar manchas o daños.',
  'Cumplir especificaciones del producto.',
  'Informar productos que no cumplan los estándares.',
]

export const agenda = [
  ['8:00 – 8:20 a. m.', 'Bienvenida e introducción'],
  ['8:20 – 8:50 a. m.', 'Objetivos'],
  ['8:50 – 9:30 a. m.', 'Funciones del cargo'],
  ['9:30 – 10:00 a. m.', 'Información del cargo'],
  ['10:15 – 11:00 a. m.', 'Elementos de producción'],
  ['11:00 – 11:45 a. m.', 'Riesgos y peligros'],
  ['11:45 a. m. – 12:15 p. m.', 'Elementos de protección personal'],
  ['12:15 – 1:00 p. m.', 'Almuerzo: tiempo de descanso y alimentación'],
  ['1:00 – 1:30 p. m.', '¿Qué hacer en caso de emergencia?'],
  ['1:30 – 2:15 p. m.', 'Normas de seguridad en el área de confección'],
  ['2:15 – 3:15 p. m.', 'Procedimiento de trabajo seguro'],
  ['3:15 – 4:00 p. m.', 'Valores y calidad'],
  ['4:00 – 4:30 p. m.', 'Cierre: resolución de dudas, retroalimentación, verificación de conocimientos y compromiso con la seguridad y calidad'],
]
