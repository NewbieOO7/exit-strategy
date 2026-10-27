// Builds the Turkish dictionary {English: Turkish} from the tr*.tsv files and checks it against keys.json.
const fs=require("fs");
const keys=require("./keys.json");
const norm=s=>s.replace(/<[^>]*>/g," ").replace(/[^A-Za-z0-9]/g,"").toLowerCase();
const tr={},problems=[];
for(const f of fs.readdirSync(__dirname).filter(f=>/^tr\d+\.tsv$/.test(f)).sort()){
  for(const line of fs.readFileSync(__dirname+"/"+f,"utf8").split(/\r?\n/)){
    if(!line.trim())continue;
    const [id,prefix,...rest]=line.split("\t");const t=rest.join("\t");
    const en=id==="x"?prefix:keys[+id];
    if(en===undefined){problems.push(`${f} id ${id}: no such key`);continue;}
    // the prefix is a few words of the English, used to catch misnumbered lines
    const words=norm(prefix);
    if(words&&!norm(en).includes(words))problems.push(`${f} id ${id}: prefix "${prefix}" not in "${en.slice(0,60)}"`);
    const ph=s=>[...new Set((s.match(/\{\d+/g)||[]).map(x=>x.slice(1)))].sort().join(",");
    if(ph(en)!==ph(t))problems.push(`${f} id ${id}: placeholders ${ph(en)} vs ${ph(t)} :: ${t.slice(0,70)}`);
    if(en.includes("{pct}")!==t.includes("{pct}"))problems.push(`${f} id ${id}: {pct} mismatch`);
    if(en.includes("${R}")!==t.includes("${R}"))problems.push(`${f} id ${id}: \${R} mismatch`);
    const tags=s=>(s.match(/<[^>]+>/g)||[]).map(x=>x.replace(/\s.*>/,">")).sort().join("");
    if(tags(en)!==tags(t))problems.push(`${f} id ${id}: tags differ`);
    tr[en]=t;
  }
}
const missing=keys.map((k,i)=>[i,k]).filter(([i,k])=>!(k in tr));
module.exports={tr,problems,missing};
if(require.main===module){
  console.log("entries",Object.keys(tr).length,"problems",problems.length,"untranslated",missing.length);
  problems.forEach(p=>console.log("  ",p));
  console.log("untranslated:",missing.map(([i,k])=>i+":"+k.slice(0,30)).join(" | "));
}
