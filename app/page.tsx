import { ArrowDownRight, ArrowUpRight, Globe2, Layers3, Palette, Sparkles } from 'lucide-react';

const projects = [
  { number: '01', eyebrow: 'GLOBAL LEARNING SYSTEMS', title: 'Designing learning at Wikimedia scale', copy: 'Eleven digital courses, reusable components and course-creation systems for multilingual communities worldwide.', result: '400+ participants', tone: 'coral' },
  { number: '02', eyebrow: 'ACCESSIBLE DIGITAL LEARNING', title: 'GAAP: learning built for real constraints', copy: 'A nine-module gamified programme designed around low connectivity, varied literacy and rural community contexts.', result: '51 learning objects', tone: 'ink' },
  { number: '03', eyebrow: 'COMMUNITY-CENTRED DESIGN', title: 'Co-creating with Wayuu communities', copy: 'Culturally relevant learning that adapts digital formats to the community—not the other way around.', result: '2022–2024', tone: 'sun' },
];

export default function Home() {
  return <main>
    <nav className="nav-shell" aria-label="Primary navigation">
      <a className="wordmark" href="#top" aria-label="Anamaría Espinoza, home"><span>AE</span><strong>Anamaría Espinoza</strong></a>
      <div className="nav-links"><a href="#work">Selected work</a><a href="#method">Method</a><a href="#approach">Approach</a><a href="mailto:anamariaespinoza@gmail.com" className="contact-link">Let&apos;s talk <ArrowUpRight size={15}/></a></div>
    </nav>
    <section className="hero" id="top">
      <div className="hero-kicker"><span className="pulse"/> Spain-based · Working globally</div>
      <h1>I design learning<span className="hero-accent"> systems that move</span><span> people forward.</span></h1>
      <div className="hero-notes" aria-hidden="true"><span>LEARNING</span><span>GRAPHIC</span><span>MULTIMEDIA</span><span>WEB</span><span>TECHNOLOGY</span><span>NARRATIVE</span></div>
      <div className="hero-bottom"><p>Senior Learning Transformation & Experience professional—and graphic, multimedia and web designer—turning complex knowledge into clear, accessible and scalable experiences.</p><a className="round-link" href="#work" aria-label="Explore selected work"><ArrowDownRight size={28}/></a></div>
    </section>
    <section className="proof-strip" aria-label="Selected impact">
      <div><strong>10+</strong><span>years across learning, graphic, multimedia and web design</span></div>
      <div><strong>11</strong><span>global digital courses designed and developed</span></div>
      <div><strong>400+</strong><span>participants across multicultural communities</span></div>
    </section>
    <section className="work-section" id="work">
      <div className="section-heading"><span>Selected work</span><h2>Strategy becomes credible when you can see what it changed.</h2></div>
      <div className="project-grid">{projects.map((project)=><article className={`project-card ${project.tone}`} key={project.number}><div className="card-top"><span>{project.number}</span><ArrowUpRight size={22}/></div><div><p className="eyebrow">{project.eyebrow}</p><h3>{project.title}</h3><p className="card-copy">{project.copy}</p></div><strong className="result">{project.result}</strong></article>)}</div>
    </section>
    <section className="approach-preview" id="approach"><div className="approach-title"><Sparkles size={20}/><span>Where I work best</span></div><div className="capability-list"><div><Globe2/><span>Global and community-centred learning</span></div><div><Layers3/><span>Scalable systems, pathways and workflows</span></div><div><Palette/><span>Graphic, multimedia and web design</span></div><div><Sparkles/><span>Learning technology, data and AI</span></div></div></section>

    <section className="belief-section" aria-labelledby="belief-title">
      <p className="eyebrow">A point of view</p>
      <h2 id="belief-title">Gamification is structure, <em>not decoration.</em></h2>
      <div className="belief-copy">
        <p>Gamification is not a decorative layer added after the learning has been designed. It structures progression, attention, choice and feedback so learners understand where they are, why it matters and what comes next.</p>
        <p>Storytelling works in the same way. It is not an optional multimedia resource—it is the architecture that turns information into a journey people can understand, remember and use.</p>
      </div>
    </section>

    <section className="method-section" id="method" aria-labelledby="method-title">
      <div className="method-intro">
        <p className="eyebrow">The NarrLab Method</p>
        <h2 id="method-title">From scattered information to a learning experience that works.</h2>
        <p>I developed NarrLab as a repeatable way to turn abstract or complex information into experiences people can understand, remember and use. It connects strategy with execution—from the first ambiguous brief to the finished learning system.</p>
      </div>

      <div className="method-frameworks">
        <article className="framework-card framework-light">
          <div className="framework-number">01</div>
          <p className="eyebrow">MACRO LEVEL</p>
          <h3>Narrative Design Framework</h3>
          <p>Defines how the complete project will communicate and how understanding will be evaluated.</p>
          <ol className="framework-steps">
            <li><span>01</span> Communication problem</li>
            <li><span>02</span> Audience and context</li>
            <li><span>03</span> Concept</li>
            <li><span>04</span> Visual system</li>
            <li><span>05</span> Purposeful construction</li>
            <li><span>06</span> Evaluation through understanding</li>
          </ol>
        </article>

        <article className="framework-card framework-dark">
          <div className="framework-number">02</div>
          <p className="eyebrow">NARRATIVE LEVEL</p>
          <h3>The NARRA Method</h3>
          <p>Shapes the story that lives inside the system: what it means, how it unfolds and what it should change.</p>
          <ol className="narra-steps">
            <li><strong>N</strong><span><b>Core meaning</b>The idea that cannot be lost.</span></li>
            <li><strong>A</strong><span><b>Audience and gap</b>What people know, need or resist.</span></li>
            <li><strong>R</strong><span><b>Narrative journey</b>From entry and tension to insight.</span></li>
            <li><strong>R</strong><span><b>Sensory and emotional resonance</b>What guides attention and memory.</span></li>
            <li><strong>A</strong><span><b>Action, evaluation and adjustment</b>The effect and evidence of success.</span></li>
          </ol>
        </article>
      </div>

      <blockquote className="method-formula">A NarrLab story transforms a gap into a journey, data into meaning, experience into memory and emotion into thoughtful action.</blockquote>
    </section>

    <section className="origin-section" id="origin" aria-labelledby="origin-title">
      <div className="origin-heading">
        <p className="eyebrow">THE ORIGIN / UCA · 2018</p>
        <h2 id="origin-title">NarrLab had a practice before it had a name.</h2>
      </div>
      <div className="origin-story">
        <p className="origin-lead">While teaching at Universidad Centroamericana José Simeón Cañas, I created ED-UCA: a multimedia library that helped university educators explore digital pedagogy, teaching tools and emerging technologies.</p>
        <p>The project brought together tutorials, educational articles, interviews and multimedia resources. Looking back, it contains the foundations of the work I do now: listen to a real learning context, structure complex knowledge and give it a visual and technological form people can use.</p>
        <a className="inline-link" href="https://www.uca.edu.sv/comunicaciones-cultura/educomunicacion/" target="_blank" rel="noreferrer">Explore the ED-UCA archive <ArrowUpRight size={16}/></a>
      </div>
      <ol className="origin-principles" aria-label="Principles carried from ED-UCA into NarrLab">
        <li><span>01</span><div><strong>Listen first</strong><p>Understand the learner, the context and the constraints before choosing a format.</p></div></li>
        <li><span>02</span><div><strong>Structure with judgement</strong><p>Decide what belongs, what can go and how understanding should unfold.</p></div></li>
        <li><span>03</span><div><strong>Design and deliver as one system</strong><p>Pedagogy, narrative, visual identity and technology are shaped together.</p></div></li>
      </ol>
      <p className="origin-note">ED-UCA → university teaching → digital humanities → global learning systems → the NarrLab Method</p>
    </section>

    <section className="case-studies" aria-label="Case studies">
      <article className="case-study">
        <div className="case-visual wiki-visual">
          <img src="assets/wikilearn-current.png" alt="Current WikiLearn learning platform interface" />
          <span className="visual-label">WikiLearn · 2022–Present</span>
        </div>
        <div className="case-content">
          <p className="eyebrow coral-text">01 / GLOBAL LEARNING SYSTEMS</p>
          <h2>From individual courses to a reusable learning ecosystem.</h2>
          <p className="case-lead">Wikimedia&apos;s global communities need learning that works across languages, cultures, time zones and different levels of digital confidence.</p>
          <dl className="case-facts">
            <div><dt>Challenge</dt><dd>Turn diverse community and stakeholder needs into consistent, accessible learning without removing local autonomy.</dd></div>
            <div><dt>My role</dt><dd>Learning architecture, instructional design, graphic and multimedia design, stakeholder collaboration, facilitation and Open edX implementation.</dd></div>
            <div><dt>What changed</dt><dd>11 courses, reusable HTML/CSS components, templates, guidance and workflows that help contributors create learning more independently.</dd></div>
          </dl>
          <div className="tag-row"><span>Learning strategy</span><span>Open edX</span><span>Capability building</span><span>HTML/CSS</span></div>
        </div>
      </article>

      <article className="case-study reverse">
        <div className="case-visual genially-visual">
          <iframe
            src="https://view.genially.com/648a40f9ca5674001a0b7be0"
            title="Gaplandia — interactive GAAP learning experience"
            loading="lazy"
            allow="fullscreen"
            allowFullScreen
          />
        </div>
        <div className="case-content">
          <p className="eyebrow coral-text">02 / ACCESSIBLE DIGITAL LEARNING</p>
          <h2>Designing for the reality outside the brief.</h2>
          <p className="case-lead">GAAP serves rural communities where connectivity, literacy and familiarity with digital platforms cannot be assumed.</p>
          <dl className="case-facts">
            <div><dt>Challenge</dt><dd>Translate complex microfinance and agricultural methodologies into learning that stays clear under real-world constraints.</dd></div>
            <div><dt>My role</dt><dd>End-to-end instructional design, narrative architecture, character system, gamification and multimedia production methodology.</dd></div>
            <div><dt>What changed</dt><dd>A nine-module world with 51 learning objects, three original characters and image- and audio-led experiences built for low bandwidth.</dd></div>
          </dl>
          <div className="tag-row"><span>Inclusive design</span><span>Gamification</span><span>Storytelling</span><span>Low bandwidth</span></div>
        </div>
      </article>

      <article className="case-study text-case">
        <div className="case-number-panel"><span>03</span><strong>WAYUU<br/>LEARNING<br/>CIRCLES</strong></div>
        <div className="case-content">
          <p className="eyebrow coral-text">03 / COMMUNITY-CENTRED DESIGN</p>
          <h2>The format adapts to the community—not the other way around.</h2>
          <p className="case-lead">The Wayuu Learning Circles began with cultural research and direct collaboration before any learning asset was designed.</p>
          <dl className="case-facts">
            <div><dt>Approach</dt><dd>Understand how knowledge is created, shared and lived in the community, then use that logic to shape the digital experience.</dd></div>
            <div><dt>Deliverables</dt><dd>Narrative video, visual guide, low-text infographics, interactive HTML components and a facilitator learning journey.</dd></div>
            <div><dt>Principle</dt><dd>Accessibility is not a concession or a final checklist. It is the standard that makes the work clearer for everyone.</dd></div>
          </dl>
          <a className="inline-link" href="https://youtu.be/m5jqztzKMPU" target="_blank" rel="noreferrer">View the Wayuu narrative <ArrowUpRight size={16}/></a>
        </div>
      </article>
    </section>

    <section className="more-work">
      <div className="section-heading"><span>More evidence</span><h2>Learning, technology and design—working as one system.</h2></div>
      <div className="more-grid">
        <article><span>200 certified participants</span><h3>Organizer Lab</h3><p>Instructional development, templates, visual system and Open edX delivery for two global editions.</p></article>
        <article><span>Designed in 2021 · Continued in 2024</span><h3>Digital Humanities</h3><p>A complete university curriculum and gamified Moodle experience used by 120 students across two editions in 2021. After I left UCA, the gamification system continued to be used in 2024.</p></article>
        <article><span>Two simultaneous audiences</span><h3>Board Pre-Onboarding</h3><p>Structured, accessible learning for candidates and voters in Wikimedia&apos;s 2024 Board election cycle.</p></article>
      </div>
    </section>

    <section className="about-section">
      <div className="about-kicker">About Anamaría</div>
      <div>
        <h2>I work where learning strategy meets hands-on delivery.</h2>
        <p>I have spent more than a decade across global nonprofits, international development and higher education. I can help define the learning architecture, make sense of stakeholder needs and carry the work through to a functioning experience.</p>
        <p>I am also a graphic, multimedia and web designer. That is not an adjacent service: it is part of how I think. I can shape the visual language, narrative, interface and multimedia production of a learning experience—not only its instructional structure.</p>
        <p>My toolkit includes Open edX, Moodle, Canvas, Figma, Adobe Creative Suite, HTML/CSS, facilitation and functional knowledge of data, AI, R and Python.</p>
      </div>
    </section>

    <footer className="footer">
      <p className="footer-kicker">Available for senior remote opportunities and selected consulting work</p>
      <h2>Have complex knowledge that needs to become clear?</h2>
      <div className="footer-links"><a href="mailto:anamariaespinoza@gmail.com">anamariaespinoza@gmail.com <ArrowUpRight size={18}/></a><a href="https://linkedin.com/in/anamariaespinoza" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={18}/></a></div>
      <div className="footer-bottom"><span>Spain · Working globally</span><span>© 2026 Anamaría Espinoza</span></div>
    </footer>
  </main>;
}
