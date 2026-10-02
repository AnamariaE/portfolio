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
