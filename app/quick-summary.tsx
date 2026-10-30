import type {Language} from './translations';
export default function QuickSummary({language}:{language:Language}){
 const es=language==='es';
 const examples=es?[
 ['wiki','Wikimedia / WikiLearn','11 cursos digitales y herramientas reutilizables para comunidades multilingües.'],
 ['gaap','GAAP / Gaplandia','9 módulos y 51 recursos de aprendizaje diseñados para contextos rurales y baja conectividad.'],
 ['humanities','UCA, El Salvador','Profesora y coordinadora de laboratorios multimedia. Creé y gamifiqué una asignatura completa de Humanidades Digitales que llegó a 120 estudiantes.']
 ]:[
 ['wiki','Wikimedia / WikiLearn','11 digital courses and reusable tools for multilingual communities.'],
 ['gaap','GAAP / Gaplandia','9 modules and 51 learning resources designed for rural contexts and low connectivity.'],
 ['humanities','UCA, El Salvador','Lecturer and multimedia laboratory coordinator. I created and gamified an entire Digital Humanities course that reached 120 students.']
 ];
 return <section className="quick-summary" id="en-un-minuto" aria-labelledby="quick-title"><div className="quick-intro"><h2 id="quick-title">{es?'Mi trabajo en un minuto.':'My work in one minute.'}</h2><aside className="quick-note"><strong>{es?'Hago legible lo complejo.':'Making complexity clear.'}</strong><p>{es?'Soy Anamaría Espinoza. Combino diseño, pedagogía, narrativa y tecnología para convertir conocimiento complejo en experiencias que las personas puedan entender y utilizar.':'I’m Anamaría Espinoza. I combine design, pedagogy, storytelling and technology to turn complex knowledge into experiences people can understand and use.'}</p></aside></div><div className="quick-evidence"><h3>{es?'Mi trabajo, en tres ejemplos':'My work, in three examples'}</h3>{examples.map(([id,title,text])=><div className="quick-example" key={id}><a href={`/portfolio/${language}/cases/${id}/`}>{title} <span aria-hidden="true">↗</span></a><p>{text}</p></div>)}<div className="quick-contribution"><h3>{es?'¿Qué puedo aportar a tu equipo?':'What can I bring to your team?'}</h3><p>{es?'Dar estructura a contenidos complejos, diseñar experiencias de aprendizaje y llevarlas a formatos visuales, multimedia y web.':'Structure complex content, design learning experiences and bring them to life through visual, multimedia and web formats.'}</p><div className="quick-actions"><a href="#galeria">{es?'Ver los casos':'Explore the cases'} ↗</a><a href="#contact">{es?'Conversemos':'Let’s talk'} ↗</a></div></div></div></section>;
}
