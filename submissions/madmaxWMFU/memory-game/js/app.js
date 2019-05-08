const gameField = document.querySelector(".game-field");
let openCards = [];

const arrayOfCards = (() => {
	let cards = [];
	for(let i = 0; i <= 53; i++) {
		cards.push(`card${i}`);
	} 
	return cards;
})();

const getShuffledCards = (arr) => arr.sort(() => 0.5 - Math.random());

const getTemplateCard = (newClass) => {
    return `
        <div class="flipper hide-card">
            <div class="front"></div>
            <div class="back ${newClass}" data-value="${newClass}"></div>
        </div>`;
}

const drawCards = (arrayOfCards) => {
	let selected = getShuffledCards(arrayOfCards).slice(0, 10);
	let playCards = getShuffledCards([...selected, ...selected]);
	playCards.forEach((card) => gameField.insertAdjacentHTML("beforeEnd", getTemplateCard(card)));
}

const hideAllSelectedCards = () => document.querySelectorAll(".flipper").forEach((item) => item.classList.remove("rotate-card"));
const hideCheckedCards = () => document.querySelectorAll(".rotate-card").forEach((item) => item.classList.add("remove-card"));

const showCard = (item) => item.classList.toggle("rotate-card");

const countSuccessfullCard = () => {
	if(document.querySelectorAll(".remove-card").length == 20) {
    	alert("Congratulations! You found all the cards.");
    	init();
	}
}

const checkCards = (selectedCards) => {
	let unique = selectedCards.filter((el, i, a) => i === a.indexOf(el));
	if(unique.length == 1) {
		setTimeout(() => {
			hideCheckedCards();
			openCards = [];
			countSuccessfullCard();
		}, 1000);
	} else {
		setTimeout(() => {
			hideAllSelectedCards();
			openCards = [];
		}, 1000);
	}
}

const init = () => {
	gameField.innerHTML = "";
	drawCards(arrayOfCards);
	gameField.addEventListener("click", (e) => {
		if(e.target.parentNode.classList.contains("flipper") && !e.target.parentNode.classList.contains("rotate-card")) {
			if(openCards.length < 2) {
				showCard(e.target.parentNode);
			    openCards.push(e.target.nextElementSibling.dataset.value);
		    } 

		    if(openCards.length == 2) {
			    checkCards(openCards);
		    }
		}
	})	
}

window.onload = init();
