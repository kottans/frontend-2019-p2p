//Toggle sidemenu
const sideMenu = document.getElementById('sideMenu');
const content = document.getElementById('content');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', event => {
  sideMenu.classList.toggle('visible');
  //click dosen't spread on content
  event.stopPropagation();
});

content.addEventListener('click', () => sideMenu.classList.remove('visible'));

//Data base for content
const titles = [
  'Pistols',
  'Winchesters',
  'Machine guns',
  'Sniper rifles',
  'Grenades',
  'Ammunition'
];
const imgs = [
  'url(img/pistols.png)',
  'url(img/winchesters.png)',
  'url(img/machine-gun.png)',
  'url(img/sniper.png)',
  'url(img/granades.png)',
  'url(img/ammo.png)'
];

const descriptions = [
  'A pistol is a type of handgun. The pistol originates in the 16th century, when early handguns were produced in Europe. The English word was introduced in ca. 1570 from the Middle French pistolet (ca. 1550). The most common types of pistol are the single shot and semi-automatic.',
  'Winchester rifle is a comprehensive term describing a series of lever-action repeating rifles manufactured by the Winchester Repeating Arms Company. Developed from the 1860 Henry rifle, Winchester rifles were among the earliest repeaters. The Model 1873 was particularly successful, being marketed by the manufacturer as "The Gun that Won the West".',
  'A machine gun is a fully automatic mounted or portable firearm designed to fire rifle cartridges in rapid succession from an ammunition belt or magazine for the purpose of suppressive fire. Not all fully automatic firearms are machine guns. Submachine guns, rifles, assault rifles, battle rifles, shotguns, pistols or cannons may be capable of fully automatic fire, but are not designed for sustained fire. As a class of military rapid-fire guns, machine guns are fully automatic weapons designed to be used as support weapons and generally used when attached to a mount- or fired from the ground on a bipod or tripod. Many machine guns also use belt feeding and open bolt operation, features not normally found on rifles.',
  'A sniper rifle is a high-precision rifle designed for sniper missions. It serves to fulfil the tactical need for long range surveillance, effective anti-personnel and anti-materiel operations with a high hit probability, and can be used by both military, law enforcement and civilian militias. The modern sniper rifle is a portable shoulder-fired weapon system with a choice between bolt-action or semi-automatic action, fitted with a telescopic sight for extreme accuracy and chambered for a high-ballistic performance centerfire cartridge.',
  'A grenade is a large explosive weapon typically thrown by hand, but can also refer to projectiles shot out of grenade launchers. Generally, a grenade consists of an explosive charge, a detonating mechanism, and firing pin inside the grenade to trigger the detonating mechanism. Once the soldier throws the grenade, the safety lever releases, the striker throws the safety lever away from the grenade body as it rotates to detonate the primer. The primer explodes and ignites the fuze (sometimes called the delay element). The fuze burns down to the detonator, which explodes the main charge.',
  'Ammunition (informally ammo) is the material fired, scattered, dropped or detonated from any weapon. Ammunition is both expendable weapons (e.g., bombs, missiles, grenades, land mines) and the component parts of other weapons that create the effect on a target (e.g., bullets and warheads). Nearly all mechanical weapons require some form of ammunition to operate.'
];

//Content elements
const topicTitle = document.getElementById('topicTitle');
const topicImg = document.getElementById('topicImg');
const topicDescription = document.getElementById('topicDescription');

const dataTypes = [
  'pistols',
  'winchesters',
  'machineGuns',
  'sniperRifles',
  'grenades',
  'ammunition'
];

//Generator for content
const generateContent = (title, img, description) => {
  topicTitle.textContent = title;
  topicImg.style.backgroundImage = img;
  topicDescription.textContent = description;
};

//Create event (in 'Event Delegation' way)
sideMenu.addEventListener('click', e => {
  for (let i = 0; i < dataTypes.length; i++) {
    if (event.target.getAttribute('data-type') === dataTypes[i]) {
      generateContent(titles[i], imgs[i], descriptions[i]);
      sideMenu.classList.remove('visible');
    }
  }
});
