

let delay = 500;
let WIN_GAME = 12;

let adeoProduct = {id:'adeo-pair', photo:'img/product-adeo.png'};
let atollProduct = {id:'atoll-pair', photo:'img/product-atoll.png'};
let cyrusProduct = {id:'cyrus-pair', photo:'img/product-cyrus.png'};			
let maxellProduct = {id:'maxell-pair', photo:'img/product-maxell.png'};	
let mfProduct = {id:'mf-pair', photo:'img/product-mf.png'};				
let triangleProduct = {id:'triangle-pair', photo:'img/product-triangle.png'};	
let adeoLogo = {id:'adeo-pair', photo:'img/logo-adeo.png'};
let atollLogo = {id:'atoll-pair', photo:'img/logo-atoll.png'};
let cyrusLogo = {id:'cyrus-pair', photo:'img/logo-cyrus.png'};			
let maxellLogo = {id:'maxell-pair', photo:'img/logo-maxell.png'};	
let mfLogo = {id:'mf-pair', photo:'img/logo-mf.png'};				
let triangleLogo = {id:'triangle-pair', photo:'img/logo-triangle.png'};	

let cardsArr = [adeoProduct, atollProduct, cyrusProduct, maxellProduct, mfProduct, triangleProduct,
			adeoLogo, atollLogo, cyrusLogo, maxellLogo, mfLogo, triangleLogo];

			

function shuffleCards() {
    return cardsArr.sort(() => {
        return 0.5 - Math.random();
    });
}


let imges = document.querySelectorAll(".front-face");
function changeCards() {
    shuffleCards().forEach((el, i) => {
        imges[i].src = el.photo;
        imges[i].setAttribute('dataid', el.id);
    });
}
changeCards();


/*

let imges = document.querySelectorAll(".front-face");
function changeCards() {
    cardsSort.forEach((el, i) => {
        imges[i].src = el.photo;
        imges[i].setAttribute('dataid', el.id);
    });
}
changeCards();

*/



let cards = document.querySelectorAll('.memory-card');


function flipCard() {
	let elementsCheck = document.querySelectorAll(".flip");

	if (!this.classList.contains('flip') && elementsCheck.length < 2) {
  		this.classList.toggle('flip');
  		this.classList.toggle('ready-to-flip');

  		checkTwoCards();
	}
}



function checkTwoCards() {
	let checkCards = document.querySelectorAll(".flip img.front-face");
    
    if (checkCards.length === 2) {
	        if (checkCards[0].getAttribute('dataid') === checkCards[1].getAttribute('dataid')) {
	            
	            setTimeout(() => {
	                checkCards[0].parentNode.classList.add("delete");
	                checkCards[1].parentNode.classList.add("delete");
	                checkCards[0].parentNode.classList.remove("flip");
	                checkCards[1].parentNode.classList.remove("flip");	                
	            }, delay);   

	            setTimeout(() => {
                	checkGameWin();
            	}, delay);


	        } else {
	            setTimeout(() => {
	                checkCards[0].parentNode.classList.toggle('flip');
	                checkCards[1].parentNode.classList.toggle('flip');
	                checkCards[0].parentNode.classList.toggle('ready-to-flip');
	                checkCards[1].parentNode.classList.toggle('ready-to-flip');
	            }, delay);
	        }     
    }
}


function checkGameWin() {
    let deletedCards = document.querySelectorAll(".delete");

    if (deletedCards.length === WIN_GAME) {
        let restart = document.createElement("div");
        restart.innerHTML = "!!!YOU WIN!!!\n<div class='win'>RESTART</div>";
        restart.classList.add("win-game");
        document.body.appendChild(restart);

       	document.querySelector(".win").addEventListener("click", restartGame(restart, deletedCards));
    }
}


function restartGame(restart, deletedCards) {
    return function() {
        restart.remove();

        deletedCards.forEach((el) => {
            el.classList.remove("delete");
            el.classList.toggle("ready-to-flip");
        });

        setTimeout(() => {
            shuffleCards()
            changeCards();
        }, delay);
    };
}



cards.forEach(card => card.addEventListener('click', flipCard));


