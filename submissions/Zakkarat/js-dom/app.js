const hamb = document.getElementById('hamburger');
const cont = document.getElementById('container');
const header = document.getElementById('header');
const text = document.getElementById('main-text')
const topHead = document.getElementById('head');
const imgChange = document.getElementById('imgChange');
const desk = document.getElementById('desk');
const champ = document.querySelectorAll('a')
let texty = ["Jhin is a meticulous criminal psychopath who believes murder is art. Once an Ionian prisoner, but freed by shadowy elements within Ionia’s ruling council, the serial killer now works as their cabal's assassin. Using his gun as his paintbrush, Jhin creates works of artistic brutality, horrifying victims and onlookers. He gains a cruel pleasure from putting on his gruesome theater, making him the ideal choice to send the most powerful of messages: terror. For years, Ionia’s southern mountains were plagued by the infamous “Golden Demon.” Throughout the province of Zhyun, a monster slaughtered scores of travelers and sometimes whole farmsteads, leaving behind twisted displays of corpses. Armed militias searched the forests, towns hired demon hunters, Wuju masters patrolled the roads - but nothing slowed the beast’s grisly work." , "Beauty and danger: There are few who can match Miss Fortune in either. One of Bilgewaters most infamous bounty hunters, she built her legend upon a swathe of bullet-riddled corpses and captured ne’er-do-wells. The booming echoes of her twin pistols in the port city’s reeking wharfs and scavenger shanties are sure signs of another warrant from the Bounty Board being settled. Like most who rise to notoriety in the twisting, salt-encrusted labyrinth of Bilgewater, Miss Fortune has no shortage of blood on her hands. Yet, it was not always this way, for she was once known as Sarah, the beloved daughter of a renowned gun-dame who lived peacefully at her isolated island workshop. Young Sarah helped her mother in the forge, filing wheel locks, calibrating trigger pulls, or casting custom pistol shot. Her mothers skill in crafting firearms was legendary, and her bespoke handguns were to be found in the collections of many a wealthy noble. But ofttimes, they were desired" ,"A determined and skilled investigator, Caitlyn is one of the sheriffs of Piltover, the City of Progress. She is a fiercely intelligent woman with a strong sense of justice and a resolute devotion to the law. Armed with a magnificent hextech rifle, Caitlyn is a patient hunter and the bane of criminals throughout her city. Born to a wealthy and influential family of hextech artificers in Piltover, Caitlyn swiftly learned the social graces of city life, but preferred to spend her time in the wilder lands to the south. Equally adept at mingling with the moneyed citizens of the City of Progress or tracking a deer through the mud of the forest, Caitlyn spent the bulk of her youth beyond Piltover’s gates. She could track a bird on the wing or put a bullet through the eye of a hare at three hundred yards with her father’s Bilgewater repeater musket.",  "In her tenth summer, the young girl Kaisa’s destiny would be changed forever. Had she been older, she might have noticed more of the unusual events that had begun to unfold in the villages—every day, her mother urged her stay home, for fear of strangers wandering the land, demanding tribute to dark powers below. Kaisa and her friends did not believe it, until one evening they came upon a pen of sacrificial goats bought from nomad herdsmen. Using the knife her father had given her on her eighth birthday, she cut their tethers and set the animals free into a nearby canyon. It seemed like a harmless prank, until the unthinkable happened. The ground began to quake, flashes of light scorched the sky, and the children ran for their lives."]
let images = ["https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_0.jpg", "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg", "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg", "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg"];
let colorBody = ["#540a24", "#1d5452", "#138994", "#07103e"];
let colorHeader = ["#94152d", "#3cada7", "#216b73", "#202c6f"];
let colorDesk = ["#821d30", "#008e86", "#1c7782", "#071252"];
let names = ["JHIN", "MISS FORTUNE", "CAITLYN", "KAI'SA"];

function champAuto(a) {
  for (let i = 0; i < champ.length / 2; i++) {
    if (champ[i] == a || champ[i + 4] == a){
      menu();
      header.textContent = names[i];
      text.textContent = texty[i];
      head.style.backgroundColor = colorHeader[i];
      desk.style.backgroundColor = colorDesk[i];
      cont.style.backgroundColor = colorHeader[i];
      document.body.style.backgroundColor = colorBody[i];;
      imgChange.src = images[i];
    }
  }
}

hamb.addEventListener("click", function () {menu()});

desk.addEventListener("click", function (a) {
  let target = a.target;
  while (target != this) {
  if (target.tagName == 'A') {
    champAuto(target);
    return;
  }
  target = target.parentNode;
}});

 function menu() {
   cont.classList.toggle("start");
   hamb.classList.toggle("is-active");
 }
