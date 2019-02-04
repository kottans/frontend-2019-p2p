const delayForAnswer = 1000;
const delay = 500;
const twoCards = 2;
const winGame = 12;

let flipper = document.querySelector(".flipper");

function addCards() {
    let img = document.querySelectorAll(".flipper div img");
    let cards = [];
    cards = cards.concat(shuffleCards(), shuffleCards());

    for (let i = 0; i < img.length; i++) {
        img[i].src = cards[i];
    }
}

function shuffleCards() {
    let cards = ["images/man1.jpg", "images/man2.jpg", "images/man3.jpg",
        		 "images/man4.jpg", "images/man5.jpg", "images/man6.jpg"];

    return cards.sort(function() {
        return 0.5 - Math.random();
    });
}

addCards();

flipper.onclick = function({ target }) {
    if (target.tagName == "IMG") {

        if (!target.parentNode.classList.contains("check")) {
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
                        console.log(hideCards);
                        if (hideCards.length === winGame) {

                            let answer = prompt("You win, do you want try again?yes/no", "");

                            if (answer === "yes") {
                                addCards();
                                for (let i = 0; i < 12; i++) {
                                    hideCards[i].classList.remove("hide");
                                }
                            }
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
};
