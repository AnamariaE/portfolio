export default function UcaExperience({es}:{es:boolean}){
const roles=es?[
['Diseño y Diagramación · 2016–2022','Profesora de Diseño y Diagramación.'],
['Laboratorios Multimedia · 2016–2022','Coordinadora de los Laboratorios Multimedia.'],
['Comunicación y Nuevas Tecnologías · 2016–2019','Profesora de Comunicación y Nuevas Tecnologías hasta la transformación del pénsum.'],
['Nuevo pénsum · 2020','Creé la materia Introducción a las Humanidades Digitales para el nuevo pénsum, dando continuidad a la docencia en comunicación y tecnología.'],
['Diplomado · 2016–2019','Coordinadora del Diplomado de Comunicación Digital.'],
['Maestría · 2021–2023','Profesora adjunta de Comunicación Multimedia en la Maestría en Comunicación Estratégica.']
]:[
['Design and Layout · 2016–2022','Lecturer in Design and Layout.'],
['Multimedia Laboratories · 2016–2022','Coordinator of the Multimedia Laboratories.'],
['Communication and New Technologies · 2016–2019','Lecturer in Communication and New Technologies until the curriculum redesign.'],
['New curriculum · 2020','I created Introduction to Digital Humanities for the new curriculum, continuing my teaching in communication and technology.'],
['Diploma programme · 2016–2019','Coordinator of the Digital Communication diploma programme.'],
['Master’s programme · 2021–2023','Adjunct lecturer in Multimedia Communication in the Master’s programme in Strategic Communication.']
];
return <section className="uca-experience" aria-label={es?'Trayectoria en la UCA':'Experience at UCA'}><span className="uca-kicker">UCA · {es?'DOCENCIA Y COORDINACIÓN ACADÉMICA':'TEACHING & ACADEMIC COORDINATION'}</span><h3>{es?'Enseñar, crear y coordinar.':'Teaching, creating and coordinating.'}</h3><p>{es?'Entre 2016 y 2022 trabajé en la Universidad Centroamericana José Simeón Cañas, en El Salvador, como docente y coordinadora académica. Mi docencia adjunta en la maestría se extendió de 2021 a 2023.':'From 2016 to 2022, I worked at Universidad Centroamericana José Simeón Cañas, El Salvador, as a lecturer and academic coordinator. My adjunct teaching in the master’s programme ran from 2021 to 2023.'}</p><dl>{roles.map(([title,description])=><div key={title}><dt>{title}</dt><dd>{description}</dd></div>)}</dl><p className="uca-connection">{es?'Como parte de mi trabajo docente, creé ED-UCA, que incluye Di’Minuto, y gamifiqué íntegramente Introducción a las Humanidades Digitales mediante Aprendiz a Crononauta.':'As part of my teaching work, I created ED-UCA, which includes Di’Minuto, and gamified the entire Introduction to Digital Humanities course through Aprendiz a Crononauta.'}</p></section>;
}
