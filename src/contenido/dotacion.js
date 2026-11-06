/*
  Manual de dotación.
  Versión oficial: la presentación (ppt 15 a 19). Donde no la cubre, se usa el manual de 24 láminas.
*/

export const objetivos = [
  'Unificar la imagen corporativa de Alalá Store.',
  'Garantizar el uso correcto y adecuado de la dotación.',
  'Promover la seguridad y el autocuidado en el entorno laboral.',
  'Fortalecer el sentido de pertenencia y el orgullo por nuestra marca.',
]

export const alcance =
  'todos los colaboradores vinculados a Alalá Store, sin importar su tipo de contrato, cargo o área de trabajo: administrativa, comercial, operativa, confección, servicios generales y logística.'

/* Códigos de vestuario (ppt 16) — imágenes en public/img/presentacion */
export const usoCorrecto = [
  ['polo', 'Camisa polo', 'Polo blanco con logo Alalá Store.', 275, 320],
  ['pantalon', 'Pantalón', 'Pantalón azul oscuro clásico, sin rotos ni descosidos.', 165, 315],
  ['calzado', 'Calzado', 'Zapatos o tenis negros, limpios y en buen estado.', 240, 190],
]

export const usoIncorrecto = [
  ['no-camiseta', 'Camisetas, blusas o prendas que no sean del uniforme.', 135, 135],
  ['no-pantalon', 'Pantalones de otro color, jeans rotos o ajustados.', 135, 135],
  ['no-calzado', 'Calzado de colores llamativos, sucio o en mal estado.', 135, 133],
  ['no-gorra', 'Gorras, cachuchas o accesorios no permitidos.', 135, 132],
]

export const reglasGenerales = [
  'Usar siempre el uniforme completo durante la jornada laboral.',
  'Mantener las prendas limpias, planchar las camisas y polos.',
  'Portar siempre el carné institucional visible.',
  'La presentación personal comunica nuestro compromiso con la marca y nuestros clientes.',
]

/* Lo que no se debe usar, igual para asesor(a), cajero(a) y domiciliario(a) (ppt 17 a 19) */
export const noUsarCargo = [
  'No usar camiseta sucia o con manchas.',
  'No usar calzado roto, desgastado o con la suela despegada.',
  'No usar calzado de otras marcas o sin el logo Alalá Store.',
  'No usar sandalias, chanclas, crocs o calzado abierto.',
  'No usar tacones, plataformas o calzado no adecuado para nuestras actividades.',
]

const importante =
  'el uso inadecuado de tu imagen puede afectar la percepción de nuestra marca y la experiencia de nuestros clientes.'

/*
  Cargos. Los de la presentación traen foto, uso correcto e incorrecto.
  Los del manual anterior traen solo la lista de prendas.
*/
export const cargos = [
  {
    id: 'com',
    titulo: 'Asesor(a) comercial',
    intro:
      'Como asesor(a) comercial, tu imagen refleja confianza y profesionalismo de Alalá Store. Sigue estas indicaciones para proyectar lo mejor de nuestra marca cada día.',
    correcto: ['Camisa blanca con logo Alalá Store.', 'Carné visible siempre.', 'Jean azul oscuro de corte clásico.', 'Cinturón negro o café.', 'Zapatos cerrados negros antideslizantes.', 'Maletín o bolso de trabajo con logo.'],
    foto: { src: '/img/presentacion/asesores.webp', alt: 'Asesora y asesor comercial con camisa blanca, jean azul oscuro, carné y bolsos de la marca', ancho: 595, alto: 790 },
    recuerda: 'tu presentación personal genera confianza, conecta con nuestros clientes y fortalece la imagen de Alalá Store.',
    importante,
  },
  {
    id: 'caj',
    titulo: 'Cajero(a)',
    intro:
      'Como cajero(a), tu presentación refleja orden, confianza y servicio en Alalá Store. Sigue estas indicaciones para brindar la mejor experiencia a nuestros clientes.',
    correcto: ['Camisa blanca con logo Alalá Store.', 'Carné visible siempre.', 'Jean azul oscuro de corte clásico.', 'Cinturón negro o café.', 'Zapatos cerrados negros antideslizantes.', 'Porta carnet y nombre visible.'],
    foto: { src: '/img/presentacion/cajeros.webp', alt: 'Cajera y cajero con camisa blanca y carné detrás de la caja de Alalá Store', ancho: 585, alto: 830 },
    recuerda: 'tu actitud y presentación transmiten la esencia de Alalá Store: cercanía, confianza y alegría en cada atención.',
    importante,
  },
  {
    id: 'dom',
    titulo: 'Domiciliario(a)',
    intro:
      'Como domiciliario(a), tu presentación refleja compromiso, confianza y responsabilidad de Alalá Store. Sigue estas indicaciones para garantizar una experiencia segura y positiva a nuestros clientes.',
    correcto: ['Camiseta o chaqueta de Alalá Store con logo visible.', 'Carné visible siempre.', 'Jean azul oscuro o pantalón negro.', 'Zapatos cerrados negros antideslizantes.', 'Casco limpio y en buen estado.', 'Maletín o bolso térmico limpio con logo visible.'],
    primerNoUsar: 'No usar calzado sucio o con manchas.',
    foto: { src: '/img/presentacion/domiciliarios.webp', alt: 'Domiciliaria y domiciliario con chaqueta magenta, casco, carné y bolso térmico', ancho: 625, alto: 800 },
    recuerda: 'tu presentación es clave para generar confianza y seguridad en cada entrega. Representas la calidad y el compromiso de Alalá Store.',
    importante,
  },
  {
    id: 'con',
    titulo: 'Operario(a) de confección',
    prendas: ['Camiseta blanca con logo.', 'Delantal negro con bolsillos.', 'Jean azul oscuro cómodo.', 'Zapato antideslizante con puntera y plantilla de seguridad.', 'Guantes anticorte (según tarea).'],
    foto: { src: '/img/manual/cargo-confeccion.webp', alt: 'Operaria y operario de confección con delantal negro', ancho: 486, alto: 558 },
  },
  {
    id: 'ser',
    titulo: 'Servicios generales',
    prendas: ['Camiseta blanca con logo.', 'Delantal impermeable con logo.', 'Guantes de protección.', 'Tenis negros antideslizantes.', 'Implementos de limpieza.'],
    foto: { src: '/img/manual/cargo-servicios.webp', alt: 'Personal de servicios generales con delantal gris y guantes rosados', ancho: 516, alto: 552 },
  },
  {
    id: 'mat',
    titulo: 'Maternidad',
    prendas: ['Camiseta tipo polo materna con logo.', 'Pantalón materno cómodo y elástico.', 'Chaqueta liviana materna.', 'Brazo de lactancia (opcional).'],
    confirmarUltima: 'Prenda por confirmar',
    lema: 'Bienestar para ti, tranquilidad para tu bebé.',
    foto: { src: '/img/manual/cargo-maternidad.webp', alt: 'Colaboradora embarazada con dotación de maternidad', ancho: 240, alto: 528 },
  },
]

export const eppPorArea = [
  ['Administrativa', 'Tapabocas (opcional), mascarilla (opcional), gafas de seguridad (opcional), gel antibacterial, protector solar, tapones auditivos (opcional)', 'El uso de EPP depende de la actividad y riesgos del área.'],
  ['Confección', 'Guantes anticorte, dedal metálico, gafas de seguridad, mascarilla (opcional), tapones auditivos (opcional)', 'Obligatorio según la tarea asignada y evaluación de riesgos.'],
  ['Logística y despacho', 'Chaleco reflectivo, guantes de seguridad, zapato de seguridad con puntera, casco (opcional)', 'Protección necesaria para manipulación de cargas y traslado de productos.'],
  ['Domicilios', 'Casco certificado, guantes de agarre, impermeable, calzado antideslizante', 'Protección obligatoria para rutas y condiciones climáticas.'],
]

export const cuidados = ['Lava tu uniforme con colores similares.', 'Usa detergentes suaves.', 'No uses blanqueador.', 'Seca a la sombra.', 'Plancha a temperatura media.']

/* [área, camiseta, pantalón, calzado, ¿tela por confirmar?] */
export const especificaciones = [
  ['Administrativa', 'Poliéster 65 %, algodón 35 %', 'Jean azul oscuro corte clásico', 'Tenis negro cómodo'],
  ['Asesor(a) comercial', 'Camisa blanca con logo', 'Jean azul oscuro corte clásico', 'Zapatos cerrados negros antideslizantes', true],
  ['Confección', 'Poliéster 65 %, algodón 35 %', 'Jean azul oscuro cómodo', 'Antideslizante con puntera'],
  ['Servicios generales', 'Poliéster 65 %, algodón 35 %', 'Jean azul oscuro cómodo', 'Antideslizante'],
  ['Domiciliario(a)', 'Camiseta o chaqueta con logo; chaqueta en poliéster 100 %', 'Jean azul oscuro o pantalón negro', 'Zapatos cerrados negros antideslizantes'],
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

/* Láminas del manual anterior, en public/img/manual/lamina-NN.webp */
export const laminasAnteriores = [
  'Portada', 'A quién va dirigido', 'Contenido', 'Introducción', 'Objetivo', 'Alcance', 'Nuestros valores',
  'Códigos de vestuario', 'Asesor(a) comercial', 'Domiciliario(a)', 'Operario(a) de confección', 'Servicios generales',
  'Protección: administrativa', 'Protección: confección', 'Protección: logística y despacho', 'Protección: domicilios',
  'Cuidados del uniforme', 'Dotación de maternidad', 'Guía de tallas', 'Planilla de entrega', 'Prendas individuales',
  'Especificaciones por área', 'Presentación personal', 'Compromiso del colaborador', 'Gracias',
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
