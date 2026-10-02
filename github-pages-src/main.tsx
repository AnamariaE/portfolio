import React from 'react';
import {hydrateRoot} from 'react-dom/client';
import Home from '../app/page';
import '../app/globals.css';
const query=new URLSearchParams(window.location.search).get('lang');
const language=document.documentElement.lang==='es'?'es':'en';
if((query==='es'||query==='en')&&window.location.pathname!==`/portfolio/${query}/`){
 window.location.replace(`/portfolio/${query}/${window.location.hash}`);
}else{
 hydrateRoot(document.getElementById('root')!,<React.StrictMode><Home defaultLanguage={language}/></React.StrictMode>);
}
