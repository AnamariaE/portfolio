'use client';
import {useState} from 'react';
const milestones=[
{id:'expohoteles',name:'HTML · Expohoteles',year:2009,row:0,es:'Primer trabajo con HTML. Esta práctica reaparece en los componentes reutilizables de WikiLearn.',en:'Early HTML work. This practice reappears in reusable WikiLearn components.',skills:['technology','design'],linked:true},
{id:'vinilealo',name:'Viniléalo',year:2012,row:1,es:'Diseño gráfico: un oficio que conecta con la identidad visual de las experiencias de aprendizaje.',en:'Graphic design: a craft connected to the visual identity of learning experiences.',skills:['design'],linked:true},
{id:'gastroguia',name:'Gastroguía',year:2014,row:0,es:'Un hito de diseño editorial en el recorrido.',en:'An editorial design milestone along the way.',skills:['design'],linked:false},
{id:'educa',name:'ED-UCA',year:2018,row:0,es:'De una biblioteca multimedia para docentes a un ecosistema de recursos de aprendizaje.',en:'From a multimedia library for educators to an ecosystem of learning resources.',skills:['learning','design','technology','narrative'],linked:true,caseId:'educa'},
{id:'diminuto',name:'Di’Minuto',year:2019,row:2,es:'Microlearning, diseño instruccional y motion branding: piezas breves que conectan con la producción multimedia.',en:'Microlearning, instructional design and motion branding: short pieces connected to multimedia production.',skills:['learning','design','narrative'],linked:true},
{id:'humanities',name:'Aprendiz a Crononauta',year:2021,row:1,es:'Gamificación y narrativa como estructura de una experiencia de aprendizaje.',en:'Gamification and narrative as the structure of a learning experience.',skills:['learning','technology','narrative'],linked:true,caseId:'humanities'},
{id:'gaap',name:'GAAP · CRS',year:2022,row:0,es:'Una metodología de producción multimedia que conecta con recursos reutilizables.',en:'A multimedia production method connected to reusable resources.',skills:['learning','design','narrative'],linked:true,caseId:'gaap'},
{id:'wayuu',name:'Círculos Wayuu',year:2022,row:2,es:'2022–2024 · Investigación cultural, colaboración y formatos que se adaptan a la comunidad.',en:'2022–2024 · Cultural research, collaboration and formats that adapt to the community.',skills:['learning','design','narrative','technology'],linked:false,caseId:'wayuu'},
{id:'ichronic',name:'Totally iChronic',year:2026,row:1,es:'Un proyecto propio de video vertical en el recorrido actual.',en:'A personal vertical-video project in the current journey.',skills:['narrative','technology'],linked:false}
];
export default function GalleryTimeline({es,filter,query,onOpen}:{es:boolean;filter:string;query:string;onOpen:(id:string)=>void}){
const [threads,setThreads]=useState(true),[selected,setSelected]=useState('wiki');
const fold=(s:string)=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const visible=milestones.filter(m=>(filter==='all'||m.skills.includes(filter))&&fold(`${m.name} ${m.es} ${m.en} ${m.year}`).includes(fold(query)));
const current=visible.find(m=>m.id===selected);const today=new Date().getFullYear();const end=Math.max(2026,today);const x=(year:number)=>60+(year-2009)/(end-2009)*1020;
return <section className="time-explorer" aria-label={es?'Línea del tiempo y conexiones':'Timeline and connections'}>
<p className="count">{visible.length} {es?'hitos · 2009 → hoy':'milestones · 2009 → today'}</p><div className="time-heading"><h3>{es?'Nada apareció de repente.':'Nothing appeared out of nowhere.'}</h3><p>{es?'Abre WikiLearn para seguir los hilos hacia atrás. Cada hito cuenta qué práctica vuelve a aparecer.':'Open WikiLearn to follow the threads back. Each milestone explains which practice reappears.'}</p></div>
<section className="time-scroll" aria-label={es?'Recorrido horizontal de 2009 a hoy; desplaza para explorar':'Horizontal journey from 2009 to today; scroll to explore'}><div className="time-canvas">
<svg preserveAspectRatio="none" viewBox="0 0 1200 520" aria-hidden="true">{threads&&visible.filter(m=>m.linked).map(m=><path key={m.id} d={`M ${x(m.year)} ${245+m.row*80} Q ${x(m.year)+90} 35 ${x(2022)} 106`} fill="none" stroke="#7a5a9e" strokeWidth={selected===m.id?4:2} strokeDasharray="2 9" strokeLinecap="round"/>)}<line x1="40" y1="465" x2="1160" y2="465" stroke="currentColor" strokeWidth="3"/></svg>
<aside className="time-note">{es?'Mis conocimientos no aparecieron de repente.':'My knowledge did not appear out of nowhere.'}</aside>
<button className="time-wiki" style={{left:`${x(2022)/12}%`,right:'2%'}} aria-expanded={threads} aria-controls="time-detail" onClick={()=>{setThreads(!threads);setSelected('wiki')}}>WikiLearn · 2022 → {es?'hoy':'today'} <span>{threads?'−':'+'}</span></button>
{visible.map(m=><button key={m.id} className={`time-milestone ${threads&&m.linked?'is-linked':''}`} style={{left:`${x(m.year)/12}%`,top:245+m.row*80}} aria-pressed={selected===m.id} onClick={()=>setSelected(m.id)}>{m.name}<small>{m.year}</small></button>)}
{[2009,2012,2014,2018,2021,2022,2024,end].filter((v,i,a)=>a.indexOf(v)===i).map(year=><span className="time-year" key={year} style={{left:`${x(year)/12}%`}}>{year}</span>)}
</div></section>
<p className="time-legend">{es?'··· Hilos de continuidad entre prácticas · WikiLearn es una etapa en curso, no un punto aislado.':'··· Threads of continuity between practices · WikiLearn is an ongoing chapter, not an isolated point.'}</p>
<div className="time-detail" id="time-detail" aria-live="polite">{current?<><span>{current.year} / {es?'HITO':'MILESTONE'}</span><h4>{current.name}</h4><p>{es?current.es:current.en}</p>{current.caseId&&<button onClick={()=>onOpen(current.caseId!)}>{es?'Abrir caso completo':'Open full case'} ↗</button>}</>:<><h4>WikiLearn · 2022 → {es?'hoy':'today'}</h4><p>{es?'HTML, diseño, bibliotecas de recursos, multimedia y gamificación se encuentran dentro de un ecosistema de aprendizaje. Selecciona un hito para seguir su hilo.':'HTML, design, resource libraries, multimedia and gamification meet within a learning ecosystem. Select a milestone to follow its thread.'}</p><button onClick={()=>onOpen('wiki')}>{es?'Abrir carpeta WikiLearn':'Open WikiLearn folder'} ↗</button></>}</div>
{!query&&<p className="time-undated">{es?'Sin fecha documentada: ':'Date not documented: '}<button onClick={()=>onOpen('organizer')}>Organizer Lab ↗</button></p>}
{!visible.length&&<p>{es?'No hay hitos que coincidan con estos filtros.':'No milestones match these filters.'}</p>}
</section>;
}
