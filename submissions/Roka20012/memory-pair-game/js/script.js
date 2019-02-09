"use strict";

const DELAY_FOR_ANSWER = 1000;
const TWO_CARDS = 2;
const WIN_GAME = 12;

let delay = 500;
let flipper = document.querySelector(".flipper");
let allCards = document.querySelectorAll(".flipper > div");

document.querySelector(".flipper ~ img").addEventListener("load",() => {
    showCards();
});

function showCards() {
    setTimeout(() => {
        allCards.forEach(function(el) {
            el.classList.toggle("check");
        });
    }, delay);

    setTimeout(() => {
        allCards.forEach(function(el) {
            el.classList.toggle("check");
        });
    }, delay * 4);
}

function addCards() {
    let cards = [];
    cards = cards.concat(shuffleCards(), shuffleCards());
    let fragment = document.createDocumentFragment();

    cards.forEach((el, i) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("draggable", false);
        img.src = el;
        div.appendChild(img);
        fragment.appendChild(div);
    });

    flipper.appendChild(fragment);
}

function changeCards() {
    let img = document.querySelectorAll(".flipper div img");
    let cards = [];
    cards = cards.concat(shuffleCards(), shuffleCards());

    cards.forEach((el, i) => {
        img[i].src = el;
    });
}

function shuffleCards() {
    let cards = ["images/man1.jpg", "images/man2.jpg", "images/man3.jpg",
        "images/man4.jpg", "images/man5.jpg", "images/man6.jpg"
    ];

    return cards.sort(() => {
        return 0.5 - Math.random();
    });
}

function restartGame(restart, hideCards) {
    return function() {
        restart.remove();

        hideCards.forEach((el) => {
            el.classList.remove("hide");
            el.classList.toggle("showme");
        });

        setTimeout(() => {
            changeCards();
            showCards();
        }, delay);

        setTimeout(() => {
            allCards.forEach(function(el) {
                el.classList.toggle("showme");
            });
        }, delay * 2);
    };
}

function checkGameWin() {
    let hideCards = document.querySelectorAll(".hide");

    if (hideCards.length === WIN_GAME) {
        let restart = document.createElement("div");

        restart.innerHTML = "!!!YOU WIN!!!\n<div class='win'>RESTART</div>";
        restart.classList.add("win-game");
        document.body.appendChild(restart);

        document.querySelector(".win").addEventListener("click", restartGame(restart, hideCards));
    }
}

function checkTwoCards() {
    let checkCards = document.querySelectorAll(".check img");
    if (checkCards.length === TWO_CARDS) {
        if (checkCards[0].src === checkCards[1].src) {
            setTimeout(() => {
                checkCards[0].parentNode.classList.add("hide");
                checkCards[1].parentNode.classList.add("hide");
                checkCards[0].parentNode.classList.toggle("check");
                checkCards[1].parentNode.classList.toggle("check");
            }, delay);

            setTimeout(() => {
                checkGameWin();
            }, DELAY_FOR_ANSWER);
        } else {
            setTimeout(() => {
                checkCards[0].parentNode.classList.toggle("check");
                checkCards[1].parentNode.classList.toggle("check");
            }, delay);
        }
    }
}

function GameProces({ target }) {
    if (target.tagName === "IMG") {
        let elementsCheck = document.querySelectorAll(".check");

        if (!target.parentNode.classList.contains("check") && elementsCheck.length < 2) {
            target.parentNode.classList.toggle("check");
            checkTwoCards();
        }
    }
}

flipper.addEventListener("click", GameProces);
