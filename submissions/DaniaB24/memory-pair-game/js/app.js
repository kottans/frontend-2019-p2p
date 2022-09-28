const allCards = document.querySelector(".board_game");
let firstCard, secondCard;
let lockGame = false;
const allPairCards = 6;
const pairCards = 0;
const allPlayerCards = [
  {
    id: "dewey",
    imgBack: "images/dewey.png",
  },
  {
    id: "louie",
    imgBack: "images/louie.png",
  },
  {
    id: "huey",
    imgBack: "images/huey.png",
  },
  {
    id: "bentina",
    imgBack: "images/bentina.png",
  },
  {
    id: "della",
    imgBack: "images/della.png",
  },
  {
    id: "mcQuack",
    imgBack: "images/mcQuack.png",
  },
];
const memoryCards = [...allPlayerCards, ...allPlayerCards];

function flipCard(e) {
  const targetCard = e.target.closest(".memory_card");
  if (lockGame || !targetCard || targetCard === firstCard) return;

  if (!firstCard) {
    firstCard = targetCard;
    firstCard.classList.add("flip");
    return;
  } else {
    secondCard = targetCard;
    secondCard.classList.add("flip");
    checkMatch();
  }
}
function sortCards() {
  memoryCards.sort(function () {
    return 0.5 - Math.random();
  });
}
function createCards() {
  sortCards();
  const clonedCards = memoryCards.map((item) => {
    return `
    <div class="memory_card" id=${item.id}>
      <img src=${item.imgBack} class="back_card">
      <img src="images/logomcduck.png" class="front_card">
    </div>
`;
  });
  clonedCards.forEach((item) => {
    allCards.insertAdjacentHTML("beforeend", item);
  });
}
function checkMatch() {
  if (firstCard.id === secondCard.id) {
    disableCards();
    pairCards++;
    checkFinish();
  } else {
    freezeCards();
  }
}
function disableCards() {
  lockGame = true;
  setTimeout(() => {
    lockGame = false;
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    firstCard.classList.add("hide");
    secondCard.classList.add("hide");
  }, 800);
}
function freezeCards() {
  lockGame = true;
  setTimeout(() => {
    lockGame = false;
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    firstCard = null;
    secondCard = null;
  }, 900);
}
function checkFinish() {
  setTimeout(() => {
    if (pairCards === allPairCards) {
      alert("Congratulations!!!");
      location.reload();
    }
  }, 800);
}
allCards.addEventListener("click", flipCard);
createCards();
