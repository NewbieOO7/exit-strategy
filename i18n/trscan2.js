require("./simtr.js");
const {tr}=require("C:/Users/user/AppData/Local/Temp/claude/C--Users-user/3b400e21-8357-47d9-8e61-be5dd8012dba/scratchpad/i18n/dict.js");
const words=s=>(s.replace(/<[^>]+>|\{\d+[^}]*\}/g," ").match(/[A-Za-z][a-z']{3,}/g)||[]);
const trw=new Set(Object.values(tr).flatMap(words).map(w=>w.toLowerCase()));
const enw=new Set(Object.keys(tr).flatMap(words).map(w=>w.toLowerCase()).filter(w=>!trw.has(w)));
const hits=new Map();
for(const v of global.SEEN){const t=v.replace(/<svg[\s\S]*?<\/svg>/g," ").replace(/<[^>]+>/g," ");
  for(const w of words(t))if(enw.has(w.toLowerCase())){const i=t.indexOf(w);const ctx=t.slice(Math.max(0,i-40),i+50).replace(/\s+/g," ");hits.set(w+" :: "+ctx,1+(hits.get(w+" :: "+ctx)||0));}}
const by=new Map();for(const [k,n] of hits){const w=k.split(" :: ")[0];if(!by.has(w))by.set(w,[n,k]);else by.get(w)[0]+=n;}
console.log("distinct english words found",by.size);for(const [w,[n,k]] of [...by].sort((a,b)=>b[1][0]-a[1][0]).slice(0,60))console.log(n,k);
