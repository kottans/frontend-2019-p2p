const delayForAnswer = 1000;
const delay = 500;
const twoCards = 2;
const winGame = 12;

let flipper = document.querySelector(".flipper");

function addCards() {
    let img = document.querySelectorAll(".flipper div img");
    let cards = [];
    cards = cards.concat(shuffleCards(), shuffleCards());

    cards.forEach(function (el, i) {
        img[i].src = el;
    });
}

function shuffleCards() {
    let cards = ["images/man1.jpg", "images/man2.jpg", "images/man3.jpg",
        		 "images/man4.jpg", "images/man5.jpg", "images/man6.jpg"];

    return cards.sort(function() {
        return 0.5 - Math.random();
    });
}

addCards();

function GameProces({target}) {
     if (target.tagName === "IMG") {
        let elementsCheck = document.querySelectorAll(".check");

        if (!target.parentNode.classList.contains("check") && elementsCheck.length < 2 ) {
            target.parentNode.classList.toggle("check");

            let checkCards = document.querySelectorAll(".check img");
            if (checkCards.length === twoCards) {
                if (checkCards[0].src === checkCards[1].src) {
                    setTimeout(function() {
                        checkCards[0].parentNode.classList.add("hide");
                        checkCards[1].parentNode.classList.add("hide");
                        checkCards[0].parentNode.classList.toggle("check");
                        checkCards[1].parentNode.classList.toggle("check");
                    }, delay);

                    setTimeout(function() {
                        let hideCards = document.querySelectorAll(".hide");

                        if (hideCards.length === winGame) {
                            let winGame = document.createElement("div");
                            winGame.innerHTML = "!!!You WIN!!!     <div class='win'>RESTART</div>";
                            winGame.classList.add("win-game");

                            document.body.appendChild(winGame);

                            document.querySelector(".win").onclick = function () {
                                addCards();
                                hideCards.forEach(function (el) {
                                    el.classList.remove("hide");
                                });
                                winGame.remove();
                            };

                        }
                    }, delayForAnswer);

                } else {
                    setTimeout(function() {
                        checkCards[0].parentNode.classList.toggle("check");
                        checkCards[1].parentNode.classList.toggle("check");
                    }, delay);
                }
            }
        }

    }
}

flipper.addEventListener("click", GameProces);
