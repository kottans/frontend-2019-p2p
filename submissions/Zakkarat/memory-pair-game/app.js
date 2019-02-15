const cards = document.getElementsByClassName("flipper");
const container = document.getElementsByClassName("container")[0];
const modalWindow = document.getElementsByClassName("modal")[0];
const modalContent = document.getElementsByClassName("modal-content")[0];
const button = document.getElementsByTagName("button")[0];
let founded = [];
let images = ["champ1", "champ2", "champ3", "champ4", "champ5"];
let check = [];
let checkFirst = true;
let checkSecond = true;
let prevTarget = "/img/back.jpg";
prepareArray();
container.addEventListener("click", function(elem) {
  if (checkFirst && checkSecond && elem.target.src != prevTarget)
    cardFlip(elem);
});

button.addEventListener("click", function() {
  location.reload();
});

function cardsAdd(elem) {
  container.innerHTML += `<div class="flip-container"><div class="flipper"><div class="front"><img src="./img/backCard.jpg" /></div><div class="back"><img src="./img/${elem}.jpg "</div></div></div>`;
}

images.forEach(elem => cardsAdd(elem));
function cardFlip(elem) {
  let target = elem.target;
  while (target != container) {
    if (
      [...cards].some(card => card === target) &&
      founded.every(
        elem =>
          elem.src != target.lastElementChild.getElementsByTagName("img")[0].src
      )
    ) {
      setChecking1(false);
      target.classList.toggle("toFlip");
      setTimeout(function() {
        setChecking1(true);
      }, 500);
      prevTarget = target.lastElementChild.getElementsByTagName("img")[0].src;
      check.push(target.lastElementChild.getElementsByTagName("img")[0]);
      if (check.length === 2) {
        checkEqual();
      }
      return;
    }
    target = target.parentElement;
  }
}

function checkEqual() {
  if (check[0].src === check[1].src) {
    setChecking2(false);
    founded.push(check[0]);
    check = [];
    setTimeout(function() {
      setChecking2(false);
    }, 1500);
  }
  if (founded.length === 5) {
    popUp();
  } else {
    setChecking2(false);
    setTimeout(function() {
      check.forEach(elem =>
        elem.parentElement.parentElement.classList.toggle("toFlip")
      );
      setTimeout(function() {
        setChecking2(true);
        check = [];
      }, 500);
    }, 1000);
  }
}

function prepareArray() {
  images.push(...images);
  images.sort(function() {
    return 0.5 - Math.random();
  });
}

function popUp() {
  modalWindow.classList.toggle("modal-up");
  modalContent.classList.toggle("modal-content-up");
}

function setChecking1(expr) {
  checkFirst = expr;
}

function setChecking2(expr) {
  checkSecond = expr;
}
