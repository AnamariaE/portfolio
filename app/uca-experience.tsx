export default function UcaExperience({es}:{es:boolean}){
const roles=es?[
['Docencia','Profesora de Diseño Gráfico y de Comunicaciones y Nueva Tecnología.'],
['Laboratorios multimedia','Coordinadora de los Laboratorios Multimedia.'],
['Comunicación digital','Coordinadora del Diplomado de Comunicación Digital.'],
['Posgrado','Profesora adjunta de Comunicación Multimedia en la Maestría en Comunicación Estratégica.']
]:[
['Teaching','Lecturer in Graphic Design and Communications and New Technology.'],
['Multimedia labs','Coordinator of the Multimedia Laboratories.'],
['Digital communication','Coordinator of the Digital Communication diploma programme.'],
['Graduate teaching','Adjunct lecturer in Multimedia Communication in the Master’s programme in Strategic Communication.']
];
return <section className="uca-experience" aria-label={es?'Trayectoria en la UCA':'Experience at UCA'}><span className="uca-kicker">UCA · {es?'DOCENCIA Y COORDINACIÓN ACADÉMICA':'TEACHING & ACADEMIC COORDINATION'}</span><h3>{es?'Enseñar, crear y coordinar.':'Teaching, creating and coordinating.'}</h3><p>{es?'Mi trayectoria en la Universidad Centroamericana José Simeón Cañas reunió docencia en diseño, comunicación y tecnología, coordinación de laboratorios multimedia y formación de grado y posgrado.':'At Universidad Centroamericana José Simeón Cañas, my work brought together teaching in design, communication and technology, multimedia laboratory coordination, and undergraduate and graduate education.'}</p><dl>{roles.map(([title,description])=><div key={title}><dt>{title}</dt><dd>{description}</dd></div>)}</dl><p className="uca-connection">{es?'ED-UCA y Aprendiz a Crononauta forman parte de esta trayectoria docente.':'ED-UCA and Aprendiz a Crononauta are part of this teaching trajectory.'}</p></section>;
}
