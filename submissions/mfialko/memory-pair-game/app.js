
class Card {
    constructor(img) {
        this.img = img;
        this.textHtml = 
        `<div class='flip-container'>
            <div class='flipper'>
                <div class='front'>  
                </div>
                <div class='back' style='background-image: url(${this.img});'>  
                </div>
            </div>
        </div>`;
    }
}

const images = ['images/gems-1.png',
                'images/gems-2.png',
                'images/gems-3.png',
                'images/gems-4.png',
                'images/gems-5.png',
                'images/gems-6.png',
                'images/gems-7.png',
                'images/gems-8.png'];



let cardsImages = images.concat(images);             // making pairs of images
let cards = cardsImages.map(e => new Card(e));     

const shuffle = () => {
    cards.sort(() => 0.5 - Math.random());
}

const render = () => {
    shuffle();
    let cardsHtml = cards.map(e => e.textHtml).join('');
    document.querySelector('.main').innerHTML = 
    `<span id='score'>Find the same cards</span><br><br> ${cardsHtml}`;
}

const hide = (cards) => {
    cards.forEach((e) => {
        e.classList.toggle('hide');
    });    
}

const checkWin = () => {
    if (hideCards.length === cards.length) {
        alert ("You win");
        render();
    }   
}

render();

const main = document.querySelector('.main');
let openCards = [];
let hideCards = document.getElementsByClassName('hide');               

main.addEventListener('click', (e) => {
    if (e.target.closest('.front') && openCards.length < 2) {
        e.target.closest('.flipper').classList.add('open');
        openCards.push(e.target.closest('.flipper')); 
    
        if (openCards.length === 2) {                                     
            if (openCards[0].innerHTML === openCards[1].innerHTML) {
                setTimeout(() => { 
                    hide(openCards); 
                    openCards = [];                          
                }, 700); 
                setTimeout(() => { 
                    checkWin();                           
                }, 1400);   
            }
            else {               
                setTimeout(() => { 
                    openCards.forEach((e) => {
                        e.classList.remove('open');
                    });    
                    openCards = [];
                }, 700);   
            }
        }  
    }
} 
);





