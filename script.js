const stages=[
["Egg","Silkworm eggs (called layings) are incubated for about 10 days until they hatch. Healthy, disease-free eggs are the basis of a good crop."],
["Larva","The worm eats mulberry leaves for about four weeks, moulting four times through five growth stages. It grows to thousands of times its hatching weight, so leaf quality and clean rearing beds matter."],
["Spinning","When fully grown, the worms are moved to a mountage (chandrika) and spin for two to three days. Each worm makes one continuous filament, and crowding or an uneven mountage leads to odd-shaped or double cocoons. This is where Aakar helps."],
["Cocoon","The worm turns into a pupa inside the cocoon. Cocoons are harvested from the mountage after about five to seven days, before the moth emerges and pierces the shell. This is where Nivara and Vidura help: harvesting, then sorting good from bad."],
["Moth","A few cocoons are kept for seed production and the moths lay the next generation of eggs. The rest are stifled with heat so the thread stays unbroken for reeling."]];
const panel=document.getElementById("panel"),tabs=document.querySelectorAll(".tabs button");
function show(i){const s=stages[i];panel.innerHTML="<h3>"+s[0]+"</h3><p>"+s[1]+"</p>";tabs.forEach((b,k)=>b.setAttribute("aria-selected",k==i))}
tabs.forEach(b=>b.addEventListener("click",()=>show(+b.dataset.i)));show(0);
const bar=document.querySelector(".rail i");
function prog(){const h=document.documentElement;bar.style.height=(h.scrollTop/(h.scrollHeight-h.clientHeight||1)*100)+"%"}
addEventListener("scroll",prog,{passive:true});prog();
