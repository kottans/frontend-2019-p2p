//Toggle sidemenu
const sideMenu = document.querySelector('.side-menu');
const content = document.querySelector('.content');
const toggleButton = document.querySelector('.toggle-button');

toggleButton.addEventListener('click', event => {
  sideMenu.classList.toggle('visible');
  //click dosen't spread on content
  event.stopPropagation();
});

content.addEventListener('click', () => sideMenu.classList.remove('visible'));

//Data base for content
const dataBase = [
  {
    type: 'pistols',
    title: 'pistols',
    img: 'img--pispols',
    description:
      'A pistol is a type of handgun. The pistol originates in the 16th century, when early handguns were produced in Europe. The English word was introduced in ca. 1570 from the Middle French pistolet (ca. 1550). The most common types of pistol are the single shot and semi-automatic.'
  },
  {
    type: 'winchesters',
    title: 'winchesters',
    img: 'img--winchesters',
    description:
      'Winchester rifle is a comprehensive term describing a series of lever-action repeating rifles manufactured by the Winchester Repeating Arms Company. Developed from the 1860 Henry rifle, Winchester rifles were among the earliest repeaters. The Model 1873 was particularly successful, being marketed by the manufacturer as "The Gun that Won the West".'
  },
  {
    type: 'machineGuns',
    title: 'machine guns',
    img: 'img--machineGuns',
    description:
      'A machine gun is a fully automatic mounted or portable firearm designed to fire rifle cartridges in rapid succession from an ammunition belt or magazine for the purpose of suppressive fire. Not all fully automatic firearms are machine guns. Submachine guns, rifles, assault rifles, battle rifles, shotguns, pistols or cannons may be capable of fully automatic fire, but are not designed for sustained fire. As a class of military rapid-fire guns, machine guns are fully automatic weapons designed to be used as support weapons and generally used when attached to a mount- or fired from the ground on a bipod or tripod. Many machine guns also use belt feeding and open bolt operation, features not normally found on rifles.'
  },
  {
    type: 'sniperRifles',
    title: 'sniper rifles',
    img: 'img--sniperRifles',
    description:
      'A sniper rifle is a high-precision rifle designed for sniper missions. It serves to fulfil the tactical need for long range surveillance, effective anti-personnel and anti-materiel operations with a high hit probability, and can be used by both military, law enforcement and civilian militias. The modern sniper rifle is a portable shoulder-fired weapon system with a choice between bolt-action or semi-automatic action, fitted with a telescopic sight for extreme accuracy and chambered for a high-ballistic performance centerfire cartridge.'
  },
  {
    type: 'grenades',
    title: 'grenades',
    img: 'img--grenades',
    description:
      'A grenade is a large explosive weapon typically thrown by hand, but can also refer to projectiles shot out of grenade launchers. Generally, a grenade consists of an explosive charge, a detonating mechanism, and firing pin inside the grenade to trigger the detonating mechanism. Once the soldier throws the grenade, the safety lever releases, the striker throws the safety lever away from the grenade body as it rotates to detonate the primer. The primer explodes and ignites the fuze (sometimes called the delay element). The fuze burns down to the detonator, which explodes the main charge.'
  },
  {
    type: 'ammunition',
    title: 'ammunition',
    img: 'img--ammunition',
    description:
      'Ammunition (informally ammo) is the material fired, scattered, dropped or detonated from any weapon. Ammunition is both expendable weapons (e.g., bombs, missiles, grenades, land mines) and the component parts of other weapons that create the effect on a target (e.g., bullets and warheads). Nearly all mechanical weapons require some form of ammunition to operate.'
  }
];

//Content elements
const topicTitle = document.querySelector('.topic__title');
const topicImg = document.querySelector('.topic__img');
const topicDescription = document.querySelector('.topic__description');

//Generator for content
const generateContent = (title, img, description) => {
  topicTitle.textContent = title;
  topicImg.classList.add(img);
  topicDescription.textContent = description;
};

//Create event (in 'Event Delegation' way)
sideMenu.addEventListener('click', e => {
  dataBase.forEach(element => {
    if (event.target.getAttribute('data-type') === element['type']) {
      //reset title img to default class
      topicImg.classList = 'topic__img';
      generateContent(element['title'], element['img'], element['description']);
      //hide sidebar menu (only for screens less then 600px)
      sideMenu.classList.remove('visible');
    }
  });
});
