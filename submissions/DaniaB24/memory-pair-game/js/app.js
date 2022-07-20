const allCard = document.querySelector(".board_game");
let hasFlipped = false,
  firstCard,
  secondCard;
let lockGame = false;
let allPairCard = 6;
let pairCard = 0;
let allPlayerCard = [
  {
    id: "html",
    imgFront: "images/js.png",
    imgBack: "images/html.png",
  },
  {
    id: "css",
    imgFront: "images/js.png",
    imgBack: "images/css.png",
  },
  {
    id: "react",
    imgFront: "images/js.png",
    imgBack: "images/react.png",
  },
  {
    id: "git",
    imgFront: "images/js.png",
    imgBack: "images/git.png",
  },
  {
    id: "angular",
    imgFront: "images/js.png",
    imgBack: "images/angular.png",
  },
  {
    id: "vue",
    imgFront: "images/js.png",
    imgBack: "images/vue.png",
  },
];
function flipCard(e) {
  const targetCard = e.target.closest(".memory_card");
  if(lockGame || !targetCard || targetCard === firstCard) return;

  if (!firstCard) {
    firstCard = targetCard;
    firstCard.classList.add("flip");
    return;
  }
 else {
    secondCard = targetCard;
    secondCard.classList.add("flip");
    checkMatch();
  }
}
const memoryCards = [...allPlayerCard, ...allPlayerCard];
function sortCard(){
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
  clonedCard.forEach(item => {
    allCard.insertAdjacentHTML('beforeend', item);
  })
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
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  firstCard.classList.add("hide");
  secondCard.classList.add("hide");
}
function freezeCard() {
  lockGame = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    lockGame = false;
    firstCard = "";
    secondCard = "";
  }, 800);
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
