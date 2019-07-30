let arrayOfCards = [
  'elipse.png',
  'oval.png',
  'rect.png',
  'rect_r.png',
  'star.png',
  'star_r.png',
  'triangle.png',
  'triangle_r.png'
];

let sixteenCards = arrayOfCards.concat(arrayOfCards);

const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());

const shuffled = sixteenCards.sort(function () { return 0.5 - Math.random() });

let root = document.querySelector('#root');

let count = 0;

shuffled.forEach(imgName => {
  let flipCard = document.createElement('div');
  flipCard.classList = `c${count} flip-card`;
  count++;

  let flipCardInner = document.createElement('div');
  flipCardInner.className = 'flip-card-inner';

  let flipCardFront = document.createElement('div');
  flipCardFront.className = 'flip-card-front';

  flipCardFront.innerHTML = '<img src="img/kot.png">';

  let flipCardBack = document.createElement('div');
  flipCardBack.className = 'flip-card-back';

  let img = document.createElement('img');
  img.setAttribute('src', 'img/' + imgName);
  let imgClass = imgName.split('.')[0];
  img.className = imgClass;

  root.appendChild(flipCard);
  flipCard.appendChild(flipCardInner);
  flipCardInner.appendChild(flipCardFront);
  flipCardInner.appendChild(flipCardBack);
  flipCardBack.appendChild(img);

});

let cards = document.querySelectorAll('.flip-card');

let open = [];
let ids = [];
let arrCard = [];

for (let card of cards) {

  const faceDown = () => {
    cards.forEach(e => {
      if (e.classList[1] == 'flipped-card') {
        e.classList.toggle('flipped-card');
        e.classList.toggle('flip-card');
      }
      // e.attributes.forEach(e => console.log(e));
      // let namedNodeMap = e.attributes;
      // console.log(namedNodeMap);
      // let attrs = namedNodeMap.getNamedItem('disabled');
      // console.log(attrs);
    });
  }

  var disabled = 0;

  const wipeCards = () => {
    arrCard[0].style.opacity = '0';
    arrCard[0].style.pointerEvents = 'none';
    arrCard[0].setAttribute('disabled', 'disabled');
    disabled++;
    arrCard[1].style.opacity = '0';
    arrCard[1].style.pointerEvents = 'none';
    arrCard[1].setAttribute('disabled', 'disabled');
    disabled++;
    arrCard.length = 0;
    // console.log(disabled);
    if (disabled / 2 === arrayOfCards.length) {
      alert('You win! Press OK and F5 to start new game')
    }
  }

  card.addEventListener('click', evt => {
    let firstChildNode = evt.target.parentNode.parentNode.lastChild.childNodes[0];
    card.classList.toggle('flipped-card');
    card.classList.toggle('flip-card');

    ids.push(card.classList[0]);
    open.push(firstChildNode.className);
    arrCard.push(card);

    if (open.length === 2) {
      if (open[0] === open[1] & ids[0] !== ids[1]) {
        setTimeout(wipeCards, 1000);
      } else {
        arrCard.length = 0;
        setTimeout(faceDown, 1000);
      }
      open.length = 0;
      ids.length = 0;
    }

  })
}

