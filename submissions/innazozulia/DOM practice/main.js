const Document = document;

const pokemons = [
  {
    name: 'Bulbasaur',
    imgSrc: './img/Bulbasaur.jpeg',
    description: 'Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the suns rays, the seed grows progressively larger.'
  },
  {
    name: 'Ivysaur',
    imgSrc: './img/Ivysaur.jpeg',
    description: 'There is a bud on this Pokémons back. To support its weight, Ivysaurs legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it is a sign that the bud will bloom into a large flower soon.'
  },
  {
    name: 'Venusaur',
    imgSrc: './img/Venusaur.jpeg',
    description: 'There is a large flower on Venusaurs back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower is aroma soothes the emotions of people.'
  },
  {
    name: 'Charmander',
    imgSrc: './img/Charmander.jpeg',
    description: 'The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.'
  },
  { 
    name: 'Charmeleon',
    imgSrc: './img/Charmeleon.jpeg',
    description: 'Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.'
  },
  {
    name: 'Squirtle',
    imgSrc: './img/Squirtle.jpeg',
    description: 'Squirtles shell is not merely used for protection. The shells rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.'
  },
  {
    name: 'Wartortle',
    imgSrc: './img/Wartortle.jpeg',
    description: 'Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémons toughness as a battler.'
  },
  {
   name: 'Caterpie',
   imgSrc: './img/Caterpie.jpeg',
   description: 'Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.'
  },
  {
    name: 'Metapod',
    imgSrc: './img/Metapod.jpeg',
    description: 'The shell covering this Pokémons body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.'
  },
  {
    name: 'Butterfree',
    imgSrc: './img/Butterfree.jpeg',
    description: 'Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.'
  },
  {
    name: 'Weedle',
    imgSrc: './img/Weedle.jpeg',
    description: 'Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose).'
  },
  {
    name: 'Kakuna',
    imgSrc: './img/Beedrill.jpeg',
    description: 'Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch.'
  },
  {
    name: 'Beedrill',
    imgSrc: './img/Kakuna.jpeg',
    description: 'Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm.'
  },
  {
    name: 'Pidgey',
    imgSrc: './img/Pidgey.jpeg',
    description: 'Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.'
  },
  {
    name: 'Rattata',
    imgSrc: './img/Rattata.jpeg',
    description: 'Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.'
  },
];

const container = Document.createElement('div');
container.classList.add('container');
Document.body.appendChild(container);

const pageName = Document.createElement('h1');
pageName.classList.add('page-name');
pageName.textContent = "Choose your Pokemon";
container.appendChild(pageName);

const character = Document.createElement('div');
character.classList.add('dictionary-name');
character.textContent = "The Character";
container.appendChild(character);

const divMain = Document.createElement('div');
divMain.classList.add('main');
container.appendChild(divMain);

const divMenu = Document.createElement('div');
divMenu.classList.add('menu');
divMain.appendChild(divMenu);

const navigation = Document.createElement('ul');
navigation.classList.add('navigation');
const nav = Document.querySelectorAll('li');
divMenu.appendChild(navigation);

pokemons.forEach((val, key) => {
  const li = Document.createElement('li');
  li.classList.add('list-element');
  li.textContent = pokemons[key].name;
  if(key == 0){
    li.classList.add('clicked');
    }
    navigation.appendChild(li);
});

const divImage = Document.createElement('div');
divImage.classList.add('image');
divMain.appendChild(divImage);

const image = Document.createElement('img');
image.classList.add('image');
image.setAttribute('src', pokemons[0].imgSrc);
divImage.appendChild(image);

const divDescription = Document.createElement('div');
divDescription.classList.add('description');
divMain.appendChild(divDescription);

const descriptionMain = Document.createElement('h3');
descriptionMain.textContent = pokemons[0].name;
divDescription.appendChild(descriptionMain);

const description = Document.createElement('p');
description.textContent = pokemons[0].description;
divDescription.appendChild(description);

const menuList = Document.querySelector('ul');
menuList.addEventListener('click', event => {
  const li = Document.querySelectorAll('li');
  li.forEach(element => {
    element.classList.remove('cliked');
  });
  pokemons.forEach((val, key) => {
    if(event.target.textContent === pokemons[key].name){
      image.src = pokemons[key].imgSrc;
      event.target.classList.add('cliked');
      descriptionMain.textContent = pokemons[key].name;
      description.textContent = pokemons[key].description;
    }
  });
});
