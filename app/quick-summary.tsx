import type {Language} from './translations';
export default function QuickSummary({language}:{language:Language}){
 const es=language==='es';
 const steps=es?[
 ['Entender','A quién va dirigido y qué necesita.'],['Ordenar','Dar estructura a lo que está disperso.'],['Dar forma','Elegir el formato que funciona en ese contexto.'],['Pedir evidencia','Comprobar qué se aprende.'],['Entregar y aprender','Revisar, ajustar y volver a probar.']
 ]:[['Understand','Who it is for and what they need.'],['Organise','Give scattered content a structure.'],['Give form','Choose a format that fits the context.'],['Ask for evidence','Check what people learn.'],['Deliver and learn','Review, adjust and test again.']];
 const examples=es?[
 ['gaap','CRS / GAAPlandia','Poca conexión. Poco tiempo para leer.','Prioricé imagen, audio y narrativa; lideré el diseño y supervisé guiones y producción.','Ver el caso'],
 ['wiki','Wikimedia / WikiLearn','Crear cursos sin empezar de cero.','Diseñé un kit de 35 componentes reutilizables para Open edX.','Ver el caso'],
 ['humanities','UCA / Humanidades Digitales','Hacer visible el progreso.','Como profesora, gamifiqué la asignatura en Moodle: misiones, decisiones e insignias ligadas a evidencias. 120 estudiantes.','Ver el caso'],
 ['ruralia','Ruralia','Organizaciones con necesidades distintas.','Codiseñé una ruta con autodiagnóstico, cinco áreas temáticas y tres niveles.','Conocer el proyecto']
 ]:[
 ['gaap','CRS / GAAPlandia','Limited connectivity. Little time to read.','I prioritised images, audio and narrative; led the design and supervised scripts and production.','Explore the case'],
 ['wiki','Wikimedia / WikiLearn','Build courses without starting over.','I designed a kit of 35 reusable Open edX components.','Explore the case'],
 ['humanities','UCA / Digital Humanities','Make progress visible.','As a lecturer, I gamified the Moodle course with missions, choices and evidence-based badges. 120 students.','Explore the case'],
 ['ruralia','Ruralia','Organisations with different needs.','I co-designed a learning route with self-assessment, five thematic areas and three levels.','Explore the project']
 ];
 return <section className="quick-summary quick-story" id="en-un-minuto" aria-labelledby="quick-title">
 <div className="quick-intro"><span className="quick-label">{es?'MI TRABAJO EN UN MINUTO':'MY WORK IN ONE MINUTE'}</span><h2 id="quick-title">{es?'Diseño aprendizaje para condiciones reales.':'I design learning for real-world constraints.'}</h2><p className="quick-lead">{es?'Poca conectividad, idiomas distintos, contenidos dispersos. Soy Anamaría Espinoza: conecto diseño, pedagogía y tecnología para que el aprendizaje funcione en esos contextos.':'Limited connectivity, different languages, scattered content. I’m Anamaría Espinoza: I connect design, pedagogy and technology to make learning work in those contexts.'}</p><aside className="quick-note"><strong>{es?'La plataforma cambia. Mi forma de pensar conecta los proyectos.':'The platform changes. My way of thinking connects the projects.'}</strong></aside></div>
 <div className="quick-process"><h3>{es?'Un método, cinco movimientos.':'One method, five movements.'}</h3><ol>{steps.map(([title,text],i)=><li key={title}><span aria-hidden="true">{i+1}</span><div><strong>{title}</strong><p>{text}</p></div></li>)}</ol></div>
 <div className="quick-proof"><h3>{es?'La misma lógica. Cuatro contextos.':'The same approach. Four contexts.'}</h3><div className="quick-projects">{examples.map(([id,title,challenge,decision,label])=><article key={id}><span className="quick-label">{title}</span><h4>{challenge}</h4><p>{decision}</p><a href={id==='ruralia'?'#ruralia':`/portfolio/${language}/cases/${id}/`}>{label} ↗</a></article>)}</div></div>
 <div className="quick-contribution"><div><h3>{es?'Y después de publicar: ¿funcionó?':'And after launch: did it work?'}</h3><p>{es?'Ahora desarrollo un piloto de evaluación del aprendizaje con datos y testimonios: formular hipótesis, probarlas y decidir qué mantener, ajustar o abandonar.':'I’m now developing a learning evaluation pilot using data and participant feedback: form hypotheses, test them and decide what to keep, adjust or abandon.'}</p></div><div className="quick-actions"><a href="#galeria">{es?'Explorar mi trabajo':'Explore my work'} ↗</a><a href="#contact">{es?'Conversemos':'Let’s talk'} ↗</a></div></div>
 </section>;
}
