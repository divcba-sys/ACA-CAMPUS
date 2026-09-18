'use strict';

const safetySheets=[
  {
    id:'aceite-vegetal-usado',title:'Gestión de Aceite Vegetal Usado',sector:'Tienda / Gestión ambiental',type:'Gestión ambiental',accent:'#35BDB5',filters:['Tienda','Ambiente','Operación'],
    description:'Explica el retiro, enfriado, almacenamiento y entrega del aceite vegetal usado, junto con su registro, segregación correcta y elementos de protección personal.',
    keywords:'aceite vegetal usado AVU freidora biodiésel residuos retiro transportista TAVUS',
    scope:'Gestionar de forma segura el aceite utilizado en las freidoras de Tienda, desde su retiro hasta la entrega a un transportista habilitado.',
    controls:['Reemplazar el aceite ante oscurecimiento, burbujas o humo.','Dejar enfriar el AVU a menos de 38 °C antes de drenarlo.','No superar el 90 % de capacidad del recipiente.','Almacenar bajo techo, sobre contención y con identificación.','Verificar al transportista y archivar remito o manifiesto.'],
    recommendations:['Mantener separados los recipientes y conservar la documentación en la carpeta MAS.'],
    safety:['Guantes de nitrilo','Calzado de seguridad','Ropa de trabajo','Tapabocas','Protector facial','Bandolera reflectiva'],
    warnings:['No mezclar con aceites lubricantes, agua, restos de alimentos ni grasas.'],norms:['Resolución 133/19 de APrA para solicitudes TAVUS en CABA.'],
    files:[{label:'Abrir ficha original',name:'aceite vegetal.pdf',path:'aceite-vegetal-usado.pdf'}]
  },
  {
    id:'retiro-agua-tanques-sumps',title:'Retiro de agua en tanques y sumps',sector:'Playa / Tanques subterráneos',type:'Seguridad y operación',accent:'#35BDB5',filters:['Playa','Seguridad','Operación'],
    description:'Detalla la preparación de la zona, extracción segura de agua, disposición de emulsiones y cierre de bocas en tanques subterráneos y sumps.',
    keywords:'agua tanque sump hidrocarburo bomba purga bloqueo emulsión despacho',
    scope:'Retirar agua acumulada en tanques subterráneos y sumps, controlando la zona, el despacho, la energía y la disposición del residuo.',
    controls:['Delimitar un radio mínimo de 2 metros y disponer extintor rodante.','Suspender el despacho antes de intervenir.','Extraer por la boca de purga hasta obtener combustible limpio.','Bloquear eléctricamente la bomba para intervenir el sump.','Verificar ausencia de agua y cerrar herméticamente las tapas.'],
    recommendations:['Utilizar bomba apta, ganchos, recipiente de hasta 20 litros y kit sacamuestras cuando esté disponible.'],
    safety:['Guantes de doble nitrilo','Calzado y lentes de seguridad','Ropa de trabajo','Tapabocas','Protector facial','Bandolera reflectiva'],
    warnings:['No descender a sumps de más de 1,20 m; debe intervenir mantenimiento.','Prohibido fumar, usar celular y permitir peatones en la zona.'],norms:[],
    files:[{label:'Abrir ficha original',name:'agua en tanque.pdf',path:'retiro-agua-tanques-sumps.pdf'}]
  },
  {
    id:'despacho-granel',title:'Despacho en batanes, bidones y tambores',sector:'Playa',type:'Seguridad y operación',accent:'#35BDB5',filters:['Playa','Seguridad','Operación'],
    description:'Define condiciones, capacidades, homologaciones y pasos seguros para cargar combustible en batanes, tambores y bidones, incluyendo cierres, puesta a tierra y prohibiciones.',
    keywords:'batán bidón tambor combustible granel homologación puesta tierra gasoil kerosene pico prolongador',
    scope:'Establecer las condiciones de carga segura de combustibles líquidos a granel en recipientes habilitados.',
    controls:['Verificar homologación, estado, cierre y capacidad del recipiente.','Conectar puesta a tierra y venteo cuando corresponda.','Cargar como máximo al 90 % y permanecer durante toda la operación.','Finalizar con cierre hermético y disposición del material absorbente.'],
    recommendations:['Orientar el vehículo y utilizar plataforma de media altura cuando la operación lo requiera.'],
    safety:['Extintor de 70 kg','Material absorbente','Pico prolongador','Guantes, calzado y lentes de seguridad','Bandolera reflectiva'],
    warnings:['No cargar recipientes deteriorados, no homologados o que hayan contenido otros productos.','No realizar la carga dentro del vehículo.','Prohibido fumar, usar celular y permitir peatones.'],
    norms:['Decreto N.º 779/95.','Disposición S.S.E. N.º 76/97, Anexo VII.'],
    files:[{label:'Abrir ficha original',name:'batan-bidones.pdf',path:'despacho-batanes-bidones-tambores.pdf'}]
  },
  {
    id:'seguridad-boxes',title:'Seguridad operativa en Boxes',sector:'Boxes / Lubricentro',type:'Seguridad y operación',accent:'#35BDB5',filters:['Boxes / Lubricentro','Seguridad','Operación'],frequency:'Control diario',
    description:'Reúne verificaciones diarias del elevador, ingreso del vehículo, uso de trabas, cambio de aceite y maniobras seguras durante la atención en Boxes.',
    keywords:'boxes lubricentro elevador vehículo trabas lingas cilindros aceite lubriexperto control diario',
    scope:'Controlar las condiciones del elevador y ordenar las maniobras de ingreso, trabajo y egreso de vehículos en Boxes.',
    controls:['Verificar diariamente capacidad, columnas, anclajes, lingas, pérdidas y fluido hidráulico.','Probar la elevación y el accionamiento simultáneo de las cuatro trabas.','Constatar el peso del vehículo y guiar el ingreso desde un lateral.','Colocar tacos, apagar el vehículo y dejar la transmisión en neutro.','Retirar receptor y material antes de bajar el vehículo.'],
    recommendations:['Observar partes calientes, cortantes y anomalías del bajo motor antes de operar.'],
    safety:['Guantes de nitrilo','Calzado de seguridad','Lentes de seguridad'],
    warnings:['No guiar el vehículo ubicándose delante.','No usar elementos improvisados para trabar el capot.','No debe haber personas delante al dar arranque.'],norms:[],
    files:[{label:'Abrir ficha original',name:'boxes.pdf',path:'seguridad-operativa-boxes.pdf'}]
  },
  {
    id:'campana-extractora',title:'Campana extractora: filtros y ductos',sector:'Tienda / Sector Edilicio',type:'Ficha técnica',accent:'#F4B453',filters:['Tienda','Mantenimiento','Sector Edilicio'],frequency:'Controles periódicos',
    description:'Indica cómo verificar succión, ruidos, roturas, limpieza de filtros, campana y ductos, y cuándo solicitar mantenimiento ante olores, humo u oxidación.',
    keywords:'campana extractora filtro ducto cocina grasa succión limpieza humo olor mantenimiento',
    scope:'Comprobar el funcionamiento y la limpieza del sistema de extracción de cocina para evitar acumulación de grasa, humo y aire viciado.',
    controls:['Comprobar succión colocando una servilleta sobre el filtro.','Verificar ausencia de roturas y ruidos extraños.','Limpiar filtros con agua tibia, esponja y detergente biodegradable.','Solicitar mantenimiento ante óxido, pintura deteriorada, humo u olores.'],
    frequencies:['Filtros: limpieza diaria.','Campana y ducto: como mínimo una vez al año.','Equipos de uso intensivo: dos veces al año.'],
    recommendations:['Dejar secar completamente el filtro antes de volver a colocarlo.'],safety:[],warnings:[],norms:[],
    files:[{label:'Abrir ficha original',name:'Campana Extractora.pdf',path:'campana-extractora.pdf'}]
  },
  {
    id:'compresor-aire',title:'Compresor de aire',sector:'Sector Edilicio / Mantenimiento',type:'Ficha técnica',accent:'#F4B453',filters:['Mantenimiento','Seguridad','Sector Edilicio'],frequency:'Controles periódicos',
    description:'Reúne controles de presostato, purga, aceite, pérdidas, partes móviles y requisitos normativos para operar y mantener el compresor de aire con seguridad.',
    keywords:'compresor aire presostato purga aceite cañería presión aparato sometido presión mantenimiento',
    scope:'Mantener el compresor accesible, protegido y dentro de sus parámetros de trabajo, con controles preventivos y disposición segura de residuos.',
    controls:['Verificar el presostato y detención a 8,5 bar.','Purgar el tanque y controlar trampas de agua.','Verificar protección de partes móviles.','Controlar nivel y reemplazo de aceite.','Detectar pérdidas visual y auditivamente en cañerías.'],
    frequencies:['Purga del tanque: semanal.','Presostato: trimestral.','Cambio de aceite: semestral.','Medición de espesores: anual.','Prueba hidráulica: cada 5 años.'],
    recommendations:['Mantener libre el acceso y utilizar el lubricante recomendado por el fabricante.'],
    safety:['Desenergizar antes de purgar.','Utilizar los EPP correspondientes.','Disponer agua y aceite como residuos peligrosos/especiales.'],warnings:[],
    norms:['Ley 19.587.','Decreto 351.','Normativa jurisdiccional vigente para aparatos sometidos a presión.'],
    files:[{label:'Abrir ficha original',name:'Compresor Aire.pdf',path:'compresor-aire.pdf'}]
  },
  {
    id:'prevencion-contaminacion',title:'Prevención de la contaminación',sector:'Playa / Gestión ambiental',type:'Gestión ambiental',accent:'#35BDB5',filters:['Playa','Ambiente','Seguridad','Operación'],
    description:'Presenta riesgos de contaminación y sistemas de detección, control y contención: sensores, telemedición, freatímetros, efluentes industriales y estructuras de doble pared.',
    keywords:'contaminación ambiente pérdida combustible suelo agua sensores telemedición freatímetro efluente doble pared',
    scope:'Reconocer fuentes de pérdida de combustible y los sistemas disponibles para detectar, controlar y contener una contaminación de suelo o agua subterránea.',
    controls:['Controlar stock y alarmas del sistema de telemedición.','Detectar agua mediante varillado y sensores.','Observar sumps, baldes, tanques, cañerías, cámaras y pavimentos.','Monitorear gases e hidrocarburos en suelo y agua subterránea.','Mantener rejillas, cámara separadora y estructuras de doble pared.'],
    recommendations:['Investigar tempranamente cualquier diferencia de stock, líquido detectado o señal de pérdida.'],safety:[],warnings:[],norms:[],
    files:[{label:'Abrir ficha original',name:'contaminacion.pdf',path:'prevencion-contaminacion.pdf'}]
  },
  {
    id:'derrames-playa',title:'Contención de derrames en Playa',sector:'Playa',type:'Seguridad y operación',accent:'#35BDB5',filters:['Playa','Seguridad','Ambiente','Operación'],
    description:'Ordena la suspensión, señalización, contención con absorbente mineral, disposición del residuo y comunicación de derrames ocurridos en la Playa de combustibles.',
    keywords:'derrame playa combustible absorbente mineral barrera kit antiderrame emergencia residuo peligroso',
    scope:'Contener derrames en Playa evitando su expansión, protegiendo la zona y gestionando el material contaminado como residuo peligroso o especial.',
    controls:['Suspender las operaciones y señalizar los sectores afectados.','Rodear el derrame con absorbente; sumar barreras ante gran volumen.','Cubrir la superficie y recoger el material sin superar 80 % de la bolsa.','Precintar y acopiar en el recinto de residuos peligrosos.','Activar el Rol de Emergencia ante derrames de gran magnitud.'],
    recommendations:['Mantener disponible el kit antiderrame con absorbente, bolsas, contenedor y barreras.'],
    safety:['Guantes de doble nitrilo','Calzado y lentes de seguridad','Ropa de trabajo','Protector facial','Bandolera reflectiva'],
    warnings:['No utilizar agua ni aserrín.','Prohibido fumar, usar celular y permitir peatones.'],norms:[],
    files:[{label:'Abrir ficha original',name:'derrame.pdf',path:'contencion-derrames-playa.pdf'}]
  },
  {
    id:'descarga-combustibles',title:'Descarga de combustibles líquidos',sector:'Playa',type:'Seguridad y operación',accent:'#35BDB5',filters:['Playa','Seguridad','Operación'],
    description:'Describe controles documentales, preparación, varillado, calidad, hermeticidad, conexiones y seguimiento necesarios para descargar combustibles líquidos de forma segura en estaciones de servicio.',
    keywords:'descarga combustible líquido cisterna camión calidad varillado telemedición puesta tierra purga',
    scope:'Coordinar la recepción y descarga del camión cisterna, verificando documentación, volumen, calidad, hermeticidad y seguridad durante toda la operación.',
    controls:['Controlar documentación, precintos, stock y zona de descarga.','Varillar volumen y presencia de agua antes de descargar.','Verificar tapas herméticas y conectar puesta a tierra.','Controlar aspecto claro, brillante y transparente del producto.','Descargar un producto a la vez y controlar su trazabilidad.'],
    recommendations:['Responsable de Descarga y chofer deben permanecer presentes y con visualización del lomo de tanque.'],
    safety:['Carteles, vallas, conos y calzas','Extintor rodante y portátil','Material absorbente','Guantes, calzado y lentes de seguridad','Bandolera reflectiva'],
    warnings:['Suspender la descarga y el despacho ante presencia de agua.','Prohibido fumar, usar celular y permitir peatones.'],norms:[],
    files:[{label:'Abrir ficha original',name:'descarga.pdf',path:'descarga-combustibles-liquidos.pdf'}]
  },
  {
    id:'elevador-cuatro-columnas',title:'Elevador de cuatro columnas',sector:'Boxes / Lubricentro',type:'Ficha técnica',accent:'#F4B453',filters:['Boxes / Lubricentro','Mantenimiento','Seguridad','Sector Edilicio'],frequency:'Control trimestral',
    description:'Guía la inspección de patas, trabas, cables, poleas, circuito hidráulico, corrosión y mantenimiento periódico del elevador de cuatro columnas utilizado en Boxes.',
    keywords:'elevador cuatro columnas boxes lubricentro traba cable polea hidráulico engrase trimestral',
    scope:'Verificar la integridad y el funcionamiento seguro del elevador antes de su utilización y gestionar mantenimiento ante cualquier desviación.',
    controls:['Revisar patas, paralelismo y anclaje de las cuatro trabas.','Controlar tope de elevación, cables, tuercas y contratuercas.','Observar poleas, ruidos, pérdidas hidráulicas y corrosión.','Asegurar engrase, ajuste y lubricación general.'],
    frequencies:['Mantenimiento general: frecuencia mínima de 3 meses.'],
    recommendations:['Solicitar asistencia de mantenimiento ante cualquier desviación.','Evitar exceso de grasa en los cables para no adherir suciedad.'],safety:[],warnings:[],norms:[],
    files:[{label:'Abrir ficha original',name:'Elevador cuatro columnas BOXES.pdf',path:'elevador-cuatro-columnas-boxes.pdf'}]
  },
  {
    id:'epp',title:'Elementos de Protección Personal',sector:'Playa / Tienda / Boxes',type:'Seguridad y operación',accent:'#35BDB5',filters:['Playa','Tienda','Boxes / Lubricentro','Seguridad','Operación'],frequency:'Control diario',
    description:'Define los EPP por función, sus tipos de protección y las pautas obligatorias de uso, control diario, conservación, certificación y reemplazo.',
    keywords:'EPP protección personal guantes calzado lentes casco ropa trabajo bandolera respiratoria auditiva anticaídas',
    scope:'Proteger a las personas frente a los riesgos de cada tarea mediante la selección, entrega, uso y conservación de elementos certificados.',
    controls:['Utilizar los EPP indicados para cada tarea y puesto.','Verificar diariamente su estado.','Guardar en un lugar limpio y seguro.','Solicitar recambio ante deterioro.','Registrar la entrega individual de EPP y ropa de trabajo.'],
    recommendations:['Seleccionar la protección según la evaluación de riesgos y no compartir elementos de uso individual.'],
    safety:['Protección de cabeza, ojos y cara','Protección de manos y brazos','Protección auditiva y respiratoria','Calzado de seguridad','Ropa protectora y sistemas anticaídas'],
    warnings:['No alterar los EPP ni utilizarlos deteriorados.'],norms:['Resolución 299/11 SRT.'],
    files:[{label:'Abrir ficha original',name:'EPP.pdf',path:'elementos-proteccion-personal.pdf'},{label:'Abrir procedimiento ampliado',name:'EPP 1.pdf',path:'epp-procedimiento.pdf'}]
  },
  {
    id:'instalacion-electrica',title:'Instalación eléctrica',sector:'Sector Edilicio / Mantenimiento',type:'Ficha técnica',accent:'#F4B453',filters:['Mantenimiento','Seguridad','Sector Edilicio'],frequency:'Controles periódicos',
    description:'Establece verificaciones visuales de tableros, cartelería, puesta a tierra, bloqueos, parada de emergencia y cámaras eléctricas, reservando reparaciones a personal especializado.',
    keywords:'instalación eléctrica tablero puesta tierra diferencial termomagnético bloqueo parada emergencia APE mantenimiento',
    scope:'Detectar visualmente condiciones inseguras en instalaciones eléctricas y derivar toda adecuación o reparación a personal especializado y capacitado.',
    controls:['Verificar cartelería, identificación, esquema unifilar y contratapas.','Controlar cierre, burletes y puesta a tierra de tapas.','Mantener libre el acceso a tableros.','Bloquear y señalizar protecciones que vuelvan a actuar.','Revisar cámaras de pase y sellado de la instalación APE.'],
    frequencies:['Sistema de parada de emergencia: trimestral.','Estado general de cámaras de pase: anual.'],
    recommendations:['Mantener candados y tarjetas disponibles para bloqueo.','Solicitar asistencia especializada ante fallas recurrentes.'],
    safety:['Señalización de riesgo eléctrico','Bloqueo de tableros o circuitos'],
    warnings:['Las reparaciones deben ser realizadas exclusivamente por personal especializado.','No utilizar salas de tableros como depósito.'],norms:[],
    files:[{label:'Abrir ficha original',name:'Instalacion Electrica.pdf',path:'instalacion-electrica.pdf'}]
  },
  {
    id:'recolector-aceite-usado',title:'Recolector portátil de aceite usado',sector:'Boxes / Lubricentro',type:'Ficha técnica',accent:'#F4B453',filters:['Boxes / Lubricentro','Mantenimiento','Seguridad','Sector Edilicio'],frequency:'Controles periódicos',
    description:'Detalla limpieza, purga, válvulas, manguera, manómetros, visor y controles normativos del recolector portátil de aceite usado conectado a aire comprimido.',
    keywords:'recolector portátil aceite usado boxes lubricentro aire comprimido válvula manguera manómetro presión',
    scope:'Conservar el recolector limpio y estanco, evitando pérdidas, vuelcos, ingreso de agua y fallas de sus componentes sometidos a presión.',
    controls:['Mantener equipo, ejes y ruedas limpios.','Purgar el filtro de ingreso de aire comprimido.','Controlar trampas de agua y purga del compresor.','Verificar válvulas, uniones, manómetros, visor y manguera.'],
    frequencies:['Filtro de aire: preferentemente mensual.','Medición de espesores: anual.','Prueba hidráulica: cada 5 años.'],
    recommendations:['Reemplazar la manguera si presenta grietas o roturas.'],safety:[],warnings:[],
    norms:['Ley 19.587.','Decreto 351.','Normativa jurisdiccional vigente para aparatos sometidos a presión.'],
    files:[{label:'Abrir ficha original',name:'Recolector Portatil aceite usado.pdf',path:'recolector-portatil-aceite-usado.pdf'}]
  },
  {
    id:'instalacion-incendios',title:'Instalación contra incendios',sector:'Periferia / Mantenimiento',type:'Seguridad y operación',accent:'#F4B453',filters:['Mantenimiento','Seguridad','Sector Edilicio'],frequency:'Control cada 30 días',
    description:'Indica pruebas de bombas, hidrantes, señalización, válvulas, mangueras, cisterna, alimentación eléctrica y limpieza necesarias para mantener operativo el sistema contra incendios.',
    keywords:'incendio bomba hidrante manguera cisterna válvula niebla jockey mantenimiento emergencia',
    scope:'Verificar que la instalación contra incendios responda correctamente y permanezca disponible para controlar una emergencia hasta la llegada de bomberos.',
    controls:['Comprobar señal acústica y lumínica de la bomba principal.','Verificar posición de válvulas de paso.','Abrir un hidrante y controlar bombas y formación de niebla.','Extender y secar las mangueras después de la prueba.','Controlar cañerías, manómetros, cisterna y alimentación eléctrica.'],
    frequencies:['Prueba de funcionamiento: cada 30 días.','Limpieza de lanza, manguera y nicho: periódica.'],
    recommendations:['Gestionar mantenimiento ante óxido, pérdidas, lecturas defectuosas o falta de limpieza.'],
    safety:['Mantener la alimentación eléctrica permanente, salvo durante mantenimiento.'],
    warnings:['No utilizar el sistema para otro fin que no sea controlar el incendio hasta la llegada de bomberos.'],norms:[],
    files:[{label:'Abrir ficha original',name:'red de incendio.pdf',path:'instalacion-contra-incendios.pdf'}]
  },
  {
    id:'residuos-peligrosos',title:'Gestión de residuos peligrosos y especiales',sector:'Playa / Boxes / Gestión ambiental',type:'Gestión ambiental',accent:'#35BDB5',filters:['Playa','Boxes / Lubricentro','Ambiente','Seguridad','Operación'],
    description:'Organiza segregación, pesaje, almacenamiento, retiro, manifiestos y disposición final de residuos peligrosos o especiales generados en Playa y Boxes de manera segura.',
    keywords:'residuos peligrosos especiales RRPP aceite combustible emulsión manifiesto transporte pesaje almacenamiento Y48 Y8',
    scope:'Separar y documentar los residuos que pueden dañar personas, suelo, agua o atmósfera hasta su retiro por un transportista habilitado.',
    controls:['Segregar residuos peligrosos del resto.','No superar el 80 % de capacidad de las bolsas.','Pesar y registrar antes del almacenamiento.','Verificar transportista, remito, manifiesto y cantidades.','Archivar la documentación en carpeta MAS y libro correspondiente.'],
    recommendations:['Mantener la balanza calibrada y destruir previamente los envases de lubricantes.'],
    safety:['Guantes de nitrilo y doble nitrilo','Calzado y lentes de seguridad','Ropa de trabajo','Protector facial','Bandolera reflectiva'],
    warnings:['Prohibido mezclar residuos peligrosos con otros residuos.','Prohibido fumar, usar celular y permitir peatones en Playa.'],
    norms:['Verificar requisitos provinciales y municipales; el manifiesto nacional aplica al transporte interjurisdiccional.'],
    files:[{label:'Abrir ficha original',name:'rrpp.pdf',path:'gestion-residuos-peligrosos.pdf'}]
  },
  {
    id:'termotanques',title:'Termotanques',sector:'Sector Edilicio / Mantenimiento',type:'Ficha técnica',accent:'#F4B453',filters:['Mantenimiento','Seguridad','Sector Edilicio'],frequency:'Controles periódicos',
    description:'Resume controles de mantenimiento, ánodo, purga, pérdidas y conexiones para termotanques a gas o eléctricos, con intervención de técnicos habilitados cuando corresponde.',
    keywords:'termotanque gas eléctrico ánodo sacrificio purga corrosión pérdida mantenimiento técnico matriculado',
    scope:'Prevenir corrosión, pérdidas y riesgos eléctricos o de gas mediante revisiones y purgas programadas del termotanque.',
    controls:['Revisar o reemplazar el ánodo de sacrificio.','Verificar fichas y cableados en equipos eléctricos.','Purgar al menos 20 litros de agua.','Observar pérdidas de agua.'],
    frequencies:['Ánodo de sacrificio: anual.','Purga del tanque: semestral.'],
    recommendations:['Las intervenciones en equipos a gas deben ser realizadas por técnico matriculado.'],safety:[],
    warnings:['No intervenir termotanques a gas sin cumplir disposiciones y normas mínimas de instalaciones domiciliarias.'],norms:['Disposiciones y normas mínimas para instalaciones domiciliarias de gas.'],
    files:[{label:'Abrir ficha original',name:'Termotanques.pdf',path:'termotanques.pdf'}]
  },
  {
    id:'varillado-tanques',title:'Varillado de tanques subterráneos',sector:'Playa / Tanques subterráneos',type:'Seguridad y operación',accent:'#35BDB5',filters:['Playa','Seguridad','Operación'],frequency:'Control semanal',
    description:'Explica preparación, detección de agua, medición de stock, registro, limpieza y cierre seguro durante el varillado de tanques subterráneos de combustible.',
    keywords:'varillado tanque subterráneo stock agua pasta detectora combustible purga semanal descarga',
    scope:'Controlar calidad y stock de combustible mediante varillado seguro, detectando presencia de agua y registrando los resultados.',
    controls:['Delimitar un radio mínimo de 2 metros y disponer extintor.','Limpiar la varilla con papel absorbente y aplicar pasta detectora.','Suspender el despacho y avisar a Servicio Técnico si se detecta agua.','Registrar stock y presencia de agua.','Limpiar, guardar la varilla y cerrar herméticamente las bocas.'],
    frequencies:['Como mínimo una vez por semana.','Antes de recibir combustible.','Después de lluvia o eventos con posible ingreso de agua.'],
    recommendations:['Introducir lentamente la varilla para evitar golpes contra el conducto y el fondo.'],
    safety:['Guantes de doble nitrilo','Calzado y lentes de seguridad','Ropa de trabajo','Protector facial','Bandolera reflectiva'],
    warnings:['No usar mopas, trapos de tela ni paños.','Prohibido fumar, usar celular y permitir peatones.'],norms:[],
    files:[{label:'Abrir ficha original',name:'varillado.pdf',path:'varillado-tanques-subterraneos.pdf'}]
  }
];

const safetyFilterOrder=['Todas','Playa','Tienda','Boxes / Lubricentro','Mantenimiento','Seguridad','Sector Edilicio','Ambiente','Operación'];
const safetyCategories=safetyFilterOrder.filter(category=>category==='Todas'||safetySheets.some(sheet=>sheet.filters.includes(category)));
let activeSafetyFilter='Todas';
let safetySearchQuery='';

function safetyIcon(){return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 4 6v5c0 4.9 3.3 8.4 8 10 4.7-1.6 8-5.1 8-10V6l-8-3Z"></path><path d="m9 12 2 2 4-4"></path></svg>`}
function resourcesIcon(){return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7.5 12 3l8 4.5-8 4.5-8-4.5Z"></path><path d="M7 10v5.5c2.8 2.1 7.2 2.1 10 0V10"></path><path d="M20 8v6"></path></svg>`}
function normalizeSafetySearch(value){return value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase()}
function filteredSafetySheets(){const query=normalizeSafetySearch(safetySearchQuery.trim());return safetySheets.filter(sheet=>(activeSafetyFilter==='Todas'||sheet.filters.includes(activeSafetyFilter))&&(!query||normalizeSafetySearch([sheet.title,sheet.sector,sheet.type,sheet.description,sheet.frequency,sheet.keywords,sheet.controls,sheet.frequencies,sheet.recommendations,sheet.safety,sheet.warnings,sheet.norms].flat().filter(Boolean).join(' ')).includes(query)))}
function renderSafetyCards(list){return list.length?`<div class="safety-grid">${list.map(sheet=>`<article class="safety-card card" style="--sheet-accent:${sheet.accent}"><div class="safety-card-accent"></div><div class="safety-card-top"><span class="safety-card-icon">${safetyIcon()}</span><span class="safety-type">${sheet.type}</span></div><h3>${sheet.title}</h3><p class="safety-sector">${sheet.sector}</p><p class="safety-description">${sheet.description}</p>${sheet.frequency?`<span class="safety-frequency">${sheet.frequency}</span>`:''}<button class="btn safety-open" data-safety-sheet="${sheet.id}" aria-label="Ver ficha ${sheet.title}">Ver ficha</button></article>`).join('')}</div>`:`<article class="card safety-empty"><span class="safety-card-icon">${safetyIcon()}</span><h3>No encontramos fichas</h3><p>Probá con otro sector, tema o palabra clave.</p></article>`}
function renderSafetyLibrary(){return `<section class="safety-library" aria-labelledby="safetyLibraryTitle"><h1 id="safetyLibraryTitle" class="sr-only">Fichas Técnicas y de Seguridad</h1><div class="safety-toolbar"><label class="safety-search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path></svg><span class="sr-only">Buscar fichas técnicas y de seguridad</span><input id="safetySearch" type="search" placeholder="Buscar ficha, sector o tema..." autocomplete="off" value="${safetySearchQuery.replace(/"/g,'&quot;')}"></label><p id="safetyCount" class="safety-count">${safetySheets.length} fichas disponibles</p></div><div class="safety-filters" id="safetyFilters" aria-label="Filtrar fichas por sector o tema">${safetyCategories.map(category=>`<button class="filter ${category===activeSafetyFilter?'active':''}" data-safety-filter="${category}" aria-pressed="${category===activeSafetyFilter}">${category}</button>`).join('')}</div><div id="safetyList">${renderSafetyCards(filteredSafetySheets())}</div></section>`}
function renderSafetyEntry(){return `<section class="safety-entry" aria-labelledby="safetyEntryTitle"><article class="card safety-entry-card"><div class="safety-entry-icon">${safetyIcon()}</div><div class="safety-entry-copy"><span class="eyebrow">Biblioteca técnica y operativa</span><h2 id="safetyEntryTitle">Fichas Técnicas y de Seguridad</h2><p>Consultá procedimientos, controles y recomendaciones operativas para distintos sectores, equipos y tareas de la estación.</p><span class="safety-entry-count">${safetySheets.length} fichas disponibles</span></div><button class="btn safety-entry-action" data-open-safety aria-label="Ver Fichas Técnicas y de Seguridad">Ver fichas</button></article></section>`}
function renderResourcesEntry(){return `<section class="safety-entry resources-entry" aria-labelledby="resourcesEntryTitle"><article class="card safety-entry-card resources-entry-card"><div class="safety-entry-icon resources-entry-icon">${resourcesIcon()}</div><div class="safety-entry-copy"><span class="eyebrow">Dinámicas de aprendizaje</span><h2 id="resourcesEntryTitle">Recursos para capacitar</h2><p>Accedé a dinámicas y actividades prácticas para facilitar encuentros, promover la participación y acompañar el aprendizaje de los equipos.</p><span class="safety-entry-count">${tools.length} recursos disponibles</span></div><button class="btn safety-entry-action resources-entry-action" data-open-resources aria-label="Ver Recursos para capacitar">Ver recursos</button></article></section>`}
function renderSafetyLibraryPage(){return `<div class="safety-library-page"><nav class="safety-breadcrumb" aria-label="Ruta de navegación"><button type="button" data-back-tools>Herramientas</button><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg><span aria-current="page">Fichas Técnicas y de Seguridad</span></nav><button type="button" class="safety-back" data-back-tools aria-label="Volver a Herramientas"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>Volver a Herramientas</button>${renderSafetyLibrary()}</div>`}
function renderResourcesLibraryPage(){return `<div class="safety-library-page resources-library-page"><nav class="safety-breadcrumb" aria-label="Ruta de navegación"><button type="button" data-back-tools>Herramientas</button><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg><span aria-current="page">Recursos para capacitar</span></nav><button type="button" class="safety-back" data-back-tools aria-label="Volver a Herramientas"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>Volver a Herramientas</button><section class="facilitation-tools" aria-labelledby="facilitationTitle"><div class="section-head"><div><span class="eyebrow">Dinámicas de aprendizaje</span><h1 id="facilitationTitle">Recursos para capacitar</h1><p class="lead">Herramientas prácticas para facilitar encuentros y acompañar el aprendizaje de los equipos.</p></div></div><div class="tools-grid">${tools.map(t=>`<article class="card tool-card lift"><div class="tool-icon">${resourcesIcon()}</div><h3>${t[0]}</h3><p>${t[1]}</p><div class="meta"><span>◷ ${t[2]}</span><span class="badge">${t[3]}</span></div><div class="card-actions"><button class="btn" data-resource="${t[0]}">Ver recurso</button></div></article>`).join('')}</div></section></div>`}
function renderToolsPage(){return `${head('Caja de Herramientas del Capacitador','Recursos de consulta y aplicación para acompañar la formación y la operación cotidiana.')}<div class="tools-entry-stack">${renderSafetyEntry()}${renderResourcesEntry()}</div>`}
function updateSafetyLibrary(){const list=filteredSafetySheets();const container=document.getElementById('safetyList');if(!container)return;container.innerHTML=renderSafetyCards(list);const count=document.getElementById('safetyCount');count.textContent=`${list.length} ${list.length===1?'ficha disponible':'fichas disponibles'}`}
function detailSection(title,items,kind='list'){if(!items||!items.length)return '';return `<section class="safety-detail-section"><h3>${title}</h3>${kind==='text'?`<p>${items}</p>`:`<ul>${items.map(item=>`<li>${item}</li>`).join('')}</ul>`}</section>`}
function openSafetySheet(id){const sheet=safetySheets.find(item=>item.id===id);if(!sheet)return;const eyebrow=document.getElementById('modalEyebrow');if(eyebrow)eyebrow.textContent='Ficha técnica y de seguridad';document.getElementById('modalTitle').textContent=sheet.title;document.getElementById('modalMeta').innerHTML=`<span>${sheet.type}</span><span>◎ ${sheet.sector}</span>${sheet.frequency?`<span>${sheet.frequency}</span>`:''}`;document.getElementById('modalBody').innerHTML=`<p class="lead">${sheet.description}</p>${detailSection('Objetivo / alcance',sheet.scope,'text')}${detailSection('Controles principales',sheet.controls)}${detailSection('Frecuencias',sheet.frequencies)}${detailSection('Recomendaciones',sheet.recommendations)}${detailSection('Elementos y medidas de seguridad',sheet.safety)}${detailSection('Advertencias',sheet.warnings)}${detailSection('Normativa mencionada',sheet.norms)}<section class="safety-files"><h3>Archivo original</h3><p>${sheet.files.map(file=>file.name).join('<br>')}</p><div class="safety-file-actions">${sheet.files.map(file=>`<a class="btn material-link" href="${encodeURI('assets/fichas-seguridad/'+file.path)}" target="_blank" rel="noopener">${file.label}</a>`).join('')}</div></section>`;document.getElementById('modal').classList.add('open');document.querySelector('.close').focus()}

document.addEventListener('input',event=>{if(event.target.id!=='safetySearch')return;safetySearchQuery=event.target.value;updateSafetyLibrary()});
document.addEventListener('click',event=>{const openLibrary=event.target.closest('[data-open-safety]');if(openLibrary){navigate('herramientas/fichas');return}const openResources=event.target.closest('[data-open-resources]');if(openResources){navigate('herramientas/recursos');return}const backTools=event.target.closest('[data-back-tools]');if(backTools){navigate('herramientas');return}const filter=event.target.closest('[data-safety-filter]');if(filter){activeSafetyFilter=filter.dataset.safetyFilter;document.querySelectorAll('[data-safety-filter]').forEach(button=>{const active=button===filter;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active))});updateSafetyLibrary()}const sheetButton=event.target.closest('[data-safety-sheet]');if(sheetButton)openSafetySheet(sheetButton.dataset.safetySheet)});
