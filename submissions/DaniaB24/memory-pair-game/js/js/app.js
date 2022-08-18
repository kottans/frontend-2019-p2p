const allCard = document.querySelector(".board_game");
let firstCard, secondCard;
let lockGame = false;
let allPairCard = 6;
let pairCard = 0;
let allPlayerCard = [
  {
    id: "dewey",
    imgFront: "images/logomcduck.png",
    imgBack: "images/dewey.png",
  },
  {
    id: "louie",
    imgFront: "images/logomcduck.png",
    imgBack: "images/louie.png",
  },
  {
    id: "huey",
    imgFront: "images/logomcduck.png",
    imgBack: "images/huey.png",
  },
  {
    id: "bentina",
    imgFront: "images/logomcduck.png",
    imgBack: "images/bentina.png",
  },
  {
    id: "della",
    imgFront: "images/logomcduck.png",
    imgBack: "images/della.png",
  },
  {
    id: "mcQuack",
    imgFront: "images/logomcduck.png",
    imgBack: "images/mcQuack.png",
  },
];
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
const memoryCards = [...allPlayerCard, ...allPlayerCard];
function sortCard() {
  memoryCards.sort(function () {
    return 0.5 - Math.random();
  });
}
function createCard() {
  sortCard();

  let clonedCard = memoryCards.map((item) => {
    return `
    <div class="memory_card" id=${item.id}>
      <img src=${item.imgBack} class="back_card">
      <img src=${item.imgFront} class="front_card">
    </div>
`;
  });
  clonedCard.forEach((item) => {
    allCard.insertAdjacentHTML("beforeend", item);
  });
}
createCard();

function checkMatch() {
  if (firstCard.id === secondCard.id) {
      disableCard();
    pairCard++;
    checkFinish();
  } else {
    freezeCard();
  }
}
function disableCard() {
  lockGame = true;
  setTimeout(() => {
    lockGame = false;
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    firstCard.classList.add("hide");
    secondCard.classList.add("hide");
  }, 800);
}
function freezeCard() {
  lockGame = true;
  setTimeout(() => {
    lockGame = false;
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    firstCard = "";
    secondCard = "";
  }, 900);
}
function checkFinish() {
  setTimeout(() => {
    if (pairCard === allPairCard) {
      alert("Congratulations!!!");
      location.reload();
    }
  }, 800);
}

allCard.addEventListener("click", flipCard);
