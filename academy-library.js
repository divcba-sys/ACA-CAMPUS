'use strict';

const academyManualLibrary=[{
  title:'MANUAL DE BOXES',
  fileName:'MANUAL DE BOXES.pptx',
  type:'Presentación PowerPoint',
  sector:'Boxes / Lubricentro',
  description:'Referencia operativa sobre procedimientos, equipamiento, herramientas, mantenimiento, imagen, gestión comercial y administración del sector Boxes.',
  url:'https://docs.google.com/presentation/d/1pwm3CKckbsUFic0gXEnsvVn7GonlMcqJ/edit?usp=drivesdk&ouid=109960647074531603998&rtpof=true&sd=true'
}];

const academyLibraryManualIcon=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v18H6.5A2.5 2.5 0 0 1 4 18.5z"></path><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v18h4.5a2.5 2.5 0 0 0 2.5-2.5z"></path></svg>`;
const academyLibraryTrainingIcon=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-5 9 5-9 5z"></path><path d="M7 12.5V17c3 2 7 2 10 0v-4.5"></path><path d="M21 10v6"></path></svg>`;

function academyLibraryBreadcrumb(current){
  return `<nav class="academy-breadcrumb" aria-label="Ruta de navegación"><a href="#academia" data-view="academia">Academia</a><span aria-hidden="true">›</span><span aria-current="page">${current}</span></nav><button class="academy-back" data-view="academia" aria-label="Volver a Academia">← Volver a Academia</button>`;
}

function renderAcademyLibraryHome(){
  return `${head('Academia','Biblioteca institucional de aprendizaje y consulta para Gestores de Calidad ACA.')}<section class="academy-folders" aria-label="Bibliotecas de Academia"><article class="academy-folder academy-folder--manuals"><div class="academy-folder-icon">${academyLibraryManualIcon}</div><h2>Manuales</h2><p>Manuales operativos y materiales de referencia para los distintos sectores y servicios de los establecimientos ACA.</p><div class="academy-folder-footer"><span class="academy-folder-count">${academyManualLibrary.length} ${academyManualLibrary.length===1?'manual disponible':'manuales disponibles'}</span><button class="btn" data-view="academia/manuales">Ver manuales</button></div></article><article class="academy-folder academy-folder--training"><div class="academy-folder-icon">${academyLibraryTrainingIcon}</div><h2>Capacitaciones</h2><p>Capacitaciones institucionales para acompañar la formación y la mejora continua en los establecimientos ACA.</p><div class="academy-folder-footer"><span class="academy-folder-count">${academyCourses.length} capacitaciones disponibles</span><button class="btn" data-view="academia/capacitaciones">Ver capacitaciones</button></div></article></section>`;
}

function renderAcademyLibraryCourses(){
  return `${academyLibraryBreadcrumb('Capacitaciones')}${head('Capacitaciones','Biblioteca real de capacitación para Gestores de Calidad ACA.')}<div class="academy-toolbar"><div class="filters" id="academyFilters">${academyCategories.map((category,index)=>`<button class="filter ${index?'':'active'}" data-academy-filter="${category}">${category}</button>`).join('')}</div><p class="academy-count" id="academyCount">${academyCourses.length} capacitaciones disponibles</p></div><div id="academyCourseList">${renderAcademyCards(academyCourses)}</div>`;
}

function renderAcademyLibraryManuals(){
  return `${academyLibraryBreadcrumb('Manuales')}${head('Manuales','Manuales operativos y materiales de referencia para los distintos sectores y servicios de los establecimientos ACA.')}<div class="manuals-grid">${academyManualLibrary.map(manual=>`<article class="manual-card"><div class="manual-card-accent"></div><div class="manual-card-body"><span class="manual-type">Manual operativo</span><h3>${manual.title}</h3><p>${manual.description}</p><div class="manual-meta"><span>${manual.type}</span><span>•</span><span>${manual.sector}</span></div><div class="manual-card-actions"><button class="btn ghost" data-manual-library="${manual.title}">Ver manual</button><a class="btn" href="${manual.url}" target="_blank" rel="noopener noreferrer">Abrir material original</a></div></div></article>`).join('')}</div>`;
}

function openAcademyLibraryManual(name){
  const manual=academyManualLibrary.find(item=>item.title===name);
  if(!manual)return;
  document.getElementById('modalEyebrow').textContent='Manual operativo';
  document.getElementById('modalTitle').textContent=manual.title;
  document.getElementById('modalMeta').innerHTML=`<span>${manual.type}</span><span>${manual.sector}</span>`;
  document.getElementById('modalBody').innerHTML=`<p class="lead">${manual.description}</p><div class="manual-detail-sections"><section class="manual-detail-box"><h3>Operación y gestión</h3><p>Mandamientos de Boxes, ciclo de servicio, CRM, agenda, promociones, administración y perfil de puesto.</p></section><section class="manual-detail-box"><h3>Equipamiento y mantenimiento</h3><p>Descripción de equipos, herramientas y controles del recolector y elevador, con mantenimiento y señales de alerta.</p></section><section class="manual-detail-box"><h3>Imagen del sector</h3><p>Materiales de comunicación, colores corporativos, paneles, murales, uniformes y lineamientos de imagen de Boxes.</p></section><section class="manual-detail-box"><h3>Referencia técnica</h3><p>Guía de lubricación, catálogo de lubricantes, procedimientos de verificación y operatoria de filtros.</p></section></div><p class="original-file"><b>Archivo original:</b><br>${manual.fileName}</p><a class="btn material-link" href="${manual.url}" target="_blank" rel="noopener noreferrer">Abrir material original</a>`;
  document.getElementById('modal').classList.add('open');
  document.querySelector('.close').focus();
}

views.academia=renderAcademyLibraryHome;
views['academia/manuales']=renderAcademyLibraryManuals;
views['academia/capacitaciones']=renderAcademyLibraryCourses;

document.addEventListener('click',event=>{
  const manualButton=event.target.closest('[data-manual-library]');
  if(manualButton)openAcademyLibraryManual(manualButton.dataset.manualLibrary);
});

search.addEventListener('input',()=>{
  const query=normalizeSearch(search.value.trim());
  if(!query)return;
  const courseMatches=academyCourses.filter(course=>normalizeSearch([course.title,course.description,course.category,course.sector,course.keywords].filter(Boolean).join(' ')).includes(query)).slice(0,10);
  const manualMatches=academyManualLibrary.filter(manual=>normalizeSearch([manual.title,manual.description,manual.type,manual.sector,'manual boxes lubricentro mantenimiento equipamiento'].join(' ')).includes(query));
  const matches=[...manualMatches.map(manual=>({kind:'manual',title:manual.title,meta:`Manual · ${manual.sector}`})),...courseMatches.map(course=>({kind:'course',title:course.title,meta:`${course.category}${course.sector?' · '+course.sector:''}`}))].slice(0,10);
  results.innerHTML=matches.length?matches.map(item=>`<button class="result" data-academy-library-result="${item.kind}" data-result-title="${item.title}"><b>${item.title}</b><small>${item.meta}</small></button>`).join(''):'<div class="result">Sin resultados</div>';
  results.classList.add('open');
});

results.addEventListener('click',event=>{
  const item=event.target.closest('[data-academy-library-result]');
  if(!item)return;
  results.classList.remove('open');
  search.value='';
  if(item.dataset.academyLibraryResult==='manual'){
    navigate('academia/manuales');
    openAcademyLibraryManual(item.dataset.resultTitle);
  }else{
    navigate('academia/capacitaciones');
    openAcademyCourse(item.dataset.resultTitle);
  }
});

window.addEventListener('hashchange',()=>{
  const id=location.hash.slice(1)||'inicio';
  if(views[id])navigate(id);
});

const activeAcademyRoute=location.hash.slice(1);
if(activeAcademyRoute==='academia'||activeAcademyRoute.startsWith('academia/'))navigate(activeAcademyRoute);
