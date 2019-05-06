const main = document.querySelector(".game-field");
const arrayOfCards = ["card0", "card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10", "card11", "card12", "card13", "card14", "card15", "card16", "card17", "card18", "card19", "card20", "card21", "card22", "card23", "card24", "card25", "card26", "card27", "card28", "card29", "card30", "card31", "card32", "card33", "card34", "card35", "card36", "card37", "card38", "card39", "card40", "card41", "card42", "card43", "card44", "card45", "card46", "card47", "card48", "card49", "card50", "card51", "card52", "card53"];
let twoSelectedCads = [];

const shuffled = (arr) => arr.sort(() => 0.5 - Math.random());

const drawCards = arrayOfCards => {
	let selected = shuffled(arrayOfCards).slice(0, 10);
	let playCards = shuffled([...selected, ...selected]);
	playCards.forEach(val => main.insertAdjacentHTML("beforeEnd", getTemplateWrap(val)));
}

const getTemplateWrap = (newClass) => {
    return `
        <div class="flipper hideCard">
            <div class="front"></div>
            <div class="back ${newClass}" data-value="${newClass}"></div>
        </div>`;
}

const hideAllSelectedCards = () => document.querySelectorAll(".flipper").forEach(item => hideCard(item));
const hideCheckedCards = () => document.querySelectorAll(".rotateCard").forEach(item => item.style.visibility = "hidden");

const hideCard = item => {
	item.classList.remove("rotateCard");
	item.classList.add("hideCard");
}

const rotateCard = (item) => {
	item.classList.remove("hideCard");
	item.classList.add("rotateCard");
}

const countSuccessfullCard = () => {
	if(document.querySelectorAll("[style ^='visibility']").length == 20) {
    	alert("Congratulations! You found all the cards.");
    	init();
	}
}

const checkCards = twoSelectedCard => {
	let unique = twoSelectedCard.filter((el, i, a) => i === a.indexOf(el));
	if(unique.length == 1) {
		setTimeout(() => {
			hideCheckedCards();
			twoSelectedCads = [];
			countSuccessfullCard();
		}, 1000);
	} else {
		setTimeout(() => {
			hideAllSelectedCards();
			twoSelectedCads = [];
		}, 1000);
	}
}

const init = () => {
	document.querySelector(".game-field").innerHTML = "";
	drawCards(arrayOfCards);
	document.querySelector(".game-field").addEventListener("click", e => {
		if(e.target.parentNode.classList.contains("flipper")) {
			if(twoSelectedCads.length < 2) {
				rotateCard(e.target.parentNode);
			    twoSelectedCads.push(e.target.nextElementSibling.dataset.value);
		    } 

		    if(twoSelectedCads.length == 2) {
			    checkCards(twoSelectedCads);
		    }
		}
	})	
		
}

window.onload = init();
