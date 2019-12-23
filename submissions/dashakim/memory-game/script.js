const section = document.querySelector("section");

const imagesNames = function(currentImg) {
  return currentImg
    .split(".")
    .slice(0, 1)
    .join("")
    .substr(4);
};

const createFrontFaceCard = function(div) {
  const frontImage = document.createElement("img");
  frontImage.classList.add("front-face");
  frontImage.setAttribute("src", frontImageQuestion);
  frontImage.setAttribute("alt", "icon-question");
  div.appendChild(frontImage);
};

const createBackFaceCard = function(div, el) {
  const backImage = document.createElement("img");
  backImage.classList.add("back-face");
  backImage.setAttribute("src", el);
  backImage.setAttribute("alt", imagesNames(el));
  div.appendChild(backImage);
};

const createCard = function(storage) {
  storage.map(i => {
    const divMemoryCard = document.createElement("div");
    divMemoryCard.classList.add("memory-card");
    section.appendChild(divMemoryCard);
    divMemoryCard.dataset.framework = imagesNames(i);
    createFrontFaceCard(divMemoryCard);
    createBackFaceCard(divMemoryCard, i);
  });
};

createCard(images);

const card = document.querySelectorAll(".memory-card");
let lockBoard = false;
let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add("flip");
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}
function unflipCards() {
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
  card.forEach(card => {
    let random = Math.floor(Math.random() * 16);
    card.style.order = random;
  });
})();
card.forEach(card => card.addEventListener("click", flipCard));
