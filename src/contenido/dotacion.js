/*
  Manual de dotación.
  Versión oficial: las láminas de "Ultima info" (llegaron el 10 de noviembre de 2026).
  Láminas completas en public/img/dotacion/laminas/NN.webp y recortes en public/img/dotacion/.
  Lo que esas láminas no cubren sale de la presentación (cajero) y del manual de 24 láminas
  (domicilios, cuidados, especificaciones, tallas, presentación personal y compromiso),
  sin mostrar las láminas anteriores.
*/

/* Ruta de una lámina nueva o de un recorte */
export const lamina = (n) => `/img/dotacion/laminas/${n}.webp`
export const recorte = (ruta) => `/img/dotacion/${ruta}.webp`

/* Lámina 01 */
export const introduccion =
  'En Alalá creemos en la imagen como parte de nuestra identidad, por eso te entregamos esta guía con las prendas y su uso adecuado para que representes nuestra marca con orgullo y profesionalismo.'

/* Láminas 04 y 06 */
export const queEs =
  'La dotación es el conjunto de prendas y elementos que la empresa entrega para que desempeñes tu trabajo de forma cómoda, segura y profesional.'

export const tipos = ['Uniforme de trabajo.', 'Calzado adecuado.', 'Accesorios (según el cargo).', 'Elementos de protección (si aplica).']

/* Láminas 01 y 05 */
export const objetivoYAlcance = [
  ['Objetivo del manual', 'Garantizar una imagen corporativa uniforme y profesional, promoviendo el sentido de pertenencia en el equipo.'],
  ['Objetivo de la dotación', 'Garantizar que todos los colaboradores cuenten con la dotación adecuada, para desempeñar sus funciones con comodidad, seguridad y sentido de pertenencia en Alalá.'],
  ['Alcance', 'Aplica para todos los cargos de la empresa, incluyendo personal administrativo, operativo y de ventas.'],
  ['¿Quiénes reciben la dotación?', 'Todo el personal de Alalá Store (según el cargo y área).'],
]

export const funciones = [
  'Brindar una imagen profesional y alineada con la marca.',
  'Proporcionar comodidad y protección en el entorno laboral.',
  'Fomentar el sentido de pertenencia con Alalá.',
  'Cumplir con las normas de seguridad y calidad de la empresa.',
]

export const importante = [
  'Usa la dotación según el cargo y las indicaciones.',
  'Cuídala y mantenla limpia en buen estado.',
  'Reporta cualquier daño o necesidad de reemplazo.',
]

/* Lámina 01, más la única recomendación de la lámina 06 que no repite ninguna */
export const recomendaciones = [
  'Usa siempre el uniforme completo y en buen estado.',
  'Mantén tu ropa limpia y ordenada.',
  'Mantén el calzado limpio y adecuado para el área.',
  'Cuida la imagen personal: presentación impecable (cabello recogido, uñas limpias).',
  'Sigue las normas de seguridad y uso de EPP (si aplica).',
  'Cuida y conserva la dotación, es parte de nuestra empresa.',
]

/* Láminas 04 y 06: [recorte, área, prendas] */
export const prendasPorArea = [
  ['confeccion', 'Área de Confección', 'Polo, jean y delantal'],
  ['ventas', 'Área de Ventas', 'Chaleco, blusa y jean'],
  ['administrativa', 'Área Administrativa', 'Blusa y pantalón'],
  ['almacen', 'Área de Almacén', 'Polo y jean'],
  ['proteccion', 'Elementos de protección', 'Calzado, gafas y guantes'],
]

/* Lámina 08 */
export const vestuario = {
  intro: 'En Alalá cuidamos nuestra imagen porque reflejamos profesionalismo, orden y sentido de pertenencia.',
  comoDebeSer: [
    'Usa el uniforme de la empresa.',
    'Mantén tu ropa limpia y en buen estado.',
    'Lleva el cabello recogido o bien peinado.',
    'Usa calzado cerrado y cómodo.',
    'Evita accesorios exagerados.',
    'Mantén una imagen ordenada y profesional.',
  ],
  imagenAdecuada: ['Uniforme Alalá.', 'Jean clásico o pantalón de tela.', 'Zapatos cerrados y cómodos.', 'Cabello limpio y recogido.'],
  evita: [
    ['no-crop', 'Crop tops o blusas cortas'],
    ['no-rota', 'Ropa rota o muy ajustada'],
    ['no-sandalias', 'Sandalias o chanclas'],
    ['no-gorra', 'Gorras en el área de trabajo'],
    ['no-accesorios', 'Accesorios exagerados'],
  ],
}

/*
  Cargos. Los que tienen lámina nueva traen la lista de prendas con su recorte.
  Cajero(a) no tiene lámina nueva: sigue con la presentación (uso correcto e incorrecto).
*/
export const noUsarCajero = [
  'No usar camiseta sucia o con manchas.',
  'No usar calzado roto, desgastado o con la suela despegada.',
  'No usar calzado de otras marcas o sin el logo Alalá Store.',
  'No usar sandalias, chanclas, crocs o calzado abierto.',
  'No usar tacones, plataformas o calzado no adecuado para nuestras actividades.',
]

export const cargos = [
  {
    id: 'com',
    titulo: 'Asesor(a) comercial',
    lamina: '09',
    lema: 'Dotación del área comercial.',
    prendas: [
      ['asesor/camisa', 'Camisa blanca con logo Alalá'],
      ['asesor/jean', 'Jean azul oscuro clásico'],
      ['asesor/zapatos', 'Zapatos negros cerrados'],
      ['asesor/carne', 'Carné de identificación'],
      ['asesor/accesorios', 'Accesorios discretos'],
    ],
    foto: { src: recorte('personas/asesores'), alt: 'Asesora y asesor comercial con camisa blanca, jean azul oscuro, zapatos negros y carné', ancho: 542, alto: 1110 },
  },
  {
    id: 'caj',
    titulo: 'Cajero(a)',
    intro:
      'Como cajero(a), tu presentación refleja orden, confianza y servicio en Alalá Store. Sigue estas indicaciones para brindar la mejor experiencia a nuestros clientes.',
    correcto: ['Camisa blanca con logo Alalá Store.', 'Carné visible siempre.', 'Jean azul oscuro de corte clásico.', 'Cinturón negro o café.', 'Zapatos cerrados negros antideslizantes.', 'Porta carnet y nombre visible.'],
    foto: { src: '/img/presentacion/cajeros.webp', alt: 'Cajera y cajero con camisa blanca y carné detrás de la caja de Alalá Store', ancho: 585, alto: 830 },
    recuerda: 'tu actitud y presentación transmiten la esencia de Alalá Store: cercanía, confianza y alegría en cada atención.',
    importante: 'el uso inadecuado de tu imagen puede afectar la percepción de nuestra marca y la experiencia de nuestros clientes.',
  },
  {
    id: 'dom',
    titulo: 'Domiciliario(a)',
    lamina: '10',
    lema: 'Dotación del área de domicilios.',
    prendas: [
      ['domiciliario/gorra', 'Gorra negra con logo Alalá'],
      ['domiciliario/chaqueta', 'Chaqueta negra impermeable'],
      ['domiciliario/camiseta', 'Camiseta blanca con logo'],
      ['domiciliario/jean', 'Jean azul oscuro resistente'],
      ['domiciliario/zapatos', 'Zapatos negros antideslizantes'],
      ['domiciliario/maletin', 'Maletín o bolsa de entrega con logo'],
    ],
    foto: { src: recorte('personas/domiciliarios'), alt: 'Domiciliaria y domiciliario con gorra y chaqueta negras, jean y bolsa de entrega de Alalá', ancho: 629, alto: 1000 },
  },
  {
    id: 'con',
    titulo: 'Operario(a) de confección',
    lamina: '11',
    intro: 'Confecciona nuestros productos con calidad y dedicación.',
    prendas: [
      ['operaria/camisa', 'Camisa blanca con logo Alalá'],
      ['operaria/jean', 'Jean azul oscuro (clásico)'],
      ['operaria/delantal', 'Delantal de confección'],
      ['operaria/zapatos', 'Zapatos cerrados y cómodos'],
      ['operaria/red', 'Red o malla para el cabello'],
      ['operaria/guantes', 'Guantes (según el proceso)'],
    ],
    recuerda: 'Tu uniforme refleja tu compromiso y la calidad de nuestro trabajo.',
    foto: { src: recorte('personas/operaria'), alt: 'Operaria de confección con camisa blanca y delantal azul oscuro de Alalá', ancho: 462, alto: 1240 },
  },
  {
    id: 'ser',
    titulo: 'Servicios generales',
    lamina: '17',
    prendas: [
      ['servicios/gorra', 'Gorra'],
      ['servicios/polo', 'Camiseta o polo'],
      ['servicios/chaqueta', 'Chaqueta impermeable'],
      ['servicios/pantalon', 'Pantalón tipo cargo'],
      ['servicios/zapatos', 'Zapatos cerrados y cómodos'],
      ['servicios/cinturon', 'Cinturón (según necesidad)'],
      ['servicios/guantes', 'Guantes (de trabajo)'],
      ['servicios/casco', 'Casco (opcional)'],
      ['servicios/alcohol', 'Alcohol en gel'],
    ],
    recuerda: 'Usa siempre los elementos de dotación para tu seguridad y la de todos.',
    foto: { src: recorte('personas/servicios'), alt: 'Colaboradora de servicios generales con gorra, polo blanco, carné y pantalón cargo azul oscuro', ancho: 317, alto: 1095 },
  },
  {
    id: 'mat',
    titulo: 'Maternidad',
    lamina: '18',
    prendas: [
      ['maternidad/polo', 'Camiseta tipo polo mujeres con logo'],
      ['maternidad/pantalon', 'Pantalón materno cómodo y elástico'],
      ['maternidad/chaqueta', 'Chaqueta liviana materna'],
      ['maternidad/zapatos', 'Zapatos de lactancia (deportivos)'],
    ],
    lema: 'Recuerda: por tu comodidad y bienestar.',
    recuerda: 'La dotación de maternidad te brinda comodidad y te acompaña en esta etapa tan especial.',
    foto: { src: recorte('personas/maternidad'), alt: 'Colaboradora embarazada con polo blanco de Alalá y pantalón azul oscuro', ancho: 480, alto: 940 },
  },
]

/*
  Elementos de protección por área (láminas 13 a 16).
  Domicilios no tiene lámina nueva: sale del manual de 24 láminas, sin fotos.
*/
export const proteccion = [
  {
    id: 'adm',
    titulo: 'Administrativa',
    lamina: '13',
    items: [
      ['epp-admin/guantes', 'Guantes anticorte'],
      ['epp-admin/dedal', 'Dedal protector'],
      ['epp-admin/gafas', 'Gafas de seguridad'],
      ['epp-admin/tapabocas', 'Tapabocas (opcional)'],
      ['epp-admin/alcohol', 'Alcohol en gel'],
      ['epp-admin/botella', 'Botella personal'],
    ],
    recuerda: 'Usa los elementos de protección según la actividad y mantén tu área de trabajo segura.',
  },
  {
    id: 'cnf',
    titulo: 'Confección',
    lamina: '14',
    intro: 'En el área de confección debes usar los siguientes elementos de protección personal:',
    items: [
      ['epp-confeccion/gafas', 'Gafas de seguridad'],
      ['epp-confeccion/guantes', 'Guantes anticorte'],
      ['epp-confeccion/red', 'Red o malla para el cabello'],
      ['epp-confeccion/tapabocas', 'Tapabocas (opcional)'],
      ['epp-confeccion/mascarilla', 'Mascarilla (opcional)'],
      ['epp-confeccion/delantal', 'Delantal de confección'],
      ['epp-confeccion/dedal', 'Dedal (protector de dedos)'],
      ['epp-confeccion/zapatos', 'Zapatos cerrados y cómodos'],
      ['epp-confeccion/chaleco', 'Chaleco reflectivo (según actividad)'],
    ],
    recuerda: 'Usa siempre los elementos de protección para tu seguridad y la de todos.',
  },
  {
    id: 'log',
    titulo: 'Logística y despacho',
    lamina: '15',
    items: [
      ['epp-logistica/gorra', 'Gorra'],
      ['epp-logistica/chaleco', 'Chaleco reflectivo'],
      ['epp-logistica/gafas', 'Gafas de seguridad'],
      ['epp-logistica/guantes', 'Guantes anticorte'],
      ['epp-logistica/tapabocas', 'Tapabocas (opcional)'],
      ['epp-logistica/auditivo', 'Protector auditivo'],
      ['epp-logistica/zapatos', 'Zapatos de seguridad'],
      ['epp-logistica/casco', 'Casco (opcional)'],
      ['epp-logistica/chaqueta', 'Chaqueta impermeable'],
      ['epp-logistica/pantalon', 'Pantalón tipo cargo'],
      ['epp-logistica/cinturon', 'Cinturón (según necesidad)'],
      ['epp-logistica/alcohol', 'Alcohol en gel'],
    ],
    recuerda: 'Usa siempre los elementos de protección para un trabajo seguro y saludable.',
  },
  {
    id: 'sgr',
    titulo: 'Servicios generales',
    lamina: '16',
    items: [
      ['epp-servicios/guantes', 'Guantes (riesgos generales)'],
      ['epp-servicios/gafas', 'Gafas de seguridad'],
      ['epp-servicios/red', 'Red o malla para el cabello'],
      ['epp-servicios/tapabocas', 'Tapabocas (opcional)'],
      ['epp-servicios/delantal', 'Delantal (opcional)'],
      ['epp-servicios/casco', 'Casco (opcional)'],
      ['epp-servicios/zapatos', 'Zapatos cerrados y cómodos'],
      ['epp-servicios/chaleco', 'Chaleco reflectivo (según actividad)'],
      ['epp-servicios/alcohol', 'Alcohol en gel'],
    ],
    recuerda: 'Usa siempre los elementos de dotación para realizar tus labores de manera segura.',
  },
  {
    id: 'dmc',
    titulo: 'Domicilios',
    anterior: ['Casco certificado.', 'Guantes de agarre.', 'Impermeable.', 'Calzado antideslizante.'],
    recuerda: 'Protección obligatoria para rutas y condiciones climáticas.',
  },
]

export const cuidados = ['Lava tu uniforme con colores similares.', 'Usa detergentes suaves.', 'No uses blanqueador.', 'Seca a la sombra.', 'Plancha a temperatura media.']

/*
  [área, camiseta, pantalón, calzado, ¿tela por confirmar?]
  Prendas y calzado actualizados con las láminas nuevas; las telas siguen siendo del manual anterior.
*/
export const especificaciones = [
  ['Administrativa', 'Poliéster 65 %, algodón 35 %', 'Jean azul oscuro corte clásico', 'Tenis negro cómodo'],
  ['Asesor(a) comercial', 'Poliéster 65 %, algodón 35 %', 'Jean azul oscuro clásico', 'Zapatos negros cerrados'],
  ['Confección', 'Poliéster 65 %, algodón 35 %', 'Jean azul oscuro (clásico)', 'Zapatos cerrados y cómodos'],
  ['Servicios generales', 'Poliéster 65 %, algodón 35 %', 'Pantalón tipo cargo', 'Zapatos cerrados y cómodos'],
  ['Domiciliario(a)', 'Camiseta blanca con logo; chaqueta negra impermeable en poliéster 100 %', 'Jean azul oscuro resistente', 'Zapatos negros antideslizantes'],
]

export const comoMedirte = [
  ['Busto', 'Mide la parte más amplia.'],
  ['Cintura', 'Mide la parte más estrecha.'],
  ['Cadera', 'Mide la parte más amplia.'],
]

export const presentacionPersonal = [
  ['Cabello', 'Organizado, limpio y arreglado', 'Totalmente recogido y limpio. No se permiten accesorios en el cabello'],
  ['Uñas', 'Cortas o moderadas, colores neutros o pastel', 'Cortas o moderadas'],
  ['Maquillaje', 'Natural', '—'],
  ['Perfume', 'Sutil', '—'],
  ['Accesorios', 'Discretos (aretes pequeños, reloj, pulsera delgada)', 'No usar anillos, pulseras, collares ni aretes'],
]

export const compromiso = [
  'Usar mi dotación completa y adecuadamente.',
  'Mantenerla limpia, en buen estado y cuidada.',
  'Utilizar los elementos de protección personal según corresponda.',
  'Seguir las recomendaciones de este manual.',
  'Representar con orgullo a Alalá Store.',
]

/* Láminas nuevas del manual (la 03, Contrato, está en Inducción general) */
export const laminas = [
  ['01', 'Manual de dotación'],
  ['04', 'Introducción a la dotación'],
  ['05', 'Objetivo y alcance'],
  ['06', 'Dotación y presentación'],
  ['07', 'Nuestros valores'],
  ['08', 'Código de vestuario'],
  ['09', 'Asesor(a) comercial'],
  ['10', 'Domiciliario(a)'],
  ['11', 'Operario(a) de confección'],
  ['13', 'Protección: administrativa'],
  ['14', 'Protección: confección'],
  ['15', 'Protección: logística y despacho'],
  ['16', 'Protección: servicios generales'],
  ['17', 'Dotación: servicios generales'],
  ['18', 'Dotación de maternidad'],
]

/* Planilla de entrega */
export const entregas = [
  ['1', 'Enero – Marzo'],
  ['2', 'Abril – Junio'],
  ['3', 'Julio – Septiembre'],
  ['4', 'Octubre – Diciembre'],
]

export const camposPlanilla = [
  ['nombre', 'Nombre del colaborador(a)', 'text'],
  ['cargo', 'Cargo', 'text'],
  ['cedula', 'Cédula', 'text'],
  ['area', 'Área', 'text'],
  ['fecha', 'Fecha de entrega', 'date'],
  ['responsable', 'Responsable de entrega', 'text'],
  ['sede', 'Sede', 'text'],
  ['tipo', 'Tipo de entrega', 'text'],
]
