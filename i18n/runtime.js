// ---------- Language ----------
// The game is written in English. $t looks each line up in the chosen language and falls back to English.
// Markup is translated piece by piece (text between block tags, plus aria-labels), so layout code stays as is.
// In translations, {0:gen} / {0:acc} / {0:dat} / {0:loc} / {0:abl} add a Turkish case suffix to a name.
const LANGS={en:"English",tr:"Türkçe"};
let LANG="en";
try{LANG=(location.hash.match(/lang=(\w+)/)||[])[1]||localStorage.getItem("es-lang")||"en";}catch(e){}
if(!LANGS[LANG])LANG="en";
const LOC=LANG==="tr"?"tr-TR":"en-US";
try{document.documentElement.lang=LANG;}catch(e){}
const DICT=LANG==="tr"?/*DICT*/:null;
const BLOCKTAG=new RegExp("(<(?!/?(?:b|i|em)[ >])[^>]+>)");
const TCACHE=new Map();
function trKey(k){
  if(!DICT)return k;
  let r=TCACHE.get(k);if(r!==undefined)return r;
  r=DICT[k];
  if(r===undefined)r=/<[a-z]/i.test(k)?k.split(BLOCKTAG).map((p,i)=>{
    if(i%2)return p.replace(/aria-label="([^"{]*)"/g,(m,a)=>`aria-label="${DICT[a]??a}"`);
    const t=p.replace(/\s+/g," ").trim();
    return t&&DICT[t]!==undefined?p.match(/^\s*/)[0]+DICT[t]+p.match(/\s*$/)[0]:p;}).join(""):k;
  TCACHE.set(k,r);return r;}
function trSuffix(w,c){
  const end=w.trim().toLocaleLowerCase("tr-TR").replace(/[^a-zçğıöşü]+$/,"");
  const silentE=/[^aeiouy]e$/.test(end)&&end.length>3;
  let vowelEnd=!silentE&&/[aeıioöuüy]$/.test(end);
  let v=silentE||/y$/.test(end)?"i":(end.match(/[aeıioöuü](?=[^aeıioöuü]*$)/)||["e"])[0];
  const back=/[aıou]/.test(v),round=/[oöuü]/.test(v);
  const I=back?(round?"u":"ı"):(round?"ü":"i"),A=back?"a":"e",D=/[çfhkpsşt]$/.test(end)?"t":"d";
  const s={gen:(vowelEnd?"n":"")+I+"n",acc:(vowelEnd?"y":"")+I,dat:(vowelEnd?"y":"")+A,loc:D+A,abl:D+A+"n"}[c];
  return s?w+"'"+s:w;}
function $t(s,...v){
  if(Array.isArray(s)){
    const t=trKey(s.reduce((a,p,i)=>a+(i?"{"+(i-1)+"}":"")+p,""));
    return t.replace(/\{(\d+)(?::(\w+))?\}/g,(m,i,c)=>{const x=v[+i];return x===undefined?m:c&&DICT?trSuffix(String(x),c):String(x);});}
  return trKey(s);}
// The static screens in the markup (title, cold open).
if(DICT&&document.createTreeWalker){
  const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  for(let n;(n=w.nextNode());){const t=n.nodeValue.replace(/\s+/g," ").trim();if(t&&DICT[t]!==undefined)n.nodeValue=n.nodeValue.replace(/\S[\s\S]*\S|\S/,DICT[t]);}
  for(const e of document.querySelectorAll("[aria-label]")){const a=e.getAttribute("aria-label");if(DICT[a]!==undefined)e.setAttribute("aria-label",DICT[a]);}
}
// Turkish puts the percent sign first: %15.
const pctf=n=>LANG==="tr"?"%"+n:n+"%";
function setLang(l){
  if(l===LANG||!LANGS[l])return;
  try{localStorage.setItem("es-lang",l);}catch(e){}
  try{history.replaceState(null,"","#lang="+l);}catch(e){location.hash="lang="+l;}
  location.reload();}
