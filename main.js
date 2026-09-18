const $=id=>document.getElementById(id);

const speciesList=[
"Largemouth Bass","Smallmouth Bass","Spotted Bass","Striped Bass","White Bass","Hybrid Striped Bass",
"Rainbow Trout","Brown Trout","Brook Trout","Lake Trout","Cutthroat Trout","Kokanee",
"Crappie","Bluegill","Redear Sunfish","Green Sunfish","Pumpkinseed","Warmouth",
"Channel Catfish","Blue Catfish","Flathead Catfish","Bullhead Catfish",
"Walleye","Sauger","Northern Pike","Muskie","Carp","Common Carp","Grass Carp",
"Steelhead","Salmon","Chinook Salmon","Coho Salmon","Chum Salmon",
"Sturgeon","Whitefish","Perch","Yellow Perch","Rock Bass","Bowfin","Gar"
];

const lureDB=[
{name:"Deep Diving Crankbait",icon:"🐟",species:["Largemouth Bass","Smallmouth Bass","Spotted Bass","Walleye","Striped Bass"],methods:["Downrigger","Trolling","Baitcasting"],present:["Lure","Artificial"],depth:["10–20 ft","20–40 ft","40+ ft"],clarity:["Stained","Muddy","Clear"],temp:[55,80],badge:"BEST MATCH",desc:"Gets a hard-running baitfish profile down to the selected depth. Excellent for covering water."},
{name:"Trolling Spoon",icon:"🥄",species:["Trout","Lake Trout","Kokanee","Salmon","Steelhead","Striped Bass","White Bass"],methods:["Downrigger","Trolling"],present:["Lure","Artificial"],depth:["10–20 ft","20–40 ft","40+ ft"],clarity:["Stained","Clear"],temp:[42,72],badge:"PROVEN PRODUCER",desc:"A strong trolling presentation for baitfish-eating species. Let the downrigger control depth."},
{name:"Trolling Fly",icon:"🪶",species:["Trout","Kokanee","Salmon","Steelhead"],methods:["Downrigger","Trolling"],present:["Lure","Artificial"],depth:["10–20 ft","20–40 ft","40+ ft"],clarity:["Clear","Stained"],temp:[40,68],badge:"TROLLING PICK",desc:"A small fly or streamer behind a dodger/flasher can imitate suspended forage."},
{name:"Trolled Swimbait",icon:"🐠",species:["Largemouth Bass","Smallmouth Bass","Striped Bass","Walleye"],methods:["Downrigger","Trolling"],present:["Lure","Artificial"],depth:["10–20 ft","20–40 ft","40+ ft"],clarity:["Clear","Stained"],temp:[55,82],badge:"GREAT OPTION",desc:"Natural baitfish profile for controlled trolling at the selected depth."},
{name:"Green Pumpkin Jig",icon:"🪝",species:["Largemouth Bass","Smallmouth Bass","Spotted Bass"],methods:["Baitcasting","Spinning"],present:["Lure","Artificial"],depth:["0–5 ft","5–10 ft","10–20 ft"],clarity:["Clear","Stained"],temp:[52,78],badge:"STRUCTURE PICK",desc:"Work rock, points, brush and transitions slowly. Match the jig to the cover."},
{name:"Texas-Rigged Soft Plastic",icon:"🪱",species:["Largemouth Bass","Smallmouth Bass","Spotted Bass"],methods:["Baitcasting","Spinning"],present:["Lure","Artificial"],depth:["0–5 ft","5–10 ft","10–20 ft","20–40 ft"],clarity:["Clear","Stained","Muddy"],temp:[55,88],badge:"HIGH CONFIDENCE",desc:"A versatile structure presentation. Slow down around cover and depth changes."},
{name:"Spinnerbait",icon:"✨",species:["Largemouth Bass","Smallmouth Bass","Spotted Bass","White Bass"],methods:["Baitcasting","Spinning"],present:["Lure","Artificial"],depth:["0–5 ft","5–10 ft","10–20 ft"],clarity:["Stained","Muddy"],temp:[55,85],badge:"WIND PICK",desc:"Use wind and low-light conditions to your advantage around points and shallow cover."},
{name:"Topwater Frog",icon:"🐸",species:["Largemouth Bass","Spotted Bass"],methods:["Baitcasting"],present:["Lure","Artificial"],depth:["0–5 ft"],clarity:["Clear","Stained"],temp:[65,90],badge:"LOW-LIGHT PICK",desc:"Best around shallow grass, pads and heavy cover during low-light periods."},
{name:"Inline Spinner",icon:"🌀",species:["Rainbow Trout","Brown Trout","Brook Trout","Steelhead"],methods:["Spinning"],present:["Lure","Artificial"],depth:["0–5 ft","5–10 ft","10–20 ft"],clarity:["Clear","Stained"],temp:[38,68],badge:"TROUT PICK",desc:"Cast and retrieve steadily through current or across likely feeding lanes."},
{name:"PowerBait / Dough Bait",icon:"🟡",species:["Rainbow Trout","Brown Trout","Brook Trout","Catfish"],methods:["Spinning"],present:["Bait"],depth:["0–5 ft","5–10 ft","10–20 ft"],clarity:["Clear","Stained","Muddy"],temp:[38,70],badge:"BAIT OPTION",desc:"A stationary bait presentation for soaking from shore or a boat. Not a downrigger presentation."},
{name:"Live Minnow Rig",icon:"🐟",species:["Crappie","Walleye","Perch","White Bass","Striped Bass"],methods:["Spinning","Trolling"],present:["Live Bait"],depth:["5–10 ft","10–20 ft","20–40 ft"],clarity:["Clear","Stained"],temp:[45,78],badge:"LIVE BAIT",desc:"Use suspended or bottom-oriented presentations around structure and bait."},
{name:"Crappie Jig",icon:"🎣",species:["Crappie","Bluegill","Perch"],methods:["Spinning"],present:["Lure","Artificial"],depth:["5–10 ft","10–20 ft","20–40 ft"],clarity:["Clear","Stained"],temp:[48,78],badge:"CRAPPIE PICK",desc:"Small profile presentation around brush, docks, submerged cover and suspended fish."},
{name:"Catfish Cut Bait",icon:"🪱",species:["Channel Catfish","Blue Catfish","Flathead Catfish"],methods:["Spinning","Trolling"],present:["Bait","Live Bait"],depth:["5–10 ft","10–20 ft","20–40 ft","40+ ft"],clarity:["Stained","Muddy"],temp:[55,90],badge:"CATFISH PICK",desc:"Work bottom-oriented areas such as channels, holes and structure."},
{name:"Worm & Bobber",icon:"🪱",species:["Bluegill","Redear Sunfish","Pumpkinseed","Perch","Crappie"],methods:["Spinning"],present:["Bait","Live Bait"],depth:["0–5 ft","5–10 ft","10–20 ft"],clarity:["Clear","Stained"],temp:[55,82],badge:"PANFISH PICK",desc:"Simple and effective around shallow cover, weed edges and docks."},
{name:"Walleye Jig",icon:"🪝",species:["Walleye","Sauger"],methods:["Baitcasting","Spinning"],present:["Lure","Artificial"],depth:["10–20 ft","20–40 ft"],clarity:["Clear","Stained"],temp:[45,70],badge:"WALLEYE PICK",desc:"Hop or drag along bottom near points, rock, current breaks and depth transitions."},
{name:"Spoon",icon:"🥄",species:["Walleye","Northern Pike","Muskie","Perch","White Bass"],methods:["Baitcasting","Spinning","Trolling"],present:["Lure","Artificial"],depth:["5–10 ft","10–20 ft","20–40 ft"],clarity:["Clear","Stained"],temp:[45,78],badge:"SEARCH BAIT",desc:"Flashy profile for covering water and locating active fish."},
{name:"Fly / Streamer",icon:"🪶",species:["Rainbow Trout","Brown Trout","Brook Trout","Steelhead","Salmon"],methods:["Fly Fishing"],present:["Lure","Artificial"],depth:["0–5 ft","5–10 ft","10–20 ft"],clarity:["Clear","Stained"],temp:[38,68],badge:"FLY PICK",desc:"Match streamer or fly size to the forage and current conditions."},
{name:"Carp Dough / Corn Rig",icon:"🌽",species:["Carp","Common Carp","Grass Carp"],methods:["Spinning"],present:["Bait"],depth:["0–5 ft","5–10 ft","10–20 ft"],clarity:["Clear","Stained"],temp:[55,85],badge:"CARP PICK",desc:"Bottom or near-bottom bait presentation around flats and feeding areas."}
];

speciesList.forEach((s,i)=>{const o=document.createElement("option");o.value=s;o.textContent=s;if(s==="Largemouth Bass")o.selected=true;$("species").appendChild(o)});

const lakes=["Pine Flat Lake","Shaver Lake","Millerton Lake","Hensley Lake","Bass Lake","San Luis Reservoir","Don Pedro Lake","New Melones Lake","Lake Kaweah","Lake Isabella","Clear Lake","Lake Oroville"];

const today=new Date();
$("date").value=today.toISOString().slice(0,10);

let tackle=JSON.parse(localStorage.getItem("anglerTackleV3")||"[]");
let trips=JSON.parse(localStorage.getItem("anglerTripsV3")||"[]");

function inputs(){
 return {waterbody:$("waterbody").value.trim()||"Your waterbody",species:$("species").value,date:$("date").value,time:$("time").value,
 platform:$("platform").value,depth:$("depth").value,setup:$("setup").value,presentation:$("presentation").value,sky:$("sky").value,
 wind:+$("wind").value||0,temp:+$("waterTemp").value||65,clarity:$("clarity").value};
}
function timeText(v){let [h,m]=v.split(":").map(Number),ap=h>=12?"PM":"AM",hh=h%12||12;return `${hh}:${String(m).padStart(2,"0")} ${ap}`}
function depthCenter(d){return {"0–5 ft":2.5,"5–10 ft":7.5,"10–20 ft":15,"20–40 ft":30,"40+ ft":50}[d]||10}

function compatible(l,c){
 if(!l.species.includes(c.species))return false;
 // Hard compatibility rules: never recommend stationary bait on a downrigger.
 if(c.setup==="Downrigger" && !l.methods.includes("Downrigger"))return false;
 if(c.setup==="Trolling" && !l.methods.includes("Trolling"))return false;
 if(c.setup==="Fly Fishing" && !l.methods.includes("Fly Fishing"))return false;
 if(c.presentation==="Bait" && !l.present.includes("Bait"))return false;
 if(c.presentation==="Live Bait" && !l.present.includes("Live Bait"))return false;
 if(c.presentation==="Lure" && !l.present.includes("Lure"))return false;
 if(c.presentation==="Artificial" && !l.present.includes("Artificial"))return false;
 if(!l.methods.includes(c.setup))return false;
 return true;
}
function score(l,c){
 let s=50;
 if(l.depth.includes(c.depth))s+=24;
 if(l.clarity.includes(c.clarity))s+=14;
 if(c.temp>=l.temp[0]&&c.temp<=l.temp[1])s+=15;
 if(c.wind>=6&&["Spinnerbait","Trolling Spoon","Spoon"].includes(l.name))s+=6;
 const hr=+c.time.split(":")[0];
 if((hr<9||hr>=18)&&["Topwater Frog","Trolling Spoon","Inline Spinner"].includes(l.name))s+=5;
 if(tackle.some(t=>t.toLowerCase().includes(l.name.toLowerCase().split(" ")[0])))s+=8;
 if(c.platform==="Shoreline" && l.methods.includes("Spinning"))s+=5;
 if(c.platform==="Boat" && l.methods.includes("Downrigger"))s+=5;
 return s;
}
function build(){
 const c=inputs();
 let candidates=lureDB.filter(l=>compatible(l,c));
 if(!candidates.length){
   // If the exact presentation filter is too restrictive, relax only presentation,
   // never the method/setup compatibility.
   candidates=lureDB.filter(l=>l.species.includes(c.species)&&l.methods.includes(c.setup));
 }
 if(!candidates.length){
   candidates=lureDB.filter(l=>l.species.includes(c.species));
 }
 candidates=candidates.map(l=>({...l,score:score(l,c)})).sort((a,b)=>b.score-a.score);
 render(candidates.slice(0,3),c);
 $("summary").textContent=`${c.waterbody} • ${c.species} • ${timeText(c.time)} • ${c.temp}°F • ${c.depth} • ${c.platform} • ${c.setup} • ${c.clarity} water`;
 $("status").textContent="✓ Game plan updated for your setup.";
 setTimeout(()=>$("status").textContent="",2300);
}
function render(items,c){
 $("recommendations").innerHTML=items.map((l,i)=>`<article class="rec">
 <div><div class="rank">#${i+1}</div><div class="lure">${l.icon}</div></div>
 <div><div class="rec-title">${esc(l.name)} <span class="badge">${l.badge}</span></div>
 <div class="desc">${esc(l.desc)}</div>
 <div class="meta"><span>🐟 ${esc(c.species)}</span><span>〰 ${esc(c.depth)}</span><span>🚤 ${esc(c.platform)}</span><span>🎣 ${esc(c.setup)}</span><span>🌡️ ${c.temp}°F</span><span>💧 ${esc(c.clarity)}</span></div></div>
 <div class="arrow">›</div></article>`).join("");
}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function show(id){
 document.querySelectorAll(".section").forEach(x=>x.classList.toggle("active",x.id===id));
 document.querySelectorAll("[data-section]").forEach(x=>x.classList.toggle("active",x.dataset.section===id));
 scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll("[data-section]").forEach(b=>b.onclick=()=>show(b.dataset.section));

function toast(msg){$("toast").textContent=msg;$("toast").classList.add("show");setTimeout(()=>$("toast").classList.remove("show"),2200)}

$("buildBtn").onclick=build;
$("bottomSearch").onclick=()=>{show("plan");setTimeout(()=>$("waterbody").focus(),250)};
$("searchBtn").onclick=()=>{show("plan");setTimeout(()=>$("waterbody").focus(),250)};
$("menuBtn").onclick=()=>toast("Use the navigation to explore Angler Adam's Fishing Guide.");

$("saveTripBtn").onclick=()=>{
 const c=inputs();trips.unshift({...c,savedAt:new Date().toISOString()});trips=trips.slice(0,25);
 localStorage.setItem("anglerTripsV3",JSON.stringify(trips));renderTrips();toast("Trip saved.");
};

$("locationBtn").onclick=()=>{
 if(!navigator.geolocation){toast("Location is not available.");return}
 $("status").textContent="Requesting location…";
 navigator.geolocation.getCurrentPosition(
 p=>{toast("Location found.");$("status").textContent="✓ GPS location available. Enter the waterbody name to plan the trip.";},
 ()=>{toast("Location permission unavailable.");$("status").textContent="Enter the waterbody manually.";},
 {enableHighAccuracy:true,timeout:8000}
);
};

function renderTackle(){
 $("tackleList").innerHTML=tackle.length?tackle.map((t,i)=>`<div class="tackle-item"><span>🎣 ${esc(t)}</span><button class="remove" data-r="${i}">Remove</button></div>`).join(""):`<div class="info">No tackle added yet.</div>`;
 document.querySelectorAll("[data-r]").forEach(b=>b.onclick=()=>{tackle.splice(+b.dataset.r,1);localStorage.setItem("anglerTackleV3",JSON.stringify(tackle));renderTackle();});
}
$("addTackleBtn").onclick=()=>{let v=$("tackleInput").value.trim();if(!v)return;tackle.push(v);localStorage.setItem("anglerTackleV3",JSON.stringify(tackle));$("tackleInput").value="";renderTackle();toast("Added to tackle box.")};

function renderTrips(){
 $("tripList").innerHTML=trips.length?trips.map((t,i)=>`<div class="trip-item"><b>${esc(t.waterbody)} • ${esc(t.species)}</b><span>${esc(t.depth)} • ${esc(t.platform)} • ${esc(t.setup)} • ${esc(t.clarity)}</span></div>`).join(""):`<div class="info">No saved trips yet.</div>`;
}
$("speciesGrid").innerHTML=speciesList.map(s=>`<button data-sp="${esc(s)}"><b>🐟 ${esc(s)}</b><p>Use ${esc(s)} as today's target.</p></button>`).join("");
document.querySelectorAll("[data-sp]").forEach(b=>b.onclick=()=>{$("species").value=b.dataset.sp;show("plan");build()});
$("lakeGrid").innerHTML=lakes.map(l=>`<button data-lake="${esc(l)}"><b>🗺️ ${esc(l)}</b><p>Load this waterbody.</p></button>`).join("");
document.querySelectorAll("[data-lake]").forEach(b=>b.onclick=()=>{$("waterbody").value=b.dataset.lake;show("plan");toast(`${b.dataset.lake} loaded.`)});

document.querySelectorAll(".tab").forEach(tab=>tab.onclick=()=>{
 document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));tab.classList.add("active");
 const c=inputs();
 $("extraContent").innerHTML="";
 if(tab.dataset.result==="top"){build();return}
 if(tab.dataset.result==="alternative"){
   let a=lureDB.filter(l=>compatible(l,c)).map(l=>({...l,score:score(l,c)})).sort((a,b)=>b.score-a.score).slice(3,7);
   if(!a.length)a=lureDB.filter(l=>l.species.includes(c.species)).map(l=>({...l,score:score(l,c)})).sort((a,b)=>b.score-a.score).slice(0,3);
   render(a,c);return;
 }
 $("recommendations").innerHTML="";
 if(tab.dataset.result==="technique")$("extraContent").innerHTML=`<div class="info"><h3>🎯 Start at ${c.depth}</h3><p>Use your ${c.setup.toLowerCase()} setup from the ${c.platform.toLowerCase()}. Change retrieve speed before changing lure style.</p></div><div class="info"><h3>🔁 Adaptive plan</h3><p>If there are no bites, adjust one variable at a time: depth → speed → color → profile.</p></div>`;
 else $("extraContent").innerHTML=`<div class="info"><h3>📍 Where to start</h3><p>Look for points, depth transitions, structure, bait and current. Start where your selected depth intersects likely fish-holding cover.</p></div>`;
});

renderTackle();renderTrips();build();
