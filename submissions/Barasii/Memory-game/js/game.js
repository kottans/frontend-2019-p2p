let similarCards = [];
let blockedClick = false;
const images = ['big_boo', 'hopper', 'iris', 'shiny', 'turbo', 'big_gray_wolf'];
const CLASS = {
    container: 'container',
    game: 'game',
	card: 'card',
    front: 'front_card',
    frontImg: 'img-front_card',
    back: 'back_card',
    backImg: 'img-back_card',
    flipped: 'flipped',
    hidden: 'hidden'
}

const victoryMessage = () => { 
    setTimeout(() => { 
        if (window.confirm("Ave Caesar!\nYou won this game!\nTry again?")) { 
            document.body.innerHTML = "";
            showCards(); 
        } else window.close();
    }, 1200);     
}

const cleanCountArray = () => similarCards = [];

const flippSelectedCards = () => {
	setTimeout(() => { 
        document.querySelectorAll(".flipped").forEach((card) => {
            card.classList.remove(CLASS.flipped);
            cleanCountArray();
            blockedClick = false;
        });		
    }, 900);
}

const hideSimilarCards = () => {
	setTimeout(() => { 
        document.querySelectorAll(".flipped").forEach((card) => {
            card.classList.add(CLASS.hidden);           
            cleanCountArray();
            blockedClick = false;
            const counterHiddenCards = document.querySelectorAll(".hidden").length;
            if (counterHiddenCards == 12) {
                victoryMessage();
            }            
        });		
	}, 600);
}

const compareSimilarCards = () => {
    const countCards = similarCards.length;
    if (countCards == 2) {
        blockedClick = true;
        if (similarCards[0] === similarCards[1]) {            
            hideSimilarCards();            
        } else {
            flippSelectedCards();
        }
    }
}

const selectCard = ({target}) => {
    if (!blockedClick) {
        const selectedCard = target.closest('.card');           
        if (selectedCard && !selectedCard.classList.contains('flipped')) {
                let alt = target.parentNode.nextSibling.firstChild.getAttribute("alt");                
                selectedCard.classList.add(CLASS.flipped);
                similarCards.push(alt);                
                compareSimilarCards();
            }
    }
};

const drawCards = () => {
    const fragment = [];

    const game = document.createElement('div'); 
    game.classList.add(CLASS.game);

    const arrImages = [...images, ...images];
    const shuffleArray = arrImages.sort(function() { return 0.5 - Math.random() });

    shuffleArray.forEach((item) => {
        const card = document.createElement('div');
        const frontCard = document.createElement('div');
        const backCard = document.createElement('div');
        const frontImg = document.createElement('img');
        const backImg = document.createElement('img');            
        
        card.classList.add(CLASS.card);
        frontCard.classList.add(CLASS.front);
        backCard.classList.add(CLASS.back);
        frontImg.classList.add(CLASS.frontImg);
        frontImg.src = `img/${item}.png`;
        frontImg.alt = `${item}`;
        backImg.classList.add(CLASS.backImg);
        backImg.src = 'img/back_logo.png';
        backImg.alt = 'logo_card';

        frontCard.append(frontImg);	
        backCard.append(backImg);	
        card.append(backCard);
        card.append(frontCard);
        game.append(card);	
    })
    fragment.push(game);

    return fragment;
}

const showCards = () => {      
        const body = document.querySelector('body');
        const container = document.createElement('div');      
        container.classList.add(CLASS.container);   
        container.append(...drawCards());
        container.addEventListener("click", selectCard);    
        body.append(container);    
}

window.onload = () => {
    if (window.confirm("Test your memory with the game?\nYou just need to find the same images.")) {
        showCards(); 
    } else window.close();
}
