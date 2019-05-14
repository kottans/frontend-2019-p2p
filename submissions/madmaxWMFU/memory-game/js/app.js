let openCards = [];
const hideDelay = 1000;
const gameField = document.querySelector(".game-field");
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
        <div class="flipper">
            <div class="front"></div>
            <div class="back ${newClass}" data-value="${newClass}"></div>
        </div>`;
}

const clearOpenCards = () => {
	if(document.querySelectorAll(".rotate-card")) {
		openCards = [];
	}
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
	}, hideDelay);
}

const hideCheckedCards = () => {
	setTimeout(() => { 
		document.querySelectorAll(".rotate-card").forEach((item) => {
			item.classList.remove("rotate-card");
			item.classList.add("remove-card");
		});
		clearOpenCards();
		countSuccessfullCard();
	}, hideDelay);
}

const showCard = (item) => item.classList.toggle("rotate-card");

const countSuccessfullCard = () => {
	if(document.querySelectorAll(".remove-card").length == 20) {
    	alert("Congratulations! You found all the cards.");
    	init();
	}
}

const checkCards = (selectedCards) => {
	let unique = selectedCards.filter((el, i, a) => i === a.indexOf(el));
	let status = unique.length == 1 ? hideCheckedCards() : hideAllSelectedCards();
}

const init = () => {
	gameField.innerHTML = "";
	drawCards(arrayOfCards);
	gameField.addEventListener("click", (e) => {
		if(e.target.closest(".flipper") && !e.target.closest(".rotate-card") && openCards.length != 2) {
			showCard(e.target.closest(".flipper"));
			openCards.push(e.target.nextElementSibling.dataset.value);

			if(openCards.length == 2) {
				checkCards(openCards);
			}
		} 
	})	
}

window.onload = init();
