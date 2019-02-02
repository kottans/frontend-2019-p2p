const hamb = document.getElementById('hamburger');
const cont = document.getElementById('container');
const header = document.getElementById('header');
const text = document.getElementById('main-text')
const jhin = document.getElementById('jhin');
const topHead = document.getElementById('head');
const mf = document.getElementById('mf')
const kaisa = document.getElementById('kaisa');
const caitlyn = document.getElementById('caitlyn');
const jhinm = document.getElementById('jhinm');
const mfm = document.getElementById('mfm')
const kaisam = document.getElementById('kaisam');
const caitlynm = document.getElementById('caitlynm');
const imgChange = document.getElementById('imgChange');
const desk = document.getElementById('desk');

hamb.addEventListener("click", function () {menu()});

jhin.addEventListener("click", function () {jhinf();});

caitlyn.addEventListener("click", function () {caitf()});

kaisa.addEventListener("click", function () {kaisaf()});

mf.addEventListener("click", function () { mff();})

jhinm.addEventListener("click", function () {jhinf();});

caitlynm.addEventListener("click", function () {caitf()});

kaisam.addEventListener("click", function () {kaisaf()});

mfm.addEventListener("click", function () { mff();})


function menu() {
  cont.classList.toggle("start");
  hamb.classList.toggle("is-active");
}


//Champions functions

function jhinf() {
  menu();
  header.textContent = "JHIN";
  text.textContent = "Jhin is a meticulous criminal psychopath who believes murder is art. Once an Ionian prisoner, but freed by shadowy elements within Ionia’s ruling council, the serial killer now works as their cabal's assassin. Using his gun as his paintbrush, Jhin creates works of artistic brutality, horrifying victims and onlookers. He gains a cruel pleasure from putting on his gruesome theater, making him the ideal choice to send the most powerful of messages: terror. For years, Ionia’s southern mountains were plagued by the infamous “Golden Demon.” Throughout the province of Zhyun, a monster slaughtered scores of travelers and sometimes whole farmsteads, leaving behind twisted displays of corpses. Armed militias searched the forests, towns hired demon hunters, Wuju masters patrolled the roads - but nothing slowed the beast’s grisly work.";
  clearify();
  clearDesk();
  head.classList.add("jhin-header");
  desk.classList.add("jhin-desk-head")
  cont.classList.add("jhin-header");
  document.body.classList.add("jhin-body");
  imgChange.src = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_0.jpg";
}

function mff() {
  menu();
  header.textContent = "MISS FORTUNE";
  text.textContent = "Beauty and danger: There are few who can match Miss Fortune in either. One of Bilgewater's most infamous bounty hunters, she built her legend upon a swathe of bullet-riddled corpses and captured ne’er-do-wells. The booming echoes of her twin pistols in the port city’s reeking wharfs and scavenger shanties are sure signs of another warrant from the Bounty Board being settled. Like most who rise to notoriety in the twisting, salt-encrusted labyrinth of Bilgewater, Miss Fortune has no shortage of blood on her hands. Yet, it was not always this way, for she was once known as Sarah, the beloved daughter of a renowned gun-dame who lived peacefully at her isolated island workshop. Young Sarah helped her mother in the forge, filing wheel locks, calibrating trigger pulls, or casting custom pistol shot. Her mother’s skill in crafting firearms was legendary, and her bespoke handguns were to be found in the collections of many a wealthy noble. But ofttimes, they were desired";
  clearify();
  clearDesk();
  head.classList.add("mf-header");
  desk.classList.add("mf-desk-head");
  cont.classList.add("mf-header");
  document.body.classList.add("mf-body");
  imgChange.src = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg";
}

function caitf() {
  menu();
  header.textContent = "CAITLYN";
  text.textContent = "A determined and skilled investigator, Caitlyn is one of the sheriffs of Piltover, the City of Progress. She is a fiercely intelligent woman with a strong sense of justice and a resolute devotion to the law. Armed with a magnificent hextech rifle, Caitlyn is a patient hunter and the bane of criminals throughout her city. Born to a wealthy and influential family of hextech artificers in Piltover, Caitlyn swiftly learned the social graces of city life, but preferred to spend her time in the wilder lands to the south. Equally adept at mingling with the moneyed citizens of the City of Progress or tracking a deer through the mud of the forest, Caitlyn spent the bulk of her youth beyond Piltover’s gates. She could track a bird on the wing or put a bullet through the eye of a hare at three hundred yards with her father’s Bilgewater repeater musket.";
  clearify();
  clearDesk();
  head.classList.add("caitlyn-header");
  desk.classList.add("cait-desk-head");
  cont.classList.add("caitlyn-header");
  document.body.classList.add("caitlyn-body");
  imgChange.src = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg";
}

function kaisaf() {
  menu();
  header.textContent = "KAI'SA";
  text.textContent = "In her tenth summer, the young girl Kaisa’s destiny would be changed forever. Had she been older, she might have noticed more of the unusual events that had begun to unfold in the villages—every day, her mother urged her stay home, for fear of strangers wandering the land, demanding tribute to dark powers below. Kaisa and her friends did not believe it, until one evening they came upon a pen of sacrificial goats bought from nomad herdsmen. Using the knife her father had given her on her eighth birthday, she cut their tethers and set the animals free into a nearby canyon. It seemed like a harmless prank, until the unthinkable happened. The ground began to quake, flashes of light scorched the sky, and the children ran for their lives.";
  clearify();
  clearDesk();
  head.classList.add("kaisa-header");
  desk.classList.add("kaisa-desk-head");
  cont.classList.add("kaisa-header");
  document.body.classList.add("kaisa-body");
  imgChange.src = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg";
}
//Find and delete background classes
function clearify() {
  if(topHead.className != ""){
    let old = [];
    old.push(document.body.className);
    old.push(topHead.className)
    document.body.classList.remove(old[0]);
    head.classList.remove(old[1]);
    cont.classList.remove(old[1]);
  }
}
function clearDesk(){
  let desktop = desk.className.split(" ");
  desk.classList.remove(desktop[1]);
 }
