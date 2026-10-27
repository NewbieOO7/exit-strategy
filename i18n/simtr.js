global.location={hash:"#lang=tr"};
const fs=require("fs");const els={};
const SEEN=global.SEEN=new Set();const el=()=>({_h:"",_t:"",set innerHTML(v){this._h=String(v);SEEN.add(this._h)},get innerHTML(){return this._h},set textContent(v){this._t=String(v);SEEN.add(this._t)},get textContent(){return this._t},hidden:true,className:"",scrollTop:0,offsetWidth:1,style:{setProperty(){}},classList:{add(){},remove(){},toggle(){}},addEventListener(){},appendChild(){},remove(){}});
global.document={getElementById:id=>els[id]||(els[id]=el()),querySelector:()=>null,addEventListener(){},createElement:()=>el(),body:el()};
global.window={scrollTo(){},addEventListener(){},innerHeight:800};global.localStorage={getItem(){return null},setItem(){}};global.requestAnimationFrame=()=>{};global.performance={now:()=>Date.now()};
global.setTimeout=(f)=>{f();return 0;};global.setInterval=()=>1;global.clearInterval=()=>{};
const [, , file, exitW, pitchSkill]=process.argv;
eval(fs.readFileSync(file,"utf8")+`
const ends={},ranks=[0,0,0,0,0];let raids=0,raidEsc=0;
for(let run=0;run<300;run++){
  S=newGame();shown=null;render();let done=false;ACT.hire("marketer");ACT.hire("cfo");
  for(let w=0;w<60&&!done;w++){
    S.mkt=Math.min(5,Math.floor(w/4));S.skim=0.15;for(const p of ["passport","shells","villa","jet"])ACT.buy(p);
    closeModal();startDesk();closeModal();let g=0;
    while(S.desk&&!S.desk.done&&g++<60){const d=S.desk,c=d.q[d.i];if(!c)break;
      if(c.kind==="app"){let bad=c.idName!==c.name||c.pay.includes("Federal")||c.address.startsWith("200 Harbor")||c.pay.includes("Capitol")||Math.abs((gameDate(S.week).getFullYear()-c.born)-c.age)>1||c.sig!==c.idSig||c.pay.includes("Ashford Federal");
        if(!bad&&d.time>200){deskCheck("ref");if(c.checks.ref&&c.checks.ref.startsWith("Nobody"))bad=true;}
        if(bad)deskDecide("reject");
        else if(!c.pitched){const right=c.pref?PITCHES.findIndex(p=>p.k===c.pref):0;doPitch(Math.random()<+${pitchSkill}?right:Math.floor(Math.random()*3));}
        else deskDecide("accept");}
      else if(c.kind==="wd")deskDecide(S.cash>c.amt?"pay":"stall");
      else{c.fields.forEach(f=>f.pick=f.o.findIndex(o=>o[0]==="c"));deskDecide("file");}
      if(S.desk&&S.desk.i>=S.desk.q.length)deskSummary();}
    if(S.desk&&!S.desk.done)deskSummary();
    ACT.dclose();let guard=0;
    while(!document.getElementById("modal").hidden&&guard++<6){const h=document.getElementById("card").innerHTML;
      if(h.includes('data-act="raidrun"')){raids++;ACT.raidrun();const k=document.getElementById("card").innerHTML.match(/class="tag">([^<]+)/)[1].trim();if(k==="You got away")raidEsc++;ends["raid:"+k]=(ends["raid:"+k]||0)+1;done=true;break;}
      if(h.includes("nightcollapse")){startNight(true);nightPick(0);nightPick(1);nightPick(2);nightPick(0);const k2=document.getElementById("card").innerHTML.match(/class="tag">([^<]+)/)[1].trim();ends["collapse:"+k2]=(ends["collapse:"+k2]||0)+1;done=true;break;}
      if(h.includes('data-act="choose"'))resolveEvent(h.includes('data-v="0" disabled')?1:0);
      else if(h.includes('class="rk"'))ACT.paper();
      else if(h.includes("Ledger"))closeModal();
      else{const k=h.match(/class="tag">([^<]+)/);ends[k?k[1].trim():"?"]=(ends[k?k[1].trim():"?"]||0)+1;done=true;break;}}
    if(!done&&w>=+${exitW}){closeModal();beginRun();if(document.getElementById("card").innerHTML.includes("One last deal"))startNight(false);nightPick(0);nightPick(1);nightPick(2);const rs=ROUTES.filter(r=>r.need(S));const ok=rs.findIndex(r=>r.id!==S.night.named);nightPick(ok<0?0:ok);done=true;const k=document.getElementById("card").innerHTML.match(/class="tag">([^<]+)/)[1].trim();ends[k]=(ends[k]||0)+1;}
  }
  ranks[S.rank]++;
}
console.log("exit wk ${exitW} pitch skill ${pitchSkill}",JSON.stringify(ends),"ranks reached [Hustler..Wolf]",ranks.join("/"));
for(const n of S.notes||[])SEEN.add(n);`);