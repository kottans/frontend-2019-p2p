let openCards = [];
let isBlocked = false;
const staticNumbers = {
	allCardsOnFlield: 20,
	maxSelectedCards: 2,
	uniqueCards: 1,
	minCard: 0,
	maxCard: 53,
	clearDelay: 500,
	hideDelay: 1000
};
const gameField = document.querySelector(".game-field");
const arrayOfCards = (() => {
	let cards = [];
	for(let i = staticNumbers.minCard; i <= staticNumbers.maxCard; i++) {
		cards.push(`card${i}`);
	} 
	return cards;
})();

const getShuffledCards = (arr) => arr.sort(() => 0.5 - Math.random());

const getTemplateCard = (newClass) => {
    return `
        <div class="flipper">
            <div class="front"></div>
            <div class="back ${newClass}" data-value="${newClass}"></div>
        </div>`;
}

const clearOpenCards = () => {
	setTimeout(() => {
		openCards = [];
		isBlocked = false;
	}, staticNumbers.clearDelay);
}

const drawCards = (arrayOfCards) => {
	let selected = getShuffledCards(arrayOfCards).slice(0, 10);
	let playCards = getShuffledCards([...selected, ...selected]);
	playCards.forEach((card) => gameField.insertAdjacentHTML("beforeEnd", getTemplateCard(card)));
}

const hideAllSelectedCards = () => {
	setTimeout(() => { 
		document.querySelectorAll(".flipper").forEach((item) => item.classList.remove("rotate-card"));
		clearOpenCards();
	}, staticNumbers.hideDelay);
}

const hideCheckedCards = () => {
	setTimeout(() => { 
		document.querySelectorAll(".rotate-card").forEach((item) => {
			item.classList.remove("rotate-card");
			item.classList.add("remove-card");
		});
		clearOpenCards();
		countSuccessfullCard();
	}, staticNumbers.hideDelay);
}

const showCard = (item) => item.classList.toggle("rotate-card");

const countSuccessfullCard = () => {
	if(document.querySelectorAll(".remove-card").length === staticNumbers.allCardsOnFlield) {
    	alert("Congratulations! You found all the cards.");
    	init();
	}
}

const checkCards = (selectedCards) => {
	let unique = selectedCards.filter((el, i, a) => i === a.indexOf(el));
	let status = unique.length == staticNumbers.uniqueCards ? hideCheckedCards() : hideAllSelectedCards();
}

const init = () => {
	gameField.innerHTML = "";
	drawCards(arrayOfCards);
	gameField.addEventListener("click", (e) => {
		if(e.target.closest(".flipper") && !e.target.closest(".rotate-card") && !isBlocked) {
			showCard(e.target.closest(".flipper"));
			console.log(e.target);
			openCards.push(e.target.nextElementSibling.dataset.value);

			if(openCards.length === staticNumbers.maxSelectedCards) {
				isBlocked = true;
				checkCards(openCards);
			}
		} 
	})	

}

window.onload = init();
