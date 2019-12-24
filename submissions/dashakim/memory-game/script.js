const section = document.querySelector("section.memory-game");

const getImagesNamesForAltAttribute = function(currentImg) {
  return currentImg
    .split(".")
    .slice(0, 1)
    .join("")
    .substr(4);
};

const createFrontFaceCard = function(cardsContainer) {
  const frontImage = document.createElement("img");
  frontImage.classList.add("front-face");
  frontImage.setAttribute("src", frontImageQuestion);
  frontImage.setAttribute("alt", "icon-question");
  cardsContainer.appendChild(frontImage);
};

const createBackFaceCard = function(cardsContainer, currentImg) {
  const backImage = document.createElement("img");
  backImage.classList.add("back-face");
  backImage.setAttribute("src", currentImg);
  backImage.setAttribute("alt", getImagesNamesForAltAttribute(currentImg));
  cardsContainer.appendChild(backImage);
};

const createCards = function(storage) {
  storage.map(e => {
    const divMemoryCard = document.createElement("div");
    divMemoryCard.classList.add("memory-card");
    section.appendChild(divMemoryCard);
    divMemoryCard.dataset.framework = getImagesNamesForAltAttribute(e);
    createFrontFaceCard(divMemoryCard);
    createBackFaceCard(divMemoryCard, e);
  });
};

createCards(images);

const cards = document.querySelectorAll(".memory-card");
let lockBoard = false;
let hasFlippedCard = false;
let firstCard, secondCard;

const flipCard = e => {
  if (lockBoard) return;
  const target = e.target.parentElement;
  target.classList.add("flip");

  if (!hasFlippedCard) {
    //first click
    hasFlippedCard = true;
    firstCard = target;
  } else {
    //second click
    hasFlippedCard = false;
    secondCard = target;
    checkForMatch();
  }
};

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : flipBack();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

function flipBack() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false][(firstCard, secondCard)] = [
    null,
    null
  ];
}

(function shuffle() {
  cards.forEach(cards => {
    let random = Math.floor(Math.random() * 16);
    cards.style.order = random;
  });
})();

cards.forEach(card => card.addEventListener("click", flipCard));
