const fruits = [
  {
    name: 'Orange',
    imgSrc: './img/orange.png',
    description:
      'The orange is the fruit of the citrus species Citrus × sinensis in the family Rutaceae.[1] It is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange. The sweet orange reproduces asexually (apomixis through nucellar embryony); varieties of sweet orange arise through mutations.[2][3][4][5]'
  },
  {
    name: 'Banana',
    imgSrc: './img/banana.png',
    description:
      'A banana is an edible fruit – botanically a berry[1][2] – produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas. The fruit is variable in size, color, and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind, which may be green, yellow, red, purple, or brown when ripe.'
  },
  {
    name: 'Grape',
    imgSrc: './img/grape.png',
    description:
      'A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis.\n\nGrapes can be eaten fresh as table grapes or they can be used for making wine, jam, juice, jelly, grape seed extract, raisins, vinegar, and grape seed oil. Grapes are a non-climacteric type of fruit, generally occurring in clusters.'
  },
  {
    name: 'Pear',
    imgSrc: './img/pear.png',
    description:
      'The pear (/ˈpɛər/) tree and shrub are a species of genus Pyrus /ˈpaɪrəs/, in the family Rosaceae, bearing the pomaceous fruit of the same name. Several species of pear are valued for their edible fruit and juices while others are cultivated as trees.'
  },
  {
    name: 'Durian',
    imgSrc: './img/durian.png',
    description:
      'The durian (/ˈdjʊəriən, ˈdʊr-, -æn/)[2] is the fruit of several tree species belonging to the genus Durio. There are 30 recognised Durio species, at least nine of which produce edible fruit, with over 100 named varieties in Indonesia,[3] 300 in Thailand and 100 in Malaysia.[4] Durio zibethinus is the only species available in the international market: other species are sold in their local regions.'
  }
];

const doc = document;

const container = doc.createElement('div');
container.className = 'container';
doc.body.appendChild(container);

const pageName = doc.createElement('h1');
pageName.className = 'page-name';
pageName.textContent = 'JS DOM';
container.appendChild(pageName);

const dictionaryName = doc.createElement('h2');
dictionaryName.className = 'dictionary-name';
dictionaryName.textContent = 'Fruit dictionary';
container.appendChild(dictionaryName);

const divMain = doc.createElement('div');
divMain.className = 'main';
container.appendChild(divMain);

const divMenu = doc.createElement('div');
divMenu.className = 'menu';
divMain.appendChild(divMenu);

const navigation = doc.createElement('ul');
navigation.className = 'navigation';
const nav = doc.querySelectorAll('li');
divMenu.appendChild(navigation);

fruits.forEach((val, key) => {
  const li = doc.createElement('li');
  li.className = 'list-element';
  li.textContent = fruits[key].name;
  if (key === 0) {
    li.className = 'list-element clicked';
  }
  navigation.appendChild(li);
});

const divImage = doc.createElement('div');
divImage.className = 'image';
divMain.appendChild(divImage);

const image = doc.createElement('img');
image.className = 'image';
image.setAttribute('src', fruits[0].imgSrc);
divImage.appendChild(image);

const divDescription = doc.createElement('div');
divDescription.className = 'description';
divMain.appendChild(divDescription);

const descriptionHeader = doc.createElement('h3');
descriptionHeader.textContent = fruits[0].name;
divDescription.appendChild(descriptionHeader);

const descriptionParah = doc.createElement('p');
descriptionParah.textContent = fruits[0].description;
divDescription.appendChild(descriptionParah);
const menuList = doc.querySelector('ul');

menuList.addEventListener('click', evt => {
  const lis = doc.querySelectorAll('li');
  // onckick reset styles for all li elements
  lis.forEach(element => {
    element.className = 'list-element';
  });

  fruits.forEach((val, key) => {
    if (evt.target.textContent === fruits[key].name) {
      image.src = fruits[key].imgSrc;
      evt.target.className = 'list-element clicked';
      descriptionHeader.textContent = fruits[key].name;
      descriptionParah.textContent = fruits[key].description;
    }
  });
});
