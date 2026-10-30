import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
for(const lang of ['en','es']){
 const html=await readFile(`docs/${lang}/index.html`,'utf8');
 const text=html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<[^>]*>/g,' ');
 assert(text.length>10000,'Missing static page content');
 for(const value of ['WikiLearn','NarrLab','Wayuu','ED-UCA','Organizer Lab','120','400'])assert(text.includes(value),`Missing ${value}`);
 assert(html.includes(`<html lang="${lang}">`));
 assert(html.includes(`rel="canonical" href="https://anamariae.github.io/portfolio/${lang}/"`));
 for(const locale of ['en','es'])assert(html.includes(`hreflang="${locale}" href="https://anamariae.github.io/portfolio/${locale}/"`));
 assert(!html.includes('src="assets/'),'Relative image path breaks locale routes');
 console.log(`${lang}: static content, language, canonical and alternate links passed`);
}
const sitemap=await readFile('docs/sitemap.xml','utf8');
for(const lang of ['en','es']) for(const id of ['wiki','gaap','wayuu','educa','humanities','organizer']){
 const url=`https://anamariae.github.io/portfolio/${lang}/cases/${id}/`;
 const html=await readFile(`docs/${lang}/cases/${id}/index.html`,'utf8');
 assert(html.includes(`rel="canonical" href="${url}"`));
 assert(sitemap.includes(`<loc>${url}</loc>`));
 assert.equal((html.match(/<h1>/g)||[]).length,1);
 assert(!html.includes('<script'),'Case content should require no JavaScript');
 if(id==='wiki')assert(html.includes(lang==='es'?'31.400':'31,400'));
 if(id==='wayuu')assert(html.includes('https://canva.link/5y2mzgrw02a4k3q'));
}
console.log('12 static case pages: canonical URLs, sitemap, headings and key evidence passed');
