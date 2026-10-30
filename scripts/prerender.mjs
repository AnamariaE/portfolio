import {createServer} from 'vite';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {createElement} from 'react';
import {renderToString} from 'react-dom/server';
const server=await createServer({configFile:'vite.pages.config.ts',server:{middlewareMode:true,hmr:false,ws:false},appType:'custom'});
const base='https://anamariae.github.io/portfolio/';
const escape=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
try {
 const {default:Home}=await server.ssrLoadModule('/../app/page.tsx');
 const {copy}=await server.ssrLoadModule('/../app/translations.ts');
 const {getCases,affiliations,wikiLayers}=await server.ssrLoadModule('/../app/gallery.tsx');
 const {default:CasePage}=await server.ssrLoadModule('/../app/case-page.tsx');
 const caseUrls=[];
 const template=await readFile('docs/index.html','utf8');
 for(const [path,lang] of [['','en'],['en/','en'],['es/','es']]){
  const url=base+lang+'/';
  let html=template.replace('<html lang="en">',`<html lang="${lang}">`).replace('<div id="root"></div>',`<div id="root">${renderToString(createElement(Home,{defaultLanguage:lang}))}</div>`);
  html=html.replace(/<title>.*?<\/title>/,`<title>${escape(copy[lang].meta[0])}</title>`).replace(/(<meta name="description" content=")[^"]*/,`$1${escape(copy[lang].meta[1])}`).replace(/(<link rel="canonical" href=")[^"]*/,`$1${url}`).replace(/(<meta property="og:url" content=")[^"]*/,`$1${url}`).replaceAll(base+'?lang=en',base+'en/').replaceAll(base+'?lang=es',base+'es/').replace('href="favicon.svg"','href="/portfolio/favicon.svg"');
  html=html.replace(/(<meta property="og:title" content=")[^"]*/,`$1${escape(copy[lang].meta[0])}`).replace(/(<meta property="og:description" content=")[^"]*/,`$1${escape(copy[lang].meta[1])}`).replace(/(<meta name="twitter:title" content=")[^"]*/,`$1${escape(copy[lang].meta[0])}`).replace(/(<meta name="twitter:description" content=")[^"]*/,`$1${escape(copy[lang].meta[1])}`).replace(`hreflang="x-default" href="${base}"`,`hreflang="x-default" href="${base}en/"`);
  html=html.replace('</head>' ,'<link rel="sitemap" type="application/xml" href="/portfolio/sitemap.xml" /></head>');
  await mkdir('docs/'+path,{recursive:true}); await writeFile('docs/'+path+'index.html',html);
 }
 for(const lang of ['en','es']) for(const c of getCases(lang)) {
  const es=lang==='es',url=base+lang+'/cases/'+c.id+'/',title=c.title+' — Anamaría Espinoza';
  const e=value=>escape(String(value));
  caseUrls.push({lang,id:c.id,url});
  const image=c.id==='wiki'?'wikilearn-hero.png':c.id==='humanities'?'aprendiz-cronauta.jpg':null;
  const body=renderToString(createElement(CasePage,{language:lang,id:c.id}));
  const html=`<!doctype html><html lang="${lang}"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>${e(title)}</title><meta name="description" content="${e(c.headline)}"/><meta name="robots" content="index, follow, max-image-preview:large"/><link rel="canonical" href="${url}"/>${['en','es'].map(l=>`<link rel="alternate" hreflang="${l}" href="${base}${l}/cases/${c.id}/"/>`).join('')}<link rel="alternate" hreflang="x-default" href="${base}en/cases/${c.id}/"/><meta property="og:type" content="article"/><meta property="og:title" content="${e(title)}"/><meta property="og:description" content="${e(c.headline)}"/><meta property="og:url" content="${url}"/><meta property="og:image" content="${base}og-share-v2.png"/><meta name="twitter:card" content="summary_large_image"/>${template.match(/<link[^>]+rel="stylesheet"[^>]*>/g)?.join('')??''}<link rel="stylesheet" href="/portfolio/case-pages.css"/><link rel="icon" href="/portfolio/favicon.svg"/></head><body class="case-document">${body}</body></html>`;
  await mkdir(`docs/${lang}/cases/${c.id}`,{recursive:true});await writeFile(`docs/${lang}/cases/${c.id}/index.html`,html);
 }
 await writeFile('docs/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${['en','es'].map(lang=>`<url><loc>${base}${lang}/</loc>${['en','es'].map(l=>`<xhtml:link rel="alternate" hreflang="${l}" href="${base}${l}/"/>`).join('')}<xhtml:link rel="alternate" hreflang="x-default" href="${base}en/"/></url>`).join('')}${caseUrls.map(({lang,id,url})=>`<url><loc>${url}</loc>${['en','es'].map(l=>`<xhtml:link rel="alternate" hreflang="${l}" href="${base}${l}/cases/${id}/"/>`).join('')}</url>`).join('')}</urlset>`);
 console.log('Prerendered complete English and Spanish pages.');
} finally {await server.close();}
