const $=s=>document.querySelector(s),L='#8fb8e8',A='#f2b441',P='#eaf2fb',W='#f3ead0';
const cv=id=>{const e=document.getElementById(id);return e.getContext('2d')};
function go(id){document.querySelectorAll('.pane').forEach(p=>p.hidden=p.id!==id);
 document.querySelectorAll('nav button').forEach(b=>b.setAttribute('aria-current',b.dataset.go===id));history.replaceState(0,'','#'+id)}
document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>go(b.dataset.go));
go(location.hash.slice(1)||'home');
const vis=id=>!document.getElementById(id).hidden;
function egg(x,c,y,r,f){x.fillStyle=f;x.beginPath();x.ellipse(c,y,r*.8,r,0,0,7);x.fill();x.strokeStyle='#6b5a3a';x.lineWidth=1.5;x.stroke()}
/* Aakar */
const ax=cv('ca');
function dA(){const f=$('#fold').value/100,th=f*.9,Lp=64,n=10,dx=Lp*Math.cos(th),dy=Lp*Math.sin(th);
 ax.clearRect(0,0,760,380);let x=380-n*dx/2,y=170-dy/2*(f>0),pts=[[x,y]];
 for(let i=0;i<n;i++){x+=dx;y+=i%2?-dy:dy;pts.push([x,y])}
 if(f>.05){ax.strokeStyle=L;ax.lineWidth=3;ax.beginPath();pts.forEach((p,i)=>i?ax.lineTo(p[0],p[1]+22):ax.moveTo(p[0],p[1]+22));ax.stroke();ax.fillStyle=L;ax.fillText('Frame with triangular ridges',20,350)}
 ax.strokeStyle=A;ax.lineWidth=6;ax.beginPath();pts.forEach((p,i)=>i?ax.lineTo(...p):ax.moveTo(...p));ax.stroke();
 pts.forEach((p,i)=>{ax.fillStyle=P;ax.beginPath();ax.arc(p[0],p[1],5,0,7);ax.fill();
  if(i<n){const mx=(p[0]+pts[i+1][0])/2,my=(p[1]+pts[i+1][1])/2,a=i%2?-th:th;ax.save();ax.translate(mx,my-14);ax.rotate(a);ax.strokeStyle=P;ax.lineWidth=1.5;ax.beginPath();for(let k=0;k<6;k++)ax.lineTo(13*Math.cos(k*1.0472),13*Math.sin(k*1.0472));ax.closePath();ax.stroke();ax.restore()}});
 $('#ar').textContent=f<.05?'Folded flat: easy to store and carry':'Panels at '+Math.round(th*57.3)+' degrees, width '+Math.round(Math.cos(th)*100)+'% of flat'}
/* Nivara */
const nx=cv('cn');let sx=40,np=false,co=[],col=0;
const fy=x=>{const t=((x-60)/40)%2;return 170+(t<1?t:2-t)*40};
function rn(){co=[];for(let i=0;i<16;i++){const x=80+i*40;co.push({x,y:fy(x)-11,v:0,s:0})}sx=40;col=0;np=false;$('#np').textContent='Push scraper'}
rn();$('#nr').onclick=rn;$('#np').onclick=()=>{np=!np;$('#np').textContent=np?'Pause':'Push scraper'};
function sN(dt){if(np){sx+=$('#ns').value*dt;if(sx>740){np=false;$('#np').textContent='Push scraper'}}
 co.forEach(o=>{if(o.s==0&&sx>o.x)o.s=1;if(o.s==1){o.v+=700*dt;o.y+=o.v*dt;if(o.y>=338){o.y=338;o.s=2;col++}}})}
function dN(){nx.clearRect(0,0,760,380);nx.strokeStyle=L;nx.lineWidth=3;nx.beginPath();for(let x=60;x<=700;x+=40){x>60?nx.lineTo(x,fy(x)+10):nx.moveTo(x,fy(x)+10)}nx.stroke();
 nx.strokeStyle=A;nx.lineWidth=5;nx.beginPath();for(let x=60;x<=700;x+=5){x>60?nx.lineTo(x,fy(x)):nx.moveTo(x,fy(x))}nx.stroke();
 co.forEach(o=>egg(nx,o.x,o.y,10,W));
 nx.strokeStyle=L;nx.lineWidth=2;nx.strokeRect(40,350,680,22);nx.fillStyle=L;nx.font='14px Archivo';nx.fillText('Collection tray',50,345);
 nx.fillStyle=P;nx.fillRect(sx-4,90,8,fy(sx)-90+4);nx.strokeStyle=P;nx.lineWidth=4;nx.beginPath();nx.moveTo(sx,90);nx.lineTo(sx-34,60);nx.stroke();nx.fillText('Scraper',sx-30,52);
 $('#nread').textContent='Harvested: '+col+' of 16 cocoons'}
/* Vidura */
const vx=cv('cv');let cur=null,gd=0,bd=0,vrun=true,wait=0;
$('#vp').onclick=()=>{vrun=!vrun;$('#vp').textContent=vrun?'Pause':'Resume'};
function spawn(){const bad=Math.random()<$('#dr').value/100,st=bad&&Math.random()<.5;
 cur={x:380,y:40,s:0,t:0,w:bad&&!st?.9+Math.random()*.4:1.6+Math.random()*.8,c:st?[150,115,75]:[243,234,208],d:null}}
function sV(dt){if(!vrun)return;if(!cur){wait-=dt;if(wait<=0)spawn();return}const o=cur;
 if(o.s==0){o.y+=170*dt;if(o.y>=170){o.y=170;o.s=1}}
 else if(o.s==1){o.t+=dt;if(o.t>.8){o.d=o.c[2]<180||o.w<1.4?'bad':'good';o.s=2}}
 else{const tx=o.d=='bad'?170:590;o.x+=Math.sign(tx-o.x)*Math.min(160*dt,Math.abs(tx-o.x));o.y=Math.min(330,o.y+140*dt);
  if(o.y>=330&&o.x==tx){o.d=='bad'?bd++:gd++;cur=null;wait=.4}}}
function dV(){vx.clearRect(0,0,760,380);vx.strokeStyle=L;vx.lineWidth=3;vx.fillStyle=L;vx.font='14px Archivo';
 vx.beginPath();vx.moveTo(280,10);vx.lineTo(480,10);vx.lineTo(400,90);vx.lineTo(360,90);vx.closePath();vx.stroke();vx.fillText('Hopper',356,32);
 vx.strokeStyle=A;vx.beginPath();vx.moveTo(350,100);vx.lineTo(410,100);vx.stroke();vx.fillStyle=A;vx.fillText('Air-lock gate',420,104);
 vx.fillStyle=L;[[335,150],[415,150],[375,125]].forEach(p=>vx.fillRect(p[0],p[1],14,14));vx.fillText('3 colour sensors',440,150);
 vx.fillRect(340,194,80,8);vx.fillText('Load cell',430,202);
 vx.strokeStyle=L;vx.lineWidth=2;vx.strokeRect(100,300,140,70);vx.strokeRect(520,300,140,70);
 vx.fillStyle=P;vx.fillText('Bad: '+bd,150,345);vx.fillText('Good: '+gd,570,345);
 if(cur){egg(vx,cur.x,cur.y,8+cur.w*4,'rgb('+cur.c+')');
  $('#vread').textContent=cur.s==0?'Cocoon released...':'Colour rgb('+cur.c+')  Weight '+cur.w.toFixed(1)+' g'+(cur.d?'  -> '+cur.d.toUpperCase():'  reading...')}}
let last=performance.now();
(function loop(n){const dt=Math.min((n-last)/1000,.05);last=n;
 if(vis('aakar'))dA();if(vis('nivara')){sN(dt);dN()}if(vis('vidura')){sV(dt);dV()}requestAnimationFrame(loop)})(last);
