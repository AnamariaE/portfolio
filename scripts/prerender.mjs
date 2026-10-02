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
 const template=await readFile('docs/index.html','utf8');
 for(const [path,lang] of [['','en'],['en/','en'],['es/','es']]){
  const url=base+lang+'/';
  let html=template.replace('<html lang="en">',`<html lang="${lang}">`).replace('<div id="root"></div>',`<div id="root">${renderToString(createElement(Home,{defaultLanguage:lang}))}</div>`);
  html=html.replace(/<title>.*?<\/title>/,`<title>${escape(copy[lang].meta[0])}</title>`).replace(/(<meta name="description" content=")[^"]*/,`$1${escape(copy[lang].meta[1])}`).replace(/(<link rel="canonical" href=")[^"]*/,`$1${url}`).replace(/(<meta property="og:url" content=")[^"]*/,`$1${url}`).replaceAll(base+'?lang=en',base+'en/').replaceAll(base+'?lang=es',base+'es/').replace('href="favicon.svg"','href="/portfolio/favicon.svg"');
  html=html.replace(/(<meta property="og:title" content=")[^"]*/,`$1${escape(copy[lang].meta[0])}`).replace(/(<meta property="og:description" content=")[^"]*/,`$1${escape(copy[lang].meta[1])}`).replace(/(<meta name="twitter:title" content=")[^"]*/,`$1${escape(copy[lang].meta[0])}`).replace(/(<meta name="twitter:description" content=")[^"]*/,`$1${escape(copy[lang].meta[1])}`).replace(`hreflang="x-default" href="${base}"`,`hreflang="x-default" href="${base}en/"`);
  html=html.replace('</head>' ,'<link rel="sitemap" type="application/xml" href="/portfolio/sitemap.xml" /></head>');
  await mkdir('docs/'+path,{recursive:true}); await writeFile('docs/'+path+'index.html',html);
 }
 await writeFile('docs/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${['en','es'].map(lang=>`<url><loc>${base}${lang}/</loc>${['en','es'].map(l=>`<xhtml:link rel="alternate" hreflang="${l}" href="${base}${l}/"/>`).join('')}<xhtml:link rel="alternate" hreflang="x-default" href="${base}en/"/></url>`).join('')}</urlset>`);
 console.log('Prerendered complete English and Spanish pages.');
} finally {await server.close();}
