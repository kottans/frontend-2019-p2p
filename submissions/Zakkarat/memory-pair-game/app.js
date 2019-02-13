const cards = document.getElementsByClassName('flipper');
const cont = document.getElementsByClassName('container')[0];
const mdl = document.getElementsByClassName('modal')[0];
const mdlCont = document.getElementsByClassName('modal-content')[0];
const btn = document.getElementsByTagName('button')[0];
let founded = [];
let images = ['champ1', 'champ2', 'champ3', 'champ4', 'champ5'];
let check = [];
let checkFirst = true;
let checkSecond = true;
let prevTarget = "/img/back.jpg";
prepareArray();
cont.addEventListener('click', function(elem) {if(checkFirst && checkSecond && elem.target.src != prevTarget) cardFlip(elem)});

btn.addEventListener('click', function() {location.reload()});

function cardsAdd(elem) {
  cont.innerHTML += `<div class="flip-container"><div class="flipper"><div class="front"><img src="./img/backCard.jpg" /></div><div class="back"><img src="./img/${elem}.jpg "</div></div></div>`
}

images.forEach(elem => cardsAdd(elem));
function cardFlip(elem) {
  let target = elem.target;
  while (target != cont) {
  if (Array.from(cards).some(card => card == target) && founded.every(elem => elem.src != target.lastElementChild.getElementsByTagName("img")[0].src)) {
    checkFirst = false;
    target.classList.toggle("toFlip");
    setTimeout(function() {checkFirst = true}, 500)
    prevTarget = target.lastElementChild.getElementsByTagName("img")[0].src;
    check.push(target.lastElementChild.getElementsByTagName("img")[0]);
    if(check.length == 2) {
      checkEqual();
    }
    return;
  }
  target = target.parentElement;
}}

function checkEqual() {
  if (check[0].src == check[1].src){
    checkSecond = false;
    founded.push(check[0]);
    check = [];
    setTimeout(function() {checkSecond = true;}, 1500)
  }
    if (founded.length == 5) {
      popUp();
  } else {
    checkSecond = false;
    setTimeout(function() {
      check.forEach(elem => elem.parentElement.parentElement.classList.toggle("toFlip"));
      setTimeout(function() {checkSecond = true;
      check = [];}, 500)
    }, 1000)
  }
}

function prepareArray() {
  images.push(...images);
  images.sort(function() { return 0.5 - Math.random() });
}

function popUp() {
  mdl.classList.toggle("modal-up");
  mdlCont.classList.toggle("modal-content-up");
}
