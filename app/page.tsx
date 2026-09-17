'use client';

import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Globe2, Layers3, Palette, Sparkles } from 'lucide-react';
import { copy, type Language } from './translations';

function initialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  const queryLanguage = new URLSearchParams(window.location.search).get('lang');
  if (queryLanguage === 'en' || queryLanguage === 'es') return queryLanguage;
  const savedLanguage = window.localStorage.getItem('anamaria-portfolio-language');
  if (savedLanguage === 'en' || savedLanguage === 'es') return savedLanguage;
  return window.navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
}

export default function Home() {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const c = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = c.meta[0];
    document.querySelector('meta[name="description"]')?.setAttribute('content', c.meta[1]);
    window.localStorage.setItem('anamaria-portfolio-language', language);
  }, [c.meta, language]);

  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', nextLanguage);
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  };

  return <main>
    <nav className="nav-shell" aria-label={c.nav[0]}>
      <a className="wordmark" href="#top" aria-label={c.nav[1]}><img src="logo-anamaria-maestro-recortado.svg" alt=""/><strong>Anamaría Espinoza</strong></a>
      <div className="nav-links">
        <a href="#work">{c.nav[2]}</a><a href="#method">{c.nav[3]}</a>
        <div className="language-switcher" role="group" aria-label={c.language[0]}>
          <button type="button" className={language === 'en' ? 'active' : ''} aria-pressed={language === 'en'} aria-label={c.language[1]} onClick={() => changeLanguage('en')}>EN</button>
          <span aria-hidden="true">/</span>
          <button type="button" className={language === 'es' ? 'active' : ''} aria-pressed={language === 'es'} aria-label={c.language[2]} onClick={() => changeLanguage('es')}>ES</button>
        </div>
        <a href="#contact" className="contact-link">{c.nav[4]} <ArrowUpRight size={15}/></a>
      </div>
    </nav>

    <section className="hero" id="top">
      <div className="hero-kicker"><span className="pulse"/> {c.hero[0]}</div>
      <div className="hero-lead"><h1>{c.hero[1]}<span className="hero-accent">{c.hero[2]}</span><span>{c.hero[3]}</span></h1><div className="hero-logo-stage" aria-hidden="true"><img className="hero-logo" src="logo-anamaria-maestro-recortado.svg" alt=""/></div></div>
      <div className="hero-notes" aria-hidden="true">{c.hero[4].map((note) => <span key={note}>{note}</span>)}</div>
      <div className="hero-bottom"><p>{c.hero[5]}</p><a className="round-link" href="#work" aria-label={c.hero[6]}><ArrowDownRight size={28}/></a></div>
    </section>

    <section className="proof-strip" aria-label={c.proof[0]}>{c.proof[1].map(([number, text]) => <div key={number}><strong>{number}</strong><span>{text}</span></div>)}</section>

    <section className="work-section" id="work">
      <div className="section-heading"><span>{c.selectedWork[0]}</span><h2>{c.selectedWork[1]}</h2></div>
      <div className="project-grid">{c.selectedWork[2].map((project) => <article className={`project-card ${project[5]}`} key={project[0]}><div className="card-top"><span>{project[0]}</span><ArrowUpRight size={22}/></div><div><p className="eyebrow">{project[1]}</p><h3>{project[2]}</h3><p className="card-copy">{project[3]}</p></div><strong className="result">{project[4]}</strong></article>)}</div>
    </section>

    <section className="approach-preview" id="approach"><div className="approach-title"><Sparkles size={20}/><span>{c.strengths[0]}</span></div><div className="capability-list"><div><Globe2/><span>{c.strengths[1][0]}</span></div><div><Layers3/><span>{c.strengths[1][1]}</span></div><div><Palette/><span>{c.strengths[1][2]}</span></div><div><Sparkles/><span>{c.strengths[1][3]}</span></div></div></section>

    <section className="belief-section" aria-labelledby="belief-title"><p className="eyebrow">{c.belief[0]}</p><h2 id="belief-title">{c.belief[1]} <em>{c.belief[2]}</em></h2><div className="belief-copy">{c.belief[3].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>

    <section className="method-section" id="method" aria-labelledby="method-title">
      <div className="method-intro"><p className="eyebrow">{c.method.intro[0]}</p><h2 id="method-title">{c.method.intro[1]}</h2><p>{c.method.intro[2]}</p></div>
      <div className="method-frameworks">
        <article className="framework-card framework-light"><div className="framework-number">01</div><p className="eyebrow">{c.method.macro[0]}</p><h3>{c.method.macro[1]}</h3><p>{c.method.macro[2]}</p><ol className="framework-steps">{c.method.macro[3].map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span> {step}</li>)}</ol></article>
        <article className="framework-card framework-dark"><div className="framework-number">02</div><p className="eyebrow">{c.method.narra[0]}</p><h3>{c.method.narra[1]}</h3><p>{c.method.narra[2]}</p><ol className="narra-steps">{c.method.narra[3].map(([letter, title, text]) => <li key={title}><strong>{letter}</strong><span><b>{title}</b>{text}</span></li>)}</ol></article>
      </div>
      <blockquote className="method-formula">{c.method.formula}</blockquote>
    </section>

    <section className="origin-section" id="origin" aria-labelledby="origin-title">
      <div className="origin-heading"><p className="eyebrow">{c.origin[0]}</p><h2 id="origin-title">{c.origin[1]}</h2></div>
      <div className="origin-story"><p className="origin-lead">{c.origin[2]}</p><p>{c.origin[3]}</p><a className="inline-link" href="https://www.uca.edu.sv/comunicaciones-cultura/educomunicacion/" target="_blank" rel="noreferrer">{c.origin[4]} <ArrowUpRight size={16}/></a></div>
      <ol className="origin-principles" aria-label={c.origin[5]}>{c.origin[6].map(([title, text], index) => <li key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{title}</strong><p>{text}</p></div></li>)}</ol>
      <p className="origin-note">{c.origin[7]}</p>
    </section>

    <section className="case-studies" aria-label={c.cases.aria}>
      <article className="case-study"><div className="case-visual wiki-visual"><img src="assets/wikilearn-current.png" alt={c.cases.wiki[0]}/><span className="visual-label">{c.cases.wiki[1]}</span></div><div className="case-content"><p className="eyebrow coral-text">{c.cases.wiki[2]}</p><h2>{c.cases.wiki[3]}</h2><p className="case-lead">{c.cases.wiki[4]}</p><dl className="case-facts">{c.cases.wiki[5].map(([term, description]) => <div key={term}><dt>{term}</dt><dd>{description}</dd></div>)}</dl><div className="tag-row">{c.cases.wiki[6].map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>
      <article className="case-study reverse"><div className="case-visual gaplandia-visual"><span>{c.cases.gaap[0]}</span><strong>GAP<br/>LANDIA</strong><p>{c.cases.gaap[1]}</p></div><div className="case-content"><p className="eyebrow coral-text">{c.cases.gaap[2]}</p><h2>{c.cases.gaap[3]}</h2><p className="case-lead">{c.cases.gaap[4]}</p><dl className="case-facts">{c.cases.gaap[5].map(([term, description]) => <div key={term}><dt>{term}</dt><dd>{description}</dd></div>)}</dl><div className="tag-row">{c.cases.gaap[6].map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>
      <article className="case-study text-case"><div className="case-number-panel"><span>03</span><strong>{c.cases.wayuu[0].map((line) => <span className="panel-line" key={line}>{line}</span>)}</strong></div><div className="case-content"><p className="eyebrow coral-text">{c.cases.wayuu[1]}</p><h2>{c.cases.wayuu[2]}</h2><p className="case-lead">{c.cases.wayuu[3]}</p><dl className="case-facts">{c.cases.wayuu[4].map(([term, description]) => <div key={term}><dt>{term}</dt><dd>{description}</dd></div>)}</dl><a className="inline-link" href="https://youtu.be/m5jqztzKMPU" target="_blank" rel="noreferrer">{c.cases.wayuu[5]} <ArrowUpRight size={16}/></a></div></article>
    </section>

    <section className="more-work"><div className="section-heading"><span>{c.more.heading[0]}</span><h2>{c.more.heading[1]}</h2></div><div className="more-grid">
      {[c.more.organizer, c.more.humanities, c.more.board].map((item) => <article key={item[1]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}
      <article><span>{c.more.ruralia[0]}</span><h3>{c.more.ruralia[1]}</h3>{c.more.ruralia[2].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="mini-tag-row">{c.more.ruralia[3].map((tag) => <span key={tag}>{tag}</span>)}</div><a className="mini-link" href="https://eshoy.pe/ruralia/" target="_blank" rel="noreferrer">{c.more.ruralia[4]} <ArrowUpRight size={14}/></a></article>
    </div></section>

    <section className="about-section"><div className="about-kicker">{c.about[0]}</div><div><h2>{c.about[1]}</h2>{c.about[2].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>

    <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="contact-intro"><p className="eyebrow">{c.contact[0]}</p><h2 id="contact-title">{c.contact[1]}</h2><p>{c.contact[2]}</p></div><div className="contact-options"><a className="contact-option" href="mailto:contact@anamariaespinoza.com"><span>Email</span><strong>contact@anamariaespinoza.com</strong><p>{c.contact[3]}</p><ArrowUpRight size={24}/></a><a className="contact-option network" href="https://linkedin.com/in/anamariaespinoza" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>{c.contact[4]}</strong><p>{c.contact[5]}</p><ArrowUpRight size={24}/></a></div></section>

    <footer className="footer"><p className="footer-kicker">{c.footer[0]}</p><h2>{c.footer[1]}</h2><div className="footer-links"><a href="mailto:contact@anamariaespinoza.com">contact@anamariaespinoza.com <ArrowUpRight size={18}/></a><a href="https://linkedin.com/in/anamariaespinoza" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={18}/></a></div><p className="footer-privacy-note">{c.footer[2]}</p><div className="footer-bottom"><span>{c.footer[3]}</span><span>© 2026 Anamaría Espinoza</span></div></footer>
  </main>;
}
