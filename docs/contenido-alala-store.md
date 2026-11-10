# Contenido del portal Alalá Store

Este archivo reúne todo lo que tenemos para construir el portal y es la referencia para escribir las páginas.

**Fuentes**

- `alala.docx`: 12 imágenes sin texto editable. Se citan como *img 1* a *img 12*.
- `Brief del proyecto Portal web de talento humano e inducción.docx`: citado como *brief*.
- Imagen de la planilla de dotación enviada en el chat: citada como *planilla suelta*.
- `PresentaciónAlalaStore.pptx`: 19 láminas sin texto editable y un video de 58 segundos. Se citan como *ppt 1* a *ppt 19*, en el orden de la presentación.
- `Plan_de_Bienestar_Laboral_ALALA_STORE_final.pdf`: 9 páginas con texto. Citado como *plan*.
- `Plan_de_Bienestar_ALALA_STORE_completado.xlsx`: formato del programa de bienestar, una hoja con las 21 actividades. Citado como *excel*.

**Marcas usadas en este archivo**

- ⚠️ Dato contradictorio o dudoso. Hay que confirmarlo con Alalá Store.
- ❌ Falta el contenido. No se debe inventar: en la página irá un texto temporal claramente marcado (regla del brief).

---

## 1. El proyecto

- **Qué es:** un portal informativo de talento humano para las empleadas y los empleados de Alalá Store. Reúne en un solo lugar la inducción, la dotación, el bienestar, el desempeño y la formación.
- **Qué no es:** no es una tienda en línea. No hay catálogo, carrito ni pagos.
- **Quién lo hace:** Kristian Kamilo Ferrin Rivera desarrolla el portal. Alalá Store entrega todo el contenido.
- **Solo contenido:** sin backend, base de datos ni login.

### Las 8 vistas y el estado de su contenido

| # | Vista | Ruta sugerida | Contenido disponible | Estado |
|---|-------|---------------|----------------------|--------|
| 1 | Quiénes somos / Historia | `/quienes-somos` | Historia, propósito, misión, visión, objetivos, cultura y valores | 🟢 Completa |
| 2 | Inducción general | `/induccion-general` | Bienvenida, video, cultura, SST y afiliaciones. Falta el link de la evaluación | 🟢 Casi completa |
| 3 | Inducción específica | `/induccion-especifica` | Completa, solo para el cargo Operaria de confección | 🟢 Casi completa |
| 4 | Manual de dotación | `/dotacion` | Manual de 24 láminas en baja resolución, más 5 láminas nuevas en buena resolución (ppt 15 a 19). Falta la tabla de tallas | 🟡 Definir versión |
| 5 | Formato de entrega de dotación | `/formato-dotacion` | Planilla, en dos versiones distintas | 🟡 Definir versión |
| 6 | Plan de bienestar y cronogramas | `/bienestar` | Plan anual completo con 21 actividades y cronograma de inducción | 🟢 Completa |
| 7 | Evaluación de desempeño | `/evaluacion-desempeno` | Nada. Lleva botón a la app | ❌ Falta |
| 8 | Modelo de formación empresarial | `/formacion` | Introducción, propósito y estructura en 5 etapas | 🟢 Completa |

### Decisiones técnicas del brief

- **Stack:** React con Vite (ya creado), React Router y publicación estática en Vercel.
- **Contenido separado del código:** textos, links de evaluación y enlaces a PDF en un archivo de configuración, por ejemplo `contenido.js`.
- **Botón de evaluación:** componente reutilizable. Aparece al menos en Inducción general y en Evaluación de desempeño. Texto de ejemplo: "Ir a la evaluación".
- **Documentos:** los manuales y formatos probablemente irán como PDF descargable o imprimible.
- **Requisitos:** diseño responsive (muchas personas entrarán desde el celular), menú visible con las 8 secciones, textos legibles, botones grandes, buen contraste e imágenes optimizadas.
- **Orden de trabajo:** primero la estructura de carpetas y componentes, luego el diseño base (menú, encabezado, pie y botón de evaluación) y por último las 8 vistas.
- **Fuera de la primera versión:** login, evaluaciones propias o con calificación automática, historial de resultados y panel de administración.

---

## 2. Identidad de marca

- **Nombre:** Alalá Store. ⚠️ Algunas láminas dicen "Alala" sin tilde (img 2 y delantales de img 8, 9 y 10). Aquí se usa "Alalá".
- **Actividad:** bolsos y accesorios. Tiene confección propia.
- **Lema del manual:** "¡Juntos llevamos nuestro estilo más lejos!"
- **Frases de la marca:**
  - "Cada puntada cuenta, cada detalle hace la diferencia."
  - "La calidad se construye desde cada puntada."
  - "La seguridad es tarea de todos."
- **Logo:** "alalá" en minúscula, redondeado, con un corazón sobre la tilde, y debajo "STORE" entre dos líneas. ⚠️ No hay archivo del logo, solo aparece dentro de las imágenes, y hay variantes: una cursiva en img 2 y "alalá ♡" en la planilla suelta.

### Colores

Valores medidos sobre las imágenes (img 1, 3, 4 y 10). Son aproximados porque el tono cambia un poco entre láminas. ⚠️ Confirmar si la marca tiene colores oficiales.

| Uso | Color | Hex aproximado |
|-----|-------|----------------|
| Principal: bandas y formas | Magenta | `#C32C6F` |
| Acento: números y títulos | Rosa fuerte | `#DC236F` |
| Texto de títulos | Vino muy oscuro | `#25000F` |
| Paneles y fondos suaves | Rosa muy claro | `#FDF1F5` |
| Fondo general | Blanco rosado | `#FCFAFB` |
| Forma decorativa | Durazno | `#FDE3CA` |
| Forma decorativa | Azul grisáceo | `#D9DDE6` |

### Estilo visual

- Formas orgánicas redondeadas en las esquinas y una banda magenta ondulada al pie.
- Títulos numerados, con un separador de línea y corazón.
- Tarjetas blancas de borde rosado y esquinas redondeadas.
- Recuadros rosados "RECUERDA" con un escudo.
- Colores distintos por categoría en riesgos, normas y valores.
- Pie de página con 5 íconos: Pasión, Respeto, Compromiso, Calidad y Trabajo en equipo.
- No se debe copiar el menú "About, Prices, News, Policy, Contact us" que aparece en las láminas: parece un resto de la plantilla.

---

## 3. Quiénes somos

❌ **Falta:** ubicación y datos de contacto.

### Historia

Alalá Store nace en el año 2021 como una tienda virtual, con la iniciativa de crear un espacio comercial que permitiera a sus clientes descubrir y adquirir productos de una manera práctica, cómoda y accesible.

Sus primeros pasos estuvieron enfocados en el comercio digital, aprovechando las herramientas tecnológicas y las plataformas virtuales para acercarse a sus clientes, dar a conocer sus productos y construir una comunidad alrededor de la marca.

Con dedicación, esfuerzo y compromiso, Alalá Store ha trabajado en su crecimiento y fortalecimiento, buscando nuevas oportunidades para ampliar su alcance, mejorar la experiencia de compra y consolidar su presencia en el mercado.

Desde sus inicios hasta hoy, cada logro ha sido resultado del trabajo, la perseverancia y la participación de las personas que han contribuido al desarrollo de la empresa.

Actualmente, Alalá Store continúa construyendo su camino, apostándole al crecimiento, la innovación y la satisfacción de sus clientes.

*"Nuestra historia comenzó en el mundo digital, pero nuestro crecimiento se construye gracias a las personas que hacen parte de ella."*

### A qué nos dedicamos (ppt 3)

Alalá Store es una empresa dedicada al **diseño, elaboración y comercialización** de bolsos y accesorios, buscando ofrecer productos de calidad, con diseños atractivos y pensados para complementar el estilo de nuestros clientes.

**Nuestro propósito:** crear productos que combinen calidad, creatividad y estilo, brindando también una experiencia cercana y especial a nuestros clientes.

### Misión (ppt 4)

"Diseñar, elaborar y comercializar bolsos y accesorios de calidad, ofreciendo productos innovadores y atractivos que respondan a las necesidades de nuestros clientes, mediante un equipo comprometido con la creatividad, el servicio y la mejora continua."

Palabras clave: calidad, creatividad, servicio, compromiso.

### Visión (ppt 5)

Ser una empresa reconocida en el mercado de bolsos y accesorios por la calidad de nuestros productos, nuestros diseños innovadores y la excelente atención a nuestros clientes, fortaleciendo continuamente nuestro crecimiento y posicionamiento.

*"Crecer juntos para llegar cada vez más lejos."*

### Objetivos (ppt 6)

| Objetivo | Descripción |
|----------|-------------|
| Calidad | Ofrecer productos que cumplan con las expectativas de nuestros clientes. |
| Innovación | Crear diseños y propuestas que se diferencien en el mercado. |
| Servicio | Brindar una atención amable, cercana y oportuna. |
| Crecimiento | Aumentar el reconocimiento y posicionamiento de Alalá Store. |
| Equipo | Fortalecer el trabajo colaborativo y el compromiso de nuestros colaboradores. |

### Cultura (ppt 7)

En Alalá Store promovemos una cultura basada en:

| Pilar | Descripción |
|-------|-------------|
| Respeto | Tratamos a cada persona con amabilidad y valoramos sus ideas. |
| Compromiso | Cumplimos nuestras responsabilidades y aportamos al crecimiento de la empresa. |
| Creatividad | Buscamos nuevas ideas y soluciones para mejorar nuestros productos y procesos. |
| Trabajo en equipo | Colaboramos para alcanzar objetivos comunes. |
| Orientación al cliente | Buscamos generar experiencias positivas y memorables. |

*"Personas que inspiran, marcas que crecen."*

### Áreas de la empresa (img 11, lámina 6)

Administrativa, comercial, operativa, confección, servicios generales y logística.

### Valores (img 10)

*"Nuestros valores nos guían cada día y se reflejan en la calidad de cada producto que confeccionamos."*

| Valor | Descripción |
|-------|-------------|
| Respeto | Valoramos a todas las personas y sus opiniones. |
| Responsabilidad | Cumplimos con nuestros compromisos y cuidamos nuestro trabajo. |
| Compromiso | Damos lo mejor de nosotras para alcanzar los objetivos de la empresa. |
| Calidad | Nos esforzamos por hacer bien las cosas desde el primer momento. |
| Trabajo en equipo | Colaboramos y nos apoyamos para lograr resultados excepcionales. |
| Honestidad | Actuamos con transparencia e integridad siempre. |
| Pasión | Amamos lo que hacemos y nos esforzamos por mejorar cada día. |
| Disciplina | Seguimos los procesos y normas para asegurar productos con excelencia. |
| Mejora continua | Buscamos nuevas formas de aprender, innovar y ser mejores cada día. |
| Responsabilidad ambiental | Cuidamos los recursos y trabajamos por un futuro sostenible. |

⚠️ Las listas de valores no coinciden entre documentos (ver sección 9).

---

## 4. Inducción general

La presentación completa la inducción general. ❌ **Falta el link de la evaluación.**

### Bienvenida (ppt 1)

*"¡Bienvenido(a) a alalá store! Nos alegra que hagas parte de nuestro equipo. Este manual contiene información esencial para tu integración, seguridad y desarrollo dentro de nuestra empresa."*

- *"Juntos crecemos, aprendemos y brillamos."*
- *"Tu seguridad y bienestar son nuestra prioridad. Sigamos juntos nuestros valores en cada acción."*

### Video de presentación (ppt 2)

- Video de 58 segundos, 800 × 368 px, con presentadora generada por IA.
- Frases en pantalla: "Moda & estilo", "Elegancia moderna", "Detalles de lujo", "Calidad artesanal", "Control de calidad", "Atención personalizada en cada detalle", "Tu satisfacción es nuestra prioridad".
- ⚠️ Tiene la marca de agua de HeyGen en toda la imagen.
- ⚠️ La narración no está transcrita. Solo se revisaron fotogramas, no el audio.

### Quiénes somos, misión, visión, objetivos y cultura (ppt 3 a 7)

Ver la sección 3.

### Un ambiente donde todos pueden brillar (ppt 8)

Nuestro clima organizacional busca generar un espacio:

| Pilar | Descripción |
|-------|-------------|
| Respeto | Donde todos nos tratamos con amabilidad y valoramos las ideas de los demás. |
| Comunicación abierta | Donde expresar lo que pensamos y sentimos es parte de nuestro día a día. |
| Reconocimiento y motivación | Porque cada esfuerzo cuenta y hace la diferencia. |
| Trabajo en equipo | Donde colaboramos y apoyamos para alcanzar grandes resultados. |
| Valoración de ideas | Porque todas las ideas suman y nos ayudan a crecer. |

**¿Cómo lo promovemos?** Reconocimiento a los colaboradores, celebración de fechas especiales, actividades creativas y de integración, y espacios de comunicación y retroalimentación.

### Lo que nos representa (ppt 9)

*"En Alalá Store trabajamos con valores que nos guían en cada paso y nos ayudan a construir la empresa que soñamos."*

| Valor | Descripción |
|-------|-------------|
| Respeto | Valoramos a cada persona, sus ideas y su esfuerzo. Tratamos con amabilidad y empatía. |
| Compromiso | Cumplimos nuestras responsabilidades y damos lo mejor de nosotros para el crecimiento de la empresa. |
| Creatividad | Buscamos nuevas ideas, soluciones y formas innovadoras de mejorar nuestros productos, procesos y experiencias. |
| Trabajo en equipo | Colaboramos, apoyamos y nos motivamos para alcanzar objetivos comunes. |
| Orientación al cliente | Escuchamos, entendemos y buscamos generar experiencias positivas y memorables. |

*"Más que un trabajo, somos un gran equipo."*

### Nos mueve un mismo propósito (ppt 10)

*"En Alalá Store no solo diseñamos y vendemos bolsos y accesorios, también construimos un lugar donde las personas pueden crecer, ser ellas mismas y dejar huella."*

| Pilar | Descripción |
|-------|-------------|
| Personas | Valoramos a cada persona, su talento, su esfuerzo y su historia. Aquí todas importan. |
| Creatividad | Nos inspira la innovación y las nuevas ideas que hacen de Alalá Store un lugar único. |
| Compromiso | Damos lo mejor en cada proceso, con responsabilidad y pasión por lo que hacemos. |
| Trabajo en equipo | Creemos en la fuerza de las grandes ideas y en el poder de avanzar juntos. |
| Crecimiento | Apostamos por el desarrollo de cada persona y por un futuro lleno de nuevas oportunidades. |

*"¡Que los sueños también se lleven en los bolsos!"*

### Proceso de SST: Seguridad y Salud en el Trabajo (ppt 11)

En Alalá Store nos preocupamos por el bienestar de nuestro equipo. Por eso, contamos con un Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST), que nos permite prevenir riesgos, cuidar la salud y crear un ambiente laboral seguro y saludable para todos.

| Qué incluye | Descripción |
|-------------|-------------|
| Identificación de peligros y evaluación de riesgos | Analizamos los posibles riesgos en cada área de trabajo. |
| Plan de trabajo anual | Se establecen actividades de prevención, capacitación y mejora continua. |
| Capacitación y sensibilización | Todo el equipo recibe formación en temas de SST, uso de EPP y prevención de riesgos. |
| Seguimiento y mejora | Se realizan inspecciones, auditorías y se evalúa el cumplimiento de las medidas. |

*"¡Tu seguridad también es parte de nuestro éxito!"* · *"¡Prevenir también es cuidar!"*

### Afiliaciones y protección del colaborador (ppt 12 a 14)

⚠️ Solo cubre ARL y fondo de pensiones. No menciona EPS ni caja de compensación.

**ARL (Administradora de Riesgos Laborales).** Protege a nuestros colaboradores en caso de accidentes de trabajo o enfermedades laborales. La afiliación es obligatoria y la realiza el empleador al momento de la contratación.

1. Diligenciar el formulario de afiliación en la plataforma de la ARL elegida (por ejemplo: SURA, AXA Colpatria, Positiva, etc.).
2. Suministrar la información del colaborador (datos personales, tipo de contrato, cargo, IBC y centro de trabajo).
3. Realizar el pago de la novedad y confirmar la afiliación.
4. Recibir el comprobante de afiliación y el número de riesgo asignado.

**Fondos de pensiones.** Permiten que, al finalizar la vida laboral, tengas un ingreso para tu futuro. La afiliación también es obligatoria y la realiza el empleador al momento de la vinculación.

1. Elegir el fondo de pensiones (Colpensiones o fondo privado: Porvenir, Protección, Colfondos o Skandia).
2. Diligenciar el formulario de afiliación en la entidad elegida.
3. Suministrar la información del colaborador (datos personales, tipo de contrato, IBC y régimen de pensión).
4. Confirmar la afiliación y recibir el número de afiliación y el comprobante.

Frases: *"La ARL te cuida cuando más lo necesitas."* · *"Tu futuro también importa."* · *"Tu bienestar también es parte de nuestro éxito."* · *"Juntos construimos un mejor lugar para trabajar."*

---

## 5. Inducción específica: Operaria de confección

*"Bienvenida al equipo Alalá. Esta inducción te ayudará a conocer tu cargo, los procesos de confección, los riesgos y las medidas de seguridad para trabajar de forma segura y con calidad."* (img 1)

### Objetivo

- **Resumen (img 3):** preparar a la operaria de confección para desempeñar sus funciones de manera segura, eficiente y con calidad, cumpliendo los estándares de la empresa Alalá Store.
- **Objetivo general (img 2):** brindar a la operaria los conocimientos necesarios para desempeñar sus funciones de manera segura, eficiente y responsable, cumpliendo los estándares de calidad de Alalá Store.
- **Objetivos específicos (img 2):**
  - Reconocer las funciones del cargo.
  - Identificar máquinas, herramientas y elementos de producción.
  - Reconocer los peligros y riesgos del área.
  - Aplicar las normas de seguridad.
  - Ejecutar correctamente el procedimiento de trabajo.
  - Promover la calidad y el trabajo en equipo.

### Funciones del cargo

Resumen (img 3):

- Confeccionar bolsos y accesorios siguiendo las instrucciones.
- Operar máquinas de confección de forma segura.
- Revisar la calidad de las costuras, acabados y herrajes.
- Cumplir con las metas de producción.
- Mantener el puesto de trabajo limpio y organizado.
- Reportar daños, fallas o situaciones de riesgo.

Lista ampliada (img 2):

- Preparar materiales e insumos para la producción.
- Operar las máquinas de confección asignadas.
- Realizar costuras y ensambles según especificaciones.
- Revisar medidas, acabados y calidad.
- Informar daños o fallas en máquinas y herramientas.
- Mantener ordenado y limpio el puesto.
- Cumplir cantidades y tiempos establecidos.
- Realizar separación y disposición adecuada de residuos.
- Seguir instrucciones del jefe de producción.

### Información del cargo

| Campo | Dato |
|-------|------|
| Cargo | Operaria de confección |
| Área | ⚠️ Confección (img 3) / Producción (img 2) |
| Jefe inmediato | ⚠️ Supervisor(a) de producción (img 3) / Jefe de Producción (img 2) |
| Horario | Según programación |
| Lugar de trabajo | Área de confección – Alalá Store |

- **Propósito del cargo (img 2):** participar en la elaboración de los productos de Alalá Store mediante el manejo adecuado de máquinas, herramientas y materiales, garantizando seguridad, productividad y calidad.
- **Competencias (img 2):** responsabilidad, atención al detalle, organización, trabajo en equipo, disciplina y compromiso con la calidad.

### Elementos de producción (img 4)

*"Estos son los principales elementos y materiales que utilizamos en el área de confección."*

| Elemento | Descripción |
|----------|-------------|
| Máquina plana | Para costuras generales. |
| Fileteadora | Para acabados y refilados. |
| Hilos | En diferentes colores y calibres. |
| Agujas | Para distintos tipos de tela y costura. |
| Tijeras | Para corte de telas e hilos. |
| Telas y forros | Materiales principales para la confección. |
| Cierres | De diferentes tipos y tamaños. |
| Herrajes | Argollas, hebillas, remaches, etc. |
| Marquillas | Identidad y marca de nuestros productos. |
| Otros materiales | Elásticos, sesgos, pegantes, etc. |

- *"Todos los elementos deben ser usados correctamente, mantenidos en buen estado y ubicados en su lugar después de cada jornada."*
- Otros elementos que menciona img 2: máquina de coser, cinta métrica, regla, moldes y patrones, mesa de trabajo y recipientes organizadores.
- **Regla de oro (img 2):** utilizar cada elemento únicamente para la función para la cual fue diseñado.

### Riesgos y peligros (img 7)

*"En el área de confección existen riesgos que pueden afectar tu salud y seguridad. Es importante identificarlos y prevenirlos."*

| Riesgo | Causa |
|--------|-------|
| Cortes con tijeras, agujas o herrajes | Por manipulación inadecuada de herramientas. |
| Atrapamiento en máquinas | Por contacto con partes móviles de los equipos. |
| Pinchazos con agujas | Al manipular agujas o materiales. |
| Riesgo eléctrico | Por uso inadecuado de equipos eléctricos. |
| Movimientos repetitivos | Por posturas prolongadas o movimientos constantes. |
| Fatiga visual y postural | Por esfuerzo visual y malas posturas al trabajar. |
| Caídas al mismo nivel | Por pisos sucios, obstáculos o cables en el área. |
| Ruido excesivo | Por el uso continuo de máquinas de confección. |

**Medidas de prevención:** usa correctamente las máquinas y herramientas, mantén el área limpia y ordenada, no retires protecciones, realiza pausas activas y reporta cualquier condición insegura.

Clasificación por tipo (img 2):

| Tipo | Ejemplos |
|------|----------|
| Mecánicos | Atrapamientos, pinchazos, cortes y contacto con partes móviles. |
| Biomecánicos | Posturas prolongadas, movimientos repetitivos. |
| Eléctricos | Contacto con cables, conexiones o equipos eléctricos. |
| Locativos | Caídas por objetos, cables, materiales desorganizados o pisos. |
| Físicos | Ruido, iluminación inadecuada y condiciones ambientales. |
| Psicosociales | Presión por producción, carga de trabajo y jornadas prolongadas. |
| Químicos | Contacto con productos de limpieza o mantenimiento. |

### Elementos de protección personal, EPP (img 5)

*"Usar correctamente los elementos de protección personal es fundamental para tu seguridad. Son tu mejor protección."*

| Elemento | Para qué sirve |
|----------|----------------|
| Bata o uniforme | Protege tu ropa y mantiene la imagen institucional. |
| Tapabocas | Previene la inhalación de polvo, pelusas o partículas. |
| Dedal (cuando aplique) | Protege los dedos al realizar costuras a mano. |
| Gafas de seguridad | Protegen los ojos de partículas y salpicaduras. |
| Protector auditivo | Disminuye el impacto del ruido de las máquinas. |
| Calzado cerrado antideslizante | Protege tus pies de golpes, caídas de objetos y resbalones. |
| Guantes anticorte (cuando aplique) | Protegen las manos al manipular materiales o herramientas. |

- *"Usa siempre tus EPP y cuídalos. Son tu mejor protección. Un equipo en buen estado puede marcar la diferencia."*
- **Medidas de prevención:** usa tus EPP de forma correcta, verifica su estado antes de iniciar la jornada, límpialos después de usarlos y guárdalos en el lugar asignado.
- **Presentación (img 2):** el cabello debe permanecer recogido. No usar accesorios que puedan engancharse en las máquinas. Uñas en longitud moderada.

### Qué hacer en caso de alguna situación (img 6)

| Situación | Qué hacer |
|-----------|-----------|
| **Accidente** | Detén la actividad. Informa de inmediato a tu jefe o supervisor. Solicita primeros auxilios. Reporta el accidente en el formato correspondiente. No muevas a la persona lesionada a menos que sea estrictamente necesario. |
| **Incendio** | Mantén la calma. Usa el extintor si sabes cómo hacerlo y el incendio es pequeño. Si el fuego se propaga, activa la alarma. Conoce las salidas y rutas de evacuación. Sigue las indicaciones del personal autorizado. No regreses por objetos personales. |
| **Emergencia** | Conoce las salidas y rutas de evacuación. Sigue las instrucciones del personal de emergencias. Dirígete al punto de encuentro. Mantén el orden y evita correr. Ayuda a personas que lo necesiten. Permanece en el punto de encuentro hasta nueva orden. |
| **Condición insegura** | No la ignores. Repórtala de inmediato a tu jefe o supervisor. Si es posible, corrige la condición insegura sin ponerte en riesgo. Ayuda a prevenir accidentes. Mantén el área de trabajo limpia y organizada. |

**RECUERDA:** tu seguridad y la de tus compañeras es lo más importante.

Pasos en caso de emergencia (img 2):

1. Mantener la calma.
2. Suspender inmediatamente la actividad.
3. Apagar la máquina, cuando sea seguro hacerlo.
4. Informar al responsable del área.
5. Seguir las instrucciones de los brigadistas.
6. Identificar las rutas de evacuación.
7. Dirigirse al punto de encuentro.
8. No regresar al área hasta recibir autorización.

**Nunca:** correr, empujar, devolverse o intentar controlar una emergencia sin capacitación.

### Normas de seguridad en el área de confección (img 8)

*"Cumplir con las normas de seguridad protege tu vida, la de tus compañeras y la calidad de nuestro trabajo."*

1. **Usa tu uniforme correctamente.** Usa el uniforme completo y limpio en todo momento.
2. **Usa tus EPP.** Utiliza correctamente los elementos de protección personal asignados.
3. **Conoce y usa correctamente las máquinas.** Opera solo las máquinas para las que has sido capacitada.
4. **Repórtalo todo.** Informa de inmediato cualquier condición insegura o daño en equipos y herramientas.
5. **No tomes atajos.** Sigue siempre los procedimientos establecidos. No te arriesgues.
6. **Mantén el área ordenada.** Un lugar limpio y organizado previene accidentes y mejora nuestro trabajo.
7. **No consumas alimentos ni bebidas en el área.** Evita derrames, manchas y atraes plagas al área de confección. ⚠️ La redacción dice lo contrario de lo que quiere decir. Debería ser algo como "evita derrames, manchas y plagas".
8. **Deposita los residuos en su lugar.** Separa y desecha los residuos en los contenedores correspondientes.
9. **Respeta a tus compañeras y sigue las indicaciones.** El trabajo en equipo y la comunicación son clave para un ambiente seguro.
10. **Participa en las capacitaciones.** Tu aprendizaje constante fortalece nuestra seguridad y calidad.

**RECUERDA:** la seguridad es responsabilidad de todas. Juntas creamos un ambiente seguro y productivo.

Otras normas que añade img 2:

- No retirar protecciones de seguridad.
- No introducir las manos cerca de partes móviles.
- No realizar mantenimiento sin autorización.
- Desconectar el equipo antes de intervenirlo.
- Mantener cabello y prendas sueltas controladas.
- No correr ni jugar dentro del área.
- Respetar las señalizaciones y procedimientos.

### Procedimientos de trabajo seguro (img 9)

*"Seguir los procedimientos de trabajo seguro nos ayuda a prevenir accidentes, proteger nuestra salud y garantizar la calidad de nuestros productos."*

1. **Prepara tu área de trabajo**
   - Verifica que tu área esté limpia y ordenada.
   - Revisa que la máquina y herramientas estén en buen estado.
   - Ten los materiales necesarios al alcance y en su lugar.
2. **Revisa antes de iniciar**
   - Revisa la máquina (ver agujas, hilo, aceite, conexiones).
   - Asegúrate de tener los EPP puestos correctamente.
   - Reporta cualquier falla o condición insegura.
3. **Durante el trabajo**
   - Mantén las manos lejos de las partes en movimiento.
   - No distraigas tu atención.
   - Sigue las instrucciones del proceso.
   - No realices ajustes con la máquina encendida.
4. **Manejo de materiales y herramientas**
   - Usa las herramientas solo para lo que fueron diseñadas.
   - Manipula las tijeras, agujas y cuchillas con precaución.
   - Guarda los materiales y herramientas después de usarlos.
5. **Al finalizar la jornada**
   - Apaga la máquina y desconéctala.
   - Limpia tu área de trabajo y elimina residuos.
   - Deja todo en orden para la siguiente jornada.

**RECUERDA:**

- Tu seguridad es tu responsabilidad.
- Cumplir los procedimientos es proteger tu vida y la de tus compañeras.
- Si tienes dudas, pregunta siempre a tu jefe o supervisora.
- No te confíes, los accidentes pueden ocurrir en cualquier momento.

**Beneficios de trabajar de forma segura:**

- Previenes accidentes y lesiones.
- Mejoras la calidad de nuestro trabajo y productos.
- Contribuyes a un ambiente laboral positivo.
- Aumentas tu productividad y eficiencia.
- Proteges tu salud y bienestar.

### Valores y calidad en la confección (img 10)

*"Cada detalle cuenta. Nos aseguramos de que nuestros productos cumplan con los más altos estándares."*

- Materiales de excelente calidad.
- Costuras firmes y bien terminadas.
- Revisión en cada etapa del proceso.
- Acabados perfectos y detallados.
- Productos duraderos que superan expectativas.

Revisión de calidad (img 2):

- Revisar costuras y acabados.
- Verificar medidas.
- Evitar hilos sueltos.
- Revisar manchas o daños.
- Cumplir especificaciones del producto.
- Informar productos que no cumplan los estándares.

**RECUERDA:** nuestros valores se reflejan en la calidad de nuestro trabajo y en la satisfacción de quienes confían en nosotros.

### Agenda de inducción: un día (img 2)

Título: "Lunes – Inducción específica del cargo".

| Hora | Tema |
|------|------|
| 8:00 – 8:20 a. m. | 1. Bienvenida e introducción: área de confección, equipo de trabajo, puesto de trabajo y jornada de inducción |
| 8:20 – 8:50 a. m. | 2. Objetivos |
| 8:50 – 9:30 a. m. | 3. Funciones del cargo |
| 9:30 – 10:00 a. m. | 4. Información del cargo |
| 10:15 – 11:00 a. m. | 5. Elementos de producción |
| 11:00 – 11:45 a. m. | 6. Riesgos y peligros |
| 11:45 a. m. – 12:15 p. m. | 7. Elementos de protección personal |
| 12:15 – 1:00 p. m. | Almuerzo: tiempo de descanso y alimentación |
| 1:00 – 1:30 p. m. | 8. ¿Qué hacer en caso de emergencia? |
| 1:30 – 2:15 p. m. | 9. Normas de seguridad en el área de confección |
| 2:15 – 3:15 p. m. | 10. Procedimiento de trabajo seguro |
| 3:15 – 4:00 p. m. | 11. Valores y calidad |
| 4:00 – 4:30 p. m. | Cierre: resolución de dudas, retroalimentación, verificación de conocimientos, recorrido final por el área, confirmación de comprensión de las normas y compromiso de la operaria con la seguridad y calidad |

Cierre: *"¡Bienvenida al equipo Alalá! Cada puntada cuenta, cada detalle hace la diferencia."*

---

## 6. Manual de dotación (img 11)

*"Lineamientos para el uso, cuidado y presentación de nuestros uniformes y elementos de protección personal."*

⚠️ La imagen reúne las 24 láminas en un solo mosaico de 1536 × 1024 px, y la letra pequeña se lee mal. Se necesita el original para ofrecerlo como PDF. Los datos marcados abajo no se pudieron leer con seguridad.

### Presentación

- **A quién va dirigido:** todos los colaboradores de Alalá Store, sin importar su tipo de contrato, cargo o área de trabajo.
- **Alcance:** todos los colaboradores vinculados a Alalá Store, en todas las áreas: administrativa, comercial, operativa, confección, servicios generales y logística.
- **Introducción:** el manual establece los lineamientos para el uso adecuado de la dotación y los elementos de protección personal. Busca proyectar una imagen profesional alineada con los valores de Alalá Store y garantizar la seguridad y bienestar de todos los colaboradores.
- **Objetivos:**
  - Unificar la imagen corporativa de Alalá Store.
  - Garantizar el uso correcto y adecuado de la dotación.
  - Promover la seguridad y el autocuidado en el entorno laboral.
  - Fortalecer el sentido de pertenencia y el orgullo por nuestra marca.

### Códigos de vestuario

- Usa siempre la dotación completa, limpia y en buen estado.
- No combina con prendas deportivas, rotas o transparentes.
- Evita accesorios excesivos o llamativos.
- El carné debe estar visible durante la jornada.
- Zapatos cerrados y en buen estado.

### Dotación por cargo

| Cargo | Prendas y elementos |
|-------|---------------------|
| **Asesor(a) comercial** | Camiseta blanca con logo Alalá Store. Jean azul oscuro de corte clásico. Tenis negros cómodos. Carné siempre visible. Accesorios discretos. |
| **Domiciliario(a)** | Gorra negra con logo Alalá Store. Chaqueta negra impermeable con logo. Camiseta blanca con logo. Jean azul oscuro resistente. Tenis negros antideslizantes. Maletín o bolso de entrega con logo. |
| **Operario(a) de confección** | Camiseta blanca con logo. Delantal negro con bolsillos. Jean azul oscuro cómodo. Zapato antideslizante con puntera y plantilla de seguridad. Guantes anticorte (según tarea). |
| **Servicios generales** | Camiseta blanca con logo. Delantal impermeable con logo. Guantes de protección. Tenis negros antideslizantes. Implementos de limpieza. |

⚠️ No hay lámina de dotación para las áreas Administrativa, Operativa ni Logística.

### Versión nueva de la presentación (ppt 15 a 19)

✅ **Decisión (6 de noviembre de 2026): esta es la versión oficial.** Donde no coincide con el manual de 24 láminas, manda la presentación. Para cada cargo, lo que dice su lámina propia (ppt 17 a 19) prima sobre los códigos generales (ppt 16).

*"Tu seguridad y presentación reflejan nuestro compromiso con la calidad de nuestros productos y el bienestar de nuestro equipo."* (ppt 15)

**Códigos de vestuario (ppt 16).** Nuestro código de vestuario refleja la imagen profesional, ordenada y coherente de Alalá Store.

- **Uso correcto:**
  - Camisa polo: polo blanco con logo Alalá Store.
  - Pantalón: azul oscuro clásico, sin rotos ni descosidos.
  - Calzado: zapatos o tenis negros, limpios y en buen estado.
  - Mantener siempre una presentación personal limpia, ordenada y acorde con nuestra imagen de marca.
- **Uso incorrecto:**
  - Camisetas, blusas o prendas que no sean del uniforme.
  - Pantalones de otro color, jeans rotos o ajustados.
  - Calzado de colores llamativos, sucio o en mal estado.
  - Gorras, cachuchas o accesorios no permitidos.
- **Reglas generales:**
  - Usar siempre el uniforme completo durante la jornada laboral.
  - Mantener las prendas limpias, planchar las camisas y polos.
  - Portar siempre el carné institucional visible.
  - La presentación personal comunica nuestro compromiso con la marca y nuestros clientes.

**Por cargo (ppt 17 a 19):**

| | Asesor(a) comercial | Cajero(a) | Domiciliario(a) |
|---|---|---|---|
| Introducción | Tu imagen refleja confianza y profesionalismo de Alalá Store. Sigue estas indicaciones para proyectar lo mejor de nuestra marca cada día. | Tu presentación refleja orden, confianza y servicio en Alalá Store. Sigue estas indicaciones para brindar la mejor experiencia a nuestros clientes. | Tu presentación refleja compromiso, confianza y responsabilidad de Alalá Store. Sigue estas indicaciones para garantizar una experiencia segura y positiva a nuestros clientes. |
| Prenda superior | Camisa blanca con logo Alalá Store | Camisa blanca con logo Alalá Store | Camiseta o chaqueta de Alalá Store con logo visible |
| Carné | Visible siempre | Visible siempre | Visible siempre |
| Pantalón | Jean azul oscuro de corte clásico | Jean azul oscuro de corte clásico | Jean azul oscuro o pantalón negro |
| Cinturón | Negro o café | Negro o café | — |
| Calzado | Zapatos cerrados negros antideslizantes | Zapatos cerrados negros antideslizantes | Zapatos cerrados negros antideslizantes |
| Otro | Maletín o bolso de trabajo con logo | Porta carnet y nombre visible | Casco limpio y en buen estado. Maletín o bolso térmico limpio con logo visible |
| Recuerda | Tu presentación personal genera confianza, conecta con nuestros clientes y fortalece la imagen de Alalá Store. | Tu actitud y presentación transmiten la esencia de Alalá Store: cercanía, confianza y alegría en cada atención. | Tu presentación es clave para generar confianza y seguridad en cada entrega. Representas la calidad y el compromiso de Alalá Store. |

**Uso incorrecto, igual en los tres cargos:**

- No usar camiseta sucia o con manchas. ⚠️ La lámina de domiciliario dice "calzado sucio", y todas muestran un zapato.
- No usar calzado roto, desgastado o con la suela despegada.
- No usar calzado de otras marcas o sin el logo Alalá Store.
- No usar sandalias, chanclas, crocs o calzado abierto.
- No usar tacones, plataformas o calzado no adecuado para nuestras actividades.

**Importante:** el uso inadecuado de tu imagen puede afectar la percepción de nuestra marca y la experiencia de nuestros clientes.

### Elementos de protección por área

| Área | Elementos | Nota |
|------|-----------|------|
| **Administrativa** | Tapabocas (opcional), mascarilla (opcional), gafas de seguridad (opcional), gel antibacterial, protector solar, tapones auditivos (opcional) | El uso de EPP depende de la actividad y riesgos del área. |
| **Confección** | Guantes anticorte, dedal metálico, gafas de seguridad, mascarilla (opcional), tapones auditivos (opcional) | Obligatorio según la tarea asignada y evaluación de riesgos. |
| **Logística y despacho** | Chaleco reflectivo, guantes de seguridad, zapato de seguridad con puntera, casco (opcional) | Protección necesaria para manipulación de cargas y traslado de productos. |
| **Domicilios** | Casco certificado, guantes de agarre, impermeable, calzado antideslizante | Protección obligatoria para rutas y condiciones climáticas. |

### Cuidados del uniforme

- Lava tu uniforme con colores similares.
- Usa detergentes suaves.
- No uses blanqueador.
- Seca a la sombra.
- Plancha a temperatura media.

*"El buen cuidado del uniforme prolonga su vida útil y mantiene nuestra imagen impecable."*

### Dotación de maternidad

- Camiseta tipo polo materna con logo.
- Pantalón materno cómodo y elástico.
- Chaqueta liviana materna.
- ⚠️ "Brazo de lactancia (opcional)": así se lee, pero no queda claro qué prenda es.

*"Bienestar para ti, tranquilidad para tu bebé."*

### Guía de tallas

⚠️ **Las medidas no se transcribieron a propósito.** Los números no se leen con seguridad y una talla mal copiada causaría pedidos equivocados. Se necesita el original.

- **Camisetas y chaquetas (cm):** tallas XS a XXL, con busto, cintura y cadera. ⚠️ Parece faltar la talla XL.
- **Pantalones (cm):** tallas 6 a 16, con cintura, cadera y largo interno.
- **Cómo medirse:** busto, la parte más amplia. Cintura, la parte más estrecha. Cadera, la parte más amplia.
- *"Las medidas son aproximadas y pueden variar según el tipo de prenda."*

### Prendas individuales de referencia

Camiseta blanca con logo, delantal negro con bolsillos, jean azul oscuro corte clásico, chaqueta negra (sin rótulo en la lámina), gorra negra con logo, zapato antideslizante con puntera, tenis negro antideslizante y bolso térmico para domicilios.

### Especificaciones de prendas por área

| Área | Camiseta | Pantalón | Calzado |
|------|----------|----------|---------|
| Administrativa | Poliéster 65 %, algodón 35 % | Jean azul oscuro corte clásico | Tenis negro cómodo |
| Asesora comercial | Poliéster 65 %, algodón 35 % | Jean azul oscuro corte clásico | Tenis negro cómodo |
| Confección | Poliéster 65 %, algodón 35 % | Jean azul oscuro cómodo | Antideslizante con puntera |
| Servicios generales | Poliéster 65 %, algodón 35 % | Jean azul oscuro cómodo | Antideslizante |
| Domiciliarios | Poliéster 100 % (chaqueta) | Jean azul oscuro resistente | Antideslizante con puntera |

⚠️ Los porcentajes se leen con dificultad: confirmar con el original.

### Presentación personal por área

| Aspecto | Asesora comercial | Operario(a) de confección |
|---------|-------------------|---------------------------|
| Cabello | Organizado, limpio y arreglado | Totalmente recogido y limpio. No se permite accesorios en el cabello |
| Uñas | Cortas o moderadas, colores neutros o pastel | Cortas o moderadas |
| Esmalte | — | ⚠️ "Puede usar tonos muy permanentes y discretos" (lectura dudosa) |
| Maquillaje | Natural | — |
| Perfume | Sutil | — |
| Accesorios | Discretos (aretes pequeños, reloj, pulsera delgada) | No usar anillos, pulseras, collares ni aretes |
| Otro | — | Mantener la estación de trabajo limpia y ordenada |

### Compromiso del colaborador

Me comprometo a:

- Usar mi dotación completa y adecuadamente.
- Mantenerla limpia, en buen estado y cuidada.
- Utilizar los elementos de protección personal según corresponda.
- Seguir las recomendaciones de este manual.
- Representar con orgullo a Alalá Store.

Campos: firma del colaborador(a) y fecha.

**Cierre:** *"¡Gracias! Por ser parte de Alalá Store y por reflejar con tu actitud y presentación la esencia de nuestra marca. ¡Juntos llevamos nuestro estilo más lejos!"*

---

## 6.1 Manual de dotación: versión de "Ultima info" (llegó el 10 de noviembre de 2026)

16 láminas numeradas: 01, 03 a 11 y 13 a 18. **Faltan la 02 y la 12.** Esta versión manda sobre la presentación y el manual de 24 láminas. Las láminas están en `public/img/dotacion/laminas/` y los recortes de prendas y personas en `public/img/dotacion/`.

| Lámina | Tema | Dónde quedó |
|---|---|---|
| 01 | Manual de dotación: introducción, objetivo, quiénes la reciben, qué incluye, recomendaciones | Dotación: portada, objetivo y alcance, recomendaciones |
| 03 | Contrato: qué es, qué incluye, qué te brinda | Inducción general: "Tu contrato" |
| 04 | Introducción a la dotación: tipos y ejemplos por área | Dotación: "¿Qué es la dotación?" y "Prendas por área" |
| 05 | Objetivo, alcance, funciones de la dotación, importante | Dotación: "Objetivo y alcance" |
| 06 | Dotación y presentación: prendas por área, recomendaciones | Dotación: "Prendas por área" |
| 07 | Nuestros valores (6) | Quiénes somos: textos de 6 de los 10 valores, entrada y recuerda |
| 08 | Código de vestuario: cómo debe ser, imagen adecuada, evita esto | Dotación: "Código de vestuario" (reemplaza el de la presentación) |
| 09, 10, 11, 17, 18 | Asesor(a) comercial, domiciliario(a), operaria(o) de confección, servicios generales, maternidad | Dotación por cargo |
| 13 a 16 | Protección: administrativa, confección, logística y despacho, servicios generales | Elementos de protección por área |

Decisiones tomadas:

- Cajero(a) no tiene lámina nueva: se mantiene con la presentación (ppt 18).
- Se mantienen los 10 valores; solo cambian los textos de los 6 que trae la lámina 07. Siguen "por confirmar".
- Protección en domicilios no tiene lámina nueva: se mantiene la del manual anterior, marcada "por confirmar".
- Se escribe "Alalá" donde las láminas dicen "alala".
- Lámina 18: "Zapatos de lactancia (sportivos)" se escribió "(deportivos)".
- Ya no aparecen: casco, chaqueta magenta y bolso térmico del domiciliario; cinturón y maletín del asesor; delantal negro del operario; delantal impermeable e implementos de limpieza de servicios generales; brazo de lactancia; gel antibacterial, protector solar y tapones auditivos de la protección administrativa.

## 7. Formato de entrega de dotación

Registro de 4 entregas al año:

| Entrega | Periodo |
|---------|---------|
| 1 | Enero – Marzo |
| 2 | Abril – Junio |
| 3 | Julio – Septiembre |
| 4 | Octubre – Diciembre |

Hay dos versiones de la planilla:

| | Planilla suelta (chat) | Lámina 20 del manual (img 11) |
|---|---|---|
| Título | Planilla de entrega de dotación, "Registro de 4 entregas al año" | Planilla de entrega de dotación (4 veces al año) |
| Datos | Nombre del colaborador(a), cédula, fecha de entrega, sede, cargo, área, responsable de entrega, tipo de entrega | Nombre del colaborador(a), cédula, área, cargo, fecha |
| Columnas | N.º, descripción de la prenda o elemento, talla, cantidad, estado, observaciones | Ítem, descripción, talla, cant., estado |
| Filas | 7 | 6 |
| Pie | Observaciones generales. Entregó (nombre y firma del responsable). Recibí a conformidad (nombre y firma del colaborador/a) | Observaciones. Entregado por (Recursos Humanos). Recibido por (Colaborador) |

⚠️ En la planilla suelta, el texto "Observaciones generales" queda encima de la fila 7. Hay que corregirlo antes de publicarla como PDF.

---

## 8. Bienestar y cronogramas

### Plan anual de bienestar laboral (plan)

*"Bienestar que inspira, motiva y transforma."* Una propuesta para cuidar, motivar y fortalecer a las personas que hacen parte de nuestra tienda.

- **Responsable:** Gestión Humana, con apoyo de SST y administración.
- **Vigencia:** programación anual. ⚠️ No indica el año.
- **Dirigido a:** todos los colaboradores, incluyendo ventas, atención al cliente, administración, caja y organización de mercancía e inventarios. También contempla actividades de integración que podrán involucrar a sus familias.
- **Recursos:** humanos, económicos, tecnológicos y materiales. Los valores deben definirse con cotizaciones y presupuesto anual; el documento no fija montos.
- **Formato (excel):** "Proceso de compensación y mantenimiento del talento humano · Programa de bienestar laboral". Fecha de elaboración: 5 de noviembre de 2026. Elaborado por Gestión Humana, con apoyo de SST y administración. El presupuesto mensual y total de todas las actividades figura como "por definir". Los indicadores y el responsable son los mismos para las 21.

**Introducción.** ALALA STORE reconoce que sus colaboradores son fundamentales para el crecimiento y buen funcionamiento de la empresa. Por esta razón, se propone implementar un Plan de Bienestar Laboral que permita mejorar su calidad de vida, fortalecer la motivación y promover un ambiente de trabajo agradable.

**Objetivo general.** Diseñar e implementar un Plan de Bienestar Laboral en ALALA STORE que contribuya al mejoramiento de la calidad de vida de los colaboradores, fortaleciendo su motivación, salud, desarrollo personal y desempeño laboral.

**Objetivos específicos:**

- Promover hábitos saludables que permitan prevenir el cansancio físico y mental durante las actividades laborales.
- Fortalecer la motivación, la comunicación y el trabajo en equipo para mejorar el ambiente laboral y la atención al cliente.
- Fomentar el crecimiento personal, educativo y financiero de los colaboradores mediante actividades de formación y participación.

**Importancia.** El bienestar laboral permite que los colaboradores desarrollen sus actividades en un ambiente agradable, motivador y saludable. Además, contribuye a mejorar la atención al cliente, fortalecer las relaciones entre compañeros, reducir el estrés, prevenir molestias físicas por permanecer de pie durante largos periodos y aumentar el compromiso con los objetivos comerciales de la empresa.

**Marco normativo de referencia:**

- Decreto 614 de 1984: bases para la organización y administración de la salud ocupacional.
- Ley 100 de 1993: Sistema de Seguridad Social Integral.
- Decreto Ley 1567 de 1998: sistema de estímulos y programas de bienestar. Dirigido al sector público; se incluye como referente académico, no como obligación de ALALA STORE.
- Ley 1010 de 2006: medidas para prevenir y sancionar el acoso laboral.
- Resolución 2646 de 2008: factores de riesgo psicosocial.
- Decreto 1072 de 2015: reglamenta el sector trabajo y el SG-SST.
- Resolución 0312 de 2019: estándares mínimos del SG-SST.

### Las 21 actividades

| Componente y objetivo | Actividad | Mes | Objetivo | Descripción |
|---|---|---|---|---|
| **Físico:** promover el cuidado de la salud física, por las actividades que implican permanecer de pie, caminar, organizar bolsos y manipular mercancía. | Pausas activas en la tienda | Enero | Disminuir la fatiga y prevenir molestias musculares. | Estiramientos de brazos, piernas, cuello y espalda durante pequeños espacios de descanso en la jornada laboral. |
| | Día de hábitos saludables | Marzo | Fomentar el autocuidado y la alimentación saludable. | Jornada de hidratación, alimentación balanceada y recomendaciones para mantener hábitos saludables. |
| | Cuida tu postura | Mayo | Prevenir dolores y lesiones durante las actividades laborales. | Capacitación sobre posturas adecuadas al organizar bolsos, levantar cajas, acomodar estanterías y permanecer de pie. |
| **Mental:** favorecer la salud mental y brindar herramientas para manejar el estrés relacionado con las ventas, la atención al cliente y el cumplimiento de metas. | Respira y relájate | Abril | Disminuir el estrés durante la jornada laboral. | Ejercicios de respiración y relajación en espacios establecidos, especialmente en temporadas de mayor movimiento comercial. |
| | Organiza tu tiempo | Julio | Mejorar la organización y planificación de las tareas. | Taller sobre distribución de actividades, prioridades y manejo del tiempo en ventas, inventarios y atención al cliente. |
| | Espacios de escucha | Octubre | Promover el cuidado de la salud mental. | Espacios de orientación donde los colaboradores puedan expresar sus preocupaciones laborales y recibir acompañamiento cuando lo necesiten. |
| **Emocional:** fortalecer la autoestima, la inteligencia emocional y la capacidad de manejar situaciones difíciles con clientes y compañeros. | Aprende a manejar tus emociones | Febrero | Fortalecer el autocontrol y la empatía. | Talleres sobre inteligencia emocional y manejo de situaciones difíciles durante la atención al cliente. |
| | Reconociendo tu esfuerzo | Junio | Aumentar la motivación y el sentido de pertenencia. | Reconocer a los colaboradores por su compromiso, responsabilidad, buena atención al cliente y trabajo en equipo. |
| | Actitud positiva en el trabajo | Septiembre | Fortalecer la confianza y las relaciones interpersonales. | Dinámicas sobre comunicación asertiva, respeto, empatía y solución de conflictos. |
| **Financiero:** fortalecer los conocimientos financieros para promover una mejor administración de ingresos y recursos económicos. | Aprende a manejar tu dinero | Enero | Enseñar a organizar los ingresos y gastos personales. | Taller práctico sobre elaboración de presupuestos, control de gastos y planificación financiera. |
| | Reto del ahorro | Abril | Fomentar el hábito del ahorro. | Motivar a establecer metas de ahorro mensuales y compartir recomendaciones para alcanzarlas. |
| | Finanzas inteligentes | Agosto | Promover el uso responsable del dinero y el crédito. | Capacitación sobre manejo de deudas, tarjetas de crédito, intereses y compras responsables. |
| **Educativo / profesional:** fortalecer habilidades y conocimientos para mejorar el desempeño y crecimiento dentro de ALALA STORE. | Aprende a vender mejor | Febrero | Fortalecer las habilidades comerciales y de atención al cliente. | Capacitar en técnicas de venta, comunicación, asesoría sobre bolsos y manejo de objeciones. |
| | Exhibición y organización de productos | Junio | Mejorar las habilidades de organización y presentación de mercancía. | Talleres sobre exhibición de bolsos, organización de vitrinas, rotación de productos y control de inventarios. |
| | Fortalecimiento de habilidades digitales | Agosto | Desarrollar competencias para apoyar los procesos comerciales. | Capacitar en herramientas digitales, redes sociales, fotografía de productos y atención de clientes por medios virtuales. |
| **Social:** fortalecer la integración, el compañerismo y las relaciones positivas entre los colaboradores. | Día de integración ALALA STORE | Mayo | Fortalecer la unión y el trabajo en equipo. | Actividades recreativas, juegos y dinámicas para compartir fuera de las responsabilidades habituales de ventas. |
| | Compartiendo en familia | Septiembre | Promover la integración entre la empresa y las familias de los colaboradores. | Jornada especial con juegos, actividades recreativas y espacios de integración familiar. |
| | ALALA STORE solidaria | Noviembre | Fomentar la solidaridad y el compromiso social. | Campaña voluntaria de recolección de ropa, alimentos o útiles escolares para apoyar a personas que lo necesiten. |
| **Espiritual:** promover el crecimiento personal, la tranquilidad interior y los valores humanos, respetando las creencias de todos. | Construyendo mis sueños | Marzo | Motivar a identificar propósitos y metas personales. | Cada trabajador escribe sus sueños, metas y propósitos para el futuro. |
| | Valores que nos unen | Julio | Fortalecer los valores personales y organizacionales. | Dinámicas sobre respeto, honestidad, solidaridad, responsabilidad y empatía. |
| | Un momento para agradecer | Diciembre | Fomentar la gratitud y el pensamiento positivo. | Actividad voluntaria para expresar aquello por lo que se sienten agradecidos en su vida personal y laboral. |

### A quién va dirigida cada actividad (excel)

| Actividad | Mes | Población beneficiaria | Criterios de acceso |
|---|---|---|---|
| Pausas activas en la tienda | Enero | Todos los colaboradores de Alalá Store | Ser colaborador de la empresa; participación durante los espacios programados. |
| Aprende a manejar tu dinero | Enero | Todos los colaboradores de Alalá Store | Ser colaborador de la empresa y asistir al taller. |
| Aprende a manejar tus emociones | Febrero | Todos los colaboradores, especialmente personal de ventas y atención al cliente | Ser colaborador de la empresa y asistir al taller. |
| Aprende a vender mejor | Febrero | Personal de ventas y atención al cliente; abierta a los demás colaboradores | Desempeñar funciones comerciales o de atención; los demás colaboradores podrán participar según programación. |
| Día de hábitos saludables | Marzo | Todos los colaboradores de Alalá Store | Ser colaborador de la empresa; asistir a la jornada. |
| Construyendo mis sueños | Marzo | Todos los colaboradores de Alalá Store | Ser colaborador de la empresa; participación voluntaria. |
| Respira y relájate | Abril | Todos los colaboradores de Alalá Store | Ser colaborador de la empresa; participar en los espacios establecidos. |
| Reto del ahorro | Abril | Todos los colaboradores de Alalá Store | Participación voluntaria de los colaboradores interesados. |
| Cuida tu postura | Mayo | Todos los colaboradores, especialmente ventas y organización de mercancía | Ser colaborador de la empresa y participar en la capacitación programada. |
| Día de integración Alalá Store | Mayo | Todos los colaboradores de Alalá Store | Ser colaborador de la empresa; participación según programación. |
| Reconociendo tu esfuerzo | Junio | Todos los colaboradores de Alalá Store | Ser colaborador de la empresa; reconocimiento según compromiso, responsabilidad, atención y trabajo en equipo. |
| Exhibición y organización de productos | Junio | Personal de ventas y organización de mercancía e inventarios | Desempeñar funciones relacionadas con exhibición, mercancía o inventarios. |
| Organiza tu tiempo | Julio | Todos los colaboradores de Alalá Store | Ser colaborador de la empresa y asistir al taller. |
| Valores que nos unen | Julio | Todos los colaboradores de Alalá Store | Ser colaborador de la empresa y participar en la actividad. |
| Finanzas inteligentes | Agosto | Todos los colaboradores de Alalá Store | Ser colaborador de la empresa y asistir a la capacitación. |
| Fortalecimiento de habilidades digitales | Agosto | Todos los colaboradores que apoyan procesos comerciales | Ser colaborador de la empresa; prioridad para quienes apoyan ventas y atención virtual. |
| Actitud positiva en el trabajo | Septiembre | Todos los colaboradores de Alalá Store | Ser colaborador de la empresa y participar en la dinámica. |
| Compartiendo en familia | Septiembre | Colaboradores y sus familias | Colaborador de Alalá Store; inscripción o confirmación previa para organizar la jornada. |
| Espacios de escucha | Octubre | Todos los colaboradores de Alalá Store | Ser colaborador de la empresa; solicitar o aceptar voluntariamente el espacio de orientación. |
| Alalá Store solidaria | Noviembre | Todos los colaboradores de Alalá Store y comunidad beneficiaria | Aporte o participación voluntaria. |
| Un momento para agradecer | Diciembre | Todos los colaboradores de Alalá Store | Participación voluntaria, respetando las creencias de cada persona. |

Las fechas específicas podrán definirse de acuerdo con la operación de la tienda y la disponibilidad de los colaboradores.

**Frase del plan:** *"En ALALA STORE creemos que el éxito no solo está en vender productos, sino también en cuidar, valorar y motivar a las personas que hacen parte de nuestra historia."*

### Seguimiento y evaluación del plan

- Registro de asistencia a las actividades.
- Encuestas de satisfacción a los colaboradores.
- Evaluación del cumplimiento del cronograma.
- Recolección de opiniones y sugerencias.
- Identificación de oportunidades de mejora para el siguiente año.

**Indicadores sugeridos:**

- Cumplimiento: actividades realizadas / actividades programadas × 100.
- Participación: colaboradores asistentes / colaboradores convocados × 100.
- Satisfacción: resultado de las encuestas aplicadas después de las actividades.

### Cronograma de inducción específica: primera semana (img 12)

Horario igual todos los días:

- **Bloques:** 8:00–10:00 a. m. (2 horas), 10:15 a. m.–12:00 m. (1 h 45 min) y 2:00–3:30 p. m. (1 h 30 min).
- **Almuerzo:** 12:00 m.–1:00 p. m.
- **Recesos:** 10:00–10:15 a. m. (15 min) y 1:00–2:00 p. m. (1 hora).

| Día | Bloque | Actividad | Tema o contenido |
|-----|--------|-----------|------------------|
| **Lunes** | 8:00 | Bienvenida y presentación al área de confección | Presentación del equipo de trabajo. Recorrido por el área de confección. Presentación de la empresa Alalá |
| | 10:15 | Presentación del cargo y funciones específicas | Funciones y responsabilidades. Metas y estándares de calidad. Flujo del proceso de confección |
| | 2:00 | Normas y políticas internas del área | Normas de convivencia y reglamento interno. Presentación del manual de seguridad. Políticas de calidad |
| **Martes** | 8:00 | Sistema de gestión SST en el área | Políticas de seguridad y salud en el trabajo. Responsabilidades en seguridad. Reporte de condiciones inseguras |
| | 10:15 | Riesgos y peligros en la confección | Identificación de peligros en el área. Uso correcto de elementos de protección (EPP). Medidas de prevención y autocuidado |
| | 2:00 | Procedimientos de emergencia | Plan de emergencias y evacuación. Extintores y salidas de emergencia. Simulacro y puntos de encuentro |
| **Miércoles** | 8:00 | Conocimiento de máquinas y herramientas | Máquinas de confección (plana, fileteadora, collareta, recubridora, ojaladora, etc.). Herramientas manuales y sus usos |
| | 10:15 | Materiales e insumos | Telas, forros, herrajes, hilos, cierres, avíos. Cuidado, almacenamiento y manejo |
| | 2:00 | Proceso de confección paso a paso | Explicación del proceso de elaboración de bolsos y accesorios. Secuencia de operaciones |
| **Jueves** | 8:00 | Práctica guiada en máquina | Enhebrado, regulación y puntadas básicas. Costuras rectas, curvas y remates |
| | 10:15 | Elaboración de piezas simples | Confección de piezas básicas. Revisión y corrección |
| | 2:00 | Práctica aplicada | Ensamble de piezas. Revisión de calidad del trabajo |
| **Viernes** | 8:00 | Evaluación de aprendizajes | Evaluación teórica y práctica. Retroalimentación individual |
| | 10:15 | Estándares de calidad en la confección | Criterios de calidad Alalá. Detalles que marcan la diferencia |
| | 2:00 | Cierre de inducción y compromiso | Resolución de dudas. Entrega de dotación (si aplica). Firma de compromiso y bienvenida oficial |

---

## 8.3 Modelo de formación empresarial

El modelo de formación empresarial de Alalá Store está diseñado para fortalecer el talento humano mediante procesos de aprendizaje continuo, capacitación y desarrollo de competencias.

**Propósito:** preparar a los colaboradores para responder a las necesidades de la organización, mejorar sus habilidades laborales y contribuir al crecimiento empresarial, teniendo en cuenta la actividad comercial y el manejo del comercio electrónico.

**Estructura:**

1. **Diagnóstico de necesidades:** identificar las necesidades de capacitación de cada área y las oportunidades de mejora de los colaboradores.
2. **Planeación de la formación:** establecer los temas, objetivos, responsables, recursos y tiempos de cada capacitación.
3. **Ejecución:** desarrollar las capacitaciones mediante talleres, cursos, charlas y actividades prácticas.
4. **Evaluación:** medir los conocimientos adquiridos y la efectividad de las actividades realizadas.
5. **Seguimiento y mejora:** verificar la aplicación de lo aprendido y establecer nuevas oportunidades de formación.

---

## 9. Contradicciones por resolver

| # | Tema | Versión A | Versión B |
|---|------|-----------|-----------|
| 1 | Nombre | Alalá (logo, manual) | Alala (agenda, delantales) |
| 2 | Jefe inmediato | Supervisor(a) de producción (img 3) | Jefe de Producción (img 2) |
| 3 | Área del cargo | Confección (img 3) | Producción (img 2) |
| 4 | Inducción del lunes | Un día completo con 11 temas, hasta las 4:30 p. m. (img 2) | Una semana, con otros temas el lunes, hasta las 3:30 p. m. (img 12) |
| 5 | Almuerzo | 12:15–1:00 p. m. (img 2) | 12:00–1:00 p. m. más receso de 1:00 a 2:00 p. m. (img 12) |
| 6 | Valores | 10 valores (img 10) | Pie de página: Pasión, Respeto, Compromiso, Calidad, Trabajo en equipo. Manual: Pasión, Respeto, Honestidad, Compromiso, Trabajo en equipo. Agenda: Responsabilidad, Respeto, Compromiso, Trabajo en equipo, Honestidad |
| 7 | Uniforme de confección | Bata o uniforme, con camiseta rosada en la foto (img 5) | Camiseta blanca y delantal negro (img 11) |
| 8 | EPP de confección | Tapabocas, dedal, gafas, protector auditivo, calzado y guantes (img 5) | Camiseta, jean, calzado, protección visual y guantes (img 2). Mascarilla y tapones son opcionales (img 11) |
| 9 | Calzado de domiciliarios | Tenis negros antideslizantes (lámina 10) | Antideslizante con puntera (lámina 22) |
| 10 | Impermeable de domiciliarios | Chaqueta negra impermeable (lámina 10) | Impermeable amarillo (lámina 16) |
| 11 | Planilla | 7 filas y 8 datos (suelta) | 6 filas y 5 datos (lámina 20) |
| 12 | Quién entrega la dotación | Responsable de entrega (suelta) | Recursos Humanos (lámina 20) |
| 13 | Nombre | Alalá Store (presentación) | ALALA STORE, sin tilde (plan) |
| 14 | A quién cubre el plan de bienestar | "Todos los colaboradores", y al detallar solo tienda: ventas, atención al cliente, administración, caja e inventarios (plan) | Confección, domicilios, servicios generales y logística también existen (manual e inducción) |
| 15 | Valores: dos listas más | Cultura: Respeto, Compromiso, Creatividad, Trabajo en equipo, Orientación al cliente (ppt 7 y 9) | Plan: respeto, honestidad, solidaridad, responsabilidad, empatía |
| 16 | ✅ Resuelto: manda la presentación. Prenda de asesor(a) comercial | Camiseta blanca con logo (lámina 9) y polo blanco (ppt 16) | Camisa blanca de manga larga con logo (ppt 17) |
| 17 | ✅ Resuelto: manda la presentación. Calzado de asesor(a) comercial | Tenis negros cómodos (lámina 9) o zapatos o tenis negros (ppt 16) | Zapatos cerrados negros antideslizantes (ppt 17) |
| 18 | ✅ Resuelto: manda la presentación. Pantalón | Jean azul oscuro (manual, ppt 17 a 19) | Pantalón azul oscuro clásico (ppt 16); pantalón negro también permitido para domiciliarios (ppt 19) |
| 19 | ✅ Resuelto: manda la presentación. Chaqueta de domiciliario(a) | Negra impermeable (lámina 10) | Magenta en las fotos (ppt 19) |
| 20 | ✅ Resuelto: manda la presentación. Cabeza de domiciliario(a) | Gorra negra con logo (lámina 10) | Casco (ppt 19 y lámina 16). Además, ppt 16 prohíbe gorras |
| 21 | ✅ Resuelto: se incluye el cargo. Dotación de cajero(a) | Cargo nuevo con lámina propia (ppt 18) | No aparece en el manual de 24 láminas |
| 22 | Descripción de la marca | Bolsos y accesorios (documentos) | "Moda & estilo", "Detalles de lujo" (video) |
| 23 | Prendas del área de ventas | Chaleco, blusa y jean (láminas 04 y 06) | Camisa blanca, jean y zapatos negros del asesor(a) comercial (lámina 09) |
| 24 | Pantalón y calzado administrativos | Blusa y pantalón (láminas 04 y 06) | Jean azul oscuro y tenis negro (manual anterior, especificaciones) |
| 25 | Protección administrativa | Guantes anticorte y dedal (lámina 13), propios de confección | Gel, protector solar, tapones (manual anterior) |
| 26 | Gorras | "Evita gorras en el área de trabajo" (lámina 08) | Gorra en la dotación de domiciliario, servicios generales y logística (láminas 10, 15, 17) |

### Errores en los documentos originales

- **Numeración de la inducción:** el pie marca la página 4 dos veces (img 5 e img 7), y la sección 06 aparece después de la 07 y la 08 en el documento. No hay una sección 01 con título: la portada parece ocupar ese lugar.
- **Índice del manual:** tiene saltos en la numeración y anuncia "Entrega de dotación (4 veces al año)" y "Contacto y actualización", que no tienen lámina propia.
- **Lámina 13 del manual:** los rótulos no coinciden con las fotos ("Tapabocas" sobre unos guantes, "Mascarilla" sobre un dedal).
- **Lámina 22 del manual:** en la columna Camiseta, la fila de Domiciliarios habla de la chaqueta.
- **Ppt 17 a 19:** "No usar camiseta sucia" aparece junto a la foto de un zapato. En domiciliario dice "calzado sucio".
- **Ppt 17 a 19:** prohíben el "calzado de otras marcas o sin el logo Alalá Store". Conviene confirmarlo, porque obliga a que la empresa entregue el calzado con su logo.
- **Ppt 12 a 14:** los pasos de afiliación están escritos para quien afilia (el empleador), no para quien lee la inducción (el colaborador).

---

## 10. Pendientes con Alalá Store

### Contenido que falta

- [x] Historia (llegó el 10 de noviembre de 2026).
- [ ] Ubicación y contacto.
- [x] Nueva versión del manual de dotación, contrato y valores (llegó el 10 de noviembre de 2026).
- [ ] Láminas 02 y 12 del manual nuevo, si existen.
- [ ] Inducciones específicas de otros cargos, si existen.
- [ ] Si la inducción general debe incluir EPS y caja de compensación.
- [ ] Fechas exactas y año del plan de bienestar.
- [ ] Evaluación de desempeño: qué texto acompaña al botón.
- [x] Modelo de formación empresarial (llegó el 10 de noviembre de 2026).

### Links

- [ ] Link de la evaluación de inducción general.
- [ ] Link de la evaluación de desempeño.
- [ ] Si la evaluación teórica del viernes usa uno de esos links o uno propio.

### Archivos

- [ ] Logo en buena calidad, idealmente SVG o PNG con fondo transparente.
- [ ] Colores oficiales, si existen.
- [ ] Originales editables o en PDF del manual de dotación (sobre todo la guía de tallas), la inducción, el cronograma y la planilla.
- [ ] Fotos que se puedan publicar.
- [ ] Video de presentación sin la marca de agua de HeyGen, si se va a publicar.
- [ ] Plan de bienestar en PDF para descarga: ¿se puede publicar el archivo actual?

### Decisiones

- [ ] Resolver las contradicciones de la sección 9. Ya resueltas: 16 a 21 (dotación).
- [ ] Contradicciones 23 a 26, que salen de las láminas de "Ultima info".
- [ ] Dominio: ¿ya hay uno o hay que escoger?
- [ ] Fecha límite para entregar el contenido.
- [ ] Trato: la inducción habla en femenino ("bienvenida", "compañeras") y el manual en general ("colaboradores", "operario(a)").
